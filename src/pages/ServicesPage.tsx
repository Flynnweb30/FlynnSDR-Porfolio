import React from 'react';
import { PageRoute } from '../types';
import { servicesData, ServiceItem } from '../data/servicesData';
import {
  Briefcase,
  PhoneCall,
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ServicesPageProps {
  currentRoute: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function ServicesPage({ currentRoute, onNavigate, onOpenBooking }: ServicesPageProps) {
  // If specific service selected, display dedicated deep-dive view; otherwise hub view
  const activeService = servicesData.find((s) => s.slug === currentRoute);

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      {/* Header Banner */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{activeService ? activeService.badge : 'Outbound Sales Capabilities'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              {activeService ? activeService.title : 'Services Offered & Outbound Solutions.'}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              {activeService
                ? activeService.overview
                : 'Accelerating enterprise revenue through high-volume cold calling, rigorous BANT/MEDDIC qualification, and dependable appointment setting that keeps closer calendars full.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Outbound Scope</span>
              </button>

              <button
                onClick={() => onNavigate('calls')}
                className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] text-xs font-display font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#0077b6]" />
                <span>Hear Real Audio Calls</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      {activeService ? (
        /* DEDICATED DEEP-DIVE VIEW FOR SELECTED SERVICE */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-left">
            {/* Visual Hero Banner for Service */}
            <div className="relative rounded-2xl overflow-hidden border border-[#dededb] shadow-md aspect-[21/9] max-h-[360px] bg-zinc-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-xs font-display uppercase tracking-widest text-[#00a8e8] font-bold">
                    Tactical Execution
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
                    {activeService.tagline}
                  </h2>
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-display uppercase tracking-wider font-bold">
                  {activeService.badge}
                </span>
              </div>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeService.metrics.map((m, i) => (
                <div key={i} className="p-5 bg-white border border-[#dededb] rounded-2xl shadow-xs text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display text-[#0077b6]">{m.value}</div>
                  <div className="text-[10px] sm:text-xs font-display uppercase font-bold text-zinc-500 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables Checklist */}
            <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-zinc-100 pb-4">
                <h3 className="text-xl font-black uppercase font-display text-[#0d0e0c]">
                  Tactical Deliverables & Workflow
                </h3>
                <p className="text-xs text-zinc-500 font-sans mt-0.5">
                  How Flynn systematically executes this service within your outbound pipeline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeService.deliverables.map((d, idx) => (
                  <div key={idx} className="p-4 bg-[#f7f7f6] rounded-xl border border-zinc-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0d0e0c] font-display uppercase">
                      <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{d.title}</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed pl-6">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cadence Rhythm & Target Outcome */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border border-[#dededb] rounded-2xl p-6 shadow-xs space-y-4">
                <h4 className="text-sm font-extrabold uppercase font-display text-[#0d0e0c] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0077b6]" />
                  <span>Proven Cadence Rhythm</span>
                </h4>
                <ul className="space-y-2 text-xs font-sans text-zinc-700">
                  {activeService.cadenceSummary.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2 pb-2 border-b border-zinc-100 last:border-0">
                      <span className="font-mono text-[#0077b6] font-bold shrink-0">{idx + 1}.</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f7f7f6] border border-[#dededb] rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
                    Expected Business Outcome
                  </div>
                  <h4 className="text-lg font-black uppercase font-display text-[#0d0e0c]">
                    What Your Sales Organization Gains
                  </h4>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed">{activeService.targetOutcome}</p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    Deploy This Service
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-4 py-2 bg-white border border-zinc-300 text-zinc-800 text-xs font-display font-bold uppercase rounded-xl cursor-pointer hover:bg-zinc-100"
                  >
                    View All Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* HUB OVERVIEW: ALL 4 SERVICES */
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-display uppercase font-bold rounded-md border border-white/10">
                      {service.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-display uppercase text-[#00a8e8] font-bold">
                        {service.shortTitle}
                      </span>
                      <h3 className="text-lg font-black font-display uppercase leading-tight mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed">{service.overview}</p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
                      {service.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2 bg-[#f7f7f6] rounded-lg text-center">
                          <div className="text-base font-black font-display text-[#0077b6]">{m.value}</div>
                          <div className="text-[9px] font-display uppercase font-bold text-zinc-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate(service.slug as PageRoute)}
                        className="text-xs font-display font-extrabold uppercase text-[#0077b6] hover:text-[#0284c7] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore Workflow & Framework</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenBooking()}
                        className="px-3 py-1.5 bg-zinc-900 hover:bg-[#0077b6] text-white rounded-lg text-[10px] font-display uppercase font-bold transition-colors cursor-pointer"
                      >
                        Hire Flynn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="p-8 bg-[#f7f7f6] border border-[#dededb] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black uppercase font-display text-[#0d0e0c]">
                  Need Custom Outbound Campaign Coverage?
                </h3>
                <p className="text-xs text-zinc-600 font-sans mt-1">
                  Flynn operates seamlessly across US, UK, and APAC daytime shifts with zero ramp required.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase font-display tracking-wider rounded-xl shadow-xs transition-all shrink-0 cursor-pointer"
              >
                Schedule 15-Min Intro
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}