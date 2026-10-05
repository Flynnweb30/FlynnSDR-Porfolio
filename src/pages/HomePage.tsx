import React, { useState, useRef } from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import BanknoteNav from '../components/BanknoteNav';
import FlynnLogo from '../components/FlynnLogo';
import DiscordButton from '../components/DiscordButton';
import { 
  ArrowRight, 
  Calendar, 
  Headphones, 
  Check, 
  Mail, 
  Phone, 
  Linkedin, 
  Play, 
  Pause, 
  Volume2, 
  MessageCircle
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
    'call-1': import.meta.env.VITE_AUDIO_CALL_1_URL || '',
    'call-2': import.meta.env.VITE_AUDIO_CALL_2_URL || '',
    'call-3': import.meta.env.VITE_AUDIO_CALL_3_URL || '',
    'call-4': import.meta.env.VITE_AUDIO_CALL_4_URL || '',
  };

  const handleTogglePlay = async (callId: string) => {
    const audio = audioRefs.current[callId];
    if (!audio || !audioSources[callId]) return;
    if (activeCallId === callId && isPlaying) { audio.pause(); return; }
    Object.keys(audioRefs.current).forEach(id => { if (id !== callId) audioRefs.current[id]?.pause(); });
    setActiveCallId(callId);
    try { await audio.play(); } catch { setIsPlaying(false); }
  };

  return (
    <div className="w-full bg-[#fafaf8] text-[#0d0e0c] font-sans">

      {/* =========================================================================
          PAGE 1 SCREENSHOT: BLUE CLOUDS SKY HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#78baff] via-[#b5d7ff] to-[#fafaf8] pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dededb]">
        
        {/* Subtle cloud backdrop overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/flynn-sky.jpg')` }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Top Bar: Signature Script "Flynn" on left, 4 Banknotes on right (Matching PDF Page 1) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 sm:pb-12">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <span className="font-script text-6xl sm:text-7xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 hover:scale-105 transition-transform">
                Flynn
              </span>
            </div>

            {/* 4 Banknotes in the Top Right */}
            <BanknoteNav onNavigate={onNavigate} size="md" />
          </div>

          {/* 3-Column Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Big Headline & Metric Tiles (Span 5) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              
              {/* Massive 3-Line Headline (SDR-focused hero) */}
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

              {/* Metric Cards Row 1: $1.8M+, 11+ Years, 45,000+ Calls */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                
                {/* Cash Sourced */}
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">
                    💵
                  </div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    $1.8M+
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    PIPELINE<br/>SOURCED
                  </div>
                </div>

                {/* 11+ Years */}
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <img
                    src="/assets/experience-hourglass.webp"
                    alt="Experience"
                    className="w-7 h-7 object-contain mb-0.5"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    11+ YEARS
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    30+ CLIENTS<br/>$25K AVG ACV
                  </div>
                </div>

                {/* 45,000+ Calls */}
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <img
                    src="/assets/sales-phone.webp"
                    alt="Sales phone"
                    className="w-7 h-7 object-contain mb-0.5"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    45,000+
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    SALES CALLS<br/>COMPLETED
                  </div>
                </div>

              </div>

              {/* Metric Cards Row 2: 120-150% Quota & 150+ Dials */}
              <div className="grid grid-cols-2 gap-2">
                
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs flex items-center gap-2.5">
                  <span className="text-xl">🔥</span>
                  <div>
                    <div className="text-base font-black font-display text-[#0d0e0c] leading-none">
                      120–150%
                    </div>
                    <div className="text-[9px] font-display font-bold uppercase text-zinc-500 leading-tight mt-0.5">
                      QUOTA ATTAINMENT ON OUTBOUND
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs flex items-center gap-2.5">
                  <span className="text-xl">❄️</span>
                  <div>
                    <div className="text-base font-black font-display text-[#0d0e0c] leading-none">
                      150+
                    </div>
                    <div className="text-[9px] font-display font-bold uppercase text-zinc-500 leading-tight mt-0.5">
                      DAILY OUTBOUND DIALS
                    </div>
                  </div>
                </div>

              </div>

              {/* Metric Cards Row 3: Role & Geography Badges */}
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

              {/* Social Channels & Payment Row (Matching PDF Page 1) */}
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

            {/* Center Column: Portrait of Flynn (Span 4) */}
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

            {/* Right Column: "HIRE OR INTERVIEW ME" Card (Span 3) (Matching PDF Page 1) */}
            <div className="lg:col-span-3 space-y-4">
              
              <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-lg space-y-4">
                
                <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight text-left">
                  HIRE OR<br/>INTERVIEW ME
                </h2>

                {/* Direct Action Buttons matching existing design's green/purple/black cards */}
                <div className="space-y-2.5">
                  
                  {/* WhatsApp */}
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

                  {/* LinkedIn / Discord */}
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

                  <div className="w-full px-3.5 py-2.5 bg-white hover:bg-indigo-50 border border-zinc-200 hover:border-indigo-500 rounded-xl flex items-center justify-between transition-all group shadow-2xs cursor-pointer" onClick={async () => { try { await navigator.clipboard.writeText('flynn30'); } catch {} }} title="Copy Discord username: flynn30">
                    <div className="flex items-center gap-2.5 text-xs font-display font-bold text-[#0d0e0c] uppercase"><div className="w-6 h-6 rounded-md bg-[#5865f2]/15 flex items-center justify-center text-[#5865f2] font-black text-[9px]">DIS</div><span>Discord · flynn30</span></div><span className="text-zinc-400 group-hover:text-indigo-600 transition-colors font-bold">Copy →</span>
                  </div>

                  {/* Email */}
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

                {/* Green Siren Lamp: Immediate Start Card */}
                <div className="pt-2 border-t border-zinc-100 flex items-center gap-3">
                  <div className="relative shrink-0">
                    <img
                      src="/assets/green-alarm.svg"
                      alt="Green Alarm"
                      className="w-9 h-9 object-contain animate-siren"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
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

      {/* =========================================================================
          PAGE 1 BOTTOM: A TRACK RECORD THAT CLOSES. (Matching PDF Page 1)
         ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-10 tracking-tight">
            A TRACK RECORD THAT CLOSES.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Regen Digital */}
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200">
                {/* US / Partner flag badge */}
                <div className="w-full h-full bg-gradient-to-r from-blue-700 via-white to-red-600 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
                  🇺🇸 / 🇳🇴
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  REGEN DIGITAL
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">USA / NORWEGIAN</div>
                <div className="text-base font-black font-display text-[#0077b6]">
                  $1,800,000+
                </div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  85% Qualified<br/>
                  120–150% Quota Attainment<br/>
                  Level 4 Tier in 3 Weeks<br/>
                  <strong className="text-zinc-900">$2,400 Ticket</strong>
                </div>
              </div>
            </div>

            {/* Card 2: Seek Marketing / IHTE */}
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200">
                <div className="w-full h-full bg-gradient-to-r from-red-600 via-white to-blue-700 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
                  🇺🇸 / 🇨🇦
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  SEEK MARKETING / IHTE
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">USA / CANADIAN / UK</div>
                <div className="text-base font-black font-display text-[#0077b6]">
                  $1,800,000+
                </div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  150+ Daily Outbound Dials<br/>
                  Senior SDR / Appointment Setter<br/>
                  +18% Script Response<br/>
                  <strong className="text-zinc-900">$1,500–$10,000 Tickets</strong>
                </div>
              </div>
            </div>

            {/* Card 3: Averps / Found Inc */}
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200">
                <div className="w-full h-full bg-blue-900 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
                  🇬🇧 / 🇸🇬
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  AVERPS / FOUND INC.
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">UK / SINGAPORE</div>
                <div className="text-base font-black font-display text-[#0077b6]">
                  $1,200,000+
                </div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  100% SQL Target Met<br/>
                  22% Demo Conversion<br/>
                  BANT Qualification<br/>
                  <strong className="text-zinc-900">$6,500–$40,000 Tickets</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PAGE 1 BOTTOM & PAGE 2 TOP: PROOF I CAN QUALIFY & BOOK
         ========================================================================= */}
      <section id="proof" className="py-14 sm:py-18 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-12 tracking-tight">
            PROOF I CAN QUALIFY & BOOK
          </h2>

          <div className="space-y-8">
            
            {/* Spotlight 01: Objections Mastered (Top Glaze No Show Callback) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              
              {/* Left: Video / Audio Screen Mockup */}
              <div className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                   onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-1'); }}>
                {/* Background image mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Recovering a No-Show Callback & Rebooking</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-1' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio ref={el => { audioRefs.current['call-1'] = el; }} src={audioSources['call-1'] || undefined} preload="none" onPlay={() => { setActiveCallId('call-1'); setIsPlaying(true); }} onPause={() => { if (activeCallId === 'call-1') setIsPlaying(false); }} onEnded={() => { setIsPlaying(false); }} onError={() => setIsPlaying(false)} className="absolute opacity-0 pointer-events-none" /><div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  01:17 · Actual Outbound Recording
                </div>
              </div>

              {/* Right: Skill Spotlight Copy matching PDF */}
              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  01 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  OBJECTIONS MASTERED
                </h3>
                
                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Sale amount</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">$2,400</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">The sale</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">Website / Business Package</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Objection handling in a website / business package sale for $2,400. Turned a busy, distracted prospect into a confirmed Monday 9:30 AM discovery session in 77 seconds.
                </p>

                {/* Audio controls */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-1'); }}
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

            {/* Spotlight 02: Consultative Qualification (Aldis Clean) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              
              <div className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                   onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-3'); }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Qualifying an $18,000 Scope With Consultative Discovery</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-3' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio ref={el => { audioRefs.current['call-3'] = el; }} src={audioSources['call-3'] || undefined} preload="none" onPlay={() => { setActiveCallId('call-3'); setIsPlaying(true); }} onPause={() => { if (activeCallId === 'call-3') setIsPlaying(false); }} onEnded={() => { setIsPlaying(false); }} onError={() => setIsPlaying(false)} className="absolute opacity-0 pointer-events-none" /><div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  06:54 · Actual Outbound Recording
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  02 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  CONSULTATIVE QUALIFICATION
                </h3>
                
                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Sale amount</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">$18,000</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">The sale</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">Commercial Cleaning Contract</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Consultative discovery for a commercial services contract with a contract scope of $18,000. Overturned aggressive defensiveness into an eager Thursday 11:00 AM Zoom demo.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-3'); }}
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
                    <p><strong>Prospect:</strong> You built a website for me without my permission?!</p>
                    <p><strong>Flynn:</strong> We do this for 100 businesses every day. If you love it, you can keep it. If not, no hard feelings!</p>
                    <p><strong>Prospect:</strong> No commitments, it's for free? Then you can call me tomorrow then!</p>
                  </div>
                )}
              </div>

            </div>

            {/* Spotlight 03: Mirroring Psychology (Top Glaze Reminder & CJ Builders) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              
              <div className="w-full md:w-1/2 relative aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer"
                   onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-4'); }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-sans text-white/90 font-semibold flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Qualifying a B2B Contractor Through Discovery</span>
                </div>

                <div className="relative z-10 w-14 h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  {activeCallId === 'call-4' && isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </div>

                <audio ref={el => { audioRefs.current['call-4'] = el; }} src={audioSources['call-4'] || undefined} preload="none" onPlay={() => { setActiveCallId('call-4'); setIsPlaying(true); }} onPause={() => { if (activeCallId === 'call-4') setIsPlaying(false); }} onEnded={() => { setIsPlaying(false); }} onError={() => setIsPlaying(false)} className="absolute opacity-0 pointer-events-none" /><div className="absolute bottom-3 right-3 text-[10px] font-sans text-white/90 bg-black/60 px-2 py-0.5 rounded z-10">
                  02:39 · Actual Outbound Recording
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-3 text-left">
                <div className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                  03 Skill spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  MIRRORING PSYCHOLOGY
                </h3>
                
                <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">Sale amount</span>
                    <strong className="text-2xl font-black font-display text-[#0077b6]">$1,897</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">The sale</span>
                    <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">General Construction Scope</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Mirroring psychology in a B2B contractor discovery for $1,897 package. Navigated busy jobsite commotion and locked Monday 4:45 PM consultation in 2 minutes.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); void handleTogglePlay('call-4'); }}
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
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PAGE 2 MIDDLE: GET TO KNOW YOUR NEXT SENIOR SDR
         ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-[#dededb] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 text-center">
            
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              GET TO KNOW YOUR NEXT SENIOR SDR
            </h2>

            {/* Video Container featuring team-flynn-1.avif */}
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xs p-3 rounded-xl text-left text-white flex items-center justify-between text-xs font-sans">
                <div>
                  <div className="font-bold font-display uppercase tracking-wide">Flynn Leading Sales Sprints & Coaching SDRs</div>
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

      {/* =========================================================================
          PAGE 2 BOTTOM & PAGE 3 TOP: TESTIMONIALS
         ========================================================================= */}
      <section id="testimonials" className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-center text-[#0d0e0c] mb-12 tracking-tight">
            TESTIMONIALS
          </h2>

          <div className="space-y-8">
            
            {/* Top Featured Letter: Brendon's Character Reference (Matching PDF Page 3) */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              
              {/* Letter preview thumbnail */}
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

              {/* Quote & Info */}
              <div className="space-y-4 text-left">
                <blockquote className="text-xl sm:text-2xl font-bold font-display text-[#0d0e0c] leading-snug">
                  “Flynn consistently closed 30–40% of qualified opportunities from cold outbound prospects, often within a single 30–60 minute call.”
                </blockquote>

                <div className="text-xs font-sans text-zinc-500">
                  — <strong className="text-zinc-900 font-display uppercase tracking-wider">Brendon Gocaj</strong>, Owner, Regen Digital
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

            {/* 3 Testimonials Below (Matching PDF Page 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Testimonial 1: IHTE / Akash */}
              <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xs text-blue-800 font-display">
                    A
                  </div>
                  <div>
                    <div className="text-xs font-bold font-display uppercase text-zinc-900">IHTE</div>
                    <div className="text-[10px] font-sans text-zinc-400">Akash</div>
                  </div>
                  <span className="ml-auto text-sm">🇺🇸</span>
                </div>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  “We saw greatness from Flynn the second he started, his first shift he booked qualified discovery calls right away, so it was surprising because we usually don’t see things move that fast.”
                </p>
              </div>

              {/* Testimonial 2: FOUND INC. / Joe */}
              <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-xs text-emerald-800 font-display">
                    J
                  </div>
                  <div>
                    <div className="text-xs font-bold font-display uppercase text-zinc-900">FOUND INC.</div>
                    <div className="text-[10px] font-sans text-zinc-400">Joe</div>
                  </div>
                  <span className="ml-auto text-sm">🇬🇧</span>
                </div>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  “I brought him on for an outbound campaign, and he worked with relentless stamina—150+ calls a day. He executed flawlessly and I can't fault Flynn's work.”
                </p>
              </div>

              {/* Testimonial 3: RISEN FOUNDRY / Ethan */}
              <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center font-bold text-xs text-purple-800 font-display">
                    E
                  </div>
                  <div>
                    <div className="text-xs font-bold font-display uppercase text-zinc-900">RISEN FOUNDRY</div>
                    <div className="text-[10px] font-sans text-zinc-400">Ethan</div>
                  </div>
                  <span className="ml-auto text-sm">🇺🇸</span>
                </div>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  “I had Flynn as my right hand SDR on our B2B accounts. Flynn did everything imaginable: raising KPIs, managing data in CRM, mentoring newer reps, etc.”
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PAGE 3 BOTTOM & PAGE 4: LOOKING FOR MY NEXT SENIOR SDR ROLE
         ========================================================================= */}
      <section id="roles" className="py-14 sm:py-20 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Green Siren Lamp: Actively Looking */}
          <div className="inline-flex items-center gap-2 mb-3">
            <img src="/assets/green-alarm.svg" alt="Alarm" className="w-7 h-7 object-contain animate-siren" />
            <span className="text-xs font-display text-emerald-700 font-extrabold uppercase tracking-wider">
              Actively looking
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-[#0d0e0c] mb-2">
            LOOKING FOR MY NEXT SENIOR SDR ROLE
          </h2>
          <p className="text-xs sm:text-sm font-sans text-zinc-500 mb-12">
            Compare two opportunities
          </p>

          {/* 2 White Comparison Cards matching PDF Page 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Card 1: PART-TIME SENIOR SDR */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                <div className="text-center pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                    PART-TIME SENIOR SDR
                  </h3>
                  <div className="text-[11px] font-sans text-zinc-500 mt-1">
                    Guaranteed, non-recoverable base
                  </div>
                  <div className="text-3xl font-black font-display text-[#0077b6] mt-1">
                    Above $2,500
                  </div>
                  <div className="text-[10px] font-sans text-zinc-400 mt-0.5">
                    Commission paid on top. Never deducted from the base.
                  </div>
                  <div className="text-xs font-bold font-display uppercase tracking-wider text-zinc-800 mt-2 bg-zinc-100 py-1 rounded-lg">
                    10%+ uncapped commission
                  </div>
                </div>

                <div className="space-y-1 text-center">
                  <div className="text-sm font-bold font-display uppercase text-zinc-800">
                    5 hours a day
                  </div>
                  <div className="text-xs text-zinc-500 font-sans">
                    Or longer days with significantly fewer meetings booked, leaving time to run outbound campaigns.
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100">
                  <div className="text-xs font-display font-extrabold uppercase text-zinc-800 tracking-wider text-center mb-4">
                    MY NON-NEGOTIABLES
                  </div>

                  {/* Checklist items matching PDF Page 3 & 4 */}
                  <div className="space-y-4 text-xs font-sans text-zinc-600">
                    
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Meaningful earning potential</strong>
                        <span>$3,000+ average ticket and 10%+ uncapped commission. Realistic $8,000–$12,000+/month OTE within 60 days.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Consistent calls, room to grow</strong>
                        <span>30%+ qualification rate across all discovery calls. 150+ actual dials per working day.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Warm, qualified demand & outbound data</strong>
                        <span>Warm, high-intent leads or enriched account lists from Apollo/Sales Nav before outreach.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Supported. Pipeline focused.</strong>
                        <span>Clean CRM workflows, automated sequencing, clear ICP, and proven objection scripts.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Internationally remote</strong>
                        <span>Remote role with flexible or compatible US/UK daytime working hours.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Proof behind the opportunity</strong>
                        <span>Transparent funnel with real numbers for connects, booked meetings, and qualified opportunities.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Strong handoffs, strong qualification</strong>
                        <span>Strong product and fulfilment, genuine client results I can confidently represent.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Prompt, predictable payment</strong>
                        <span>Paid weekly or biweekly, first-sale commission paid immediately once payment clears.</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Blue Button matching PDF Page 4 */}
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

            {/* Card 2: FULL-TIME SENIOR SDR / SPRINT */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                <div className="text-center pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                    FULL-TIME SENIOR SDR
                  </h3>
                  <div className="text-[11px] font-sans text-zinc-500 mt-1">
                    Guaranteed, non-recoverable base
                  </div>
                  <div className="text-3xl font-black font-display text-[#0077b6] mt-1">
                    Above $2,500
                  </div>
                  <div className="text-[10px] font-sans text-zinc-400 mt-0.5">
                    Commission paid on top. Never deducted from the base.
                  </div>
                  <div className="text-xs font-bold font-display uppercase tracking-wider text-zinc-800 mt-2 bg-zinc-100 py-1 rounded-lg">
                    10%+ uncapped commission
                  </div>
                </div>

                <div className="space-y-1 text-center">
                  <div className="text-sm font-bold font-display uppercase text-zinc-800">
                    8 hours a day · Weekends
                  </div>
                  <div className="text-xs text-zinc-500 font-sans">
                    Full-time outbound prospecting or appointment setting with the same guaranteed base and full requirements below.
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100">
                  <div className="text-xs font-display font-extrabold uppercase text-zinc-800 tracking-wider text-center mb-4">
                    MY NON-NEGOTIABLES
                  </div>

                  <div className="space-y-4 text-xs font-sans text-zinc-600">
                    
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Meaningful earning potential</strong>
                        <span>$3,000+ average ticket and 10%+ uncapped commission. Realistic $8,000–$12,000+/month OTE.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Consistent calls, room to grow</strong>
                        <span>30%+ meeting rate across attended calls. Full pipeline stamina on high-volume days.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Warm, qualified demand</strong>
                        <span>Warm, high-intent leads from paid ads, content, or outbound account enrichment.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Supported. Prospecting, qualification & booking.</strong>
                        <span>30+ day guaranteed ramp, structured onboarding, and proven SOPs in CRM.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Internationally remote</strong>
                        <span>Remote role with flexible or compatible schedule during weekend peaks.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Proof behind the opportunity</strong>
                        <span>Proven outbound process with verifiable metrics for conversations, meetings, and qualified pipeline.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Strong handoffs, strong qualification</strong>
                        <span>Strong qualification and clean AE handoffs keep pipeline quality high.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900 block font-display uppercase">Prompt, predictable payment</strong>
                        <span>Paid weekly or biweekly with no more than two weeks between payments.</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Blue Button matching PDF Page 4 */}
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

      {/* =========================================================================
          PAGE 4 BOTTOM: HIRE OR INTERVIEW ME (Bottom Banner)
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-left space-y-1">
              <span className="text-[10px] font-display uppercase tracking-widest text-zinc-400 block font-extrabold">HIRE OR</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                INTERVIEW ME
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hey%20Flynn,%20I'd%20love%20to%20interview%20you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white border border-zinc-200 hover:border-emerald-500 rounded-xl flex items-center gap-2 text-xs font-display font-bold uppercase shadow-2xs hover:bg-emerald-50"
              >
                <div className="w-5 h-5 rounded bg-[#25d366]/15 flex items-center justify-center text-[#25d366]">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>WhatsApp</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white border border-zinc-200 hover:border-indigo-500 rounded-xl flex items-center gap-2 text-xs font-display font-bold uppercase shadow-2xs hover:bg-indigo-50"
              >
                <div className="w-5 h-5 rounded bg-[#5865f2]/15 flex items-center justify-center text-[#5865f2]">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Hire%20Flynn%20as%20Senior%20SDR`}
                className="px-4 py-2.5 bg-white border border-zinc-200 hover:border-[#0077b6] rounded-xl flex items-center gap-2 text-xs font-display font-bold uppercase shadow-2xs hover:bg-sky-50"
              >
                <div className="w-5 h-5 rounded bg-[#0077b6]/15 flex items-center justify-center text-[#0077b6]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Facebook Inbound Lead Trigger (Preserved user request) */}
          <div className="mt-4 p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1877f2] flex items-center justify-center text-white shrink-0 shadow-xs">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <strong className="text-xs font-display font-bold uppercase text-zinc-900 block">
                  Please Visit & Like Our Facebook Page
                </strong>
                <span className="text-[11px] text-zinc-600 font-sans block">
                  Join our inbound sales community and send an inquiry directly on Messenger.
                </span>
              </div>
            </div>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-display font-bold uppercase rounded-lg shadow-xs shrink-0"
            >
              Visit Facebook Page →
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PAGE 5: FOOTER (Matching PDF Page 5)
         ========================================================================= */}
      <footer className="py-16 bg-[#fafaf8] text-center space-y-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* 4 Banknotes centered */}
          <div className="flex justify-center">
            <BanknoteNav onNavigate={onNavigate} size="sm" />
          </div>

          {/* Big Signature "Flynn" in the middle (Matching PDF Page 5) */}
          <div className="pt-2">
            <span className="font-script text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 select-none">
              Flynn
            </span>
          </div>

          {/* Copyright notice matching existing design exactly */}
          <p className="text-[11px] font-sans text-zinc-400 max-w-lg mx-auto">
            This website does not assert claims. Copyright owned by Flynn. This website does not accept liability of any form
          </p>

          {/* Contact Coordinates */}
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
