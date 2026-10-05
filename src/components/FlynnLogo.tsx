import React from 'react';
export default function FlynnLogo({ size = 'sm', variant = 'dark' }: { size?: 'sm'|'md'; variant?: 'dark'|'light' }) {
  const cls = size === 'md' ? 'text-3xl' : 'text-2xl';
  return <span className={`${cls} font-script font-bold ${variant === 'light' ? 'text-white' : 'text-[#0d0e0c]'}`}>Flynn</span>;
}
