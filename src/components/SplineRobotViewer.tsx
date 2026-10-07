import React, { useState } from 'react';
import { Maximize2, Minimize2, RotateCcw, ShieldCheck, Sparkles, MousePointer2 } from 'lucide-react';

interface SplineRobotViewerProps {
  isDark: boolean;
}

export const SplineRobotViewer: React.FC<SplineRobotViewerProps> = ({ isDark }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [touchInteractive, setTouchInteractive] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const splineUrl = 'https://my.spline.design/robotfollowcursorforlandingpage-F4zqSoAD4fla36GuqoqKSdQ3/';

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <>
      <div className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 ${
        isDark 
          ? 'bg-[#0f1422] border border-[#1e273d] shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
          : 'bg-white border border-slate-200 shadow-[0_20px_40px_rgba(12,77,162,0.08)]'
      }`}>
        {/* Top subtle control ribbon */}
        <div className={`flex items-center justify-between px-4 py-2.5 border-b text-xs ${
          isDark ? 'border-[#1e273d] bg-[#0c101c] text-slate-300' : 'border-slate-100 bg-slate-50 text-slate-600'
        }`}>
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className={`text-[13px] font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Spline 3D Robot
            </span>
            <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
            <span className={`hidden sm:inline text-[11px] ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              커서를 따라 반응하는 실시간 3D
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Mobile Touch Lock/Unlock button */}
            <button
              onClick={() => setTouchInteractive(!touchInteractive)}
              title={touchInteractive ? '모바일 터치 활성화 (스크롤하려면 끄기)' : '터치 비활성화 (스크롤 보호 모드)'}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                touchInteractive
                  ? isDark 
                    ? 'bg-[#0c4da2]/30 text-blue-300 border border-[#0c4da2]/50'
                    : 'bg-[#0c4da2]/10 text-[#0c4da2] border border-[#0c4da2]/30'
                  : isDark
                    ? 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    : 'bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <MousePointer2 className="w-3 h-3" />
              <span className="hidden xs:inline">{touchInteractive ? '인터랙션 On' : '스크롤 보호 On'}</span>
            </button>

            {/* Reset View */}
            <button
              onClick={handleReload}
              title="3D 다시 로드"
              className={`p-1.5 rounded-md transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen Expand */}
            <button
              onClick={() => setIsFullscreen(true)}
              title="전체 화면으로 크게 보기"
              className={`p-1.5 rounded-md transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3D iFrame container with glowing backdrop aura */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden bg-radial from-[#0c4da2]/20 via-transparent to-transparent">
          {/* Subtle Ambient Radial Light */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 blur-3xl"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(12, 77, 162, 0.45) 0%, transparent 70%)'
            }}
          />

          {/* Loading Indicator */}
          {isLoading && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 ${
              isDark ? 'bg-[#0b0f17]/90 text-slate-300' : 'bg-slate-50/90 text-slate-600'
            }`}>
              <div className="w-8 h-8 rounded-full border-2 border-[#0c4da2] border-t-transparent animate-spin" />
              <span className="text-xs font-medium tracking-wide">3D 로봇 모델 로딩 중...</span>
            </div>
          )}

          {/* Spline Iframe Embed */}
          <iframe
            key={iframeKey}
            src={splineUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            onLoad={() => setIsLoading(false)}
            className={`w-full h-full border-0 relative z-0 transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            } ${touchInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
            title="Spline 3D Robot follow cursor"
            allow="fullscreen"
          />

          {/* Mobile Overlay hint when interactive mode is off */}
          {!touchInteractive && (
            <div 
              onClick={() => setTouchInteractive(true)}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[1px] cursor-pointer"
            >
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs border border-white/20 shadow-lg flex items-center gap-2">
                <MousePointer2 className="w-3.5 h-3.5 text-[#0c4da2]" />
                터치하여 3D 인터랙션 활성화
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status / Interaction Guidance */}
        <div className={`px-4 py-2 border-t flex items-center justify-between text-[11px] ${
          isDark ? 'border-[#1e273d] bg-[#0c101c] text-slate-300' : 'border-slate-100 bg-slate-50 text-slate-600'
        }`}>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className={`w-3 h-3 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
            <span>화면 위 마우스 움직임에 실시간 반응합니다</span>
          </div>
          <span className={`font-mono text-[10px] font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            WebGL 3D Engine
          </span>
        </div>
      </div>

      {/* Fullscreen Modal View for Spline 3D */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-[#0b0f17] border border-[#0c4da2]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-[#0c101c]">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0c4da2] animate-ping" />
                <span>Spline 3D Robot Interactive Experience (확대 모드)</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-[#0c4da2] hover:text-white transition-colors text-xs font-medium"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                닫기 (ESC)
              </button>
            </div>
            <div className="relative flex-1 w-full h-full">
              <iframe
                src={splineUrl}
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                title="Spline 3D Fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
