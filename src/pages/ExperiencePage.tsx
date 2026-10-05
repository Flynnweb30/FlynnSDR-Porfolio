import React from 'react';
import { 
  workExperience, 
  coreSkills, 
  toolsAndTech, 
  education, 
  personalInfo 
} from '../data/flynnData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Download
} from 'lucide-react';
import { PageRoute } from '../types';

interface ExperiencePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
  onOpenBooking: (preference?: 'Part-Time' | 'Full-Time') => void;
}

export default function ExperiencePage({ onNavigate, onOpenResume, onOpenBooking }: ExperiencePageProps) {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#fafaf8] text-[#0d0e0c]">
      
      {/* Header Banner - Clean existing design Paper Style */}
      <section className="py-12 border-b border-[#dededb] bg-[#f7f7f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#dededb] rounded-full text-[11px] font-display uppercase tracking-widest text-[#0077b6] font-extrabold shadow-2xs">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Track Record</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#0d0e0c] leading-tight">
              11+ Years of Outbound Sales & Leadership.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-3xl">
              From high-volume telemarketing to enterprise B2B SaaS prospecting and sales team leadership. Sourced over $1.8M in pipeline with consistent 120–150% quota attainment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View / Print PDF Resume</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-[#dededb] text-[#0d0e0c] text-xs font-display font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#0077b6]" />
                <span>Schedule Discussion</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Timeline */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Timeline Column (Span 8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#dededb]">
                <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-[#0d0e0c] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#0077b6] rounded-full" />
                  <span>Work History & Accomplishments</span>
                </h2>
                <span className="text-xs font-display uppercase font-bold text-zinc-500 tracking-wider">7 Proven Roles</span>
              </div>

              <div className="space-y-6">
                {workExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 bg-white border border-[#dededb] hover:border-[#0077b6]/60 rounded-2xl transition-all duration-300 space-y-4 shadow-xs text-left"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-[#0d0e0c]">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-sans text-[#0077b6] font-bold mt-0.5">
                          {exp.company} <span className="text-zinc-400 font-normal">· {exp.industry}</span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right text-xs font-sans text-zinc-500 space-y-0.5">
                        <div className="text-[#0d0e0c] font-display font-bold uppercase tracking-wider">{exp.period}</div>
                        <div className="text-zinc-400 text-[11px]">{exp.location}</div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* KPI Badges */}
                    {exp.kpis && (
                      <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-2">
                        {exp.kpis.map((kpi, k) => (
                          <span
                            key={k}
                            className="px-2.5 py-1 bg-[#f7f7f6] border border-[#dededb] text-[#0077b6] rounded-lg text-[10px] font-display uppercase font-bold tracking-wider"
                          >
                            ✓ {kpi}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Column: Skills, Tech, Education (Span 4) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              
              {/* Core Skills Box */}
              <div className="p-6 bg-white border border-[#dededb] rounded-2xl space-y-4 shadow-xs">
                <h3 className="text-xs font-display uppercase tracking-widest text-[#0077b6] font-extrabold pb-2 border-b border-zinc-100">
                  Core Sales Competencies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {coreSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#f7f7f6] border border-[#dededb] text-zinc-800 rounded-lg text-xs font-sans font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Tech Box */}
              <div className="p-6 bg-white border border-[#dededb] rounded-2xl space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <h3 className="text-xs font-display uppercase tracking-widest text-[#0d0e0c] font-extrabold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#0077b6]" />
                    <span>Tools & Tech Stack</span>
                  </h3>
                  <span className="text-[10px] font-display uppercase font-extrabold text-[#0077b6]">12 Tools</span>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  {toolsAndTech.map((tool, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-[#f7f7f6] border border-[#dededb]/80 rounded-xl flex items-center justify-between"
                    >
                      <div>
                        <div className="text-[#0d0e0c] font-bold">{tool.name}</div>
                        <div className="text-[10px] text-zinc-500">{tool.category}</div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white text-[#0077b6] border border-zinc-200 font-display uppercase font-bold">
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Box */}
              <div className="p-6 bg-white border border-[#dededb] rounded-2xl space-y-4 shadow-xs">
                <h3 className="text-xs font-display uppercase tracking-widest text-[#0d0e0c] font-extrabold pb-2 border-b border-zinc-100 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Education & Certifications</span>
                </h3>

                <div className="space-y-3 text-xs font-sans">
                  <div>
                    <div className="font-bold text-[#0d0e0c] text-sm">
                      {education.degree}
                    </div>
                    <div className="text-[#0077b6] font-medium">{education.institution}</div>
                    <div className="text-zinc-400 text-[11px]">{education.period}</div>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                    <div className="text-[11px] font-display uppercase text-zinc-500 font-bold tracking-wider">
                      Certificates & Honors:
                    </div>
                    {education.certifications.map((cert, c) => (
                      <div key={c} className="flex items-center gap-2 text-zinc-700 text-xs">
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
