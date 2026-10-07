import React from 'react';
import { CAREER_HISTORY, EDUCATION_HISTORY } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-3">
            Career & Education
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
            Experience & Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5E5B55]">
            현장 중심의 Windows 데스크톱 소프트웨어 엔지니어링 경험과 지속적인 학업 및 연구 기록입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Professional Career (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E8E4DC]">
              <Briefcase className="w-4 h-4 text-[#141413]" />
              <h3 className="text-base font-bold text-[#141413] tracking-wide uppercase">
                Work Experience (실무 경력)
              </h3>
            </div>

            <div className="space-y-12">
              {CAREER_HISTORY.map((career, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-[#141413] space-y-3">
                  {/* Timeline indicator node */}
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#141413] ring-4 ring-[#FAF8F5]" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-[#7A776F]">
                      {career.period}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E8E4DC] text-[#141413]">
                      {career.department}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-[#141413]">
                    {career.company}
                  </h4>
                  <p className="text-sm font-semibold text-[#5E5B55]">
                    {career.role}
                  </p>
                  <p className="text-sm text-[#5E5B55] leading-relaxed">
                    {career.description}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 space-y-2">
                    {career.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141413]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#141413] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Academic History (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E8E4DC]">
              <GraduationCap className="w-4 h-4 text-[#141413]" />
              <h3 className="text-base font-bold text-[#141413] tracking-wide uppercase">
                Education & Training (학력 및 교육)
              </h3>
            </div>

            <div className="space-y-8">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E8E4DC] hover:border-[#141413] transition-colors space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs text-[#7A776F] font-mono">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <span className="font-semibold text-[#141413] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E4DC]">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-[#141413]">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-semibold text-[#5E5B55]">
                    {edu.major}
                  </p>
                  <p className="text-xs sm:text-sm text-[#7A776F] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Award Callout Box */}
              <div className="p-6 rounded-2xl bg-[#FFE600]/20 border border-[#FFE600] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#141413]">
                  <Award className="w-4 h-4 text-[#141413]" />
                  <span>HONORS & AWARDS</span>
                </div>
                <p className="text-sm font-bold text-[#141413]">
                  중앙정보처리학원 프로젝트 경진대회 대상 & 우수상 수상
                </p>
                <p className="text-xs text-[#5E5B55] leading-relaxed">
                  YOLOv5 음식 영양정보 인식 프로젝트 대상, KorBERT 수제 맥주 추천 챗봇 우수상을 수상하며 기술성과 서비스 기획력을 공인받았습니다.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
