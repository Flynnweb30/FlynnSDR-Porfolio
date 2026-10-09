import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Play, X, Award } from 'lucide-react';
import { personalInfo } from '../data/flynnData';

interface IntroVideoPlayerProps {
  customVideoUrl?: string;
  posterImage?: string;
  fallbackImage?: string;
  isPlaying?: boolean;
  onPlayStarted?: () => void;
  onPlayStopped?: () => void;
}

export default function IntroVideoPlayer({
  customVideoUrl = import.meta.env.VITE_INTRO_VIDEO_URL || '/media/flynn___s_introduction_media_1791405322996_0a14q.mp4',
  posterImage = personalInfo.teamImage,
  fallbackImage = personalInfo.teamImageFallback,
  isPlaying = false,
  onPlayStarted,
  onPlayStopped,
}: IntroVideoPlayerProps) {
  const [internalPlaying, setInternalPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlaying && internalPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setInternalPlaying(false);
    }
  }, [isPlaying, internalPlaying]);

  const parsedVideo = useMemo(() => {
    if (!customVideoUrl) return null;
    const trimmed = customVideoUrl.trim();
    if (!trimmed) return null;

    const ytMatch = trimmed.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
    );
    if (ytMatch) {
      return { type: 'iframe', src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0` };
    }

    const loomMatch = trimmed.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/i);
    if (loomMatch) {
      return { type: 'iframe', src: `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1` };
    }

    const vimeoMatch = trimmed.match(
      /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/i
    );
    if (vimeoMatch) {
      return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1` };
    }

    return { type: 'video', src: trimmed };
  }, [customVideoUrl]);

  const handlePlayClick = () => {
    if (parsedVideo && !hasError) {
      setInternalPlaying(true);
      if (onPlayStarted) {
        onPlayStarted();
      }
    }
  };

  const handleStopClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setInternalPlaying(false);
    if (onPlayStopped) {
      onPlayStopped();
    }
  };

  const activePlayState = isPlaying || internalPlaying;

  return (
    <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 group">
      {activePlayState && parsedVideo && !hasError ? (
        <div className="relative w-full h-full bg-black">
          {parsedVideo.type === 'iframe' ? (
            <iframe
              src={parsedVideo.src}
              title="Flynn James - Outbound SDR Leadership & Introduction"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={parsedVideo.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onPlay={() => {
                setInternalPlaying(true);
                if (onPlayStarted) onPlayStarted();
              }}
              onPause={() => {
                setInternalPlaying(false);
                if (onPlayStopped) onPlayStopped();
              }}
              onEnded={() => {
                setInternalPlaying(false);
                if (onPlayStopped) onPlayStopped();
              }}
              onError={() => {
                setHasError(true);
                setInternalPlaying(false);
                if (onPlayStopped) onPlayStopped();
              }}
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support HTML5 video playback.
            </video>
          )}

          <button
            type="button"
            onClick={handleStopClick}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white/90 hover:text-white transition-colors cursor-pointer shadow-md"
            title="Close video"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div
          className="relative w-full h-full cursor-pointer select-none"
          onClick={handlePlayClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handlePlayClick();
          }}
          aria-label="Play introduction video"
        >
          <img
            src={posterImage}
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = fallbackImage;
            }}
            alt="Flynn on the sales floor leading outbound sprints"
            className="w-full h-full object-cover object-center filter saturate-[1.05] transition-transform duration-500 group-hover:scale-102"
          />

          {!activePlayState && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0077b6] group-hover:bg-[#0284c7] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl text-left text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans border border-white/10">
            <div>
              <div className="font-bold font-display uppercase tracking-wide flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#00a8e8]" />
                <span>Flynn Leading Outbound Sales Sprints & Rep Coaching</span>
              </div>
              <div className="text-zinc-300 text-[11px] mt-0.5">Junior Sales Team Lead · Regen Digital</div>
            </div>
            <span className="text-emerald-400 font-bold uppercase text-[10px] bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded font-display tracking-wider self-start sm:self-auto shrink-0">
              +15% Monthly KPI Lift
            </span>
          </div>
        </div>
      )}
    </div>
  );
}