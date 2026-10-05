import React, { useEffect, useMemo, useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { sendInquiryEmails } from '../lib_email';

interface BookingModalProps { isOpen: boolean; onClose: () => void; defaultPreference?: 'Part-Time' | 'Full-Time'; }

function nextBusinessDays(count = 7) {
  const days: { label: string; date: string; iso: string }[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day === 0 || day === 6) continue;
    days.push({ label: cursor.toLocaleDateString('en-US', { weekday: 'long' }), date: cursor.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), iso: cursor.toISOString().slice(0, 10) });
  }
  return days;
}

export default function BookingModal({ isOpen, onClose, defaultPreference }: BookingModalProps) {
  const days = useMemo(() => nextBusinessDays(), []);
  const [selectedDay, setSelectedDay] = useState(days[0]?.iso || '');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [inquiryType, setInquiryType] = useState('Interview');
  const [preference, setPreference] = useState(defaultPreference || 'Full-Time');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => { if (defaultPreference) setPreference(defaultPreference); }, [defaultPreference]);
  if (!isOpen) return null;

  const selectedDate = days.find(d => d.iso === selectedDay);
  const reset = () => { setIsBooked(false); setError(''); onClose(); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setError('Please confirm the email consent before submitting.'); return; }
    setLoading(true); setError('');
    try {
      await sendInquiryEmails({
        fullName: name, email, company, role, inquiryType, employmentPreference: preference,
        selectedDate: selectedDate?.date || selectedDay, selectedTime, message, consent,
        timestamp: new Date().toISOString(), timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, source: window.location.href,
      });
      setIsBooked(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send the inquiry. Please try again.');
    } finally { setLoading(false); }
  };

  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in text-[#0d0e0c]">
    <div className="relative w-full max-w-2xl bg-white border border-[#dededb] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
      <div className="p-5 sm:p-6 bg-[#f7f7f6] border-b border-[#dededb] flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-sky-50 border border-[#0077b6]/20 text-[#0077b6] flex items-center justify-center"><Calendar className="w-5 h-5" /></div><div><h3 className="text-lg font-black uppercase font-display tracking-tight">Schedule 15-Minute Intro With Flynn</h3><p className="text-xs text-zinc-500">Direct 1-on-1 intro for SDR hiring and outbound opportunities.</p></div></div>
        <button onClick={onClose} className="p-2 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-200/60"><X className="w-5 h-5" /></button>
      </div>
      <div className="p-6 sm:p-8">
        {isBooked ? <div className="text-center py-8 space-y-6"><div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full mx-auto flex items-center justify-center"><CheckCircle2 className="w-10 h-10" /></div><h4 className="text-2xl font-black uppercase font-display">Inquiry Sent</h4><p className="text-sm text-zinc-600 max-w-md mx-auto">Thanks, <strong>{name}</strong>. Your request for <strong>{selectedDate?.date} at {selectedTime}</strong> was sent to Flynn, and a confirmation was sent to <strong>{email}</strong>.</p><button onClick={reset} className="px-8 py-3 bg-[#0077b6] text-white font-extrabold text-xs uppercase rounded-xl">Return to Portfolio</button></div> :
        <form onSubmit={submit} className="space-y-6 text-left">
          <div className="space-y-2"><label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700">1. Select a Day</label><div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{days.map(d => <button type="button" key={d.iso} onClick={() => setSelectedDay(d.iso)} className={`p-3 rounded-xl border text-center ${selectedDay === d.iso ? 'bg-[#0077b6] text-white border-[#0077b6]' : 'bg-[#f7f7f6] border-[#dededb] text-zinc-700'}`}><div className="text-xs font-display uppercase font-bold">{d.label}</div><div className="text-[10px] opacity-80">{d.date}</div></button>)}</div></div>
          <div className="space-y-2"><label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700">2. Pick a Time</label><div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{['9:30 AM','10:00 AM','11:00 AM','1:30 PM','2:30 PM','4:00 PM','4:45 PM'].map(t => <button type="button" key={t} onClick={() => setSelectedTime(t)} className={`py-2 px-3 rounded-xl border text-xs font-display uppercase ${selectedTime === t ? 'bg-[#0077b6] text-white border-[#0077b6]' : 'bg-[#f7f7f6] border-[#dededb] text-zinc-700'}`}>{t}</button>)}</div></div>
          <div className="space-y-3 pt-2 border-t border-zinc-100"><label className="text-xs font-display uppercase tracking-wider font-extrabold text-zinc-700">3. Your Details</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name *" className="field"/><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Work Email *" className="field"/></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input required value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company *" className="field"/><input value={role} onChange={e=>setRole(e.target.value)} placeholder="Role / Title" className="field"/></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><select value={inquiryType} onChange={e=>setInquiryType(e.target.value)} className="field"><option>Interview</option><option>Part-Time SDR Inquiry</option><option>Full-Time SDR Inquiry</option><option>Partnership</option><option>Other</option></select><select value={preference} onChange={e=>setPreference(e.target.value as 'Part-Time'|'Full-Time')} className="field"><option>Part-Time</option><option>Full-Time</option></select></div>
            <textarea rows={3} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message / goals for the intro" className="field resize-none"/>
            <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-0.5 accent-[#0077b6]"/><span>I'm okay with Flynn emailing me about my inquiry. No spam, ever.</span></label>
          </div>
          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">{error}</div>}
          <button type="submit" disabled={loading || !consent} className="w-full py-3.5 bg-[#0077b6] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase rounded-xl flex items-center justify-center gap-2 disabled:opacity-50">{loading ? 'Sending Inquiry…' : <>Confirm Schedule <ArrowRight className="w-4 h-4"/></>}</button>
        </form>}
      </div>
    </div>
  </div>;
}
