import React from 'react';
import { FEATURED_STORIES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedWorksProps {
  onSelectProject: (projectId: string) => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ onSelectProject }) => {
  return (
    <section id="featured" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-3">
              Selected Major Work
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm text-[#5E5B55] max-w-md">
            실제 운영 환경에 배포되어 대규모 트랜잭션과 실시간 하드웨어를 안정적으로 처리한 핵심 프로젝트들입니다.
          </p>
        </div>

        {/* Large Editorial Cards - Alternating Layout */}
        <div className="space-y-20 sm:space-y-28">
          {FEATURED_STORIES.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={story.id}
                className="group border-t border-[#E8E4DC] pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Media Slot */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => onSelectProject(story.projectId)}
                    className="relative overflow-hidden rounded-2xl bg-[#EFECE6] border border-[#E8E4DC] group-hover:border-[#141413] transition-all duration-300 cursor-pointer shadow-sm aspect-16/9"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-cinematic"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-full">
                        View Project Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Typography & Content Slot */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="text-xs font-mono font-bold tracking-wider text-[#7A776F] uppercase mb-2">
                    {story.kicker}
                  </div>
                  <h3
                    onClick={() => onSelectProject(story.projectId)}
                    className="text-2xl sm:text-3xl font-extrabold text-[#141413] leading-snug hover:text-black transition-colors cursor-pointer"
                  >
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-[#7A776F]">
                    {story.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-[#5E5B55] leading-relaxed">
                    {story.description}
                  </p>

                  {/* Clean Unboxed Metadata Tags with separator */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-[#5E5B55]">
                    {story.tags.map((tag, tagIdx) => (
                      <React.Fragment key={tag}>
                        <span className="font-medium text-[#141413]">{tag}</span>
                        {tagIdx < story.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#CCC8BE]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#F0ECE4] flex items-center gap-4">
                    <button
                      onClick={() => onSelectProject(story.projectId)}
                      className="px-5 py-2.5 rounded-full bg-[#141413] text-white hover:bg-[#2A2926] text-xs font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>프로젝트 세부 명세서</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
