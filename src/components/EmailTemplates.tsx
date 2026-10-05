import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, TrendingUp, Send } from 'lucide-react';

interface EmailTemplate {
  id: string;
  title: string;
  trigger: string;
  subject: string;
  body: string;
  stats: {
    openRate: string;
    replyRate: string;
    meetingRate: string;
  };
  coachNote: string;
}

export default function EmailTemplates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates: EmailTemplate[] = [
    {
      id: 'template-1',
      title: 'The Custom Preview Hook',
      trigger: 'Targeting local business owners & agency leaders',
      subject: 'Custom website preview for {{companyName}} [zero obligation]',
      body: `Hey {{firstName}},

Saw your team is driving strong client work across {{city}}, but noticed your mobile landing experience is leaking visitors to {{competitorName}}.

Rather than send a generic pitch, my development team built a live custom website preview for {{companyName}} to show you what sub-second page speed and modern conversion architecture look like for your brand.

It’s completely finished and free to review.

Do you have 10 minutes Thursday morning (10:00 or 11:30 AM) to pull up the screenshare?

Best,
Flynn
Senior SDR | Outbound Growth`,
      stats: {
        openRate: '68.4%',
        replyRate: '14.2%',
        meetingRate: '9.6%',
      },
      coachNote: 'Delivering proof of work upfront disarms the "you don\'t know my business" objection immediately.',
    },
    {
      id: 'template-2',
      title: 'The Trigger Event / Headcount Signal',
      trigger: 'Triggered when prospect company hires new AEs or opens new office',
      subject: 'Congrats on the {{city}} expansion + ramping new reps',
      body: `Hi {{firstName}},

Congrats on bringing on new Account Executives this quarter in {{city}}.

Usually when sales headcount expands, the biggest bottleneck for VP of Sales is keeping reps' calendars full of high-intent SQLs without burning out on manual sourcing.

We recently helped {{similarCompany}} ramp outbound meeting volume by +44% in their first 60 days.

Open to a brief 15-minute chat Tuesday at 2:00 PM to see the outbound cadence breakdown?

Best,
Flynn`,
      stats: {
        openRate: '72.1%',
        replyRate: '16.5%',
        meetingRate: '11.0%',
      },
      coachNote: 'Ties directly to the executive’s immediate strategic milestone and relieves their top fear (idle quota).',
    },
    {
      id: 'template-3',
      title: 'The Permission-to-Follow-Up Breakup',
      trigger: 'Day 14 final touch after multi-channel outreach',
      subject: 'Re: {{companyName}} — next step',
      body: `{{firstName}},

I’ve reached out a couple of times regarding outbound pipeline generation for {{companyName}}, but haven’t heard back.

Usually this means one of two things:
1. Sourcing qualified outbound meetings is not a current priority for your team.
2. You’re interested, but completely swamped right now.

If it’s #1, let me know and I will gladly close the loop and not bother you again.

If it’s #2, would next month make more sense to reconnect?

Flynn`,
      stats: {
        openRate: '84.0%',
        replyRate: '19.8%',
        meetingRate: '8.4%',
      },
      coachNote: 'Reverse psychology lowers sales pressure and provokes a guilty reply or immediate reschedule.',
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#f7f7f6] text-[#0d0e0c] relative border-b border-[#dededb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Copywriting & Sequences</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
            Battle-Tested Cold Email Frameworks.
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-sans">
            High reply rates require short, punchy, conversational copy that reads like an email from a peer, not marketing fluff.
          </p>
        </div>

        {/* Email Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-white border border-[#dededb] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:border-[#0077b6]/60 transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-[10px] font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                    {tpl.trigger}
                  </span>
                  <button
                    onClick={() => handleCopy(tpl.body, tpl.id)}
                    className="p-1.5 rounded-lg bg-[#f7f7f6] hover:bg-zinc-200 text-zinc-600 hover:text-black transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedId === tpl.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <h3 className="text-lg font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  {tpl.title}
                </h3>

                {/* Subject Line */}
                <div className="p-2.5 rounded-xl bg-[#f7f7f6] border border-[#dededb] text-xs">
                  <span className="text-zinc-400 font-display uppercase text-[10px] block font-bold">Subject:</span>
                  <span className="font-sans font-semibold text-zinc-800">{tpl.subject}</span>
                </div>

                {/* Body */}
                <pre className="text-xs font-sans text-zinc-700 whitespace-pre-wrap leading-relaxed bg-[#fafaf8] p-3.5 rounded-xl border border-[#dededb]/70 max-h-56 overflow-y-auto">
                  {tpl.body}
                </pre>

                {/* Coach Note */}
                <div className="text-[11px] text-zinc-500 italic bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/50 font-sans">
                  💡 <strong>Strategy:</strong> {tpl.coachNote}
                </div>

              </div>

              {/* Stats Bar */}
              <div className="pt-3 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-[10px] font-display uppercase text-zinc-400 font-bold">Open Rate</div>
                  <div className="text-sm font-black font-display text-[#0d0e0c]">{tpl.stats.openRate}</div>
                </div>
                <div>
                  <div className="text-[10px] font-display uppercase text-zinc-400 font-bold">Reply Rate</div>
                  <div className="text-sm font-black font-display text-emerald-600">{tpl.stats.replyRate}</div>
                </div>
                <div>
                  <div className="text-[10px] font-display uppercase text-zinc-400 font-bold">Meeting Booked</div>
                  <div className="text-sm font-black font-display text-[#0077b6]">{tpl.stats.meetingRate}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
