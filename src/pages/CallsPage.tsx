import React from 'react';
import ColdCallVault from '../components/ColdCallVault';
import { Headphones, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface CallsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function CallsPage({ onNavigate, onOpenBooking }: CallsPageProps) {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-mono uppercase tracking-widest text-[#0077b6] font-bold shadow-2xs">
              <Headphones className="w-3.5 h-3.5" />
              <span>Sales Call Library</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              Hear My Opener: Real Dials, Real Bookings.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              No hypothetical roleplays or scripted videos. Below are 7 unedited outbound call recordings of Flynn dialing B2B prospects, disarming skepticism on the fly, recovering lost pipeline, qualifying business scope, and securing confirmed appointments.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>7 Real Outbound Audio Recordings</span>
              </span>
              <span>·</span>
              <span>Categorized by Tactical SDR Execution</span>
              <span>·</span>
              <span>Contact Information Protected</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <ColdCallVault />
      </div>

      <section className="mt-16 py-14 bg-white border-t border-[#dededb] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[#0d0e0c]">
            Like What You Hear?
          </h3>
          <p className="text-sm text-zinc-600 max-w-xl mx-auto font-sans">
            Bring this level of outbound phone stamina, active listening, and objection de-escalation to your sales organization today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white font-bold text-xs uppercase font-display tracking-wider rounded-xl shadow-xs cursor-pointer"
            >
              Schedule 15-Minute Intro
            </button>
            <button
              onClick={() => onNavigate('hire-me')}
              className="px-6 py-3 bg-[#fafaf8] hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-bold text-xs uppercase font-display tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Review Role Packages & Hire Flynn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}