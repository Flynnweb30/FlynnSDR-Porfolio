import React, { useState, useEffect } from 'react';
import FlynnLogo from './FlynnLogo';
import { PageRoute } from '../types';
import { Menu, X, Calendar, Headphones, Briefcase, Layers, Users, Mail, Home, FileText } from 'lucide-react';
import { personalInfo } from '../data/flynnData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; badge?: string; icon: any }[] = [
    { label: 'Home', route: 'home', icon: Home },
    { label: 'Hear My Opener', route: 'calls', badge: '3 Calls', icon: Headphones },
    { label: 'Hire Me', route: 'hire-me', icon: Mail },
    { label: 'References', route: 'references', icon: FileText },
    { label: 'Playbook', route: 'academy', icon: Layers },
    { label: 'Experience', route: 'experience', icon: Briefcase },
  ];

  const handleLinkClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  // On homepage before scrolling, the hero section has its own top script logo and banknotes.
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

          {/* Desktop Multi-Page Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#f1f1ee] border border-[#dededb] rounded-full px-3 py-1 shadow-2xs">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-tight rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0077b6] text-white shadow-xs'
                      : 'text-zinc-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-white text-[#0077b6]'
                          : 'bg-[#0077b6]/15 text-[#0077b6]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Availability & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available · Immediate Start</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] active:scale-95 text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Schedule Intro</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-[#0077b6] text-white text-[11px] font-display font-extrabold uppercase rounded-lg shadow-xs"
            >
              Intro
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf8] border-b border-[#dededb] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`p-2.5 rounded-lg text-left text-xs font-display font-bold uppercase flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0077b6] text-white'
                      : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-200 flex flex-col gap-2">
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