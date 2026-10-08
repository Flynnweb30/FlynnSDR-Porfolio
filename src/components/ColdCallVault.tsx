import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { callRecordings } from '../data/flynnData';

const audioUrls = [
  (import.meta.env.VITE_AUDIO_CALL_1_URL as string | undefined) || '/media/my_intro_media_1791404813632_39huk.mp3',
  (import.meta.env.VITE_AUDIO_CALL_2_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791215970548-fa25088c-671a-4e9a-9297-fa8392d25b0a.opus',
  (import.meta.env.VITE_AUDIO_CALL_3_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
  (import.meta.env.VITE_AUDIO_CALL_4_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791215822662-8c113027-efd5-422b-8508-deb2539de57e.opus',
];

export default function ColdCallVault() {
  const [active, setActive] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLAudioElement | null>>({});

  // Ensure global mutual exclusivity: pause all audios when active changes
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

    // Also notify global video/audio to pause
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
    <div className="space-y-6">
      {callRecordings.map((call, i) => {
        const isPlayingThis = active === call.id && refs.current[call.id] && !refs.current[call.id]?.paused;

        return (
          <article
            key={call.id}
            className="bg-white border border-[#dededb] rounded-2xl p-5 sm:p-7 shadow-xs text-left transition-all hover:border-[#0077b6]/60"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-display font-extrabold tracking-widest text-[#0077b6]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{call.skillTag}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  {call.title}
                </h2>
                <p className="text-xs text-zinc-500 font-sans">
                  <strong className="text-zinc-800">{call.company}</strong> · {call.industry} ·{' '}
                  <span className="font-mono text-[#0077b6] font-bold">{call.duration}</span>
                </p>
              </div>

              {/* Play Button: HIDES immediately while playing, shows when idle */}
              {!isPlayingThis ? (
                <button
                  type="button"
                  onClick={() => toggle(call.id, i)}
                  className="shrink-0 px-5 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white rounded-xl text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>Play Call</span>
                </button>
              ) : (
                <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-display font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Playing Outbound Recording</span>
                </div>
              )}
            </div>

            {/* Native HTML5 Audio Player */}
            <div className="mt-5 pt-4 border-t border-zinc-100">
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
                onError={() => setError(`Audio source for recording #${i + 1} could not be loaded.`)}
                controls
                className="w-full h-10 accent-[#0077b6]"
              >
                <source src={audioUrls[i]} type="audio/mpeg" />
                <source src={audioUrls[i]} type="audio/ogg; codecs=opus" />
                Your browser does not support HTML5 audio playback.
              </audio>
            </div>

            {/* Tactical Outcome & Coaching Points (Transcripts completely removed) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
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
                  SDR Tactical Move
                </strong>
                <span className="text-zinc-700 leading-snug">{call.tacticalWin}</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Outbound Dial · Contact Details Protected</span>
              </span>
              <span className="font-mono text-zinc-400">{call.duration}</span>
            </div>
          </article>
        );
      })}

      {error && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2 font-sans">
          <Volume2 className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}