import React, { useState } from 'react';
import { ArrowDown, Move3d } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onResumeClick }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] max-h-[1200px] overflow-hidden bg-white select-none"
      aria-label="Interactive 3D Hero"
    >
      {/* 3D SPLINE CANVAS (Full Viewport Coverage 100vw x 100vh) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-auto"
      >
        <div
          className="w-full h-full relative"
          style={{ transform: 'scale(1)' }}
        >
          {/* Subtle minimal loading indicator while Spline connects - disappears immediately on load */}
          {!iframeLoaded && (
            <div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white pointer-events-none select-none z-10 transition-opacity duration-200"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#004ab5]/20 animate-ping" />
                  <div className="w-8 h-8 rounded-full border-2 border-t-[#004ab5] border-r-transparent border-b-[#004ab5]/30 border-l-transparent animate-spin" />
                  <Move3d className="w-3.5 h-3.5 text-[#004ab5] absolute" />
                </div>
                <p className="text-xs font-medium text-neutral-400 tracking-wider">
                  3D Robot Connecting...
                </p>
              </div>
            </div>
          )}

          {/* Interactive Spline 3D Scene - Existing user source preserved without modification */}
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-66YmLvP6xEgIGCUUpDrQq7Ax/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Spline 3D Robot Character"
            className="w-full h-full block border-0 pointer-events-auto bg-white"
            loading="eager"
            allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </div>

      {/* Subtle top subtle lighting vignette (pointer-events-none so mouse passes directly to Spline) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/95 pointer-events-none" />

      {/* HERO CONTENT LAYER: Editorial typography matching Sunday/Memo reference */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-between pt-24 pb-10 pointer-events-none">
        
        {/* Top Kicker & Status Indicator */}
        <div className="flex items-center justify-between transition-all duration-500 ease-out opacity-100 translate-y-0">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/90 drop-shadow-xs uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for New Opportunities</span>
            <span aria-hidden="true" className="text-white/60">·</span>
            <span className="hidden sm:inline text-white/80">Seoul, South Korea</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#141413] bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/40 shadow-xs pointer-events-auto">
            {iframeLoaded ? (
              <>
                <Move3d className="w-3.5 h-3.5 text-[#004ab5]" />
                <span>Drag cursor to interact with 3D robot</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-[#004ab5] animate-pulse" />
                <span>Interactive 3D syncing...</span>
              </>
            )}
          </div>
        </div>

        {/* Center / Top Center Headline: "Say hello to Yeji Kim" */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
          <div className="transition-all duration-500 ease-out opacity-100 translate-y-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] leading-[1.08] text-balance">
              Say hello to Yeji Kim
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] font-medium max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.subTagline}
            </p>
          </div>

          {/* Action Button Pills: Resume Overview on the LEFT of Explore Projects */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-500 ease-out opacity-100 translate-y-0">
            {/* 1. Resume Overview (LEFT) */}
            <button
              onClick={onResumeClick}
              className="pointer-events-auto px-6 sm:px-7 py-3 rounded-full bg-white text-[#141413] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-neutral-50 hover:border-[#004ab5] hover:text-[#004ab5] border border-neutral-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer backdrop-blur-xs"
            >
              Resume Overview
            </button>
            {/* 2. Explore Projects (RIGHT / PRIMARY with point color #004ab5) */}
            <button
              onClick={onExploreClick}
              className="pointer-events-auto px-7 sm:px-8 py-3 rounded-full bg-[#004ab5] text-white font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#003c94] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#004ab5]/25 cursor-pointer"
            >
              Explore Projects
            </button>
          </div>
        </div>

        {/* Bottom Bar: Editorial Tagline & Down Anchor */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#141413]/10 transition-all duration-500 ease-out opacity-100 translate-y-0">
          <p className="text-xs sm:text-sm text-[#5E5B55] text-center sm:text-left max-w-xl font-normal leading-normal">
            Specializing in <span className="text-[#141413] font-semibold">.NET WPF</span> enterprise architecture,{' '}
            <span className="text-[#141413] font-semibold">RPA robotic automation</span>, and{' '}
            <span className="text-[#141413] font-semibold">AI computer vision & NLP</span> systems.
          </p>

          <a
            href="#intro"
            className="pointer-events-auto flex items-center gap-2 text-xs font-semibold text-[#141413] hover:text-[#5E5B55] transition-colors group cursor-pointer"
          >
            <span>DISCOVER WORK</span>
            <span className="w-7 h-7 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center group-hover:border-[#141413] transition-colors shadow-xs">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
