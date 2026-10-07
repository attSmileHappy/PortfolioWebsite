import React, { useState } from 'react';
import { ArrowUpRight, Github, Award, Calendar, FolderGit2, Sparkles, Eye } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  isDark: boolean;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDark, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: '전체 (All)', count: PROJECTS_DATA.length },
    { id: 'enterprise', label: 'C# WPF 엔터프라이즈', count: PROJECTS_DATA.filter(p => p.category === 'enterprise').length },
    { id: 'rpa', label: 'RPA 자동화', count: PROJECTS_DATA.filter(p => p.category === 'rpa').length },
    { id: 'desktop', label: '데스크톱 솔루션', count: PROJECTS_DATA.filter(p => p.category === 'desktop').length },
    { id: 'ai', label: '인공지능 & 비전', count: PROJECTS_DATA.filter(p => p.category === 'ai').length },
    { id: 'team-personal', label: '팀/개인 프로젝트', count: PROJECTS_DATA.filter(p => p.category === 'team' || p.category === 'personal').length },
  ];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeTab === 'all') return true;
    if (activeTab === 'team-personal') return project.category === 'team' || project.category === 'personal';
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 border-t transition-colors duration-200 border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[#3b82f6] dark:text-[#60a5fa] uppercase mb-2">
              PROJECT ARCHIVE
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              실무 및 주요 프로젝트 경험
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              C# WPF 엔터프라이즈 시스템부터 RPA 업무 자동화 파이프라인, AI 컴퓨터 비전 모델까지 직관적으로 확인하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons) */}
        <div className={`flex items-center gap-1.5 p-1.5 mb-8 overflow-x-auto no-scrollbar rounded-xl border ${
          isDark ? 'bg-[#0c101c] border-[#222f4c]' : 'bg-slate-100 border-slate-200'
        }`}>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? isDark 
                    ? 'bg-[#0c4da2] text-white font-bold shadow-md'
                    : 'bg-white text-slate-950 font-bold shadow-sm'
                  : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeTab === tab.id 
                  ? isDark ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-800'
                  : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid (Card format layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isDark
                  ? 'bg-[#0f1422] border-[#222f4c] hover:border-[#3b82f6]/70 hover:shadow-[0_12px_32px_rgba(12,77,162,0.22)]'
                  : 'bg-white border-slate-200 hover:border-[#0c4da2]/50 hover:shadow-xl'
              }`}
            >
              {/* Optional Preview image banner */}
              {project.imageUrl && (
                <div className="relative w-full h-44 overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {project.award && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500/95 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.award}</span>
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/95 font-medium">
                    {project.categoryLabel}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Category and Period */}
                  {!project.imageUrl && project.award && (
                    <div className="mb-2 text-xs font-bold text-amber-500 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.award}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`}>
                      {project.categoryLabel}
                    </span>
                    <span className={`font-mono text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-base font-bold transition-colors line-clamp-2 leading-snug ${
                    isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-[#0c4da2]'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags and Details trigger */}
                <div className={`mt-5 pt-4 border-t ${isDark ? 'border-[#1e273d]' : 'border-slate-100'}`}>
                  <div className="flex flex-wrap items-center gap-1.5 mb-3 font-mono text-[11px]">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded ${
                        isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className={`group-hover:underline flex items-center gap-1 ${
                      isDark ? 'text-blue-400' : 'text-[#0c4da2]'
                    }`}>
                      <Eye className="w-3.5 h-3.5" />
                      상세 정보 보기
                    </span>
                    {project.githubUrl && (
                      <span className={isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}>
                        <Github className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
