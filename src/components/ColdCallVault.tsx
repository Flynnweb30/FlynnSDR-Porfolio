import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, ShieldCheck, CheckCircle2, Headphones, Filter, Clock } from 'lucide-react';
import { callRecordings } from '../data/flynnData';

const audioUrls = [
  (import.meta.env.VITE_AUDIO_CALL_1_URL as string | undefined) || '/media/call-1-moses-cig-builders.mp3',
  (import.meta.env.VITE_AUDIO_CALL_2_URL as string | undefined) || '/media/call-2-reconfirmation-showup.mp3',
  (import.meta.env.VITE_AUDIO_CALL_3_URL as string | undefined) || '/media/call-3-precall-courtesy-lock.mp3',
];

export default function ColdCallVault() {
  const [active, setActive] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLAudioElement | null>>({});

  const categories = [
    { label: 'All Calls', value: 'All', count: callRecordings.length },
    { label: 'Reschedule Recovery', value: 'Reschedule Recovery & Scope Discovery', count: 1 },
    { label: 'Show-Up Safeguard', value: 'Show-Up Rate Safeguard & Confirmation', count: 1 },
    { label: 'Pre-Call Touchpoints', value: 'High-Velocity Pre-Call Touchpoint', count: 1 },
  ];

  const filteredCalls = selectedCategory === 'All'
    ? callRecordings
    : callRecordings.filter((c) => c.skillTag === selectedCategory);

  // Mutual Exclusivity: Only 1 audio/video playback active at any time
  const toggle = (id: string, i: number) => {
    const audio = refs.current[id];
    if (!audio || !audioUrls[i]) {
      setError('Recording source unavailable.');
      return;
    }
    setError(null);

    // Pause all other audios globally
    Object.keys(refs.current).forEach((key) => {
      if (key !== id) {
        refs.current[key]?.pause();
      }
    });

    // Notify global video player to pause
    window.dispatchEvent(new CustomEvent('flynn:mediaPlay', { detail: { type: 'audio', id } }));

    if (active === id && !audio.paused) {
      audio.pause();
      setActive(null);
    } else {
      setActive(id);
      audio.currentTime = 0;
      audio.play().catch(() => {
        setError('Playback could not start. Please interact with the page first.');
        setActive(null);
      });
    }
  };

  useEffect(() => {
    const handleGlobalMedia = (e: Event) => {
      const custom = e as CustomEvent;
      if (custom.detail?.type === 'video') {
        Object.keys(refs.current).forEach((key) => {
          refs.current[key]?.pause();
        });
        setActive(null);
      }
    };
    window.addEventListener('flynn:mediaPlay', handleGlobalMedia);
    return () => window.removeEventListener('flynn:mediaPlay', handleGlobalMedia);
  }, []);

  return (
    <div className="space-y-6 text-left">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#dededb]">
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="flex items-center gap-1 text-xs font-display uppercase tracking-wider text-zinc-500 font-bold mr-2">
            <Filter className="w-3.5 h-3.5 text-[#0077b6]" />
            <span>Categories:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-display uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-[#dededb]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.value ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="text-[11px] font-mono text-zinc-400">
          Single Active Playback · Transcripts Protected
        </div>
      </div>

      {/* Audio Cards Library */}
      <div className="space-y-5">
        {filteredCalls.map((call) => {
          const originalIndex = callRecordings.findIndex((c) => c.id === call.id);
          const isPlayingThis = active === call.id && refs.current[call.id] && !refs.current[call.id]?.paused;

          return (
            <article
              key={call.id}
              className="bg-white border border-[#dededb] rounded-2xl p-5 sm:p-7 shadow-xs text-left transition-all hover:border-[#0077b6]/60 space-y-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-sky-50 border border-sky-200 text-[#0077b6] rounded-md text-[10px] font-display uppercase font-bold tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{call.skillTag}</span>
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      ID: {call.id.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                    {call.title}
                  </h2>
                  <p className="text-xs text-zinc-500 font-sans">
                    <strong className="text-zinc-800">{call.company}</strong> · {call.industry} ·{' '}
                    <span className="font-mono text-[#0077b6] font-bold">{call.duration}</span>
                  </p>
                </div>

                {/* Play Button: Hides immediately on play, shows when idle/paused */}
                <div className="shrink-0">
                  {!isPlayingThis ? (
                    <button
                      type="button"
                      onClick={() => toggle(call.id, originalIndex)}
                      className="px-5 py-3 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white rounded-xl text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Play Call Recording</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-display font-bold uppercase">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>Playing Recording</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Native HTML5 Audio Player */}
              <div className="pt-2 border-t border-zinc-100">
                <audio
                  ref={(el) => {
                    refs.current[call.id] = el;
                  }}
                  preload="none"
                  onPlay={() => {
                    setActive(call.id);
                    Object.keys(refs.current).forEach((key) => {
                      if (key !== call.id) refs.current[key]?.pause();
                    });
                  }}
                  onPause={() => {
                    if (active === call.id) setActive(null);
                  }}
                  onEnded={() => setActive(null)}
                  onError={() => setError(`Audio source for recording #${originalIndex + 1} could not be loaded.`)}
                  controls
                  className="w-full h-10 accent-[#0077b6]"
                >
                  <source src={audioUrls[originalIndex]} type="audio/mpeg" />
                  <source src={audioUrls[originalIndex]} type="audio/ogg; codecs=opus" />
                  Your browser does not support HTML5 audio playback.
                </audio>
              </div>

              {/* 3-Column Tactical SDR Coaching Brief (Transcripts completely removed) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl space-y-0.5">
                  <strong className="block uppercase font-display text-[10px] tracking-wider text-emerald-700 font-extrabold">
                    Outcome
                  </strong>
                  <span className="text-zinc-700 leading-snug">{call.outcome}</span>
                </div>
                <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl space-y-0.5">
                  <strong className="block uppercase font-display text-[10px] tracking-wider text-amber-700 font-extrabold">
                    Prospect Objection
                  </strong>
                  <span className="text-zinc-700 leading-snug">{call.challenge}</span>
                </div>
                <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl space-y-0.5">
                  <strong className="block uppercase font-display text-[10px] tracking-wider text-[#0077b6] font-extrabold">
                    SDR Tactical Win
                  </strong>
                  <span className="text-zinc-700 leading-snug">{call.tacticalWin}</span>
                </div>
              </div>

              {/* Security & Verification Footer */}
              <div className="flex items-center justify-between text-[11px] font-sans text-zinc-400 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real Outbound Dial · Prospect PII Protected</span>
                </span>
                <span className="font-mono text-zinc-400">{call.duration}</span>
              </div>
            </article>
          );
        })}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2 font-sans">
          <Volume2 className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}