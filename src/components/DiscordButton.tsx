import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function DiscordButton() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('flynn30');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" onClick={copy} title="Copy Discord username: flynn30" aria-label="Copy Discord username flynn30" className="p-1.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:text-[#5865f2] transition-colors cursor-pointer flex items-center gap-1.5">
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M19.54 5.3A16.2 16.2 0 0 0 15.46 4l-.5 1.03a14.5 14.5 0 0 0-5.92 0L8.54 4a16.2 16.2 0 0 0-4.08 1.3C1.87 9.2 1.17 13 .82 16.75a16.6 16.6 0 0 0 5 2.55l1.2-1.65c-.66-.25-1.3-.57-1.9-.94l.47-.36c3.67 1.72 7.65 1.72 11.28 0l.48.36c-.6.37-1.24.69-1.9.94l1.2 1.65a16.6 16.6 0 0 0 5-2.55c-.4-4.4-1.55-8.2-3.62-11.45ZM8.5 14.63c-1.1 0-2-.99-2-2.2s.9-2.2 2-2.2 2 .99 2 2.2-.9 2.2-2 2.2Zm7 0c-1.1 0-2-.99-2-2.2s.9-2.2 2-2.2 2 .99 2 2.2-.9 2.2-2 2.2Z"/></svg>}
      <span className="sr-only">{copied ? 'Copied' : 'Copy Discord username'}</span>
    </button>
  );
}
