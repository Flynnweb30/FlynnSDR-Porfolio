import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { personalInfo, callRecordings } from '../data/flynnData';
import DiscordButton from '../components/DiscordButton';
import IntroVideoPlayer from '../components/IntroVideoPlayer';
import PodcastVisualizer from '../components/PodcastVisualizer';
import Footer from '../components/Footer';
import {
  Calendar,
  Check,
  Mail,
  Phone,
  Linkedin,
  Play,
  MessageCircle,
  Volume2,
  Award,
  ArrowRight,
  Sparkles,
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
    'call-5':
      import.meta.env.VITE_AUDIO_CALL_5_URL ||
      '/media/call-5-reschedule-cig-builders.mp3',
    'call-6':
      import.meta.env.VITE_AUDIO_CALL_6_URL ||
      '/media/call-6-reconfirmation-mark.mp3',
    'call-7':
      import.meta.env.VITE_AUDIO_CALL_7_URL ||
      '/media/call-7-reminder-chris.mp3',
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
      {/* =========================================================================
          HERO SECTION: Fixed Navbar Clearance (pt-24 sm:pt-28), No Duplicate Old Nav,
          Diagonal Upper-Left Experience Badge, and Lower-Right "Work With Me" CTA
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#78baff] via-[#b5d7ff] to-[#fafaf8] pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dededb]">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.7), transparent 70%), url('/assets/flynn-sky.jpg')",
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column: Client-Focused Messaging & Title (Span 5) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              {/* Strategic Badges Row */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-wider text-[#0077b6] font-extrabold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse" />
                  <span>B2B Sales Specialist</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-wider text-zinc-700 font-bold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>Pipeline Specialist</span>
                </span>
              </div>

              {/* Bold Headline */}
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

              {/* Client-Centric Conversion Copy */}
              <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed">
                Filling Account Executive calendars with high-intent discovery calls. Flynn delivers reliable outbound phone stamina (150+ dials/day), rigorous BANT qualification, and zero ramp time—sourcing over <strong className="text-zinc-950 font-bold">$1.8M in pipeline</strong> with consistent <strong className="text-zinc-950 font-bold">120–150% quota attainment</strong>.
              </p>

              {/* Verified Metrics Row 1 */}
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
                    EXPERIENCE
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

              {/* Verified Metrics Row 2 */}
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

              {/* Channels Row */}
              <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-xs font-display">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-zinc-600">Find me</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                    title="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#0077b6] transition-colors"
                    title="Phone"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <DiscordButton />
                </div>
              </div>
            </div>

            {/* Center Column: Profile Image with Diagonal Badge at Upper-Left & Button at Lower-Right (Span 4) */}
            <div className="lg:col-span-4 flex justify-center items-end relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px]">
              {/* Soft ambient backdrop lighting glow */}
              <div className="absolute inset-x-2 bottom-6 h-80 bg-gradient-to-t from-sky-400/30 via-white/20 to-transparent blur-3xl rounded-full pointer-events-none" />

              {/* DIAGONAL BADGE: "11+ Years of Experience" Positioned diagonally at upper-left corner */}
              <div className="absolute top-2 sm:top-4 -left-2 sm:-left-4 lg:-left-8 z-20 transform -rotate-6 sm:-rotate-12 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                <div className="px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#dededb] rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-display uppercase tracking-wider font-extrabold text-[#0d0e0c] leading-tight">
                      11+ Years of Experience
                    </div>
                    <div className="text-[9px] font-sans text-zinc-500 font-medium">
                      45,000+ Outbound Calls
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Enlarged Profile Portrait */}
              <div className="relative w-84 sm:w-[420px] md:w-[460px] lg:w-[490px] max-w-full z-10 flex justify-center items-end">
                <img
                  src={personalInfo.heroImage}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = personalInfo.heroImageFallback;
                  }}
                  alt="Flynn James - Senior SDR & B2B Pipeline Specialist"
                  className="w-full h-auto max-h-[620px] object-contain object-bottom drop-shadow-[0_24px_45px_rgba(0,119,182,0.28)] select-none pointer-events-none [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)] transition-all duration-300"
                />
              </div>

              {/* LOWER-RIGHT BADGE: "Work With Me" Button */}
              <div className="absolute bottom-6 -right-2 sm:-right-4 lg:-right-6 z-20 animate-fade-in pointer-events-auto">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white rounded-2xl shadow-xl shadow-[#0077b6]/30 border border-white/30 flex items-center gap-2.5 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-display uppercase tracking-wider font-extrabold text-white leading-tight flex items-center gap-1">
                      <span>Work With Me</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[9px] font-sans text-sky-100 font-medium">
                      Schedule Discovery Intro
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Hire Or Interview Me Deck (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <h2 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight text-left">
                    HIRE OR
                    <br />
                    INTERVIEW ME
                  </h2>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-display uppercase font-bold rounded-md border border-emerald-200">
                    Immediate
                  </span>
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
                      during US/UK daytime full time
                    </span>
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
                <img
                  src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif"
                  alt="Regen Digital"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1 text-left">
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

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img
                  src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif"
                  alt="Seek Marketing"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1 text-left">
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

            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4">
              <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100">
                <img
                  src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif"
                  alt="Averps Pte Ltd"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1 text-left">
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

      {/* PROOF I CAN QUALIFY & BOOK (LANDSCAPE PODCAST VISUALIZERS - NO TRANSCRIPTS) */}
      <section id="proof" className="py-14 sm:py-18 bg-[#f7f7f6] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              PROOF I CAN QUALIFY & BOOK
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Authentic outbound audio recordings showing live objection handling, AI gatekeeper navigation, and locked discovery meetings.
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

      {/* LEADERSHIP SPRINT VIDEO SECTION WITH EXCLUSIVE PLAYBACK CONTROL */}
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

      {/* PROFESSIONAL RECOMMENDATION SECTION: PLACED BESIDE FLYNN IN OFFICE PHOTO */}
      <section id="testimonials" className="py-14 sm:py-18 bg-[#fafaf8] border-b border-[#dededb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-[#0077b6]/30 rounded-full text-xs font-display text-[#0077b6] font-extrabold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Professional Recommendation</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              EXECUTIVE ENDORSEMENT & PROOF
            </h2>
          </div>

          <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <blockquote className="text-lg sm:text-xl font-bold font-display text-[#0d0e0c] leading-snug">
                  &ldquo;When Flynn joined our outbound campaign at Regen Digital, he ramped to our top Level 4 tier in under 3 weeks. Sourced over $1.8M in career pipeline with 120–150% quota performance, 150+ daily dials, and 30+ qualified discovery meetings per month.&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                  Flynn demonstrated exceptional phone stamina, proactive objection handling, and strict BANT qualification standards. His contribution directly accelerated our Account Executive calendar density.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                  <div>
                    <div className="text-sm font-black text-[#0d0e0c] font-display uppercase tracking-tight">
                      Brendon Gocaj
                    </div>
                    <div className="text-xs text-[#0077b6] font-bold">
                      Owner & Director · Regen Digital
                    </div>
                  </div>

                  <img
                    src={personalInfo.brendonSignature}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/assets/brendon-signature.svg';
                    }}
                    alt="Brendon Gocaj Handwritten Signature"
                    className="h-10 sm:h-12 w-auto max-w-[170px] object-contain mix-blend-multiply filter contrast-125 select-none"
                    draggable={false}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('references')}
                    className="px-4 py-2 bg-[#fafaf8] hover:bg-zinc-100 border border-zinc-300 text-xs font-display font-extrabold uppercase tracking-wider text-zinc-800 rounded-xl cursor-pointer transition-colors shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <span>Read full recommendation letter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100 max-w-sm w-full">
                  <img
                    src={personalInfo.recommendationImage}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = personalInfo.heroImage;
                    }}
                    alt="Flynn James in the sales office"
                    className="w-full h-auto object-cover object-center max-h-80"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs p-2 rounded-lg text-left text-white text-[11px] font-sans flex items-center justify-between border border-white/10">
                    <span className="font-bold font-display uppercase tracking-wider text-[#00a8e8]">
                      Regen Digital Sales Floor
                    </span>
                    <span className="text-zinc-300 text-[10px]">Level 4 SDR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: 'TL Dee',
                role: 'Sr. Operations Sales Lead',
                company: 'Regen Digital US',
                image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif',
                quote:
                  'Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.',
              },
              {
                name: 'Toby Whitaker',
                role: 'Head of Sales',
                company: 'Seek Marketing Partners (UK)',
                image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif',
                quote:
                  'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.',
              },
              {
                name: 'Van Ng',
                role: 'Account Manager',
                company: 'Averps Pte Ltd (Singapore)',
                image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif',
                quote:
                  'A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs space-y-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                    <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold font-display uppercase text-zinc-900 truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] font-sans text-zinc-400">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
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

      {/* Universal Polished Footer Component */}
      <Footer
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
        onOpenResume={onOpenResume}
      />
    </div>
  );
}