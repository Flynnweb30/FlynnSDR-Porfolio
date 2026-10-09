import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { industriesData, IndustryItem } from '../data/industriesData';
import {
  Building2,
  Calendar,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Target,
  Quote,
  Play,
  Pause,
  Volume2,
  ShieldCheck,
  Clock,
} from 'lucide-react';

interface IndustriesPageProps {
  currentRoute: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function IndustriesPage({ currentRoute, onNavigate, onOpenBooking }: IndustriesPageProps) {
  const activeIndustry = industriesData.find((i) => i.slug === currentRoute);

  const [isPlayingCall3, setIsPlayingCall3] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const call3AudioUrl =
    (import.meta.env.VITE_AUDIO_CALL_3_URL as string | undefined) ||
    'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus';

  const handleToggleCall3 = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingCall3) {
      audio.pause();
      setIsPlayingCall3(false);
    } else {
      window.dispatchEvent(
        new CustomEvent('flynn:mediaPlay', {
          detail: { type: 'audio', id: 'call-3-industry-page' },
        })
      );
      audio.currentTime = 0;
      audio.play().catch(() => setIsPlayingCall3(false));
      setIsPlayingCall3(true);
    }
  };

  useEffect(() => {
    const handleGlobalMedia = (e: Event) => {
      const custom = e as CustomEvent;
      if (custom.detail?.id !== 'call-3-industry-page') {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
        setIsPlayingCall3(false);
      }
    };
    window.addEventListener('flynn:mediaPlay', handleGlobalMedia);
    return () => window.removeEventListener('flynn:mediaPlay', handleGlobalMedia);
  }, []);

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      <audio
        ref={audioRef}
        src={call3AudioUrl}
        preload="none"
        onPlay={() => setIsPlayingCall3(true)}
        onPause={() => setIsPlayingCall3(false)}
        onEnded={() => setIsPlayingCall3(false)}
        onError={() => setIsPlayingCall3(false)}
        className="hidden"
      />

      {/* Header Banner */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>{activeIndustry ? activeIndustry.badge : 'Vertical Market Experience'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              {activeIndustry ? activeIndustry.title : 'Industries & Proven Market Verticals.'}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              {activeIndustry
                ? activeIndustry.overview
                : '11+ years adapting to complex B2B buyer personas, technical requirements, and procurement cycles across enterprise SaaS, growth agencies, government summits, and commercial trades.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Your Industry ICP</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('calls')}
                className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] text-xs font-display font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#0077b6]" />
                <span>Listen to Call Recordings</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      {activeIndustry ? (
        /* DEDICATED DEEP-DIVE VIEW FOR SELECTED INDUSTRY (IMAGE 2) */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-left">
            {/* Visual Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#dededb] shadow-md aspect-[21/9] max-h-[360px] bg-zinc-900">
              <img
                src={activeIndustry.image}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/assets/industry-contracting.jpg';
                }}
                alt={activeIndustry.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-xs font-display uppercase tracking-widest text-[#00a8e8] font-bold">
                    Sector Focus
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
                    {activeIndustry.tagline}
                  </h2>
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-display uppercase tracking-wider font-bold">
                  {activeIndustry.badge}
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeIndustry.metrics.map((m, i) => (
                <div key={i} className="p-5 bg-white border border-[#dededb] rounded-2xl shadow-xs text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display text-[#0077b6]">{m.value}</div>
                  <div className="text-[10px] sm:text-xs font-display uppercase font-bold text-zinc-500 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURED RECORDING SECTION: LIVE DISCOVERY CALL · UNDER 3 MIN BOOKING (IMAGE 2) */}
            {activeIndustry.featuredRecording && (
              <div className="bg-white border-2 border-[#0077b6]/35 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-[11px] font-display uppercase tracking-wider font-extrabold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Discovery Call · Under 3 Min Booking</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                      {activeIndustry.featuredRecording.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">
                      Category: {activeIndustry.featuredRecording.category} · {activeIndustry.featuredRecording.prospect} ({activeIndustry.featuredRecording.company})
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 bg-sky-50 border border-sky-100 text-[#0077b6] text-xs font-mono font-bold rounded-lg flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{activeIndustry.featuredRecording.duration}</span>
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-display uppercase font-bold rounded-lg">
                      100% Under 3 Min
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: Matching Image with Interactive Play Overlay (Image 2 Player Placeholder) */}
                  <div
                    className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[#dededb] bg-zinc-900"
                    onClick={handleToggleCall3}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleToggleCall3();
                      }
                    }}
                    aria-label={`Play ${activeIndustry.featuredRecording.title}`}
                  >
                    <img
                      src={activeIndustry.featuredRecording.image}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/assets/contractor-call-player.jpg';
                      }}
                      alt={activeIndustry.featuredRecording.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-[#0077b6] group-hover:bg-[#0284c7] text-white shadow-xl flex items-center justify-center transition-all group-hover:scale-110 active:scale-95">
                        {isPlayingCall3 ? (
                          <Pause className="w-6 h-6 fill-white" />
                        ) : (
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-[11px] font-sans pointer-events-none">
                      <span className="font-bold font-display uppercase tracking-wide">
                        {activeIndustry.featuredRecording.company} · {activeIndustry.featuredRecording.prospect}
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">
                        {activeIndustry.featuredRecording.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right: Intelligence Breakdown & Working Play Controls */}
                  <div className="lg:col-span-7 space-y-3.5 text-left">
                    <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                      <div className="p-3 bg-[#f7f7f6] rounded-xl border border-zinc-200/80">
                        <strong className="block text-[10px] uppercase font-display tracking-wider text-emerald-700 font-extrabold">
                          Verified Outcome
                        </strong>
                        <span className="text-zinc-800 font-semibold">
                          {activeIndustry.featuredRecording.outcome}
                        </span>
                      </div>
                      <div className="p-3 bg-[#f7f7f6] rounded-xl border border-zinc-200/80">
                        <strong className="block text-[10px] uppercase font-display tracking-wider text-[#0077b6] font-extrabold">
                          Execution Speed
                        </strong>
                        <span className="text-zinc-800 font-semibold">
                          Cold to Booked in {activeIndustry.featuredRecording.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                      {activeIndustry.featuredRecording.tacticalNote}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleToggleCall3}
                        className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white font-extrabold text-xs uppercase font-display tracking-wider rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                      >
                        {isPlayingCall3 ? (
                          <>
                            <Pause className="w-4 h-4 fill-white" />
                            <span>Pause Live Call</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                            <span>Play Recording ({activeIndustry.featuredRecording.duration})</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigate('calls')}
                        className="px-4 py-2 bg-white hover:bg-zinc-50 border border-[#dededb] text-zinc-800 font-bold text-xs uppercase font-display tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#0077b6]" />
                        <span>View All 7 Audio Proofs</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Target Personas & Blueprints */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Target Decision-Maker Personas (Span 5) */}
              <div className="lg:col-span-5 bg-white border border-[#dededb] rounded-2xl p-6 shadow-xs space-y-4">
                <div className="border-b border-zinc-100 pb-3">
                  <h3 className="text-base font-black uppercase font-display text-[#0d0e0c] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0077b6]" />
                    <span>Target Decision-Makers Engaged</span>
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">
                    Job titles Flynn routinely dials, qualifies, and schedules in this sector.
                  </p>
                </div>

                <div className="space-y-2">
                  {activeIndustry.personas.map((persona, p) => (
                    <div
                      key={p}
                      className="p-2.5 bg-[#f7f7f6] rounded-xl text-xs font-sans font-medium text-zinc-800 flex items-center gap-2"
                    >
                      <Target className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                      <span>{persona}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Challenges Solved (Span 7) */}
              <div className="lg:col-span-7 bg-white border border-[#dededb] rounded-2xl p-6 shadow-xs space-y-4">
                <div className="border-b border-zinc-100 pb-3">
                  <h3 className="text-base font-black uppercase font-display text-[#0d0e0c]">
                    Sector Challenges & Strategic Solutions
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">
                    How Flynn overcomes unique industry objections and gatekeeper roadblocks.
                  </p>
                </div>

                <div className="space-y-3">
                  {activeIndustry.challengesSolved.map((cs, c) => (
                    <div key={c} className="p-3.5 bg-[#f7f7f6] rounded-xl border border-zinc-200/80 space-y-1">
                      <div className="text-xs font-bold text-rose-700 font-display uppercase">
                        Obstacle: {cs.challenge}
                      </div>
                      <div className="text-xs text-zinc-700 font-sans pl-2 border-l-2 border-[#0077b6]">
                        {cs.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documented Case Study Card */}
            <div className="p-8 bg-white border border-[#dededb] rounded-2xl shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-4">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-bold">
                    Documented Campaign Result
                  </span>
                  <h4 className="text-xl font-black font-display uppercase text-[#0d0e0c] mt-0.5">
                    {activeIndustry.caseStudy.company} · {activeIndustry.caseStudy.market}
                  </h4>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-display uppercase font-bold rounded-lg self-start sm:self-auto">
                  Verified Outcome
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed">
                {activeIndustry.caseStudy.result}
              </p>

              <blockquote className="p-4 bg-[#f7f7f6] rounded-xl text-xs sm:text-sm font-sans italic text-zinc-600 border-l-4 border-[#0077b6]">
                &ldquo;{activeIndustry.caseStudy.quote}&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Schedule Outbound Discovery
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('industries')}
                  className="px-4 py-2 bg-white border border-zinc-300 text-zinc-800 text-xs font-display font-bold uppercase rounded-xl cursor-pointer hover:bg-zinc-100"
                >
                  View All Industries
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* HUB OVERVIEW: ALL 4 INDUSTRIES (IMAGE 1) */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industriesData.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 group"
                >
                  {/* Top Image Placeholder - Fully populated & clickable */}
                  <div
                    className="relative aspect-[16/9] overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => onNavigate(industry.slug as PageRoute)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNavigate(industry.slug as PageRoute);
                      }
                    }}
                    aria-label={`Open ${industry.title}`}
                  >
                    <img
                      src={industry.image}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/assets/industry-contracting.jpg';
                      }}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-display uppercase font-bold rounded-md border border-white/10 pointer-events-none">
                      {industry.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                      <span className="text-[10px] font-display uppercase text-[#00a8e8] font-bold">
                        {industry.shortTitle}
                      </span>
                      <h3 className="text-lg font-black font-display uppercase leading-tight mt-0.5">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">{industry.overview}</p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
                      {industry.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2 bg-[#f7f7f6] rounded-lg text-center">
                          <div className="text-base font-black font-display text-[#0077b6]">{m.value}</div>
                          <div className="text-[9px] font-display uppercase font-bold text-zinc-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      {/* View Sector Persona Blueprint button - opens dedicated view (Image 2) */}
                      <button
                        type="button"
                        onClick={() => onNavigate(industry.slug as PageRoute)}
                        className="text-xs font-display font-extrabold uppercase text-[#0077b6] hover:text-[#0284c7] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>View Sector Persona Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenBooking()}
                        className="px-3.5 py-1.5 bg-zinc-900 hover:bg-[#0077b6] text-white rounded-lg text-[10px] font-display uppercase font-bold transition-colors cursor-pointer"
                      >
                        Book Discovery
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="p-8 bg-[#f7f7f6] border border-[#dededb] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                  Have a Specialized B2B ICP in Mind?
                </h3>
                <p className="text-xs text-zinc-600 font-sans mt-1">
                  Flynn masters complex technical products quickly and executes high-intent qualification from Day 1.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase font-display tracking-wider rounded-xl shadow-xs transition-all shrink-0 cursor-pointer"
              >
                Schedule 15-Minute Intro
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}