import React from 'react';
import SalesPlaybook from '../components/SalesPlaybook';
import EmailTemplates from '../components/EmailTemplates';
import PipelineCalculator from '../components/PipelineCalculator';
import { Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface PlaybookPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function PlaybookPage({ onNavigate, onOpenBooking }: PlaybookPageProps) {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      
      {/* Header Banner - Matching existing design Playbook Style */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Outbound Methodology & Cadence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              The 150 Dials/Day Cadence & Qualification Playbook.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              Proven outbound frameworks combining BANT qualification, pattern-interrupt cold calling, multi-touch sequences, and rigorous pipeline hygiene.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>BANT / MEDDIC Qualified</span>
              </span>
              <span>·</span>
              <span>150+ Daily Dials</span>
              <span>·</span>
              <span>+18% Script Response Lift</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Playbook */}
      <SalesPlaybook />

      {/* Battle-Tested Email Templates */}
      <EmailTemplates />

      {/* ROI & Pipeline Calculator */}
      <PipelineCalculator onOpenBooking={onOpenBooking} />

    </div>
  );
}
