import React, { useState } from 'react';
import { Menu, X, Calendar, Headphones, Briefcase, Users, Home, FileText, MessageCircle } from 'lucide-react';
import FlynnLogo from './FlynnLogo';
import { PageRoute } from '../types';

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: { currentPage: PageRoute; onNavigate: (p: PageRoute)=>void; onOpenBooking: (preference?: 'Part-Time'|'Full-Time')=>void }) {
  const [open, setOpen] = useState(false);
  const items: [string, PageRoute, React.ElementType][] = [
    ['Home','home',Home], ['Hear My Opener','calls',Headphones], ['Experience','experience',Briefcase], ['References','references',Users], ['Contact','contact',MessageCircle]
  ];
  const go = (p: PageRoute) => { setOpen(false); onNavigate(p); };
  return <header className="site-nav"><div className="container nav-inner"><button onClick={()=>go('home')} aria-label="Go home"><FlynnLogo /></button><nav className="desktop-nav">{items.map(([label,route,Icon])=><button key={route} onClick={()=>go(route)} className={currentPage===route?'active':''}><Icon size={15}/>{label}</button>)}</nav><div className="nav-actions"><a href="https://discord.com/users/flynn30" target="_blank" rel="noreferrer" className="discord-link"><MessageCircle size={15}/> flynn30</a><button className="btn btn-primary" onClick={()=>onOpenBooking()}><Calendar size={15}/> Schedule Intro</button><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div></div>{open&&<div className="mobile-nav container">{items.map(([label,route,Icon])=><button key={route} onClick={()=>go(route)}><Icon size={16}/>{label}</button>)}<button className="btn btn-primary" onClick={()=>{setOpen(false);onOpenBooking()}}><Calendar size={16}/> Schedule 15-Minute Intro</button></div>}</header>;
}
