import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Layers, Cpu, Database, Wrench } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const icons = [Terminal, Layers, Cpu, Database];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-3">
            Technical Stack & Expertise
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
            Technology Matrix
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5E5B55]">
            .NET WPF 엔터프라이즈 환경부터 현대적인 머신러닝 파이프라인까지, 실무와 연구에서 직접 다루어온 기술 스택입니다.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Wrench;
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.enTitle}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#141413] text-white border-[#141413] shadow-xs'
                    : 'bg-white text-[#141413] border-[#E8E4DC] hover:border-[#141413]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-[#FFE600]' : 'bg-[#FAF8F5] text-[#141413]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate">{cat.title}</div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-gray-300' : 'text-[#7A776F]'}`}>
                    {cat.enTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E4DC] shadow-xs">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#F0ECE4]">
            <div>
              <h3 className="text-xl font-bold text-[#141413]">
                {SKILL_CATEGORIES[selectedCategoryIndex].title} ({SKILL_CATEGORIES[selectedCategoryIndex].enTitle})
              </h3>
              <p className="text-xs text-[#7A776F] mt-1">
                실제 프로젝트와 프로덕션 시스템에서 활용한 도메인별 세부 기술입니다.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#141413] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E4DC]">
              {SKILL_CATEGORIES[selectedCategoryIndex].skills.length} Items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#141413] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#141413]">{skill.name}</h4>
                  {skill.level && (
                    <span className="text-[10px] font-mono font-bold text-[#7A776F] uppercase">
                      {skill.level}
                    </span>
                  )}
                </div>
                {skill.context && (
                  <p className="text-xs text-[#5E5B55] mt-2 leading-relaxed">
                    {skill.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
