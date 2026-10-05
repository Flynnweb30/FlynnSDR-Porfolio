import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, CalendarDays, CheckCircle2, Loader2, X } from 'lucide-react';

interface Props { isOpen: boolean; onClose: () => void; defaultPreference?: 'Part-Time' | 'Full-Time' | ''; }

const env = import.meta.env;
const serviceId = env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const notificationTemplateId = env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID as string | undefined;
const confirmationTemplateId = env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID as string | undefined;
const publicKey = env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const notificationRecipient = env.VITE_NOTIFICATION_EMAIL || 'va.flynnjames@gmail.com';

export default function BookingModal({ isOpen, onClose, defaultPreference = '' }: Props) {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', inquiryType: 'Senior SDR opportunity', workPreference: defaultPreference, dateTime: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const update = (key: keyof typeof form, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!form.consent) { setError('Please confirm the email consent before submitting.'); return; }
    setStatus('sending');
    const timestamp = new Date().toISOString();
    const vars = { ...form, consent: form.consent ? 'Yes' : 'No', timestamp, to_email: notificationRecipient };
    try {
      if (!serviceId || !notificationTemplateId || !confirmationTemplateId || !publicKey) throw new Error('Email service is not configured yet.');
      await emailjs.send(serviceId, notificationTemplateId, vars, publicKey);
      await emailjs.send(serviceId, confirmationTemplateId, vars, publicKey);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'The inquiry could not be sent. Please email Flynn directly.');
    }
  };

  const reset = () => { setForm({ name: '', email: '', company: '', role: '', inquiryType: 'Senior SDR opportunity', workPreference: defaultPreference, dateTime: '', message: '', consent: false }); setStatus('idle'); setError(''); onClose(); };

  return <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="schedule-title">
    <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 p-5 backdrop-blur">
        <div><p className="eyebrow">15-minute intro</p><h2 id="schedule-title" className="text-2xl font-black">Schedule a conversation with Flynn</h2></div>
        <button onClick={onClose} aria-label="Close scheduling form" className="rounded-full p-2 hover:bg-slate-100"><X size={20}/></button>
      </div>
      <div className="p-5 sm:p-7">
        {status === 'success' ? <div className="py-12 text-center"><CheckCircle2 className="mx-auto mb-5 text-emerald-600" size={58}/><h3 className="mb-2 text-3xl font-black">Inquiry received.</h3><p className="mx-auto max-w-md text-slate-600">Your details and requested schedule were sent successfully. Flynn will follow up with the next step.</p><button onClick={reset} className="btn-primary mt-7">Done</button></div> : <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required><input required value={form.name} onChange={e => update('name', e.target.value)} /></Field>
            <Field label="Email" required><input required type="email" value={form.email} onChange={e => update('email', e.target.value)} /></Field>
            <Field label="Company" required><input required value={form.company} onChange={e => update('company', e.target.value)} /></Field>
            <Field label="Role" required><input required value={form.role} onChange={e => update('role', e.target.value)} placeholder="e.g. Founder, Head of Sales" /></Field>
            <Field label="Inquiry type" required><select required value={form.inquiryType} onChange={e => update('inquiryType', e.target.value)}><option>Senior SDR opportunity</option><option>Part-Time SDR inquiry</option><option>Full-Time SDR inquiry</option><option>Outbound sales support</option><option>Other</option></select></Field>
            <Field label="Work preference" required><select required value={form.workPreference} onChange={e => update('workPreference', e.target.value)}><option value="">Select one</option><option>Part-Time</option><option>Full-Time</option></select></Field>
          </div>
          <Field label="Preferred date & time" required><input required type="datetime-local" value={form.dateTime} onChange={e => update('dateTime', e.target.value)} /></Field>
          <Field label="Message"><textarea rows={4} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell Flynn what you are hiring for, target market, hours, or outbound goals." /></Field>
          <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><input required type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} className="mt-1 h-4 w-4"/><span><strong>I'm okay with Flynn emailing me about my inquiry. No spam, ever.</strong></span></label>
          {error && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error} {!serviceId && <span>Please configure the EmailJS variables before deployment.</span>}</div>}
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">{status === 'sending' ? <><Loader2 className="animate-spin" size={17}/> Sending…</> : <>Confim Schedule <ArrowRight size={17}/></>}</button>
          <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500"><CalendarDays size={14}/> Requested time is subject to final confirmation.</p>
        </form>}
      </div>
    </div>
  </div>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">{label}{required ? ' *' : ''}</span>{React.cloneElement(children as React.ReactElement, { className: 'field' })}</label>; }
