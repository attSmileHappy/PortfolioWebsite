import React, { useEffect } from 'react';
import { ProjectDetail } from '../types/portfolio';
import { X, ExternalLink, Github, Award, CheckCircle2, Calendar, Users, Briefcase, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-y-auto no-scrollbar flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F]">
              Case Study · {project.category}
            </span>
            {project.award && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-[#FFE600] px-2.5 py-0.5 rounded-full">
                <Award className="w-3.5 h-3.5" />
                {project.award}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFECE6] text-[#141413] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] leading-tight">
              {project.title}
            </h2>
            {project.subTitle && (
              <p className="mt-2 text-base text-[#5E5B55] font-medium">
                {project.subTitle}
              </p>
            )}
          </div>

          {/* Project Image Banner if available */}
          {project.image && (
            <div className="relative overflow-hidden rounded-xl bg-[#EFECE6] border border-[#E8E4DC] aspect-16/9 max-h-72">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-[#E8E4DC] text-xs">
            <div>
              <div className="text-[#7A776F] font-medium flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5" /> 기간
              </div>
              <div className="font-semibold text-[#141413]">{project.period}</div>
            </div>
            <div>
              <div className="text-[#7A776F] font-medium flex items-center gap-1 mb-1">
                <Briefcase className="w-3.5 h-3.5" /> 고객사 / 기관
              </div>
              <div className="font-semibold text-[#141413]">{project.clientOrOrg || '자사 / 개인'}</div>
            </div>
            <div>
              <div className="text-[#7A776F] font-medium flex items-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5" /> 참여 인원
              </div>
              <div className="font-semibold text-[#141413]">{project.teamSize || '1명'}</div>
            </div>
            <div>
              <div className="text-[#7A776F] font-medium flex items-center gap-1 mb-1">
                <Cpu className="w-3.5 h-3.5" /> 담당 역할
              </div>
              <div className="font-semibold text-[#141413] truncate">{project.roles.join(', ')}</div>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-3">
              Overview & Objectives
            </h3>
            <p className="text-sm sm:text-base text-[#141413] leading-relaxed bg-white p-5 rounded-xl border border-[#E8E4DC]">
              {project.summary}
            </p>
          </div>

          {/* Key Contributions & Development Details (Direct from PDF) */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-3">
              Key Contributions & Technical Details
            </h3>
            <ul className="space-y-3">
              {project.keyContributions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#141413] leading-relaxed bg-white p-3.5 rounded-xl border border-[#E8E4DC]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#141413] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details if present */}
          {project.architectureDetails && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-3">
                System Architecture
              </h3>
              <div className="p-4 rounded-xl bg-[#141413] text-[#F5F2EB] font-mono text-xs space-y-2">
                {project.architectureDetails.map((arch, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-[#FFE600]">→</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack List */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-[#DCD6C9] text-[#141413]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Links (GitHub, etc.) */}
          {project.githubUrl && (
            <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
              <span className="text-xs text-[#7A776F]">Source Code & Documentation</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141413] text-white text-xs font-semibold hover:bg-[#2A2926] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-white border-t border-[#E8E4DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#EFECE6] hover:bg-[#E2DDD3] text-[#141413] text-xs font-semibold transition-colors cursor-pointer"
          >
            닫기 (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
