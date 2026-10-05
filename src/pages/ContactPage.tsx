import React, { useState } from 'react';
import { personalInfo } from '../data/flynnData';
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
  Clock,
  Globe,
  MessageCircle
} from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
}

export default function ContactPage({ onNavigate, onOpenResume }: ContactPageProps) {
  const [selectedDay, setSelectedDay] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [roleType, setRoleType] = useState('Full-Time Senior SDR / Lead Rep');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const days = [
    { label: 'Tomorrow', date: 'Oct 6, 2026' },
    { label: 'Wednesday', date: 'Oct 7, 2026' },
    { label: 'Thursday', date: 'Oct 8, 2026' },
    { label: 'Friday', date: 'Oct 9, 2026' },
    { label: 'Next Monday', date: 'Oct 12, 2026' },
  ];

  const timeSlots = [
    '9:30 AM EST',
    '10:00 AM EST',
    '11:00 AM EST',
    '1:30 PM EST',
    '2:30 PM EST',
    '4:00 PM EST',
    '4:45 PM EST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      
      {/* Header Banner */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-mono uppercase tracking-widest text-[#0077b6] font-bold shadow-2xs">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              Hire or Interview Flynn.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-2xl">
              Available immediately for Senior SDR, Lead BDR, and Outbound Specialist roles. Reach out via email, phone, WhatsApp, or pick a direct time slot below.
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

      {/* Main Grid */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Coordinates & Profile (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              
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

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0077b6] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">Direct Work Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-zinc-900 hover:text-[#0077b6] transition-colors break-all font-sans"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">Direct Call / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-zinc-900 hover:text-[#0077b6] transition-colors font-sans"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">LinkedIn Profile</div>
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

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase text-zinc-400 font-extrabold tracking-wider">Location & Remote Setup</div>
                    <div className="text-xs font-bold text-zinc-900">{personalInfo.location}</div>
                    <div className="text-[11px] text-zinc-500 font-sans mt-0.5">
                      High-speed fiber connection & backup workstation ready
                    </div>
                  </div>
                </div>
              </div>

              {/* Inbound Lead Trigger: Facebook Community & Direct Inbound CTA */}
              <div className="p-6 bg-gradient-to-br from-blue-50/80 via-white to-white border-2 border-blue-200 rounded-2xl space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-display font-bold text-[#1877F2] uppercase">
                    <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Connect on Facebook</span>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">
                    Inbound Hub
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold font-display uppercase text-zinc-900 tracking-tight">
                    Please Visit & Like Our Facebook Page
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    Prefer social messaging? Like our official page to join our sales community, get daily SDR prospecting tips, and send an instant inbound lead inquiry via Messenger.
                  </p>
                </div>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase font-display tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Visit & Like Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right: Integrated Booking & Inquiry Deck (Span 7) */}
            <div className="lg:col-span-7 bg-white border border-[#dededb] rounded-2xl p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase font-display text-zinc-950">
                      Intro Scheduled & Message Received!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong className="text-zinc-900">{name}</strong>. I’ve reserved your preferred intro window ({selectedDay} at {selectedTime}) and will send the calendar invitation and Zoom link to <strong className="text-[#0077b6]">{email}</strong>.
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
                      Pick your preferred discussion time and share your outbound needs below.
                    </p>
                  </div>

                  {/* Day Picker */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 font-extrabold block">
                      1. Preferred Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {days.map((d) => (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDay(d.label)}
                          className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDay === d.label
                              ? 'bg-[#0077b6] text-white border-[#0077b6] font-bold shadow-xs'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white'
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight font-display uppercase">{d.label}</div>
                          <div className={`text-[10px] font-sans ${selectedDay === d.label ? 'text-white/80' : 'text-zinc-400'}`}>
                            {d.date}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Picker */}
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
                              ? 'bg-[#0077b6] text-white border-[#0077b6] font-extrabold shadow-xs'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-4 pt-2 border-t border-zinc-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rachel Adams"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          Opportunity Type
                        </label>
                        <select
                          value={roleType}
                          onChange={(e) => setRoleType(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:bg-white"
                        >
                          <option value="Full-Time Senior SDR / Lead Rep">Full-Time Senior SDR / Lead Rep</option>
                          <option value="Outbound Team Lead / Coach">Outbound Team Lead / Coach</option>
                          <option value="Contract / Sprint Pipeline Project">Contract / Sprint Pipeline Project</option>
                          <option value="Introductory Networking Chat">Introductory Networking Chat</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-display uppercase tracking-wider text-zinc-600 block mb-1 font-bold">
                        Notes / Current Outbound Targets (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell me about your product, your ICP, or your monthly meeting targets..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0077b6] rounded-xl px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white font-bold text-xs uppercase font-display tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Reserving Slot & Sending...</span>
                    ) : (
                      <>
                        <span>Confirm 15-Minute Sync with Flynn</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-sans text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Confidential · Calendar invite dispatched directly to your inbox</span>
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
