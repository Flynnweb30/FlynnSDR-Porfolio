import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded?: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(() => { try { return localStorage.getItem('flynn_intro_seen') === '1'; } catch { return false; } });

  useEffect(() => {
    if (isDone) { onLoaded?.(); return; }
    const startTime = Date.now();
    const duration = 1500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
            try { localStorage.setItem('flynn_intro_seen', '1'); } catch {}
            if (onLoaded) onLoaded();
          }, 600);
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onLoaded, isDone]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafaf8] transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Soft atmospheric ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
        
        {/* Central Handwritten Script "Flynn" */}
        <div className="relative">
          <span
            className="block text-7xl sm:text-8xl md:text-9xl font-script text-[#0d0e0c] tracking-normal leading-none transform -rotate-3 transition-transform duration-700 hover:scale-105"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}
          >
            Flynn
          </span>
          {/* Subtle underline flourish */}
          <svg
            className="w-36 sm:w-44 h-4 mx-auto -mt-2 text-[#0077b6]"
            viewBox="0 0 160 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path
              d="M 5,10 Q 80,18 155,6"
              strokeDasharray="160"
              strokeDashoffset={160 - (progress / 100) * 160}
              className="transition-all duration-150"
            />
          </svg>
        </div>

        {/* Subtitle with consistent font hierarchy */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-display uppercase tracking-widest text-[#0d0e0c] font-extrabold">
            Heavyweight Senior SDR
          </p>
          <p className="text-[11px] sm:text-xs font-sans tracking-wide text-zinc-500 font-medium">
            Outbound B2B Pipeline Specialist
          </p>
        </div>

        {/* Minimal Progress Bar with percentage */}
        <div className="w-52 space-y-2">
          <div className="w-full h-1.5 bg-zinc-200/90 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0077b6] to-[#00a8e8] rounded-full transition-all duration-75 ease-out shadow-xs"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-display uppercase tracking-wider text-zinc-400">
            <span>Loading Experience</span>
            <span className="font-bold text-[#0077b6]">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
