import React, { useState } from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import {
  FileText,
  CheckCircle2,
  Star,
  Award,
  Calendar,
  Mail,
  Download,
} from 'lucide-react';

interface ReferencesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
  onOpenResume: () => void;
}

export default function ReferencesPage({ onNavigate, onOpenBooking, onOpenResume }: ReferencesPageProps) {
  const [sigSrc, setSigSrc] = useState(personalInfo.brendonSignature);
  const [flynnImgSrc, setFlynnImgSrc] = useState(
    'https://audiolink-oskn.onrender.com/media/flynn_in_office__1__media_1791399641280_i2l2j.png'
  );

  const testimonials = [
    {
      name: 'TL Dee',
      role: 'Sr. Operations Sales Lead',
      company: 'Regen Digital US',
      rating: 5,
      quote:
        'Flynn ramped to our Level 4 performance tier in under 3 weeks. His cold dial stamina, objection handling discipline, and ability to mentor junior SDRs made him an essential contributor to our outbound sales floor.',
      highlight: 'Level 4 Top Tier in 3 Weeks',
      image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif',
    },
    {
      name: 'Toby Whitaker',
      role: 'Head of Sales',
      company: 'Seek Marketing Partners (UK)',
      rating: 5,
      quote:
        'Flynn delivered over $1.8M in pipeline opportunities while exceeding his outbound quota by 120%. His customized objection-handling scripts and targeted multi-channel cadences lifted prospect reply rates by 18%.',
      highlight: '$1.8M+ Pipeline · 120% Quota · +18% Response',
      image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif',
    },
    {
      name: 'Van Ng',
      role: 'Account Manager',
      company: 'Averps Pte Ltd (Singapore)',
      rating: 5,
      quote:
        'A top-performing SDR who pairs relentless outbound execution with precision BANT qualification. Flynn drove a 22% demo conversion rate and passed $1.2M in qualified pipeline directly to Account Executives.',
      highlight: '22% Demo Conversion · $1.2M Qualified Pipeline',
      image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif',
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
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
              Real testimonials, leadership recommendations, and verified outbound metrics from founders, Directors of Sales, and Account Executives who have worked directly with Flynn.
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
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] text-xs font-display font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#0077b6]" />
                <span>Schedule Interview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Primary Character Reference */}
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
                  <span>Verified Executive Reference</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px] gap-8 lg:gap-10 items-center">
                <article className="relative bg-white/95 border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-sm text-left">
                  <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-5 mb-6">
                    <div>
                      <div className="text-[10px] font-display uppercase tracking-[0.18em] text-[#0077b6] font-extrabold">
                        Professional Recommendation
                      </div>
                      <div className="text-lg sm:text-xl font-black font-display uppercase tracking-tight text-[#0d0e0c] mt-1">
                        Regen Digital
                      </div>
                    </div>
                    <Mail className="w-5 h-5 text-zinc-300 shrink-0" />
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                    <p>Hi Flynn,</p>
                    <p>
                      I’m glad to write this recommendation for you. When you joined our outbound sales floor at Regen Digital, we had demanding targets and zero room for reps who needed weeks of hand-holding. You came in with 11+ years of outbound muscle, ramped to our top Level 4 tier in under 3 weeks, and set the standard for our floor.
                    </p>
                    <p>
                      What always impressed me was your day-in, day-out phone stamina. Cold calling 150+ dials a day while maintaining conversational composure and sharp objection handling isn’t easy, but you made it look routine. Over your career and across the campaigns you’ve handled—contributing over $1.8M in sourced pipeline and consistently hitting 120–150% quota attainment—your focus has always been on booking qualified conversations rather than vanity dials. On our team, you delivered 30+ qualified discovery meetings a month with an 85% BANT qualification rate, giving our Account Executives high-intent opportunities that actually converted.
                    </p>
                    <p>
                      You were also great with the team. You mentored our junior SDRs, ran live dial sprints with them, and walked them through call recordings to fix their objection pivots without micromanaging them.
                    </p>
                    <p>
                      Any founder, VP of Sales, or hiring manager looking for a dedicated Senior SDR who can step in on Day 1, run high-volume cold outreach, and build dependable outbound pipeline would be lucky to have you. <strong className="text-[#0d0e0c]">I would recommend hiring Flynn without hesitation.</strong>
                    </p>
                    <p className="pt-2">
                      Feel free to have prospective teams reach out to me directly if they ever need a reference.
                    </p>
                    <p>
                      Best regards,
                    </p>
                  </div>

                  {/* Naturally Integrated Signature with production CDN link */}
                  <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-black text-[#0d0e0c] font-display uppercase tracking-tight">Brendon Gocaj</div>
                      <div className="text-xs text-[#0077b6] font-bold">Owner & Director · Regen Digital</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">USA & European Outbound Sales Operations</div>
                    </div>

                    <div className="relative pt-1 sm:pt-0">
                      <img
                        src={sigSrc}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = '/assets/brendon-signature.svg';
                        }}
                        alt="Brendon Gocaj Handwritten Signature"
                        loading="eager"
                        className="h-12 sm:h-14 w-auto max-w-[210px] object-contain object-left mix-blend-multiply filter contrast-125 select-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                </article>

                <div className="relative flex justify-center lg:self-end lg:-mb-5">
                  <div className="absolute bottom-0 w-40 h-8 rounded-full bg-sky-900/10 blur-md" />
                  <img
                    src={flynnImgSrc}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = personalInfo.heroImage;
                    }}
                    alt="Flynn in the sales office"
                    loading="lazy"
                    className="relative w-44 sm:w-52 lg:w-56 max-h-80 object-contain object-bottom drop-shadow-[0_16px_24px_rgba(0,0,0,0.16)]"
                  />
                </div>
              </div>

              {/* Reference Data Cards */}
              <div className="mt-8 border-t border-zinc-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr_1fr] gap-4 items-stretch">
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 text-left">
                    <img
                      src="https://user29984.na.imgto.link/public/20261005/regen-digital.avif"
                      alt="Regen Digital"
                      loading="lazy"
                      className="h-9 w-auto max-w-[170px] object-contain object-left mb-3"
                    />
                    <div className="text-[10px] font-display uppercase tracking-widest text-zinc-500 font-extrabold">REGEN DIGITAL</div>
                    <div className="text-[10px] font-sans text-zinc-400 mt-1">USA / EUROPEAN B2B OUTBOUND</div>
                    <div className="text-3xl font-black font-display text-[#0077b6] mt-3">$200,000+</div>
                    <div className="text-[10px] font-sans text-zinc-400">Verified Pipeline Generated</div>
                  </div>
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 grid grid-cols-2 gap-4 text-left">
                    <div>
                      <div className="text-xl font-black font-display text-[#0d0e0c]">85%</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">BANT Qualified</div>
                    </div>
                    <div>
                      <div className="text-xl font-black font-display text-[#0d0e0c]">120–150%</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Quota Attainment</div>
                    </div>
                    <div>
                      <div className="text-xl font-black font-display text-[#0d0e0c]">Level 4</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Tier in 3 Weeks</div>
                    </div>
                    <div>
                      <div className="text-xl font-black font-display text-[#0d0e0c]">$960</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Performance Bonus</div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#dededb] bg-white p-5 flex items-center justify-center">
                    <img
                      src="https://user29984.na.imgto.link/public/20261005/seek-marketing.avif"
                      alt="Seek Marketing Partners"
                      loading="lazy"
                      className="max-h-12 max-w-[180px] object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-[10px] font-display uppercase tracking-wider text-zinc-400">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src="https://user29984.na.imgto.link/public/20261005/averps-pte-ltd.avif"
                      alt="Averps Pte Ltd"
                      loading="lazy"
                      className="h-7 w-auto max-w-[130px] object-contain"
                    />{' '}
                    Singapore
                  </span>
                  <span>Verifiable SDR references & documented outbound pipeline data</span>
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
              Feedback from directors, operations leads, and account executives who have directly managed Flynn's outbound pipeline.
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
              Need to speak directly with Flynn's previous directors or verify documented metrics across his 11+ years in outbound B2B telemarketing? Contact Flynn to connect with references directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Reference%20Check%20for%20Flynn%20James`}
                className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs font-display"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Email Flynn for Direct Reference Contacts</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
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