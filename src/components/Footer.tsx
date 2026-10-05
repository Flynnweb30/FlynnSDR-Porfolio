import React from 'react';
import FlynnLogo from './FlynnLogo';
import BanknoteNav from './BanknoteNav';
import { PageRoute } from '../types';
import { personalInfo } from '../data/flynnData';
import { ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';

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
    <footer className="bg-[#fafaf8] border-t border-[#dededb] py-16 text-[#0d0e0c] text-center space-y-8 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* 4 Banknotes centered */}
        <div className="flex justify-center">
          <BanknoteNav onNavigate={onNavigate} size="sm" />
        </div>

        {/* Big Signature "Flynn" in the middle (Matching PDF Page 5) */}
        <div className="pt-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <span className="font-script text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#0d0e0c] block transform -rotate-3 hover:scale-105 transition-transform">
            Flynn
          </span>
        </div>

        {/* Copyright notice matching existing design exactly */}
        <p className="text-[11px] font-sans text-zinc-400 max-w-lg mx-auto leading-relaxed">
          This website does not assert claims. Copyright owned by Flynn. This website does not accept liability of any form
        </p>

        {/* Direct Contacts & Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-600">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#0077b6] font-bold">
            {personalInfo.email}
          </a>
          <span>·</span>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#0077b6] font-bold">
            {personalInfo.phone}
          </a>
          <span>·</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b6] font-bold">
            LinkedIn
          </a>
          <span>·</span>
          <button onClick={scrollToTop} className="hover:text-[#0077b6] cursor-pointer inline-flex items-center gap-1">
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
