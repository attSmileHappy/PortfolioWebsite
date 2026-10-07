import React, { useState, useMemo } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectDetail } from '../types/portfolio';
import { ArrowUpRight, Award, Github, ExternalLink, Filter } from 'lucide-react';

interface ProjectCatalogProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = {
    all: ALL_PROJECTS.length,
    work: ALL_PROJECTS.filter((p) => p.category === 'work').length,
    team: ALL_PROJECTS.filter((p) => p.category === 'team').length,
    personal: ALL_PROJECTS.filter((p) => p.category === 'personal').length,
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-3">
              Full Project Archive
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
              All Projects & Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E5B55] max-w-xl">
              실무 개발 프로젝트부터 딥러닝 인공지능 연구, 개인 오픈소스 소프트웨어까지 검증된 프로젝트 포트폴리오입니다.
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control compliant with design rules) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EFECE6] rounded-xl self-start md:self-auto overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-[#141413] shadow-2xs'
                  : 'text-[#7A776F] hover:text-[#141413]'
              }`}
            >
              All Works ({categoryCounts.all})
            </button>
            <button
              onClick={() => setActiveCategory('work')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'work'
                  ? 'bg-white text-[#141413] shadow-2xs'
                  : 'text-[#7A776F] hover:text-[#141413]'
              }`}
            >
              Work Experience ({categoryCounts.work})
            </button>
            <button
              onClick={() => setActiveCategory('team')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'team'
                  ? 'bg-white text-[#141413] shadow-2xs'
                  : 'text-[#7A776F] hover:text-[#141413]'
              }`}
            >
              Team & AI ({categoryCounts.team})
            </button>
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'personal'
                  ? 'bg-white text-[#141413] shadow-2xs'
                  : 'text-[#7A776F] hover:text-[#141413]'
              }`}
            >
              Personal ({categoryCounts.personal})
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E8E4DC] hover:border-[#141413] transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                <div>
                  {/* Top Header Row with Index & Category & Award */}
                  <div className="flex items-center justify-between text-xs text-[#7A776F] mb-4">
                    <span className="font-mono font-bold text-[#141413] text-sm">{formattedIndex}</span>
                    <div className="flex items-center gap-2">
                      {project.award && (
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200">
                          <Award className="w-3 h-3" />
                          {project.award}
                        </span>
                      )}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#141413] group-hover:text-black leading-snug">
                    {project.title}
                  </h3>
                  {project.subTitle && (
                    <p className="mt-1.5 text-xs text-[#7A776F] font-medium line-clamp-1">
                      {project.subTitle}
                    </p>
                  )}

                  {/* Summary */}
                  <p className="mt-4 text-xs sm:text-sm text-[#5E5B55] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="mt-8 pt-4 border-t border-[#F2EFE9]">
                  {/* Unboxed Metadata row */}
                  <div className="flex items-center justify-between text-xs text-[#7A776F] mb-3">
                    <span>{project.period}</span>
                    {project.clientOrOrg && (
                      <span className="truncate max-w-[140px] text-right font-medium text-[#141413]">
                        {project.clientOrOrg}
                      </span>
                    )}
                  </div>

                  {/* Tech stack inline */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#5E5B55]">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E8E4DC] text-[#141413] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] text-[#7A776F]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Deep dive indicator */}
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#141413] pt-2">
                    <span className="group-hover:underline">자세히 보기 (Case Study)</span>
                    <span className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#E8E4DC] flex items-center justify-center group-hover:bg-[#FFE600] group-hover:border-[#FFE600] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
