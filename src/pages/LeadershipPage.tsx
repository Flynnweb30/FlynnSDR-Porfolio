import React from 'react';
import { personalInfo } from '../data/flynnData';
import { Users, Award, Flame, TrendingUp, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface LeadershipPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function LeadershipPage({ onNavigate, onOpenBooking }: LeadershipPageProps) {
  const leadershipWins = [
    {
      role: 'Junior Sales Team Lead',
      company: 'Regen Digital',
      period: 'Jul 2026 – Oct 2026',
      impact: '+15% Monthly KPIs Exceeded',
      points: [
        'Coach SDRs on objection handling, BANT qualification, and objection-handling techniques.',
        'Share battle-tested scripts and multi-touch call strategies across the sales floor.',
        'Monitor team metrics and develop sales talent through accountability and coaching.',
        'Support onboarding through structured mentoring, shadowing, and constructive feedback.',
      ],
    },
    {
      role: 'Senior SDR & Team Mentor',
      company: 'Pacific Outsource Teleservices',
      period: '2015 – 2022',
      impact: '+20% Team Productivity Lift',
      points: [
        'Led and mentored 5 SDRs across 30+ B2B client campaigns.',
        'Shortened new hire onboarding time by 25% through hands-on call shadowing.',
        'Introduced a new performance tracking system that improved team KPIs and reduced reporting errors by 40%.',
        'Coached team to generate 100+ leads/week and 30–40+ appointments/month.',
      ],
    },
    {
      role: 'Outbound Onboarding Coach',
      company: 'Global Empire Corporation',
      period: '2014 – 2015',
      impact: '20% Faster Ramp Time',
      points: [
        'Cross-trained 8 new SDR hires, shortening onboarding ramp by 20%.',
        'Recognized as top agent delivering 95%+ customer satisfaction scores.',
        'Awarded "Employee of the Month" twice for individual and peer leadership.',
      ],
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      
      {/* Header Banner - matching the existing Clean Style */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <Users className="w-3.5 h-3.5" />
              <span>Sales Floor Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              Junior Sales Team Lead & Floor Culture Builder.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              Leading from the front. Flynn combines individual outbound execution power with a proven record of mentoring junior SDRs, running high-energy dial sprints, and building high-accountability sales pods.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>+15% Monthly KPI Lift</span>
              </span>
              <span>·</span>
              <span>20+ SDRs Mentored</span>
              <span>·</span>
              <span>-25% Onboarding Ramp Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team Photo Section */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-[#dededb] rounded-2xl overflow-hidden shadow-xs mb-12">
            <div className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden bg-zinc-100">
              <img
                src={personalInfo.teamImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = personalInfo.teamImageFallback;
                }}
                alt="Flynn leading the Sales Development Team"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-display uppercase text-[#0077b6] font-bold">
                    <Flame className="w-4 h-4 text-rose-500" />
                    <span>Regen Digital Sales Floor</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black font-display uppercase text-[#0d0e0c]">
                    Flynn with the Outbound Sales & Account Team
                  </h3>
                </div>
                <div className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-display uppercase font-bold rounded-lg">
                  Level 4 SDR & Team Lead
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Roles & Proof */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {leadershipWins.map((win, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-display uppercase text-[#0077b6] font-bold tracking-wider">
                      {win.company}
                    </span>
                    <span className="text-[11px] font-sans text-zinc-400">{win.period}</span>
                  </div>

                  <h3 className="text-xl font-black font-display uppercase tracking-tight text-[#0d0e0c]">
                    {win.role}
                  </h3>

                  <ul className="space-y-2 text-xs text-zinc-600 leading-relaxed font-sans">
                    {win.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0077b6] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-xs font-display uppercase text-emerald-600 font-extrabold flex items-center gap-1.5 tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>{win.impact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy on Leadership */}
          <div className="mt-12 p-8 bg-white border border-[#dededb] rounded-2xl shadow-xs text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">01. Lead by Example</div>
                <h4 className="text-base font-black text-[#0d0e0c] uppercase font-display">Daily Dial Accountability</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  A leader who doesn’t pick up the phone loses credibility fast. Flynn dials beside his team daily, taking live objections and proving that script discipline produces predictable bookings.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">02. Constructive Shadowing</div>
                <h4 className="text-base font-black text-[#0d0e0c] uppercase font-display">Live Call Breakdowns</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  Weekly 1-on-1 call reviews where recordings are analyzed without judgment. Junior reps pinpoint where prospects lost focus and learn the exact conversational pivot needed to recover.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">03. High-Energy Culture</div>
                <h4 className="text-base font-black text-[#0d0e0c] uppercase font-display">Celebrating Every Meeting</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  Cold calling can be brutal if reps feel isolated. Flynn instituted team gong rings, instant Slack shoutouts, and friendly dial sprints to turn outbound into a collaborative team sport.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 bg-[#f7f7f6] border border-[#dededb] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display text-[#0d0e0c]">
                Ready to Level Up Your Outbound SDR Team?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans">
                Book a 15-minute discovery call to discuss senior SDR or outbound lead opportunities.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xs cursor-pointer font-display transition-all"
            >
              Schedule 15-Min Intro
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
