import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, ChevronDown, CheckCircle2 } from 'lucide-react';
import { callRecordings } from '../data/flynnData';

const audioUrls = [
  import.meta.env.VITE_AUDIO_CALL_1_URL || 'https://audiolink-oskn.onrender.com/audio/aud_1791236690865_eeeu4r.opus',
  import.meta.env.VITE_AUDIO_CALL_2_URL || 'https://www.image2url.com/r2/default/audio/1791215970548-fa25088c-671a-4e9a-9297-fa8392d25b0a.opus',
  import.meta.env.VITE_AUDIO_CALL_3_URL || 'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
  import.meta.env.VITE_AUDIO_CALL_4_URL || 'https://www.image2url.com/r2/default/audio/1791215822662-8c113027-efd5-422b-8508-deb2539de57e.opus',
];

export default function ColdCallVault() {
  const [active, setActive] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLAudioElement | null>>({});

  const toggle = (id: string, index: number) => {
    const audio = refs.current[id];
    if (!audio || !audioUrls[index]) {
      setError('Recording source is not available. Please verify connection or try again.');
      return;
    }

    if (active === id && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Pause all other audios
      Object.keys(refs.current).forEach((key) => {
        if (key !== id) {
          refs.current[key]?.pause();
        }
      });
      setActive(id);
      setError(null);
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
          setError('Unable to stream this audio. Tap play again or test in another browser window.');
        });
    }
  };

  return (
    <div className="space-y-6 text-left">
      {callRecordings.map((call, i) => {
        const isCurrent = active === call.id && isPlaying;
        return (
          <article
            key={call.id}
            className="bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl p-5 sm:p-7 shadow-xs transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-display font-extrabold tracking-widest text-[#0077b6]">
                  <span>{call.skillTag}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c] mt-1">
                  {call.title}
                </h2>
                <p className="text-xs text-zinc-500 font-sans mt-0.5">
                  <strong className="text-zinc-800">{call.company}</strong> · {call.industry} ·{' '}
                  <span className="font-mono text-[#0077b6] font-bold">{call.duration}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggle(call.id, i)}
                className={`shrink-0 px-5 py-3 rounded-xl text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs ${
                  isCurrent
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-[#0077b6] hover:bg-[#0284c7] text-white'
                }`}
              >
                {isCurrent ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                <span>{isCurrent ? 'Pause Audio' : 'Play Recording'}</span>
              </button>
            </div>

            {/* Cross-Browser HTML5 Audio with Opus MIME fallback */}
            <div className="mt-4">
              <audio
                ref={(el) => {
                  refs.current[call.id] = el;
                }}
                preload="metadata"
                controls
                className="w-full h-10 accent-[#0077b6]"
                onPlay={() => {
                  setActive(call.id);
                  setIsPlaying(true);
                }}
                onPause={() => {
                  if (active === call.id) setIsPlaying(false);
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  setActive(null);
                }}
                onError={() => {
                  setIsPlaying(false);
                  setError(`Audio source unavailable for ${call.company}.`);
                }}
              >
                <source src={audioUrls[i]} type="audio/ogg; codecs=opus" />
                <source src={audioUrls[i]} type="audio/opus" />
                <source src={audioUrls[i]} />
                Your browser does not support audio playback.
              </audio>
            </div>

            {/* Tactical Outcome & Metric Cards */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
              <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl">
                <strong className="block uppercase font-display text-[10px] text-zinc-500 font-extrabold tracking-wider">
                  Call Outcome
                </strong>
                <span className="text-zinc-800 font-semibold">{call.outcome}</span>
              </div>
              <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl">
                <strong className="block uppercase font-display text-[10px] text-zinc-500 font-extrabold tracking-wider">
                  Objection / Challenge
                </strong>
                <span className="text-zinc-600">{call.challenge}</span>
              </div>
              <div className="p-3 bg-[#f7f7f6] border border-[#dededb]/70 rounded-xl">
                <strong className="block uppercase font-display text-[10px] text-zinc-500 font-extrabold tracking-wider">
                  Tactical Win
                </strong>
                <span className="text-zinc-600">{call.tacticalWin}</span>
              </div>
            </div>

            {/* Expandable Synchronized Transcript */}
            <button
              type="button"
              onClick={() => setExpanded(expanded === call.id ? null : call.id)}
              className="mt-4 inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase text-[#0077b6] hover:text-[#0284c7] cursor-pointer"
            >
              <span>{expanded === call.id ? 'Hide Transcript' : 'Read Verbatim Transcript'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expanded === call.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expanded === call.id && (
              <div className="mt-4 space-y-2 border-t border-zinc-100 pt-4 bg-[#fafaf8] p-4 rounded-xl border border-zinc-200 max-h-72 overflow-y-auto">
                {call.transcript.map((line, idx) => (
                  <div key={idx} className="text-xs leading-relaxed font-sans">
                    <span className="font-mono text-zinc-400 mr-2 text-[11px]">{line.time}</span>
                    <strong
                      className={`font-display uppercase tracking-wider mr-2 ${
                        line.speaker === 'Flynn' ? 'text-[#0077b6]' : 'text-zinc-900'
                      }`}
                    >
                      {line.speaker}:
                    </strong>
                    <span className="text-zinc-700">{line.text}</span>
                    {line.technique && (
                      <span className="ml-2 inline-block px-2 py-0.5 bg-sky-50 text-[#0077b6] border border-sky-200 rounded text-[10px] font-display uppercase font-bold">
                        {line.technique}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        );
      })}

      {error && (
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
          <Volume2 className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
