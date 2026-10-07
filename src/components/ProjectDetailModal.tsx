import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Award, Users, Calendar, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, isDark }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto border shadow-2xl z-10 transition-colors ${
        isDark 
          ? 'bg-[#0f1422] border-[#1e273d] text-slate-100' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Sticky Header with Close Button */}
        <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md ${
          isDark ? 'bg-[#0f1422]/95 border-[#1e273d]' : 'bg-white/95 border-slate-100'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400">
              {project.categoryLabel}
            </span>
            {project.award && (
              <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {project.award}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="닫기"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Metadata Header */}
          <div className="space-y-3">
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {project.title}
            </h2>

            {/* Unboxed Metadata with Typographic Separators */}
            <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <span className="flex items-center gap-1">
                <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
                {project.period}
              </span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
              {project.clientOrOrg && (
                <>
                  <span>고객사: {project.clientOrOrg}</span>
                  <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
                </>
              )}
              {project.teamSize && (
                <>
                  <span className="flex items-center gap-1">
                    <Users className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
                    규모: {project.teamSize}
                  </span>
                  <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
                </>
              )}
              <span className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>
                역할: {project.role}
              </span>
            </div>
          </div>

          {/* Project Image Banner (if available) */}
          {project.imageUrl && (
            <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs text-white/95 font-mono font-medium">
                {project.title}
              </div>
            </div>
          )}

          {/* Project Summary Callout */}
          <div className={`p-5 rounded-xl border ${
            isDark ? 'bg-[#0c101c] border-[#222f4c] text-slate-200' : 'bg-blue-50/70 border-blue-100 text-slate-800'
          }`}>
            <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-blue-400' : 'text-[#0c4da2]'
            }`}>
              OVERVIEW
            </div>
            <p className="text-sm leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Technical Highlights & Deliverables */}
          <div className="space-y-4">
            <h3 className={`text-base font-bold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Layers className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
              핵심 구현 사항 및 상세 내용
            </h3>
            
            <div className="space-y-2.5">
              {project.keyPoints.map((point, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3">
              <h4 className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-slate-300' : 'text-slate-500'
              }`}>
                성과 및 지표 (Metrics)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className={`p-3 rounded-lg border ${
                    isDark ? 'bg-[#0c101c] border-[#222f4c]' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{metric.label}</div>
                    <div className={`text-sm font-bold font-mono mt-0.5 ${
                      isDark ? 'text-blue-400' : 'text-[#0c4da2]'
                    }`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack List */}
          <div className="space-y-3 pt-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-slate-300' : 'text-slate-500'
            }`}>
              활용 기술 (Tech Stack)
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-2.5 py-1 rounded-md font-medium ${
                    isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          {project.githubUrl && (
            <div className={`pt-4 border-t flex items-center justify-between ${
              isDark ? 'border-[#1e273d]' : 'border-slate-100'
            }`}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0c4da2] rounded-lg hover:bg-[#1260c8] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub 소스코드 저장소 보기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                오픈소스 코드 확인 가능
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
