import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Move3d } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  // Phase sequence: 0 = initial mount, 1 = zoom start, 2 = zoom finished / fully interactive
  const [animationStage, setAnimationStage] = useState<'initial' | 'zooming' | 'settled'>('initial');
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setAnimationStage('settled');
      return;
    }

    // Sequence timing
    // 0.0s - 0.2s: initial frame
    const timer1 = setTimeout(() => {
      setAnimationStage('zooming');
    }, 200);

    // 2.3s: zoom-out completes, fully settled
    const timer2 = setTimeout(() => {
      setAnimationStage('settled');
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Compute transform style for Spline container based on stage
  // initial: scale(1.25) -> zoomed close to camera
  // zooming: transitions smoothly to scale(1)
  // settled: scale(1) with normal mouse interaction
  const getSplineScaleStyle = (): React.CSSProperties => {
    if (isReducedMotion) {
      return {
        transform: 'scale(1)',
        opacity: 1,
      };
    }

    if (animationStage === 'initial') {
      return {
        transform: 'scale(1.26)',
        opacity: 0.95,
        transition: 'none',
      };
    }

    return {
      transform: 'scale(1)',
      opacity: 1,
      transition: 'transform 2.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
    };
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] max-h-[1200px] overflow-hidden bg-[#FAF8F5] select-none"
      aria-label="Interactive 3D Hero"
    >
      {/* 3D SPLINE CANVAS (Full Viewport Coverage 100vw x 100vh) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-auto"
        style={{ willChange: 'transform' }}
      >
        <div
          className="w-full h-full transform-gpu origin-center"
          style={getSplineScaleStyle()}
        >
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-66YmLvP6xEgIGCUUpDrQq7Ax/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Spline 3D Robot Character"
            className="w-full h-full block border-0 pointer-events-auto"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </div>

      {/* Subtle top subtle lighting vignette (pointer-events-none so mouse passes directly to Spline) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF8F5]/90 pointer-events-none" />

      {/* HERO CONTENT LAYER: Editorial typography matching Sunday/Memo reference */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-between pt-24 pb-10 pointer-events-none">
        
        {/* Top Kicker & Status Indicator */}
        <div
          className={`flex items-center justify-between transition-all duration-1000 ease-cinematic ${
            animationStage === 'settled' || isReducedMotion
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/90 drop-shadow-xs uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for New Opportunities</span>
            <span aria-hidden="true" className="text-white/60">·</span>
            <span className="hidden sm:inline text-white/80">Seoul, South Korea</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#141413] bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/40 shadow-xs pointer-events-auto">
            <Move3d className="w-3.5 h-3.5 text-[#141413]" />
            <span>Drag cursor to interact with 3D robot</span>
          </div>
        </div>

        {/* Center / Top Center Headline: "Say hello to Yeji Kim" */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
          <div
            className={`transition-all duration-1000 ease-cinematic delay-300 ${
              animationStage === 'settled' || isReducedMotion
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] leading-[1.08] text-balance">
              Say hello to Yeji Kim
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] font-medium max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.subTagline}
            </p>
          </div>

          {/* Action Button Pills: Yellow primary + Dark secondary */}
          <div
            className={`mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-cinematic delay-500 ${
              animationStage === 'settled' || isReducedMotion
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={onExploreClick}
              className="pointer-events-auto px-6 sm:px-7 py-3 rounded-full bg-[#FFE600] text-[#141413] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#F2DA00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              Explore Projects
            </button>
            <button
              onClick={onContactClick}
              className="pointer-events-auto px-6 sm:px-7 py-3 rounded-full bg-[#141413] text-white font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-[#2A2926] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Bar: Editorial Tagline & Down Anchor */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#141413]/10 transition-all duration-1000 ease-cinematic delay-700 ${
            animationStage === 'settled' || isReducedMotion
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
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
