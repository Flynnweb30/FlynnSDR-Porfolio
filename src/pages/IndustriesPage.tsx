import React from 'react';
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
} from 'lucide-react';

interface IndustriesPageProps {
  currentRoute: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function IndustriesPage({ currentRoute, onNavigate, onOpenBooking }: IndustriesPageProps) {
  const activeIndustry = industriesData.find((i) => i.slug === currentRoute);

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
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
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Your Industry ICP</span>
              </button>

              <button
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
        /* DEDICATED DEEP-DIVE VIEW FOR SELECTED INDUSTRY */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-left">
            {/* Visual Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#dededb] shadow-md aspect-[21/9] max-h-[360px] bg-zinc-900">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-full object-cover opacity-80"
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
                    <div key={p} className="p-2.5 bg-[#f7f7f6] rounded-xl text-xs font-sans font-medium text-zinc-800 flex items-center gap-2">
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
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Schedule Outbound Discovery
                </button>
                <button
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
        /* HUB OVERVIEW: ALL 4 INDUSTRIES */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industriesData.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-display uppercase font-bold rounded-md border border-white/10">
                      {industry.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
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
                      <button
                        onClick={() => onNavigate(industry.slug as PageRoute)}
                        className="text-xs font-display font-extrabold uppercase text-[#0077b6] hover:text-[#0284c7] flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Sector Persona Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenBooking()}
                        className="px-3 py-1.5 bg-zinc-900 hover:bg-[#0077b6] text-white rounded-lg text-[10px] font-display uppercase font-bold transition-colors cursor-pointer"
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