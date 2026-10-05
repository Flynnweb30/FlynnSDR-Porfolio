import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Globe, 
  Briefcase 
} from 'lucide-react';
import { 
  personalInfo, 
  workExperience, 
  coreSkills, 
  toolsAndTech, 
  education, 
  keyAchievements 
} from '../data/flynnData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in text-[#0d0e0c]">
      <div className="relative w-full max-w-4xl bg-white border border-[#dededb] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-5 bg-[#f7f7f6] border-b border-[#dededb] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Flynn James Q. Pontino — Official Senior SDR Resume</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-[#0d0e0c] print:text-black print:bg-white text-left font-sans">
          
          {/* Header */}
          <div className="border-b border-[#dededb] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  {personalInfo.fullName}
                </h2>
                <p className="text-sm font-display uppercase tracking-wider text-[#0077b6] font-extrabold">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs font-sans text-zinc-600 space-y-1 sm:text-right">
                <div>📞 {personalInfo.phone}</div>
                <div>✉️ {personalInfo.email}</div>
                <div>📍 {personalInfo.location}</div>
                <div>🔗 {personalInfo.linkedinHandle}</div>
              </div>
            </div>

            <div className="p-3 bg-[#f7f7f6] border border-[#dededb] rounded-xl text-xs font-sans text-zinc-700">
              ⚡ <strong>{personalInfo.tagline}</strong>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed pt-1">
              {personalInfo.executiveSummary}
            </p>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            {keyAchievements.map((item, i) => (
              <div key={i} className="p-2.5 bg-[#f7f7f6] border border-[#dededb] rounded-xl">
                <div className="text-base font-black font-display text-[#0077b6]">{item.value}</div>
                <div className="text-[10px] font-display uppercase text-zinc-500 font-bold">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-sm font-display uppercase tracking-widest text-[#0077b6] font-extrabold border-b border-[#dededb] pb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Sales Experience</span>
            </h3>

            {workExperience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-black text-[#0d0e0c] uppercase font-display text-base">{exp.role}</span>
                    <span className="text-[#0077b6] font-bold sm:ml-2">
                      · {exp.company} ({exp.industry})
                    </span>
                  </div>
                  <div className="text-zinc-500 font-sans text-[11px]">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="space-y-1 text-xs text-zinc-600 list-disc list-inside">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Skills & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#dededb]">
            <div className="space-y-2">
              <h4 className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                Core Competencies
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {coreSkills.join(' · ')}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                Tools & Tech Stack
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {toolsAndTech.map(t => `${t.name} (${t.level})`).join(' · ')}
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-4 border-t border-[#dededb] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div>
              <div className="font-black text-[#0d0e0c] uppercase font-display">{education.degree}</div>
              <div className="text-[#0077b6] font-bold">{education.institution} ({education.period})</div>
            </div>
            <div className="text-zinc-500">
              Certifications: {education.certifications.join(' · ')}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
