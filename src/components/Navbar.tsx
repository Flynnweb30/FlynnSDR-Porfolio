import React, { useState, useRef } from 'react';
import FlynnLogo from './FlynnLogo';
import { PageRoute } from '../types';
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time' | 'Team Leader') => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const servicesTimeout = useRef<number | null>(null);
  const industriesTimeout = useRef<number | null>(null);
  const moreTimeout = useRef<number | null>(null);

  const handleLinkClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setMoreOpen(false);
    onNavigate(route);
  };

  const isServicesActive =
    currentPage === 'services' ||
    currentPage === 'service-cold-calling' ||
    currentPage === 'service-appointment-setting' ||
    currentPage === 'service-lead-qualification' ||
    currentPage === 'service-sdr-coaching';

  const isIndustriesActive =
    currentPage === 'industries' ||
    currentPage === 'industry-saas-tech' ||
    currentPage === 'industry-marketing-agencies' ||
    currentPage === 'industry-b2b-events' ||
    currentPage === 'industry-commercial-contracting';

  const isMoreActive =
    currentPage === 'calls' ||
    currentPage === 'references' ||
    currentPage === 'academy' ||
    currentPage === 'playbook' ||
    currentPage === 'work-with-me' ||
    currentPage === 'hire-me';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-md border-b border-[#dededb] shadow-2xs py-2.5 sm:py-3 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo on the Left */}
          <div
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer focus:outline-none shrink-0"
            title="Flynn James"
          >
            <FlynnLogo size="sm" variant="dark" />
          </div>

          {/* Desktop Navigation in Exact Required Order:
              1. Flynn | 2. Experience | 3. Services | 4. Industries | 5. More ▾ */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#f1f1ee] border border-[#dededb] rounded-full px-3 py-1 shadow-2xs">
            {/* 1. Flynn */}
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Flynn
            </button>

            {/* 2. Experience */}
            <button
              type="button"
              onClick={() => handleLinkClick('experience')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'experience'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Experience
            </button>

            {/* 3. Services (Interactive Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeout.current = window.setTimeout(() => setServicesOpen(false), 200);
              }}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('services')}
                className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  isServicesActive
                    ? 'bg-[#0077b6] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black hover:bg-white/80'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#dededb] rounded-2xl shadow-xl p-2 z-50 text-left animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold border-b border-zinc-100 mb-1">
                    Outbound Sales Capabilities
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services')}
                    className="w-full px-3 py-2 text-xs font-display font-bold uppercase text-zinc-900 hover:bg-sky-50 hover:text-[#0077b6] rounded-xl text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>All Services Overview</span>
                    <span className="text-[10px] text-zinc-400">Hub</span>
                  </button>
                  {servicesData.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => handleLinkClick(s.slug as PageRoute)}
                      className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                        currentPage === s.slug
                          ? 'bg-[#0077b6] text-white'
                          : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                      }`}
                    >
                      <span className="truncate">{s.shortTitle}</span>
                      <span className="text-[9px] opacity-70 shrink-0 ml-1">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Industries (Interactive Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
                setIndustriesOpen(true);
              }}
              onMouseLeave={() => {
                industriesTimeout.current = window.setTimeout(() => setIndustriesOpen(false), 200);
              }}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('industries')}
                className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  isIndustriesActive
                    ? 'bg-[#0077b6] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black hover:bg-white/80'
                }`}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#dededb] rounded-2xl shadow-xl p-2 z-50 text-left animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold border-b border-zinc-100 mb-1">
                    Sectors & Track Record
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('industries')}
                    className="w-full px-3 py-2 text-xs font-display font-bold uppercase text-zinc-900 hover:bg-sky-50 hover:text-[#0077b6] rounded-xl text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>All Industries Overview</span>
                    <span className="text-[10px] text-zinc-400">Hub</span>
                  </button>
                  {industriesData.map((ind) => (
                    <button
                      type="button"
                      key={ind.id}
                      onClick={() => handleLinkClick(ind.slug as PageRoute)}
                      className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                        currentPage === ind.slug
                          ? 'bg-[#0077b6] text-white'
                          : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                      }`}
                    >
                      <span className="truncate">{ind.shortTitle}</span>
                      <span className="text-[9px] opacity-70 shrink-0 ml-1">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. More ▾ Dropdown:
                - Hear My Opener
                - References
                - Playbook
                - Work With Me */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (moreTimeout.current) clearTimeout(moreTimeout.current);
                setMoreOpen(true);
              }}
              onMouseLeave={() => {
                moreTimeout.current = window.setTimeout(() => setMoreOpen(false), 200);
              }}
            >
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  isMoreActive
                    ? 'bg-[#0077b6] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black hover:bg-white/80'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-[#dededb] rounded-2xl shadow-xl p-2 z-50 text-left animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold border-b border-zinc-100 mb-1">
                    More Sections
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('calls')}
                    className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                      currentPage === 'calls'
                        ? 'bg-[#0077b6] text-white'
                        : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                    }`}
                  >
                    <span>Hear My Opener</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-[#0077b6]/15 text-[#0077b6]">
                      7 Calls
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLinkClick('references')}
                    className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                      currentPage === 'references'
                        ? 'bg-[#0077b6] text-white'
                        : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                    }`}
                  >
                    <span>References</span>
                    <span className="text-[9px] opacity-70">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLinkClick('academy')}
                    className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                      currentPage === 'academy' || currentPage === 'playbook'
                        ? 'bg-[#0077b6] text-white'
                        : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                    }`}
                  >
                    <span>Playbook</span>
                    <span className="text-[9px] opacity-70">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLinkClick('work-with-me')}
                    className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between cursor-pointer ${
                      currentPage === 'work-with-me' || currentPage === 'hire-me'
                        ? 'bg-[#0077b6] text-white'
                        : 'text-zinc-700 hover:bg-sky-50 hover:text-[#0077b6]'
                    }`}
                  >
                    <span>Work With Me</span>
                    <span className="text-[9px] opacity-70">→</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* 6. Schedule Intro (CTA Button on the Right) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available · Immediate Start</span>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Schedule Intro</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#0077b6] text-white text-[11px] font-display font-extrabold uppercase rounded-lg shadow-xs"
            >
              Intro
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Consistent Navigation Order) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf8] border-b border-[#dededb] px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'home' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Flynn
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('experience')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'experience' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Experience
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('services')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                isServicesActive ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Services (Hub)
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('industries')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                isIndustriesActive ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Industries (Hub)
            </button>
          </div>

          <div className="pt-2 border-t border-zinc-200 space-y-1">
            <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 font-bold block px-1">
              More Options:
            </span>
            <div className="grid grid-cols-1 gap-1">
              <button
                type="button"
                onClick={() => handleLinkClick('calls')}
                className="px-2 py-1.5 text-xs font-display font-semibold uppercase text-zinc-700 hover:text-[#0077b6] text-left rounded hover:bg-zinc-100 flex items-center justify-between"
              >
                <span>• Hear My Opener</span>
                <span className="text-[10px] bg-sky-100 text-[#0077b6] px-1.5 rounded">7 Calls</span>
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('references')}
                className="px-2 py-1.5 text-xs font-display font-semibold uppercase text-zinc-700 hover:text-[#0077b6] text-left rounded hover:bg-zinc-100"
              >
                • References
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('academy')}
                className="px-2 py-1.5 text-xs font-display font-semibold uppercase text-zinc-700 hover:text-[#0077b6] text-left rounded hover:bg-zinc-100"
              >
                • Playbook
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('work-with-me')}
                className="px-2 py-1.5 text-xs font-display font-semibold uppercase text-zinc-700 hover:text-[#0077b6] text-left rounded hover:bg-zinc-100"
              >
                • Work With Me
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-[#0077b6] text-white text-xs font-display font-extrabold uppercase rounded-lg shadow-xs cursor-pointer"
            >
              Schedule 15-Minute Intro
            </button>
          </div>
        </div>
      )}
    </header>
  );
}