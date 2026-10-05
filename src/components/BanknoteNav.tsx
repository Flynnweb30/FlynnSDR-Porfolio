import React from 'react';
import { PageRoute } from '../types';

interface BanknoteNavProps {
  onNavigate: (page: PageRoute) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BanknoteNav({ onNavigate, className = '', size = 'md' }: BanknoteNavProps) {
  const banknotes = [
    {
      label: 'HIRE ME',
      route: 'hire-me' as PageRoute,
      imgSrc: '/assets/hire-me-bill.webp',
      alt: 'Hire Flynn banknote',
      badge: '$100',
    },
    {
      label: 'HEAR MY OPENER',
      route: 'calls' as PageRoute,
      imgSrc: '/assets/sales-phone.webp',
      alt: 'Hear Flynn opener banknote',
      badge: '£50',
    },
    {
      label: 'REFERENCES',
      route: 'references' as PageRoute,
      imgSrc: '/assets/references-bill.webp',
      alt: 'Character references banknote',
      badge: '$100',
    },
    {
      label: 'ACADEMY',
      route: 'academy' as PageRoute,
      imgSrc: '/assets/academy-bill.webp',
      alt: 'Sales academy playbook banknote',
      badge: '100',
    },
  ];

  const imgSizes = {
    sm: 'w-20 sm:w-24 h-10 sm:h-12',
    md: 'w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16',
    lg: 'w-28 sm:w-36 h-14 sm:h-18',
  };

  return (
    <div className={`flex items-end justify-center sm:justify-end gap-2 sm:gap-3 md:gap-4 select-none ${className}`}>
      {banknotes.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.route)}
          className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          title={item.label}
        >
          {/* Label matching PDF */}
          <span className="text-[10px] sm:text-[11px] font-display font-extrabold uppercase tracking-tight text-[#0d0e0c] group-hover:text-[#0077b6] transition-colors mb-1 drop-shadow-sm">
            {item.label}
          </span>

          {/* Banknote currency ticket */}
          <div className="relative rounded-md overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.18)] group-hover:shadow-[0_8px_20px_rgba(0,119,182,0.35)] transition-all duration-300 border border-black/10 bg-white/40 backdrop-blur-xs">
            <img
              src={item.imgSrc}
              alt={item.alt}
              className={`${imgSizes[size]} object-cover object-center filter saturate-[1.1] transition-transform duration-300 group-hover:scale-105`}
              draggable={false}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
