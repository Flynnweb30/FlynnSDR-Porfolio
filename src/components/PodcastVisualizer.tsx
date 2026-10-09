import React, { useMemo } from 'react';
import { Play } from 'lucide-react';
import { personalInfo } from '../data/flynnData';

interface PodcastVisualizerProps {
  duration: string;
  company: string;
  headline: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioRefCallback: (el: HTMLAudioElement | null) => void;
  audioSrc: string;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
}

export default function PodcastVisualizer({
  duration,
  company,
  headline,
  isPlaying,
  onTogglePlay,
  audioRefCallback,
  audioSrc,
  onPlay,
  onPause,
  onEnded,
}: PodcastVisualizerProps) {
  const leftWaveHeights = useMemo(
    () => [24, 38, 55, 32, 70, 88, 52, 44, 78, 96, 62, 48, 82, 36, 28, 18],
    []
  );

  const rightWaveHeights = useMemo(
    () => [18, 30, 68, 84, 46, 58, 92, 72, 38, 76, 54, 88, 64, 42, 32, 20],
    []
  );

  return (
    <div
      onClick={onTogglePlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onTogglePlay();
        }
      }}
      aria-label={`${headline} - ${isPlaying ? 'Pause audio' : 'Play audio'}`}
      className="w-full relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#0077b6]/30 select-none group cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-between"
    >
      <div
        className="absolute inset-0 bg-[#0077b6] [background-image:linear-gradient(rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#00527f]/85 pointer-events-none"
        aria-hidden="true"
      />

      <audio
        ref={audioRefCallback}
        src={audioSrc}
        preload="none"
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onError={() => onPause()}
        className="absolute opacity-0 pointer-events-none"
      />

      <div className="relative z-10 flex items-center justify-between px-3.5 sm:px-5 pt-3 sm:pt-4">
        <div className="font-display font-black text-[10px] sm:text-xs text-white uppercase tracking-wider flex items-center gap-1.5 drop-shadow-xs">
          <span
            className={`w-2 h-2 rounded-full ${
              isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-white/80'
            }`}
          />
          <span>{duration} · ACTUAL OUTBOUND RECORDING</span>
        </div>

        <div className="text-[9px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/15">
          {company}
        </div>
      </div>

      <div className="relative z-10 px-3 sm:px-6 my-auto text-center py-0.5 sm:py-1">
        <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-none drop-shadow-xs">
          {headline}
        </h3>

        <div className="mt-1 sm:mt-1.5 flex items-center justify-center gap-2">
          <span className="text-[11px] sm:text-xs font-display font-black text-white uppercase tracking-widest drop-shadow-xs">
            FLYNN
          </span>
          <span className="text-white/50 text-[10px]">·</span>
          <span className="text-[9px] sm:text-[10px] font-display font-extrabold text-emerald-300 uppercase tracking-wider drop-shadow-xs">
            {isPlaying ? 'PLAYING OUTBOUND RECORDING' : 'CLICK TO PLAY RECORDING'}
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 pb-2.5 sm:pb-3.5 flex items-center justify-center">
        <div className="flex-1 flex items-center justify-end gap-[2.5px] sm:gap-[3.5px] h-10 sm:h-12 overflow-hidden pr-1.5 sm:pr-2.5">
          {leftWaveHeights.map((h, i) => {
            const delaySec = (i % 6) * 0.11;
            const durationSec = 0.52 + (i % 4) * 0.12;
            return (
              <span
                key={`left-bar-${i}`}
                className="w-[2.5px] sm:w-[3.5px] rounded-full bg-emerald-400 shadow-xs transition-all duration-150"
                style={{
                  height: `${h}%`,
                  transformOrigin: 'center bottom',
                  animation: isPlaying
                    ? `waveformGreenPulse ${durationSec}s ease-in-out infinite alternate ${delaySec}s`
                    : 'none',
                  opacity: isPlaying ? 0.95 : 0.65,
                }}
              />
            );
          })}
        </div>

        <div className="relative shrink-0 mx-1 sm:mx-2">
          <div
            className="w-13 h-13 sm:w-16 sm:h-16 md:w-17 md:h-17 rounded-full border-[3px] sm:border-4 border-white shadow-xl overflow-hidden bg-zinc-950 transition-transform"
            style={{
              animation: 'slowSpin 14s linear infinite',
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            <img
              src={personalInfo.heroImage}
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = personalInfo.heroImageFallback;
              }}
              alt="Flynn James"
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </div>

          {!isPlaying && (
            <div className="absolute inset-0 m-auto w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/75 text-white flex items-center justify-center shadow-md backdrop-blur-xs border border-white/25 pointer-events-none transition-all">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white ml-0.5" />
            </div>
          )}
        </div>

        <div className="flex-1 flex items-center justify-start gap-[2.5px] sm:gap-[3.5px] h-10 sm:h-12 overflow-hidden pl-1.5 sm:pl-2.5">
          {rightWaveHeights.map((h, i) => {
            const delaySec = ((i + 2) % 6) * 0.11;
            const durationSec = 0.50 + ((i + 1) % 4) * 0.13;
            return (
              <span
                key={`right-bar-${i}`}
                className="w-[2.5px] sm:w-[3.5px] rounded-full bg-emerald-400 shadow-xs transition-all duration-150"
                style={{
                  height: `${h}%`,
                  transformOrigin: 'center bottom',
                  animation: isPlaying
                    ? `waveformGreenPulse ${durationSec}s ease-in-out infinite alternate ${delaySec}s`
                    : 'none',
                  opacity: isPlaying ? 0.95 : 0.65,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}