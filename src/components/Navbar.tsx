import React, { useState, useEffect, useRef } from 'react';
import FlynnLogo from './FlynnLogo';
import { PageRoute } from '../types';
import {
  Menu,
  X,
  Calendar,
  Headphones,
  Briefcase,
  Layers,
  FileText,
  ChevronDown,
  Building2,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const servicesTimeout = useRef<number | null>(null);
  const industriesTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
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

  const isVisible = currentPage !== 'home' || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100 bg-[#fafaf8]/95 backdrop-blur-md border-b border-[#dededb] shadow-xs py-2.5 sm:py-3'
          : '-translate-y-full opacity-0 pointer-events-none py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleLinkClick('home')}>
            <FlynnLogo size="sm" variant="dark" />
          </div>

          {/* Desktop Multi-Page Nav with Interactive Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#f1f1ee] border border-[#dededb] rounded-full px-3 py-1 shadow-2xs">
            {/* 1. "Flynn" (formerly "Home") */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Flynn
            </button>

            {/* 2. "Services Offered" Dropdown */}
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
                onClick={() => handleLinkClick('services')}
                className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  isServicesActive
                    ? 'bg-[#0077b6] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black hover:bg-white/80'
                }`}
              >
                <span>Services Offered</span>
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
                    onClick={() => handleLinkClick('services')}
                    className="w-full px-3 py-2 text-xs font-display font-bold uppercase text-zinc-900 hover:bg-sky-50 hover:text-[#0077b6] rounded-xl text-left flex items-center justify-between"
                  >
                    <span>All Services Overview</span>
                    <span className="text-[10px] text-zinc-400">Hub</span>
                  </button>
                  {servicesData.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleLinkClick(s.slug as PageRoute)}
                      className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between ${
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

            {/* 3. "Industries" Dropdown */}
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
                    onClick={() => handleLinkClick('industries')}
                    className="w-full px-3 py-2 text-xs font-display font-bold uppercase text-zinc-900 hover:bg-sky-50 hover:text-[#0077b6] rounded-xl text-left flex items-center justify-between"
                  >
                    <span>All Industries Overview</span>
                    <span className="text-[10px] text-zinc-400">Hub</span>
                  </button>
                  {industriesData.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => handleLinkClick(ind.slug as PageRoute)}
                      className={`w-full px-3 py-2 text-xs font-display font-bold uppercase rounded-xl text-left flex items-center justify-between ${
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

            {/* 4. Hear My Opener */}
            <button
              onClick={() => handleLinkClick('calls')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'calls'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              <span>Hear My Opener</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                  currentPage === 'calls'
                    ? 'bg-white text-[#0077b6]'
                    : 'bg-[#0077b6]/15 text-[#0077b6]'
                }`}
              >
                7 Calls
              </span>
            </button>

            {/* 5. Hire Me */}
            <button
              onClick={() => handleLinkClick('hire-me')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'hire-me'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Hire Me
            </button>

            {/* 6. References */}
            <button
              onClick={() => handleLinkClick('references')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'references'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              References
            </button>

            {/* 7. Playbook */}
            <button
              onClick={() => handleLinkClick('academy')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'academy' || currentPage === 'playbook'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Playbook
            </button>

            {/* 8. Experience */}
            <button
              onClick={() => handleLinkClick('experience')}
              className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer ${
                currentPage === 'experience'
                  ? 'bg-[#0077b6] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-white/80'
              }`}
            >
              Experience
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available · Immediate Start</span>
            </div>

            <button
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
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#0077b6] text-white text-[11px] font-display font-extrabold uppercase rounded-lg shadow-xs"
            >
              Intro
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf8] border-b border-[#dededb] px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => handleLinkClick('home')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'home' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Flynn
            </button>

            <button
              onClick={() => handleLinkClick('calls')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase flex items-center justify-between ${
                currentPage === 'calls' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              <span>Hear My Opener</span>
              <span className="text-[9px] bg-sky-200/50 px-1.5 py-0.5 rounded text-[#0077b6]">7</span>
            </button>

            <button
              onClick={() => handleLinkClick('services')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                isServicesActive ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Services (Hub)
            </button>

            <button
              onClick={() => handleLinkClick('industries')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                isIndustriesActive ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Industries (Hub)
            </button>

            <button
              onClick={() => handleLinkClick('hire-me')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'hire-me' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Hire Me
            </button>

            <button
              onClick={() => handleLinkClick('references')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'references' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              References
            </button>

            <button
              onClick={() => handleLinkClick('academy')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'academy' || currentPage === 'playbook'
                  ? 'bg-[#0077b6] text-white'
                  : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Playbook
            </button>

            <button
              onClick={() => handleLinkClick('experience')}
              className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase ${
                currentPage === 'experience' ? 'bg-[#0077b6] text-white' : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Experience
            </button>
          </div>

          {/* Quick Service Sublinks in Mobile Drawer */}
          <div className="pt-2 border-t border-zinc-200 space-y-1">
            <span className="text-[10px] font-display uppercase tracking-wider text-zinc-400 font-bold block px-1">
              Direct Service Pages:
            </span>
            <div className="grid grid-cols-1 gap-1">
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleLinkClick(s.slug as PageRoute)}
                  className="px-2 py-1.5 text-[11px] font-display font-semibold uppercase text-zinc-700 hover:text-[#0077b6] text-left rounded hover:bg-zinc-100"
                >
                  • {s.shortTitle}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-[#0077b6] text-white text-xs font-display font-extrabold uppercase rounded-lg shadow-xs"
            >
              Schedule 15-Minute Intro
            </button>
          </div>
        </div>
      )}
    </header>
  );
}