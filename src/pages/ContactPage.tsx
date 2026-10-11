import React, { useMemo, useState } from 'react';
import { personalInfo } from '../data/flynnData';
import { sendInquiryEmails, InquiryPayload } from '../lib_email';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Send,
  MessageCircle,
} from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
}

function nextBusinessDays(count = 5) {
  const days: { label: string; date: string; fullDate: string; iso: string }[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day === 0 || day === 6) continue;
    days.push({
      label: cursor.toLocaleDateString('en-US', { weekday: 'short' }),
      date: cursor.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      fullDate: cursor.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      iso: cursor.toISOString().slice(0, 10),
    });
  }
  return days;
}

export default function ContactPage({ onNavigate, onOpenResume }: ContactPageProps) {
  const days = useMemo(() => nextBusinessDays(), []);
  const [selectedDayIso, setSelectedDayIso] = useState<string>(days[0]?.iso || '');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [inquiryType, setInquiryType] = useState<'Interview' | 'SDR Inquiry' | 'Partnership' | 'Other'>('Interview');
  const [employmentPreference, setEmploymentPreference] = useState<'Full-Time' | 'Part-Time' | 'Team Leader'>('Full-Time');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const timeSlots = [
    '9:30 AM EST',
    '10:00 AM EST',
    '11:00 AM EST',
    '1:30 PM EST',
    '2:30 PM EST',
    '4:00 PM EST',
    '4:45 PM EST',
  ];

  const selectedDayObj = days.find((d) => d.iso === selectedDayIso) || days[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError('Please acknowledge consent to receive your calendar invitation and direct response.');
      return;
    }
    setLoading(true);
    setError('');

    const payload: InquiryPayload = {
      fullName,
      email,
      company,
      role: role || 'Hiring Decision Maker',
      inquiryType,
      employmentPreference,
      selectedDate: selectedDayObj?.fullDate || selectedDayIso,
      selectedTime,
      message: notes,
      consent,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      source: `${window.location.origin}/work-with-me`,
    };

    try {
      await sendInquiryEmails(payload);
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : 'Unable to complete submission. Please try again.');
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      {/* Header Banner */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-mono uppercase tracking-widest text-[#0077b6] font-bold shadow-2xs">
              <Mail className="w-3.5 h-3.5" />
              <span>Work With Flynn · Engagement & Partnership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              Work With Flynn.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-2xl">
              Available immediately for Heavyweight Team Leader, Senior SDR, and Outbound Specialist roles. Reach out via email, phone, WhatsApp, or reserve your 15-minute introductory discussion below.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{personalInfo.availability}</span>
              </span>
              <span>·</span>
              <span>Direct Response in &lt; 4 Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Availability & Engagement Rates Overview (3 Models) */}
      <section className="py-8 border-b border-[#dededb] bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-[#dededb] rounded-2xl shadow-xs text-left space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-display uppercase tracking-widest text-zinc-600 font-extrabold">
                  Part-Time Sprint
                </div>
                <span className="px-2 py-0.5 bg-zinc-100 text-zinc-700 text-[9px] font-display uppercase font-bold rounded">
                  20 Hrs / Wk
                </span>
              </div>
              <div className="text-2xl font-black font-display text-zinc-950">$389 / month</div>
              <p className="text-xs leading-relaxed text-zinc-600 font-sans">
                75–100+ daily dials, 15–20+ qualified meetings/mo, BANT qualification, and CRM follow-ups.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-[#0077b6] rounded-2xl shadow-xs text-left space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
                  Full-Time Senior SDR
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-display uppercase font-bold rounded">
                  40 Hrs / Wk
                </span>
              </div>
              <div className="text-2xl font-black font-display text-zinc-950">$639 / month</div>
              <p className="text-xs leading-relaxed text-zinc-600 font-sans">
                150+ daily dials, 30+ qualified discovery meetings/mo, BANT/MEDDIC qualification, and full CRM ownership.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#dededb] rounded-2xl shadow-xs text-left space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-display uppercase tracking-widest text-purple-700 font-extrabold">
                  Team Leader & Coach
                </div>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[9px] font-display uppercase font-bold rounded">
                  Custom Pod Scope
                </span>
              </div>
              <div className="text-2xl font-black font-display text-emerald-600">Negotiable</div>
              <p className="text-xs leading-relaxed text-zinc-600 font-sans">
                Floor leadership, daily dial sprints, call shadowing, rep coaching, and executive KPI reporting. Discussed based on scope.
              </p>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 text-center mt-3 font-sans">
            Rates are discussed transparently based on responsibilities, target market, and campaign scope.
          </p>
        </div>
      </section>

      {/* Main Grid: Coordinates & Direct Scheduling */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Coordinates & Profile */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="p-6 bg-white border border-[#dededb] rounded-2xl space-y-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-xs font-display font-extrabold uppercase text-[#0077b6]">
                    Official Contact Info
                  </span>
                  <button
                    onClick={onOpenResume}
                    className="text-xs font-display font-extrabold uppercase text-zinc-500 hover:text-black flex items-center gap-1 cursor-pointer tracking-wider"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#0077b6]" />
                    <span>View Resume</span>
                  </button>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0077b6] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">
                      Direct Work Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-zinc-900 hover:text-[#0077b6] transition-colors break-all font-sans"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">
                      Direct Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-zinc-900 hover:text-[#0077b6] transition-colors font-sans"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">
                      LinkedIn Profile
                    </div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#0077b6] hover:underline flex items-center gap-1 font-sans"
                    >
                      <span>{personalInfo.linkedinHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">
                      Location & Workspace
                    </div>
                    <div className="text-xs font-bold text-zinc-900">{personalInfo.location}</div>
                    <div className="text-[11px] text-zinc-500 font-sans mt-0.5">
                      Dual fiber connection & UPS power backup ready
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Scheduling Form */}
            <div className="lg:col-span-7 bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase font-display text-zinc-950">
                      Intro Scheduled & Inquiry Dispatched!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong className="text-zinc-900">{fullName}</strong>. Your request for <strong className="text-[#0077b6]">{inquiryType}</strong> ({employmentPreference}) has been logged for <strong className="text-zinc-900">{selectedDayObj.fullDate} at {selectedTime}</strong>. A calendar invite and prep briefing will be sent to <strong className="text-[#0077b6]">{email}</strong>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-xs font-mono uppercase text-zinc-800 rounded-xl cursor-pointer"
                    >
                      Book Another Time / Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-zinc-950 mb-1">
                      Direct Scheduling & Inquiry
                    </h3>
                    <p className="text-xs text-zinc-500 font-sans">
                      Select your preferred intro window and tell Flynn about your outbound goals.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 font-extrabold block">
                      1. Preferred Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {days.map((d) => (
                        <button
                          key={d.iso}
                          type="button"
                          onClick={() => setSelectedDayIso(d.iso)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDayIso === d.iso
                              ? 'bg-[#0077b6] text-white border-[#0077b6] font-bold shadow-xs'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white'
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight font-display uppercase">{d.label}</div>
                          <div className={`text-[10px] font-sans ${selectedDayIso === d.iso ? 'text-white/80' : 'text-zinc-400'}`}>
                            {d.date}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 font-extrabold block">
                      2. Preferred Time Window (EST)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-xl border text-xs font-display uppercase text-center transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'bg-[#0077b6] text-white border-[#0077b6] font-bold shadow-xs'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-zinc-100">
                    <label className="text-[11px] font-display uppercase tracking-wider text-zinc-700 font-extrabold block">
                      3. Contact & Opportunity Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rachel Adams"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rachel@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Company / Website *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Tech or acme.com"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Your Role / Title
                        </label>
                        <input
                          type="text"
                          placeholder="VP of Sales / Founder"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Reason for Contact *
                        </label>
                        <select
                          required
                          value={inquiryType}
                          onChange={(e) => setInquiryType(e.target.value as any)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:bg-white"
                        >
                          <option value="Interview">Interview</option>
                          <option value="SDR Inquiry">SDR Inquiry</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Engagement Model *
                        </label>
                        <select
                          value={employmentPreference}
                          onChange={(e) => setEmploymentPreference(e.target.value as 'Full-Time' | 'Part-Time' | 'Team Leader')}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:bg-white"
                        >
                          <option value="Full-Time">Full-Time Senior SDR ($639/mo)</option>
                          <option value="Part-Time">Part-Time Outbound Sprint ($389/mo)</option>
                          <option value="Team Leader">Team Leader (TL) · Negotiable Scope</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                        Outbound Goals / Campaign Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell Flynn about your target ICP, monthly booked meeting targets, or outbound tech stack..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white resize-none"
                      />
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer font-sans pt-1">
                      <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 accent-[#0077b6]"
                      />
                      <span>
                        I consent to receive a calendar invitation and direct email response from Flynn regarding this inquiry. No marketing spam, ever. *
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-sans">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !consent}
                    className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] active:scale-98 text-white font-bold text-xs uppercase font-display tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting & Dispatching Invitation...</span>
                    ) : (
                      <>
                        <span>Confirm 15-Minute Sync with Flynn</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-sans text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Confidential · Direct calendar invitation dispatched to your inbox</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}