import React, { useEffect, useMemo, useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { sendInquiryEmails, InquiryPayload } from '../lib_email';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPreference?: 'Part-Time' | 'Full-Time';
}

function nextBusinessDays(count = 7) {
  const days: { label: string; date: string; iso: string }[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day === 0 || day === 6) continue;
    days.push({
      label: cursor.toLocaleDateString('en-US', { weekday: 'long' }),
      date: cursor.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      iso: cursor.toISOString().slice(0, 10),
    });
  }
  return days;
}

export default function BookingModal({ isOpen, onClose, defaultPreference }: BookingModalProps) {
  const days = useMemo(() => nextBusinessDays(), []);
  const [selectedDay, setSelectedDay] = useState(days[0]?.iso || '');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [inquiryType, setInquiryType] = useState<'Interview' | 'SDR Inquiry' | 'Partnership' | 'Other'>('Interview');
  const [preference, setPreference] = useState<'Part-Time' | 'Full-Time'>(defaultPreference || 'Full-Time');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultPreference) setPreference(defaultPreference);
  }, [defaultPreference]);

  if (!isOpen) return null;

  const selectedDate = days.find((d) => d.iso === selectedDay);
  const reset = () => {
    setIsBooked(false);
    setError('');
    onClose();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError('Please confirm consent to receive your calendar invitation and follow-up email.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const payload: InquiryPayload = {
        fullName: name,
        email,
        company,
        role: role || 'Hiring Team / Executive',
        inquiryType,
        employmentPreference: preference,
        selectedDate: selectedDate?.date || selectedDay,
        selectedTime,
        message,
        consent,
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        source: `${window.location.origin}${window.location.pathname}#modal`,
      };
      await sendInquiryEmails(payload);
      setIsBooked(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to complete submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in text-[#0d0e0c]">
      <div className="relative w-full max-w-2xl bg-white border border-[#dededb] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-5 sm:p-6 bg-[#f7f7f6] border-b border-[#dededb] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-[#0077b6]/20 text-[#0077b6] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-black uppercase font-display tracking-tight text-zinc-950">
                Schedule 15-Minute Intro With Flynn
              </h3>
              <p className="text-xs text-zinc-500 font-sans">
                Direct 1-on-1 intro for Senior SDR, outbound dialing, and appointment setting opportunities.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isBooked ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black uppercase font-display text-zinc-950">
                  Intro Scheduled & Message Dispatched
                </h4>
                <p className="text-sm text-zinc-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-zinc-900">{name}</strong>. Your inquiry for <strong className="text-[#0077b6]">{inquiryType}</strong> ({preference}) has been reserved for <strong className="text-zinc-900">{selectedDate?.date} at {selectedTime}</strong>. Calendar invite & briefing will be delivered to <strong className="text-[#0077b6]">{email}</strong>.
                </p>
              </div>
              <button
                onClick={reset}
                className="px-8 py-3 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase font-display tracking-wider rounded-xl cursor-pointer"
              >
                Return to Portfolio
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700 block">
                  1. Select a Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {days.map((d) => (
                    <button
                      type="button"
                      key={d.iso}
                      onClick={() => setSelectedDay(d.iso)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDay === d.iso
                          ? 'bg-[#0077b6] text-white border-[#0077b6] shadow-xs'
                          : 'bg-[#f7f7f6] border-[#dededb] text-zinc-700 hover:bg-white'
                      }`}
                    >
                      <div className="text-xs font-display uppercase font-bold">{d.label}</div>
                      <div className="text-[10px] opacity-80 font-sans">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700 block">
                  2. Pick a Time Window (EST)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['9:30 AM EST', '10:00 AM EST', '11:00 AM EST', '1:30 PM EST', '2:30 PM EST', '4:00 PM EST', '4:45 PM EST'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-3 rounded-xl border text-xs font-display uppercase text-center transition-all cursor-pointer ${
                        selectedTime === t
                          ? 'bg-[#0077b6] text-white border-[#0077b6] font-bold shadow-xs'
                          : 'bg-[#f7f7f6] border-[#dededb] text-zinc-700 hover:bg-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-100">
                <label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700 block">
                  3. Contact & Opportunity Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Full Name *</span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rachel Adams"
                      className="field"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Work Email *</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rachel@company.com"
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Company / Website *</span>
                    <input
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Tech or acme.com"
                      className="field"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Your Role / Title</span>
                    <input
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="VP of Sales / Founder"
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Reason for Contact *</span>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as any)}
                      className="field"
                    >
                      <option value="Interview">Interview</option>
                      <option value="SDR Inquiry">SDR Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Employment Preference *</span>
                    <select
                      value={preference}
                      onChange={(e) => setPreference(e.target.value as 'Part-Time' | 'Full-Time')}
                      className="field"
                    >
                      <option value="Full-Time">Full-Time Senior SDR</option>
                      <option value="Part-Time">Part-Time Senior SDR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-display uppercase text-zinc-500 font-bold block mb-1">Outbound Targets / Campaign Notes</span>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Flynn about your ICP, monthly discovery meeting targets, or outbound tech stack..."
                    className="field resize-none"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer pt-1 font-sans">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#0077b6]"
                  />
                  <span>
                    I confirm consent for Flynn to email me regarding this appointment and outbound inquiry. No marketing spam, ever. *
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
                className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] active:scale-98 text-white font-extrabold text-xs uppercase font-display tracking-wider rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
              >
                {loading ? (
                  <span>Reserving Window & Sending...</span>
                ) : (
                  <>
                    <span>Confirm 15-Minute Intro With Flynn</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
