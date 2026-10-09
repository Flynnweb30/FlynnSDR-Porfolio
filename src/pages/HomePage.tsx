import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { personalInfo, callRecordings } from '../data/flynnData';
import BanknoteNav from '../components/BanknoteNav';
import DiscordButton from '../components/DiscordButton';
import IntroVideoPlayer from '../components/IntroVideoPlayer';
import PodcastVisualizer from '../components/PodcastVisualizer';
import {
  Calendar,
  Check,
  Mail,
  Phone,
  Linkedin,
  Play,
  MessageCircle,
  Volume2,
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  Flame,
  TrendingUp,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
  onOpenResume: () => void;
}

export default function HomePage({ onNavigate, onOpenBooking, onOpenResume }: HomePageProps) {
  const [activeCallId, setActiveCallId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const audioSources: Record<string, string> = {
    'call-1':
      import.meta.env.VITE_AUDIO_CALL_1_URL ||
      '/media/my_intro_media_1791404813632_39huk.mp3',
    'call-2':
      import.meta.env.VITE_AUDIO_CALL_2_URL ||
      'https://www.image2url.com/r2/default/audio/1791215970548-fa25088c-671a-4e9a-9297-fa8392d25b0a.opus',
    'call-3':
      import.meta.env.VITE_AUDIO_CALL_3_URL ||
      'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
    'call-4':
      import.meta.env.VITE_AUDIO_CALL_4_URL ||
      'https://www.image2url.com/r2/default/audio/1791215822662-8c113027-efd5-422b-8508-deb2539de57e.opus',
  };

  const stopAllAudio = () => {
    Object.keys(audioRefs.current).forEach((id) => {
      audioRefs.current[id]?.pause();
    });
    setActiveCallId(null);
    setIsPlaying(false);
  };

  const handleTogglePlay = (callId: string) => {
    const audio = audioRefs.current[callId];
    if (!audio) return;

    if (isVideoPlaying) {
      setIsVideoPlaying(false);
    }

    if (activeCallId === callId && isPlaying) {
      audio.pause();
      setActiveCallId(null);
      setIsPlaying(false);
      return;
    }

    Object.keys(audioRefs.current).forEach((id) => {
      if (id !== callId) {
        audioRefs.current[id]?.pause();
      }
    });

    setActiveCallId(callId);
    audio.play().catch(() => {
      setIsPlaying(false);
      setActiveCallId(null);
    });
  };

  useEffect(() => {
    const handleGlobalMedia = (e: Event) => {
      const custom = e as CustomEvent;
      if (custom.detail?.type === 'audio') {
        setIsVideoPlaying(false);
      }
    };
    window.addEventListener('flynn:mediaPlay', handleGlobalMedia);
    return () => window.removeEventListener('flynn:mediaPlay', handleGlobalMedia);
  }, []);

  const spotlights = [
    {
      callId: 'call-1',
      recording: callRecordings[0],
      spotlightNum: '01',
      headline: 'AI SCREENER DISARMED & QUALIFIED',
      callResult: callRecordings[0].duration,
      apptResult: 'Monday 12:00 PM',
      summary:
        'Navigated an automated AI call screening assistant, disarmed prospect resistance upfront ("Normally I would say no, but you got me interested, so good job"), uncovered SEO priorities, captured verified decision-maker contact, and booked a Monday 12:00 PM discovery appointment.',
    },
    {
      callId: 'call-3',
      recording: callRecordings[2],
      spotlightNum: '02',
      headline: 'COMMERCIAL CONTRACTOR DISCOVERY',
      callResult: callRecordings[2].duration,
      apptResult: 'Monday 4:45 PM',
      summary:
        'Used a low-friction value opener with a busy commercial contractor on the jobsite, probed full project scope (ground-up construction to remodeling), captured verified direct contact, and scheduled a Monday 4:45 PM consultation.',
    },
    {
      callId: 'call-4',
      recording: callRecordings[3],
      spotlightNum: '03',
      headline: 'HANDLING SKEPTICAL OBJECTIONS',
      callResult: callRecordings[3].duration,
      apptResult: 'Thursday 11:00 AM Zoom',
      summary:
        'Handled an initially suspicious prospect with calm transparency, validated his concerns, clarified his primary growth goal, and locked down a confirmed Thursday 11:00 AM Zoom demo.',
    },
  ];

  return (
    <div className="w-full bg-[#fafaf8] text-[#0d0e0c] font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#78baff] via-[#b5d7ff] to-[#fafaf8] pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dededb]">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.7), transparent 70%), url('/assets/flynn-sky.jpg')",
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 sm:pb-10">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <span className="font-script text-6xl sm:text-7xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 hover:scale-105 transition-transform">
                Flynn
              </span>
            </div>
            <BanknoteNav onNavigate={onNavigate} size="md" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            {/* Left Column: Client-Focused Value Prop & Metrics (Span 5) */}
            <div className="lg:col-span-5 space-y-4 text-left pb-2">
              {/* Strategic Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 border border-sky-300/80 rounded-full text-[11px] font-display uppercase tracking-wider text-[#0077b6] font-extrabold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0077b6]" />
                  <span>B2B Sales Specialist</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 border border-amber-300/80 rounded-full text-[11px] font-display uppercase tracking-wider text-zinc-800 font-extrabold shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>11+ Years of Experience</span>
                </span>
              </div>

              {/* High-Impact Headline */}
              <div className="space-y-0 leading-none">
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black uppercase font-display tracking-tight text-[#0d0e0c] block">
                  HEAVY WEIGHT
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black uppercase font-display tracking-tight text-[#0d0e0c] block">
                  SENIOR SDR
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black uppercase font-display tracking-tight text-[#0077b6] block">
                  PIPELINE SPECIALIST.
                </h1>
              </div>

              {/* Conversion-Focused Copy Balancing Skill & Client Outcomes */}
              <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed max-w-lg">
                Turning cold outbound into predictable pipeline. Flynn executes 150+ dials daily with disciplined BANT qualification, booking 30+ qualified discovery meetings per month so your Account Executives can focus exclusively on closing.
              </p>

              {/* Metric Row 1: Pipeline, Experience, Calls */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">💵</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    $1.8M+
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    PIPELINE
                    <br />
                    SOURCED
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">⏳</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    11+ YEARS
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    OUTBOUND
                    <br />
                    STAMINA
                  </div>
                </div>

                <div className="p-2.5 bg-white/95 backdrop-blur-xs border border-zinc-200/80 rounded-xl shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-lg mb-0.5">📞</div>
                  <div className="text-lg font-black font-display text-[#0d0e0c] leading-tight">
                    45,000+
                  </div>
                  <div className="text-[9px] font-display font-extrabold uppercase text-zinc-500 leading-tight">
                    SALES CALLS
                    <br />
                    COMPLETED
                  </div>
                </div>
              </div>

              {/* Metric Row 2: Quota & Daily Dials */}
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

              {/* Coverage & Availability Row */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="px-3 py-2 bg-white/90 border border-zinc-200/80 rounded-xl flex items-center gap-2 shadow-2xs">
                  <span className="text-base">🇵🇭</span>
                  <div>
                    <div className="text-[9px] font-display font-extrabold text-zinc-500 uppercase tracking-wider">
                      Role
                    </div>
                    <div className="text-xs font-bold text-[#0d0e0c] font-display uppercase">
                      Senior SDR & Pod Lead
                    </div>
                  </div>
                </div>

                <div className="px-3 py-2 bg-white/90 border border-zinc-200/80 rounded-xl flex items-center gap-2 shadow-2xs">
                  <span className="text-base">🌐</span>
                  <div>
                    <div className="text-[9px] font-display font-extrabold text-zinc-500 uppercase tracking-wider">
                      Coverage
                    </div>
                    <div className="text-xs font-bold text-[#0d0e0c] font-display uppercase">
                      US · UK · AU · SG Markets
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-xs font-display">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-zinc-600">Find me</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <DiscordButton />
                </div>
              </div>
            </div>

            {/* Center Column: Significantly Enlarged Profile with Natural Hero Blend & Floating Badges (Span 4) */}
            <div className="lg:col-span-4 flex justify-center items-end relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
              {/* Soft Ambient Hero Glow */}
              <div
                className="absolute inset-x-4 bottom-0 top-12 bg-gradient-to-t from-sky-400/20 via-sky-200/25 to-transparent blur-3xl rounded-full pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] xl:max-w-[460px] flex justify-center items-end">
                {/* Main Portrait with Soft Bottom Fade for Natural Hero Blending */}
                <img
                  src={personalInfo.heroImage}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = personalInfo.heroImageFallback;
                  }}
                  alt="Flynn James - Senior SDR & Outbound Specialist"
                  className="w-full h-auto max-h-[580px] sm:max-h-[640px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,119,182,0.22)] select-none pointer-events-none [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)] transition-transform duration-500"
                />

                {/* Floating Action Badge: "Work With Me" */}
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="absolute bottom-12 right-0 sm:-right-3 z-20 bg-[#0077b6] hover:bg-[#0284c7] text-white px-3.5 py-1.5 rounded-full shadow-lg border border-white/30 flex items-center gap-1.5 text-[11px] font-display font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  title="Schedule intro with Flynn"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Work With Me</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                {/* Floating Credential Badge: 11+ Years of Experience */}
                <div className="absolute bottom-4 left-0 sm:-left-3 z-20 bg-white/95 backdrop-blur-md border border-[#dededb] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 text-[10px] font-display font-extrabold uppercase text-[#0d0e0c]">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>11+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: HIRE OR INTERVIEW ME Card (Span 3) */}
            <div className="lg:col-span-3 space-y-4 pb-2">
              <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-lg space-y-4">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-display font-extrabold uppercase tracking-wider text-[#0077b6] block">
                    Immediate Availability
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
                    HIRE OR
                    <br />
                    INTERVIEW ME
                  </h2>
                </div>

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
                    <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors font-bold">
                      →
                    </span>
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
                    <span className="text-zinc-400 group-hover:text-indigo-600 transition-colors font-bold">
                      →
                    </span>
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
                    <span className="text-zinc-400 group-hover:text-[#0077b6] transition-colors font-bold">
                      →
                    </span>
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
                    <span className="text-zinc-500 text-[10px] block font-sans">
                      US / UK / APAC daytime remote
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-black uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Schedule 15-Min Intro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD SECTION */}
      <section className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Documented Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-[#0d0e0c] tracking-tight">
              A Track Record Built for Results.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Consistent quota over-achievement and verified pipeline generated across campaigns in North America, Europe, and Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img
                  src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif"
                  alt="Regen Digital"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  REGEN DIGITAL
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">
                  USA / NORWEGIAN
                </div>
                <div className="text-base font-black font-display text-[#0077b6]">$200,000+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  85% Qualified Opportunities
                  <br />
                  120–150% Quota Attainment
                  <br />
                  Level 4 Tier in 3 Weeks
                  <br />
                  <strong className="text-zinc-900">$960 Incentives</strong>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img
                  src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif"
                  alt="Seek Marketing"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  SEEK MARKETING / IHTE
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">
                  USA / CANADIAN / UK
                </div>
                <div className="text-base font-black font-display text-[#0077b6]">$1.8M+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  150+ Daily Outbound Dials
                  <br />
                  120% Quota Attainment
                  <br />
                  +18% Response Rate
                  <br />
                  <strong className="text-zinc-900">Qualified Pipeline</strong>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img
                  src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif"
                  alt="Averps Pte Ltd"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">
                  AVERPS / FOUND INC.
                </div>
                <div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">
                  UK / SINGAPORE
                </div>
                <div className="text-base font-black font-display text-[#0077b6]">$1.2M+</div>
                <div className="text-[11px] font-sans text-zinc-600 leading-tight">
                  100% SQL Target Met
                  <br />
                  22% Demo Conversion
                  <br />
                  +15% Qualification Lift
                  <br />
                  <strong className="text-zinc-900">Qualified Pipeline</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF I CAN QUALIFY & BOOK (LANDSCAPE PODCAST VISUALIZERS) */}
      <section id="proof" className="py-14 sm:py-18 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-1.5">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Live Dial Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-[#0d0e0c] tracking-tight">
              Proof I Can Qualify & Book
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Listen to real, unscripted outbound calls navigating gatekeepers, disarming skepticism, and locking in confirmed appointments.
            </p>
          </div>

          <div className="space-y-8">
            {spotlights.map((item) => {
              const isItemPlaying = activeCallId === item.callId && isPlaying;
              return (
                <div
                  key={item.callId}
                  className="bg-white border border-[#dededb] rounded-2xl p-5 sm:p-7 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8"
                >
                  {/* Left Column: Landscape Podcast Visualizer with Green Reactive Waveform */}
                  <div className="w-full md:w-1/2">
                    <PodcastVisualizer
                      duration={item.recording.duration}
                      company={item.recording.company}
                      headline={item.headline}
                      isPlaying={isItemPlaying}
                      onTogglePlay={() => handleTogglePlay(item.callId)}
                      audioRefCallback={(el) => {
                        audioRefs.current[item.callId] = el;
                      }}
                      audioSrc={audioSources[item.callId]}
                      onPlay={() => {
                        setActiveCallId(item.callId);
                        setIsPlaying(true);
                      }}
                      onPause={() => {
                        if (activeCallId === item.callId) {
                          setIsPlaying(false);
                          setActiveCallId(null);
                        }
                      }}
                      onEnded={() => {
                        setIsPlaying(false);
                        setActiveCallId(null);
                      }}
                    />
                  </div>

                  {/* Right Column: Dynamic Metadata Card */}
                  <div className="w-full md:w-1/2 space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display uppercase text-zinc-500 font-extrabold tracking-wider">
                        {item.spotlightNum} Skill spotlight
                      </span>
                      <span className="text-[10px] font-display uppercase font-bold text-[#0077b6] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {item.recording.company}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                      {item.headline}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 py-1 text-xs">
                      <div>
                        <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">
                          Call result
                        </span>
                        <strong className="text-2xl font-black font-display text-[#0077b6]">
                          {item.callResult}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 block font-bold">
                          Appointment result
                        </span>
                        <strong className="text-sm font-bold text-zinc-900 font-display uppercase block mt-1">
                          {item.apptResult}
                        </strong>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2 flex items-center gap-3">
                      {!isItemPlaying ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTogglePlay(item.callId);
                          }}
                          className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white text-xs font-display font-extrabold uppercase rounded-xl cursor-pointer shadow-xs transition-all flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          <span>Play Full Audio</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-display font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          <span>Playing Outbound Recording</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Live Reactive Stream</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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

            <IntroVideoPlayer
              isPlaying={isVideoPlaying}
              onPlayStarted={() => {
                stopAllAudio();
                setIsVideoPlaying(true);
              }}
              onPlayStopped={() => {
                setIsVideoPlaying(false);
              }}
            />

            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Flynn combines 11+ years of relentless cold calling stamina with consultative discovery, coaching newer reps on the sales floor, and converting outbound friction into high-intent discovery calls.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL RECOMMENDATION & TESTIMONIALS */}
      <section id="testimonials" className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-1.5">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Verifiable Leadership Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-[#0d0e0c] tracking-tight">
              Executive Endorsements & References
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Feedback from the directors, sales leaders, and account executives who have managed Flynn’s outbound production.
            </p>
          </div>

          <div className="space-y-8">
            {/* Featured Primary Recommendation Card with Office Media Placed Beside */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Recommendation Quote & Signature (Span 7) */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-sky-50 border border-sky-200 rounded-full text-[10px] font-display uppercase font-bold text-[#0077b6]">
                      <Award className="w-3 h-3" />
                      <span>Featured Leadership Reference</span>
                    </span>
                    <span className="text-zinc-400 text-xs">·</span>
                    <span className="text-xs font-display uppercase font-bold text-zinc-500">
                      Regen Digital
                    </span>
                  </div>

                  <blockquote className="text-lg sm:text-xl font-bold font-display text-[#0d0e0c] leading-snug">
                    &ldquo;When Flynn joined our outbound campaign at Regen Digital, he ramped to our top Level 4 tier in under 3 weeks. Sourced over $1.8M in career pipeline with 120–150% quota performance, 150+ daily dials, and 30+ qualified discovery meetings per month.&rdquo;
                  </blockquote>

                  {/* Outcome Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-sans">
                    <span className="px-2.5 py-1 bg-[#f7f7f6] border border-[#dededb] rounded-lg text-emerald-700 font-bold">
                      ✓ 85% BANT Qualified
                    </span>
                    <span className="px-2.5 py-1 bg-[#f7f7f6] border border-[#dededb] rounded-lg text-[#0077b6] font-bold">
                      ✓ 120–150% Quota Attainment
                    </span>
                    <span className="px-2.5 py-1 bg-[#f7f7f6] border border-[#dededb] rounded-lg text-zinc-700 font-bold">
                      ✓ Level 4 Tier in 3 Weeks
                    </span>
                  </div>

                  {/* Signature & Author Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                    <div>
                      <div className="text-sm font-black font-display uppercase tracking-tight text-zinc-950">
                        Brendon Gocaj
                      </div>
                      <div className="text-xs text-[#0077b6] font-bold">
                        Owner & Director · Regen Digital
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        USA & European Outbound Sales Operations
                      </div>
                    </div>

                    <img
                      src={personalInfo.brendonSignature}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/assets/brendon-signature.svg';
                      }}
                      alt="Brendon Gocaj Signature"
                      className="h-10 sm:h-12 w-auto max-w-[150px] object-contain object-left mix-blend-multiply filter contrast-125 select-none"
                      draggable={false}
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigate('references')}
                      className="px-4 py-2 bg-[#fafaf8] hover:bg-zinc-100 border border-zinc-300 text-xs font-display font-extrabold uppercase tracking-wider text-zinc-800 rounded-xl cursor-pointer transition-colors shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Read full letter & verify metrics</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Office Photo Beside Professional Recommendation (Span 5) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] rounded-2xl overflow-hidden border border-[#dededb] shadow-sm bg-zinc-100 group">
                    <img
                      src={personalInfo.recommendationImage}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/assets/flynn-in-office-2.avif';
                      }}
                      alt="Flynn in the office managing outbound pipeline"
                      className="w-full h-auto aspect-[4/3] sm:aspect-[16/11] object-cover object-center filter saturate-[1.05] transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 text-left text-white text-xs">
                      <div className="font-display font-bold uppercase tracking-wide text-xs">
                        Flynn on the Outbound Sales Floor
                      </div>
                      <div className="text-[11px] text-zinc-300">
                        Regen Digital · Junior Sales Team Lead & Level 4 Rep
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Cards from Other Sales Leaders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'TL Dee', role: 'Sr. Operations Sales Lead', company: 'Regen Digital US', image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif', quote: 'Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.' },
                { name: 'Toby Whitaker', role: 'Head of Sales', company: 'Seek Marketing Partners (UK)', image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif', quote: 'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.' },
                { name: 'Van Ng', role: 'Account Manager', company: 'Averps Pte Ltd (Singapore)', image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif', quote: 'A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.' },
              ].map((item) => (
                <div key={item.name} className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold font-display uppercase text-zinc-900 truncate">{item.name}</div>
                        <div className="text-[10px] font-sans text-zinc-400">{item.role} · {item.company}</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed italic">&ldquo;{item.quote}&rdquo;</p>
                  </div>
                  <div className="pt-2 border-t border-zinc-100 flex items-center gap-1.5 text-[10px] font-display font-bold uppercase text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Recommendation</span>
                  </div>
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
            Flexible remote collaboration tailored to your growth stage
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