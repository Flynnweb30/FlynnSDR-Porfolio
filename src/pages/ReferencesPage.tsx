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

      {/* Featured Primary Character Reference — realistic recommendation letter */}
      <section className="py-14 sm:py-16 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#dededb] bg-white shadow-xs">
            <div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_15%_10%,rgba(125,211,252,.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(226,232,240,.42),transparent_32%),linear-gradient(180deg,rgba(240,249,255,.28),transparent_55%)]" />
            <div className="relative z-10 p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-[#0077b6]/30 rounded-full text-xs font-display text-[#0077b6] font-extrabold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Featured Leadership Recommendation</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Professional Reference</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_190px] gap-8 lg:gap-10 items-center">
                <article className="relative bg-white/95 border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-sm text-left">
                  <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-5 mb-6">
                    <div>
                      <div className="text-[10px] font-display uppercase tracking-[0.18em] text-[#0077b6] font-extrabold">Professional Recommendation</div>
                      <div className="text-lg sm:text-xl font-black font-display uppercase tracking-tight text-[#0d0e0c] mt-1">Regen Digital</div>
                    </div>
                    <Mail className="w-5 h-5 text-zinc-300 shrink-0" />
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
                    <p>Hi Flynn,</p>
                    <p>I wanted to put this in writing because your work with our outbound team deserves to be recognized. You came into a demanding B2B cold-calling environment, learned the campaign quickly, and built a reputation for being consistent, coachable, and highly disciplined on the phone.</p>
                    <p>You reached our Level 4 tier in under three weeks while maintaining strong qualification standards. You were also willing to share what was working with newer SDRs, particularly around objection handling, prospect qualification, call structure, and keeping momentum through a high-volume day.</p>
                    <p>What stood out most was your reliability. You understood that a good SDR is not measured by activity alone, but by the quality of conversations, qualified opportunities, accurate handoffs, and the consistency behind the numbers. Your contribution to the team was clear, both in your individual performance and in the way you helped raise the standard around you.</p>
                    <p>Based on the time I worked with you, I would be confident putting you in front of a serious outbound campaign where prospecting discipline, qualification, objection handling, and appointment setting matter. <strong className="text-[#0d0e0c]">I would recommend hiring Flynn without hesitation.</strong></p>
                    <p>Best,<br /><strong className="text-[#0d0e0c]">Brendon</strong></p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-100">
                    <div className="text-sm font-black text-[#0d0e0c] font-display uppercase tracking-tight">Brendon Gocaj</div>
                    <div className="text-xs text-[#0077b6] font-bold">Owner & Director · Regen Digital</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">USA / Norwegian market operations</div>
                  </div>
                </article>

                <div className="relative flex justify-center lg:self-end lg:-mb-5">
                  <div className="absolute bottom-0 w-36 h-8 rounded-full bg-sky-900/10 blur-md" />
                  <img
                    src="https://user29984.na.imgto.link/public/20261005/flynn-office.avif"
                    alt="Flynn in his office"
                    loading="lazy"
                    className="relative w-40 sm:w-48 lg:w-52 max-h-72 object-contain object-bottom drop-shadow-[0_16px_24px_rgba(0,0,0,0.16)]"
                  />
                </div>
              </div>

              {/* Reference / performance data */}
              <div className="mt-8 border-t border-zinc-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr_1fr] gap-4 items-stretch">
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 text-left">
                    <img src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif" alt="Regen Digital" loading="lazy" className="h-9 w-auto max-w-[170px] object-contain object-left mb-3" />
                    <div className="text-[10px] font-display uppercase tracking-widest text-zinc-500 font-extrabold">REGEN DIGITAL</div>
                    <div className="text-[10px] font-sans text-zinc-400 mt-1">USA / NORWEGIAN</div>
                    <div className="text-3xl font-black font-display text-[#0077b6] mt-3">$200,000+</div>
                    <div className="text-[10px] font-sans text-zinc-400">Pipeline / performance value</div>
                  </div>
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 grid grid-cols-2 gap-4">
                    <div><div className="text-xl font-black font-display text-[#0d0e0c]">85%</div><div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Qualified</div></div>
                    <div><div className="text-xl font-black font-display text-[#0d0e0c]">120–150%</div><div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Quota Attainment</div></div>
                    <div><div className="text-xl font-black font-display text-[#0d0e0c]">Level 4</div><div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Tier in 3 Weeks</div></div>
                    <div><div className="text-xl font-black font-display text-[#0d0e0c]">$960</div><div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Incentives</div></div>
                  </div>
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 flex items-center justify-center">
                    <img src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif" alt="Seek Marketing Partners" loading="lazy" className="max-h-12 max-w-[180px] object-contain" />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-[10px] font-display uppercase tracking-wider text-zinc-400">
                  <span className="inline-flex items-center gap-2"><img src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif" alt="Averps Pte Ltd" loading="lazy" className="h-7 w-auto max-w-[130px] object-contain" /> Singapore</span>
                  <span>Verified professional references & performance data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Executive & Sales Leader Testimonials */}
      <section className="py-14 sm:py-16 bg-[#f7f7f6] border-y border-[#dededb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
              What Sales Leaders Say
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
