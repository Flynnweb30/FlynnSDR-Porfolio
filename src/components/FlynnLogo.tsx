import React from 'react';

interface FlynnLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export default function FlynnLogo({ size = 'md', variant = 'dark' }: FlynnLogoProps) {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-4xl sm:text-5xl',
    lg: 'text-5xl sm:text-6xl',
    xl: 'text-6xl sm:text-7xl',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0d0e0c]';

  return (
    <div className="inline-flex items-center gap-1 cursor-pointer select-none group">
      <span
        className={`font-script font-bold tracking-tight transform -rotate-3 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1 ${sizeClasses[size]} ${textColor}`}
        style={{
          textShadow: variant === 'light' ? '0 2px 10px rgba(0,0,0,0.3)' : '0 1px 4px rgba(0,0,0,0.06)'
        }}
      >
        Flynn
      </span>
    </div>
  );
}
