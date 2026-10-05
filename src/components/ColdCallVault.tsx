import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';
import { callRecordings } from '../data/flynnData';

const audioUrls = [
  (import.meta.env.VITE_AUDIO_CALL_1_URL as string | undefined) || 'https://audiolink-oskn.onrender.com/audio/aud_1791236690865_eeeu4r.opus',
  (import.meta.env.VITE_AUDIO_CALL_2_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791215970548-fa25088c-671a-4e9a-9297-fa8392d25b0a.opus',
  (import.meta.env.VITE_AUDIO_CALL_3_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
  (import.meta.env.VITE_AUDIO_CALL_4_URL as string | undefined) || 'https://www.image2url.com/r2/default/audio/1791215822662-8c113027-efd5-422b-8508-deb2539de57e.opus',
];

export default function ColdCallVault() {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLAudioElement | null>>({});

  const toggle = (id: string, i: number) => {
    const audio = refs.current[id];
    if (!audio || !audioUrls[i]) {
      setError('Recording source unavailable. Please verify environment variables.');
      return;
    }
    setError(null);
    if (active === id) {
      if (audio.paused) {
        audio.play().catch(() => setError('Unable to play audio. Please interact with the page first.'));
      } else {
        audio.pause();
      }
    } else {
      Object.keys(refs.current).forEach((key) => {
        refs.current[key]?.pause();
      });
      setActive(id);
      audio.currentTime = 0;
      audio.play().catch(() => setError('Audio playback could not start. Please verify browser media permissions.'));
    }
  };

  return (
    <div className="space-y-6">
      {callRecordings.map((call, i) => (
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

            <button
              type="button"
              onClick={() => toggle(call.id, i)}
              className="shrink-0 px-5 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white rounded-xl text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              {active === call.id && refs.current[call.id] && !refs.current[call.id]?.paused ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
              <span>{active === call.id && refs.current[call.id] && !refs.current[call.id]?.paused ? 'Pause' : 'Play'} Call</span>
            </button>
          </div>

          {/* Native HTML5 Audio Player with Multi-MIME type support for .opus / Ogg */}
          <div className="mt-5 pt-4 border-t border-zinc-100">
            <audio
              ref={(el) => {
                refs.current[call.id] = el;
              }}
              preload="none"
              onPlay={() => setActive(call.id)}
              onPause={() => {
                if (active === call.id) setActive(null);
              }}
              onEnded={() => setActive(null)}
              onError={() => setError(`Audio source for recording #${i + 1} could not be loaded.`)}
              controls
              className="w-full h-10 accent-[#0077b6]"
            >
              <source src={audioUrls[i]} type="audio/ogg; codecs=opus" />
              <source src={audioUrls[i]} type="audio/opus" />
              <source src={audioUrls[i]} type="audio/webm; codecs=opus" />
              Your browser does not support HTML5 audio playback.
            </audio>
          </div>

          {/* 3-Column Tactical Brief */}
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

          {/* Transcript Accordion */}
          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setExpanded(expanded === call.id ? null : call.id)}
              className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold uppercase tracking-wider text-[#0077b6] hover:text-[#0284c7] cursor-pointer"
            >
              <span>{expanded === call.id ? 'Hide Verbatim Transcript' : 'Read Verbatim Transcript'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${expanded === call.id ? 'rotate-180' : ''}`}
              />
            </button>
            <span className="text-[11px] font-mono text-zinc-400">Actual Outbound Recording</span>
          </div>

          {expanded === call.id && (
            <div className="mt-4 space-y-2.5 bg-[#fafaf8] p-4 rounded-xl border border-zinc-200 max-h-72 overflow-y-auto font-sans text-xs">
              {call.transcript.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  <span className="font-mono text-zinc-400 mr-2 text-[11px]">{line.time}</span>
                  <strong
                    className={`font-display uppercase tracking-wide mr-2 ${
                      line.speaker === 'Flynn' ? 'text-[#0077b6]' : 'text-zinc-800'
                    }`}
                  >
                    {line.speaker}:
                  </strong>
                  <span className="text-zinc-700">{line.text}</span>
                  {line.technique && (
                    <span className="ml-2 inline-block px-2 py-0.5 bg-sky-50 border border-sky-200 text-[#0077b6] text-[10px] font-display uppercase font-bold rounded">
                      {line.technique}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      ))}

      {error && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <Volume2 className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
