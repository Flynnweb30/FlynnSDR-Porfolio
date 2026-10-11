import React from 'react';
import FlynnLogo from './FlynnLogo';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import {
  ArrowUp,
  Mail,
  Phone,
  Linkedin,
  Calendar,
  FileText,
  ShieldCheck,
  Award,
  Briefcase,
  Building2,
  Headphones,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
  onOpenResume: () => void;
}

export default function Footer({ onNavigate, onOpenBooking, onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f7f7f6] border-t border-[#dededb] pt-14 pb-12 text-[#0d0e0c] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 5-Column Structured Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          {/* Column 1: Brand & Executive Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-block focus:outline-none"
              title="Flynn James - Home"
            >
              <FlynnLogo size="md" variant="dark" />
            </div>

            <div className="space-y-1">
              <div className="text-xs font-display font-extrabold uppercase tracking-wide text-zinc-900">
                Heavyweight TL / Senior SDR · Sales Coach
              </div>
              <p className="text-xs text-zinc-600 font-sans leading-relaxed max-w-sm">
                11+ years executing high-volume B2B cold calling (150+ dials/day), consultative BANT/MEDDIC qualification, SDR sales floor coaching, and predictable pipeline generation across US, UK, and APAC campaigns.
              </p>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-mono text-emerald-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available · Immediate Start (US/UK/PH)</span>
              </div>
              <div className="text-[11px] font-sans text-zinc-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Toledo, Cebu, Philippines (Remote Worldwide)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Hubs (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('work-with-me')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left font-medium text-zinc-900"
                >
                  Work With Me
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('calls')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Hear My Opener (7 Calls)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Services Offered
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Industries Served
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('references')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Client References
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('academy')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Outbound Playbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Career Track Record
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-cold-calling')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Cold Calling (150+ Dials)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-appointment-setting')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Appointment Setting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-lead-qualification')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  BANT Qualification
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-sdr-coaching')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  SDR Team Coaching
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left font-medium text-[#0077b6] pt-1 block"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Industry Verticals (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Industries
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industry-saas-tech')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Enterprise SaaS & Tech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industry-marketing-agencies')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Marketing Agencies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industry-b2b-events')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  B2B Events & Summits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industry-commercial-contracting')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left"
                >
                  Commercial Trades
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#0077b6] transition-colors cursor-pointer text-left font-medium text-[#0077b6] pt-1 block"
                >
                  View All Verticals →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Coordinates & CTAs (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold">
              Connect
            </h4>
            <div className="space-y-2 text-xs font-sans text-zinc-600">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-zinc-800 hover:text-[#0077b6] font-medium transition-colors"
                title="Email Flynn"
              >
                <Mail className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-zinc-800 hover:text-[#0077b6] font-medium transition-colors"
                title="Call or WhatsApp"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-800 hover:text-[#0077b6] font-medium transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full py-2 px-3 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase rounded-xl transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Schedule Intro</span>
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="w-full py-2 px-3 bg-white hover:bg-zinc-100 border border-[#dededb] text-zinc-800 text-xs font-display font-bold uppercase rounded-xl transition-colors cursor-pointer shadow-2xs flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                <span>PDF Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-to-Top Bar */}
        <div className="pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>© 2026 Flynn James Q. Pontino. Heavyweight TL / Senior SDR & B2B Outbound Sales Leader.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[#0077b6] cursor-pointer inline-flex items-center gap-1.5 font-medium transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 shrink-0" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}