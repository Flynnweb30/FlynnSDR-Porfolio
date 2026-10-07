import React, { useState, useRef } from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import BanknoteNav from '../components/BanknoteNav';
import DiscordButton from '../components/DiscordButton';
import {
  Calendar,
  Check,
  Mail,
  Phone,
  Linkedin,
  Play,
  Pause,
  MessageCircle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
  onOpenResume: () => void;
}

export default function HomePage({ onNavigate, onOpenBooking, onOpenResume }: HomePageProps) {
  const [activeCallId, setActiveCallId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedTranscriptId, setExpandedTranscriptId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const audioSources: Record<string, string> = {
    'call-1': import.meta.env.VITE_AUDIO_CALL_1_URL || 'https://audiolink-oskn.onrender.com/audio/aud_1791236690865_eeeu4r.opus',
    'call-2': import.meta.env.VITE_AUDIO_CALL_2_URL || 'https://www.image2url.com/r2/default/audio/1791215970548-fa25088c-671a-4e9a-9297-fa8392d25b0a.opus',
    'call-3': import.meta.env.VITE_AUDIO_CALL_3_URL || 'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
    'call-4': import.meta.env.VITE_AUDIO_CALL_4_URL || 'https://www.image2url.com/r2/default/audio/1791215822662-8c113027-efd5-422b-8508-deb2539de57e.opus',
  };

  const handleTogglePlay = async (callId: string) => {
    const audio = audioRefs.current[callId];
    if (!audio || !audioSources[callId]) return;
    if (activeCallId === callId && isPlaying) {
      audio.pause();
      return;
    }
    Object.keys(audioRefs.current).forEach((id) => {
      if (id !== callId) audioRefs.current[id]?.pause();
    });
    setActiveCallId(callId);
    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full bg-[#fafaf8] text-[#0d0e0c] font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#78baff] via-[#b5d7ff] to-[#fafaf8] pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dededb]">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/flynn-sky.jpg')` }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 sm:pb-12">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <span className="font-script text-6xl sm:text-7xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 hover:scale-105 transition-transform">
                Flynn
              </span>
            </div>
            <BanknoteNav onNavigate={onNavigate} size="md" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="space-y-0 leading-none">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] block">
                  HEAVY WEIGHT
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] block">
                  SENIOR SDR
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0077b6] block">
                  PIPELINE SPECIALIST.
                </h1>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">💵</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">$1.8M+</div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    PIPELINE<br />SOURCED
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">⏳</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">11+ YEARS</div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    OUTBOUND<br />EXPERIENCE
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">📞</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">45,000+</div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    SALES CALLS<br />COMPLETED
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs flex items-center gap-2.5">
                  <span className="text-xl">🔥</span>
                  <div>
                    <div className="text-base font-black font-display text-[#0d0e0c] leading-none">120–150%</div>
                    <div className="text-[9px] font-display font-bold uppercase text-zinc-500 leading-tight mt-0.5">
                      QUOTA ATTAINMENT ON OUTBOUND
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs flex items-center gap-2.5">
                  <span className="text-xl">❄️</span>
                  <div>
                    <div className="text-base font-black font-display text-[#0d0e0c] leading-none">150+</div>
                    <div className="text-[9px] font-display font-bold uppercase text-zinc-500 leading-tight mt-0.5">
                      DAILY OUTBOUND DIALS
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="px-3 py-2 bg-white/90 border border-zinc-200/80 rounded-xl flex items-center gap-2 shadow-2xs">
                  <span className="text-base">🇵🇭</span>
                  <div>
                    <div className="text-[9px] font-display font-extrabold text-zinc-500 uppercase tracking-wider">Role</div>
                    <div className="text-xs font-bold text-[#0d0e0c] font-display uppercase">Senior SDR & Team Lead</div>
                  </div>
                </div>

                <div className="px-3 py-2 bg-white/90 border border-zinc-200/80 rounded-xl flex items-center gap-2 shadow-2xs">
                  <span className="text-base">🌐</span>
                  <div>
                    <div className="text-[9px] font-display font-extrabold text-zinc-500 uppercase tracking-wider">Coverage</div>
                    <div className="text-xs font-bold text-[#0d0e0c] font-display uppercase">US · UK · AU · SG Markets</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-display">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-zinc-600">Find me</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6]">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6]">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6]">
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <DiscordButton />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center items-end relative min-h-[380px] sm:min-h-[460px]">
              <div className="relative w-64 sm:w-72 md:w-80">
                <img
                  src={personalInfo.heroImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = personalInfo.heroImageFallback;
                  }}
                  alt="Flynn - Senior SDR"
                  className="w-full h-auto object-cover object-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.22)] select-none pointer-events-none rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-lg space-y-4">
                <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight text-left">
                  HIRE OR<br />INTERVIEW ME
                </h2>

                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hey%20Flynn,%20I'd%20love%20to%20interview%20you%20for%20a%20Senior%20SDR%20role.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3.5 py-2.5 bg-white hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-500 rounded-xl flex items-center justify-between transition-all group shadow-2xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-display font-bold text-[#0d0e0c] uppercase">
                      <div className="w-6 h-6 rounded-md bg-[#25d366]/15 flex items-center justify-center text-[#25d366]">
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </div>
                      <span>WhatsApp</span>
                    </div>
                    <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors font-bold">→</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3.5 py-2.5 bg-white hover:bg-indigo-50 border border-zinc-200 hover:border-indigo-500 rounded-xl flex items-center justify-between transition-all group shadow-2xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-display font-bold text-[#0d0e0c] uppercase">
                      <div className="w-6 h-6 rounded-md bg-[#5865f2]/15 flex items-center justify-center text-[#5865f2]">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-zinc-400 group-hover:text-indigo-600 transition-colors font-bold">→</span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}?subject=Interview%20Flynn%20for%20Senior%20SDR%20Role`}
                    className="w-full px-3.5 py-2.5 bg-white hover:bg-sky-50 border border-zinc-200 hover:border-[#0077b6] rounded-xl flex items-center justify-between transition-all group shadow-2xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-display font-bold text-[#0d0e0c] uppercase">
                      <div className="w-6 h-6 rounded-md bg-[#0077b6]/15 flex items-center justify-center text-[#0077b6]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span>Email</span>
                    </div>
                    <span className="text-zinc-400 group-hover:text-[#0077b6] transition-colors font-bold">→</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-zinc-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0">
                    ✓
                  </div>
                  <div className="text-left text-xs leading-tight">
                    <span className="text-zinc-500 text-[10px] block font-sans">Available for</span>
                    <strong className="text-emerald-600 font-display uppercase tracking-tight block text-sm">
                      IMMEDIATE start
                    </strong>
                    <span className="text-zinc-500 text-[10px] block font-sans">during US daytime full time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD SECTION */}
      <section className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-10 tracking-tight">
            A TRACK RECORD BUILT FOR RESULTS.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif" alt="Regen Digital" loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">REGEN DIGITAL</div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">USA / NORWEGIAN</div>
                <div className="text-base font-black font-display text-[#0077b6]">$200,000+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  85% Qualified Opportunities<br />
                  120–150% Quota Attainment<br />
                  Level 4 Tier in 3 Weeks<br />
                  <strong className="text-zinc-900">$960 Incentives</strong>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif" alt="Seek Marketing" loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">SEEK MARKETING / IHTE</div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">USA / CANADIAN / UK</div>
                <div className="text-base font-black font-display text-[#0077b6]">$1.8M+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  150+ Daily Outbound Dials<br />
                  120% Quota Attainment<br />
                  +18% Response Rate<br />
                  <strong className="text-zinc-900">Qualified Pipeline</strong>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif" alt="Averps Pte Ltd" loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">AVERPS / FOUND INC.</div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">UK / SINGAPORE</div>
                <div className="text-base font-black font-display text-[#0077b6]">$1.2M+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  100% SQL Target Met<br />
                  22% Demo Conversion<br />
                  +15% Qualification Lift<br />
                  <strong className="text-zinc-900">Qualified Pipeline</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF I CAN QUALIFY & BOOK (SPOTLIGHTS) */}
      <section id="proof" className="py-14 sm:py-18 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-12 tracking-tight">
            PROOF I CAN QUALIFY & BOOK
          </h2>

          <div className="space-y-8">
            {/* Spotlight 01: Top Glaze Roofing (Andy, 01:17) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div
                className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleTogglePlay('call-1');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Top Glaze Roofing · Overcoming Timing Resistance</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-[#0077b6] group-hover:bg-[#0284c7] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-1' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current['call-1'] = el;
                  }}
                  src={audioSources['call-1']}
                  preload="none"
                  onPlay={() => {
                    setActiveCallId('call-1');
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (activeCallId === 'call-1') setIsPlaying(false);
                  }}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setIsPlaying(false)}
                  className="absolute opacity-0 pointer-events-none"
                />
                <div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  01:17 · Actual Outbound Recording
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  01 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  OBJECTIONS MASTERED
                </h3>

                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Call result</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">77 sec</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Appointment result</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">Monday 9:30 AM</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Handled a busy roofing contractor without pushing his immediate schedule, seamlessly pivoted to early next week, and confirmed a Monday 9:30 AM discovery session in 77 seconds.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      void handleTogglePlay('call-1');
                    }}
                    className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl cursor-pointer shadow-xs"
                  >
                    {activeCallId === 'call-1' && isPlaying ? 'Pause Audio' : 'Play Full Audio'}
                  </button>
                  <button
                    onClick={() => setExpandedTranscriptId(expandedTranscriptId === 'call-1' ? null : 'call-1')}
                    className="text-xs font-sans text-zinc-500 hover:text-black underline cursor-pointer"
                  >
                    {expandedTranscriptId === 'call-1' ? 'Hide Transcript' : 'Read Transcript'}
                  </button>
                </div>

                {expandedTranscriptId === 'call-1' && (
                  <div className="p-3 bg-zinc-50 rounded-xl text-xs font-sans max-h-40 overflow-y-auto space-y-1.5 border border-zinc-200">
                    <p><strong>Flynn:</strong> Well, Flynn here Andy! Wondering if you are available tomorrow?</p>
                    <p><strong>Prospect:</strong> No, tomorrow I am busy the rest of this week.</p>
                    <p><strong>Flynn:</strong> What about next week, early next week though?</p>
                    <p><strong>Prospect:</strong> Okay, you can put it down for Monday. 9:30 is fine.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Spotlight 02: CIG Builders (Moises, 02:39) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div
                className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleTogglePlay('call-3');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CIG Builders · Qualifying Commercial Contractor Scope</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-[#0077b6] group-hover:bg-[#0284c7] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-3' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current['call-3'] = el;
                  }}
                  src={audioSources['call-3']}
                  preload="none"
                  onPlay={() => {
                    setActiveCallId('call-3');
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (activeCallId === 'call-3') setIsPlaying(false);
                  }}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setIsPlaying(false)}
                  className="absolute opacity-0 pointer-events-none"
                />
                <div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  02:39 · Actual Outbound Recording
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  02 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  COMMERCIAL CONTRACTOR DISCOVERY
                </h3>

                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Call result</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">02:39</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Appointment result</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">Monday 4:45 PM</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Used a low-friction value opener with a busy commercial contractor, confirmed project scope, captured direct email, and scheduled a Monday 4:45 PM appointment.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      void handleTogglePlay('call-3');
                    }}
                    className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl cursor-pointer shadow-xs"
                  >
                    {activeCallId === 'call-3' && isPlaying ? 'Pause Audio' : 'Play Full Audio'}
                  </button>
                  <button
                    onClick={() => setExpandedTranscriptId(expandedTranscriptId === 'call-3' ? null : 'call-3')}
                    className="text-xs font-sans text-zinc-500 hover:text-black underline cursor-pointer"
                  >
                    {expandedTranscriptId === 'call-3' ? 'Hide Transcript' : 'Read Transcript'}
                  </button>
                </div>

                {expandedTranscriptId === 'call-3' && (
                  <div className="p-3 bg-zinc-50 rounded-xl text-xs font-sans max-h-40 overflow-y-auto space-y-1.5 border border-zinc-200">
                    <p><strong>Flynn:</strong> My name is Flynn. Just wanted to see if you had a few moments early next week to look at it?</p>
                    <p><strong>Prospect:</strong> Sure, no problem.</p>
                    <p><strong>Flynn:</strong> I have around Monday 4:45 PM, is that good?</p>
                    <p><strong>Prospect:</strong> 4:45 is good. Moises, mkaba03@gmail.com.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Spotlight 03: Aldis Clean (Hussein, 06:54) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div
                className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleTogglePlay('call-4');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Aldis Clean · Overcoming Suspicion into a Zoom Demo</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-[#0077b6] group-hover:bg-[#0284c7] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-4' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current['call-4'] = el;
                  }}
                  src={audioSources['call-4']}
                  preload="none"
                  onPlay={() => {
                    setActiveCallId('call-4');
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (activeCallId === 'call-4') setIsPlaying(false);
                  }}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setIsPlaying(false)}
                  className="absolute opacity-0 pointer-events-none"
                />
                <div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  06:54 · Actual Outbound Recording
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  03 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  HANDLING SKEPTICAL OBJECTIONS
                </h3>

                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Call result</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">06:54</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Appointment result</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">Thursday 11:00 AM Zoom</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Handled an initially suspicious prospect with calm transparency, validated his concerns, clarified his primary growth goal, and locked down a Thursday 11:00 AM Zoom demo.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      void handleTogglePlay('call-4');
                    }}
                    className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl cursor-pointer shadow-xs"
                  >
                    {activeCallId === 'call-4' && isPlaying ? 'Pause Audio' : 'Play Full Audio'}
                  </button>
                  <button
                    onClick={() => setExpandedTranscriptId(expandedTranscriptId === 'call-4' ? null : 'call-4')}
                    className="text-xs font-sans text-zinc-500 hover:text-black underline cursor-pointer"
                  >
                    {expandedTranscriptId === 'call-4' ? 'Hide Transcript' : 'Read Transcript'}
                  </button>
                </div>

                {expandedTranscriptId === 'call-4' && (
                  <div className="p-3 bg-zinc-50 rounded-xl text-xs font-sans max-h-40 overflow-y-auto space-y-1.5 border border-zinc-200">
                    <p><strong>Prospect:</strong> You built a website for me without my permission?!</p>
                    <p><strong>Flynn:</strong> We do this for 100 businesses every day. If you love it, you can keep it. If not, no hard feelings!</p>
                    <p><strong>Prospect:</strong> No commitments, it's for free? Then you can call me tomorrow then!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SPRINT VIDEO SECTION */}
      <section className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#dededb] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              GET TO KNOW YOUR NEXT SENIOR SDR
            </h2>

            <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 shadow-xl group">
              <img
                src={personalInfo.teamImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = personalInfo.teamImageFallback;
                }}
                alt="Flynn on the sales floor"
                className="w-full h-full object-cover object-center filter saturate-[1.05]"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0077b6] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xs p-3 rounded-xl text-left text-white flex items-center justify-between text-xs font-sans">
                <div>
                  <div className="font-bold font-display uppercase tracking-wide">Flynn Leading Outbound Sales Sprints & Rep Coaching</div>
                  <div className="text-zinc-300 text-[11px]">Junior Sales Team Lead · Regen Digital</div>
                </div>
                <span className="text-emerald-400 font-bold uppercase text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded font-display tracking-wider">
                  +15% Monthly KPI Lift
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Flynn combines 11+ years of relentless cold calling stamina with consultative discovery, coaching newer reps on the sales floor, and converting outbound friction into high-intent discovery calls.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-12 tracking-tight">
            TESTIMONIALS
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              <div className="w-36 sm:w-44 shrink-0 bg-zinc-50 border border-zinc-200 rounded-lg p-3 shadow-inner text-left font-sans text-[8px] text-zinc-400 select-none">
                <div className="w-10 h-2 bg-zinc-300 mb-2" />
                <div className="space-y-1">
                  <div className="h-1 bg-zinc-200 w-full" />
                  <div className="h-1 bg-zinc-200 w-4/5" />
                  <div className="h-1 bg-zinc-200 w-full" />
                  <div className="h-1 bg-zinc-200 w-3/4" />
                </div>
                <div className="mt-4 pt-2 border-t border-zinc-200 text-zinc-600 font-bold text-[9px] font-display uppercase">
                  REGEN DIGITAL
                </div>
                <div className="text-[7px] text-zinc-400">Official Character Letter</div>
              </div>

              <div className="space-y-4 text-left">
                <blockquote className="text-xl sm:text-2xl font-bold font-display text-[#0d0e0c] leading-snug">
                  “When Flynn joined our outbound campaign at Regen Digital, he ramped to our top Level 4 tier in under 3 weeks. Sourced over $1.8M in career pipeline with 120–150% quota performance, 150+ daily dials, and 30+ qualified discovery meetings per month.”
                </blockquote>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <div className="text-xs font-sans text-zinc-500">
                    — <strong className="text-zinc-900 font-display uppercase tracking-wider">Brendon Gocaj</strong>, Owner & Director, Regen Digital
                  </div>
                  <img
                    src="https://audiolink-oskn.onrender.com/media/brendon_signature_media_1791396879400_5pk4r.png"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/brendon-signature.svg';
                    }}
                    alt="Brendon Gocaj Signature"
                    className="h-10 w-auto max-w-[140px] object-contain mix-blend-multiply select-none"
                    draggable={false}
                  />
                </div>

                <div>
                  <button
                    onClick={() => onNavigate('references')}
                    className="px-4 py-2 bg-[#fafaf8] hover:bg-zinc-100 border border-zinc-300 text-xs font-display font-extrabold uppercase tracking-wider text-zinc-800 rounded-xl cursor-pointer transition-colors shadow-2xs"
                  >
                    Read full letter
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'TL Dee', role: 'Sr. Operations Sales Lead', company: 'Regen Digital US', image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif', quote: 'Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.' },
                { name: 'Toby Whitaker', role: 'Head of Sales', company: 'Seek Marketing Partners (UK)', image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif', quote: 'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.' },
                { name: 'Van Ng', role: 'Account Manager', company: 'Averps Pte Ltd (Singapore)', image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif', quote: 'A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.' },
              ].map((item) => (
                <div key={item.name} className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                      <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold font-display uppercase text-zinc-900 truncate">{item.name}</div>
                      <div className="text-[10px] font-sans text-zinc-400">{item.role} · {item.company}</div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed italic">“{item.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROLES COMPARISON */}
      <section id="roles" className="py-14 sm:py-20 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-display text-emerald-700 font-extrabold uppercase tracking-wider">
              Actively looking
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-[#0d0e0c] mb-2">
            LOOKING FOR MY NEXT SENIOR SDR ROLE
          </h2>
          <p className="text-xs sm:text-sm font-sans text-zinc-500 mb-12">
            Compare opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="text-center pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                    PART-TIME SENIOR SDR
                  </h3>
                  <div className="text-[11px] font-sans text-zinc-500 mt-1">Guaranteed, non-recoverable base</div>
                  <div className="text-3xl font-black font-display text-[#0077b6] mt-1">$600–$900/mo</div>
                  <div className="text-[10px] font-sans text-zinc-400 mt-0.5">Flexible outbound sprint scope</div>
                  <div className="text-xs font-bold font-display uppercase tracking-wider text-zinc-800 mt-2 bg-zinc-100 py-1 rounded-lg">
                    Incentives on qualified meetings
                  </div>
                </div>

                <div className="space-y-1 text-center">
                  <div className="text-sm font-bold font-display uppercase text-zinc-800">4–5 hours a day</div>
                  <div className="text-xs text-zinc-500 font-sans">
                    Targeted outbound dial sprints, pipeline qualification, and appointment booking.
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100">
                  <div className="text-xs font-display font-extrabold uppercase text-zinc-800 tracking-wider text-center mb-4">
                    WHAT FLYNN DELIVERS
                  </div>

                  <div className="space-y-4 text-xs font-sans text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Consistent Qualified Appointments</strong>
                        <span>Delivering 15–20+ verified discovery meetings each month for Account Executives.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Daily Cold Outbound Dials</strong>
                        <span>75–100+ dials per shift with multi-touch email and LinkedIn cadence follow-ups.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">CRM Rigor & AE Handoffs</strong>
                        <span>Clean CRM qualification notes, direct dial enrichment, and structured Zoom handoffs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Part-Time')}
                  className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm text-center"
                >
                  Inquire About Part-Time
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="text-center pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                    FULL-TIME SENIOR SDR
                  </h3>
                  <div className="text-[11px] font-sans text-zinc-500 mt-1">Guaranteed, non-recoverable base</div>
                  <div className="text-3xl font-black font-display text-[#0077b6] mt-1">Starting at $1,050/mo</div>
                  <div className="text-[10px] font-sans text-zinc-400 mt-0.5">Full-time dedicated outbound execution</div>
                  <div className="text-xs font-bold font-display uppercase tracking-wider text-zinc-800 mt-2 bg-zinc-100 py-1 rounded-lg">
                    Performance incentives on pipeline
                  </div>
                </div>

                <div className="space-y-1 text-center">
                  <div className="text-sm font-bold font-display uppercase text-zinc-800">8 hours a day · US Daytime</div>
                  <div className="text-xs text-zinc-500 font-sans">
                    Full-time outbound prospecting, cold calling, BANT qualification, and CRM ownership.
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100">
                  <div className="text-xs font-display font-extrabold uppercase text-zinc-800 tracking-wider text-center mb-4">
                    WHAT FLYNN DELIVERS
                  </div>

                  <div className="space-y-4 text-xs font-sans text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">30+ Qualified Meetings / Month</strong>
                        <span>Consistent high-intent SQLs booked directly onto Account Executive calendars.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">150+ Daily Outbound Dials</strong>
                        <span>Unmatched phone stamina, objection handling, and pattern-interrupt cold outreach.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Outbound Leadership & Mentoring</strong>
                        <span>Able to shadow and mentor newer SDRs to raise outbound quota attainment across the floor.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Full-Time')}
                  className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm text-center"
                >
                  Inquire About Full-Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#fafaf8] text-center space-y-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex justify-center">
            <BanknoteNav onNavigate={onNavigate} size="sm" />
          </div>

          <div className="pt-2">
            <span className="font-script text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 select-none">
              Flynn
            </span>
          </div>

          <p className="text-[11px] font-sans text-zinc-400 max-w-lg mx-auto">
            This website does not assert claims. Copyright owned by Flynn James Q. Pontino.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-zinc-600">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-black font-bold">
              {personalInfo.email}
            </a>
            <span>·</span>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-black font-bold">
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



