import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Send, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  Mail, 
  Linkedin, 
  Video, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function SalesPlaybook() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 'Phase 01',
      title: 'Precision ICP & Account Intelligence',
      tagline: 'Never dial cold into a blind account.',
      icon: Search,
      description:
        'Before picking up the phone, I identify high-intent accounts experiencing acute triggers: executive hiring, negative tech reviews, website redesign lags, or funding milestones.',
      deliverables: [
        'Technographic filtering (detecting legacy tech stacks)',
        'Decision-maker mapping (VPs, Founders, Operations Leads)',
        'Direct dial verification via ZoomInfo / Apollo to avoid gatekeeper purgatory',
        'Custom hook identification for each account tier',
      ],
      kpi: '92% Direct Dial Accuracy',
    },
    {
      step: 'Phase 02',
      title: 'The 14-Day Multi-Channel Cadence',
      tagline: 'Coordinated phone, video, email, and social touches.',
      icon: Send,
      description:
        'Prospects don\'t live on one channel. My battle-tested 14-day cadence combines phone priority with personalized video, value-add emails, and LinkedIn interactions.',
      deliverables: [
        'Day 1: Cold Call #1 + Short Context-Setting Email',
        'Day 3: LinkedIn Profile View + Personalized Voice Note',
        'Day 5: Cold Call #2 (Different Time Zone Window)',
        'Day 8: Custom Screen-Share Video (Loom Preview Hook)',
        'Day 11: Call #3 + Case Study Asset Drop',
        'Day 14: Respectful "Permission to Follow Up" Breakup',
      ],
      kpi: '38% Response Rate on 14-Day Cadence',
    },
    {
      step: 'Phase 03',
      title: 'Real-Time Objection De-Escalation',
      tagline: 'Converting instinctive hesitation into genuine interest.',
      icon: ShieldCheck,
      description:
        'Top SDRs thrive on objections. When prospects push back, I use neutral tonality and conversational jujitsu to lower their guards and pivot to discovery.',
      deliverables: [
        '"Send me an email" → "Happy to! What specifically should I include so I don\'t waste your inbox?"',
        '"We already use someone" → "Most category leaders do. Are they guaranteeing sub-second response times?"',
        '"Not interested" → "Completely fair, I caught you in the middle of your day. Can I ask 20 seconds why?"',
        '"Call me next quarter" → "Let\'s tentatively sync for 10 mins now so you have the data ready then."',
      ],
      kpi: '64% Objection Reversal Rate',
    },
    {
      step: 'Phase 04',
      title: 'AE Handoff & Show-Up Protocol',
      tagline: 'A meeting booked is useless if the prospect ghosts.',
      icon: UserCheck,
      description:
        'I maintain an 88.4% show-up rate because every prospect receives an immediate calendar invite with an explicit agenda, tailored collateral, and an automated SMS reminder 2 hours prior.',
      deliverables: [
        'Detailed CRM briefing notes (Pain points, tech stack, budget hints, personality type)',
        'Standardized Zoom calendar invites with customized 3-bullet meeting agenda',
        'Pre-call SMS & Email reminder sent 24 hours and 2 hours before the call',
        'Pre-meeting briefing sync with the Account Executive handoff',
      ],
      kpi: '88.4% Average Show-Up Rate',
    },
  ];

  return (
    <section id="playbook" className="py-14 sm:py-20 bg-[#fafaf8] text-[#0d0e0c] relative border-b border-[#dededb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>The Outbound Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
            The Systematic 4-Stage Outbound Playbook.
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-sans">
            Predictable pipeline requires a repeatable operating framework. Here is how I build qualified pipeline from first contact to AE handoff.
          </p>
        </div>

        {/* Playbook Step Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((s, index) => {
            const isSelected = activeStep === index;
            const Icon = s.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-white border-[#0077b6] ring-2 ring-[#0077b6]/20'
                    : 'bg-[#f7f7f6] border-[#dededb] hover:bg-white hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                    {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#0077b6]' : 'text-zinc-400'}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-black text-[#0d0e0c] uppercase font-display line-clamp-1">
                  {s.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Description & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
                  {steps[activeStep].step} · Deep Dive
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[#0d0e0c]">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm font-display uppercase font-bold text-zinc-500">
                  {steps[activeStep].tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                {steps[activeStep].description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-display uppercase tracking-wider text-[#0d0e0c] font-extrabold">
                  Tactical Deliverables & Execution:
                </h4>
                <div className="space-y-2">
                  {steps[activeStep].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#f7f7f6] rounded-xl border border-[#dededb]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-700 font-sans leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: KPI Badge & Visual Matrix */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* KPI Badge */}
              <div className="p-6 bg-[#f7f7f6] border border-[#dededb] rounded-2xl space-y-2 text-center">
                <div className="text-[11px] font-display uppercase tracking-wider text-zinc-500 font-bold">
                  Verified Outcome Metric
                </div>
                <div className="text-3xl sm:text-4xl font-black font-display text-[#0077b6]">
                  {steps[activeStep].kpi}
                </div>
                <div className="text-[11px] text-zinc-500 font-sans">
                  Measured across 45,000+ career cold outbound dials
                </div>
              </div>

              {/* Cadence Rhythm Overview */}
              <div className="p-6 bg-white border border-[#dededb] rounded-2xl space-y-3 shadow-2xs">
                <h4 className="text-xs font-display uppercase tracking-wider text-[#0d0e0c] font-extrabold">
                  Multi-Touch Channel Mix:
                </h4>
                
                <div className="space-y-2 text-xs font-sans">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#f7f7f6]">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <PhoneCall className="w-4 h-4 text-[#0077b6]" />
                      <span>Phone & Direct Dials</span>
                    </div>
                    <span className="font-display font-extrabold text-[#0077b6] uppercase">55% Volume</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#f7f7f6]">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <span>Hyper-Personalized Email</span>
                    </div>
                    <span className="font-display font-extrabold text-emerald-600 uppercase">25% Volume</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#f7f7f6]">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Linkedin className="w-4 h-4 text-indigo-600" />
                      <span>Social Touches & Voice Notes</span>
                    </div>
                    <span className="font-display font-extrabold text-indigo-600 uppercase">15% Volume</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#f7f7f6]">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Video className="w-4 h-4 text-amber-600" />
                      <span>Custom Video Previews</span>
                    </div>
                    <span className="font-display font-extrabold text-amber-600 uppercase">5% Volume</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
