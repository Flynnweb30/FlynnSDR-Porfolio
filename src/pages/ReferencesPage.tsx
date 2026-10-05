import React from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import { 
  FileText, 
  Quote, 
  CheckCircle2, 
  Star, 
  Award, 
  Calendar, 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin,
  ShieldCheck,
  Building2,
  Download
} from 'lucide-react';

interface ReferencesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
  onOpenResume: () => void;
}

export default function ReferencesPage({ onNavigate, onOpenBooking, onOpenResume }: ReferencesPageProps) {
  const testimonials = [
    {
      name: 'TL Dee', role: 'Sr. Operations Sales Lead', company: 'Regen Digital US', rating: 5,
      quote: 'Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.',
      highlight: 'Level 4 Top-Tier in Under 3 Weeks', image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif',
    },
    {
      name: 'Toby Whitaker', role: 'Head of Sales', company: 'Seek Marketing Partners (UK)', rating: 5,
      quote: 'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.',
      highlight: '$1.8M+ Pipeline · 120% Quota · +18% Response', image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif',
    },
    {
      name: 'Van Ng', role: 'Account Manager', company: 'Averps Pte Ltd (Singapore)', rating: 5,
      quote: 'A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.',
      highlight: '22% Demo Conversion · $1.2M Qualified Pipeline', image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif',
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      
      {/* Header Banner - Matching existing design References Header */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <FileText className="w-3.5 h-3.5" />
              <span>Verifiable Proof & Testimonials</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              Character References & Endorsements.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              Real testimonials, leadership recommendations, and verified performance reviews from founders, VPs of Sales, and Account Executives who have worked directly with Flynn.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>View Full Battlecard & Resume</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] text-xs font-display font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#0077b6]" />
                <span>Schedule Interview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Primary Character Reference (Brendon Gocaj - Regen Digital) */}
      <section className="py-14 sm:py-16 bg-[#fafaf8] relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-24 right-[-5%] h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[8%] h-64 w-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm border-2 border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl p-5 sm:p-8 shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 items-center">
              <article className="rounded-xl border border-zinc-200 bg-[#fffefb] shadow-inner overflow-hidden text-left">
                <div className="px-5 sm:px-7 py-4 border-b border-zinc-200 bg-zinc-50/80 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold">Professional Recommendation</div>
                    <div className="text-xs text-zinc-500 font-sans mt-1">Regen Digital · Leadership Reference</div>
                  </div>
                  <div className="text-[10px] text-zinc-400 font-sans whitespace-nowrap">Character Reference</div>
                </div>
                <div className="px-5 sm:px-7 py-6 sm:py-8 space-y-5 font-sans text-sm sm:text-[15px] leading-relaxed text-zinc-700">
                  <p>Hi Flynn,</p>
                  <p>I’m happy to recommend Flynn based on the work I saw firsthand at Regen Digital. He quickly established himself as a dependable Senior SDR who could handle high-volume outbound prospecting, qualify opportunities with discipline, and stay composed through difficult objections.</p>
                  <p>Flynn reached our Level 4 tier in under three weeks and consistently brought a strong work ethic to every dial sprint. He was also willing to mentor newer SDRs, share practical objection-handling techniques, and help raise the standard across the sales floor.</p>
                  <p>What stood out most was his consistency. Flynn understood that good outbound sales is about creating qualified conversations, not simply chasing activity numbers. He brought that mindset to his calls, qualification, appointment setting, and day-to-day follow-through.</p>
                  <p>I would recommend hiring Flynn without hesitation. Any team looking for a reliable Senior SDR who can prospect, qualify, handle objections, and consistently create quality sales opportunities would benefit from having him on the team.</p>
                  <div className="pt-4 border-t border-zinc-200">
                    <div className="font-display font-black uppercase tracking-tight text-[#0d0e0c]">Brendon Gocaj</div>
                    <div className="text-xs text-[#0077b6] font-bold mt-0.5">Owner & Director · Regen Digital</div>
                  </div>
                </div>
              </article>

              <div className="relative flex justify-center lg:justify-end min-h-[190px] items-end">
                <div className="absolute right-3 bottom-5 w-[165px] h-[145px] rounded-2xl border border-sky-100 bg-sky-50/60 shadow-sm" />
                <img src="https://user29984.na.imgto.link/public/20261005/flynn-office.avif" alt="Flynn in his office" loading="lazy" className="relative z-10 w-[185px] sm:w-[215px] max-h-[245px] object-contain object-bottom drop-shadow-xl" />
                <div className="absolute z-20 bottom-2 right-0 px-3 py-2 rounded-xl bg-white/95 border border-zinc-200 shadow-md text-left">
                  <div className="text-[9px] font-display uppercase tracking-widest text-zinc-400 font-extrabold">Available for</div>
                  <div className="text-xs font-display font-black uppercase text-[#0077b6]">Hire / Interview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-zinc-200 bg-zinc-50"><img src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif" alt="Regen Digital" loading="lazy" className="w-full h-full object-cover" /></div>
              <div className="space-y-1"><div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">REGEN DIGITAL</div><div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">USA / NORWEGIAN</div><div className="text-base font-black font-display text-[#0077b6]">$200,000+</div><div className="text-[11px] font-sans text-zinc-600 leading-tight">85% Qualified<br/>120–150% Quota Attainment<br/>Level 4 Tier in 3 Weeks<br/><strong className="text-zinc-900">$960 Incentives</strong></div></div>
            </div>
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-zinc-200 bg-zinc-50"><img src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif" alt="Seek Marketing" loading="lazy" className="w-full h-full object-cover" /></div>
              <div className="space-y-1"><div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">SEEK MARKETING</div><div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">UK</div><div className="text-base font-black font-display text-[#0077b6]">$1.8M+</div><div className="text-[11px] font-sans text-zinc-600 leading-tight">120% Quota Attainment<br/>150+ Daily Outbound Dials<br/>+18% Response Rate<br/><strong className="text-zinc-900">Qualified Pipeline</strong></div></div>
            </div>
            <div className="bg-white border border-[#dededb] rounded-xl p-5 shadow-xs flex items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-zinc-200 bg-zinc-50"><img src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif" alt="Averps Pte Ltd" loading="lazy" className="w-full h-full object-cover" /></div>
              <div className="space-y-1"><div className="text-sm font-extrabold uppercase font-display text-[#0d0e0c]">AVERPS PTE LTD</div><div className="text-[10px] font-display uppercase tracking-wider text-zinc-500 font-extrabold">SINGAPORE</div><div className="text-base font-black font-display text-[#0077b6]">$1.2M+</div><div className="text-[11px] font-sans text-zinc-600 leading-tight">100% SQL Target<br/>22% Demo Conversion<br/>BANT Qualification<br/><strong className="text-zinc-900">Qualified Pipeline</strong></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Executive & Sales Leader Testimonials */}
      <section className="py-14 sm:py-16 bg-[#f7f7f6] border-y border-[#dededb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              What Peers & Leaders Say
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-sans">
              Direct feedback from sales leaders and operators who worked directly with Flynn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl space-y-4 flex flex-col justify-between transition-all shadow-xs text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 shrink-0 bg-zinc-100">
                      <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-display uppercase font-bold rounded">
                      Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic font-sans">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-1">
                  <div className="text-xs font-bold text-[#0077b6] font-display uppercase tracking-wider">
                    {item.highlight}
                  </div>
                  <div className="text-sm font-black text-[#0d0e0c] font-display uppercase tracking-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-sans text-zinc-400">
                    {item.role} · {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Verification & Contact Action */}
      <section className="py-14 sm:py-16 bg-[#fafaf8]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="p-8 bg-white border border-[#dededb] rounded-2xl space-y-6 shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-[#0d0e0c]">
              Request Direct Reference Verification
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto font-sans">
              Need to speak directly with Flynn's previous directors or verify metrics from his 11+ years in B2B telemarketing? Contact Flynn to connect with references.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Reference%20Check%20for%20Flynn%20James`}
                className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs font-display"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Email Flynn for Reference Contacts</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs font-display"
              >
                <Calendar className="w-4 h-4 text-[#0077b6]" />
                <span>Schedule 15-Min Intro</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
