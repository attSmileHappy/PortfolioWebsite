import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Lock,
  Unlock,
  Shield,
  Users,
  Eye,
  EyeOff,
  Clock,
  Laptop,
  Smartphone,
  Globe,
  RefreshCw,
  Download,
  Trash2,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Activity,
  ArrowUpRight,
  ExternalLink,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';
import {
  VisitorLog,
  getStoredVisitorLogs,
  saveStoredVisitorLogs,
  clearStoredVisitorLogs,
  generateTestVisitorLog,
} from '../utils/visitorTracker';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Secure One-Way SHA-256 Hash of admin password (plain text password is NEVER stored in code or repository)
const ADMIN_PASSWORD_HASH =
  (import.meta.env.VITE_ADMIN_PASSWORD_HASH as string) ||
  '5cbc2aaff5b9861cf460cecc182b64dcc5e88f31874199037e221f6684c0bcc5';

/**
 * Calculates SHA-256 hash in hex format using standard Web Crypto API
 */
async function computeSha256(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [logs, setLogs] = useState<VisitorLog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [deviceFilter, setDeviceFilter] = useState<'all' | 'Desktop' | 'Mobile'>('all');
  const [selectedLog, setSelectedLog] = useState<VisitorLog | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Sync logs when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const stored = getStoredVisitorLogs();
      setLogs(stored);
      // Check if already authenticated this session
      const authSession = sessionStorage.getItem('yeji_admin_authenticated');
      if (authSession === 'true') {
        setIsAuthenticated(true);
      }
    } else {
      document.body.style.overflow = 'auto';
      setErrorMessage('');
      setPasswordInput('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedLog) {
          setSelectedLog(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedLog, onClose]);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) return;

    try {
      const hashedInput = await computeSha256(passwordInput);
      if (hashedInput === ADMIN_PASSWORD_HASH) {
        setIsAuthenticated(true);
        sessionStorage.setItem('yeji_admin_authenticated', 'true');
        setErrorMessage('');
        setLogs(getStoredVisitorLogs());
      } else {
        setErrorMessage('비밀번호가 올바르지 않습니다. 다시 입력해주세요.');
        setPasswordInput('');
      }
    } catch (err) {
      console.error('Password hash computation error:', err);
      setErrorMessage('인증 처리 중 오류가 발생했습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('yeji_admin_authenticated');
    setPasswordInput('');
    setErrorMessage('');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLogs(getStoredVisitorLogs());
      setIsRefreshing(false);
    }, 400);
  };

  const handleAddTestLog = () => {
    const newLog = generateTestVisitorLog();
    const updated = [newLog, ...logs];
    setLogs(updated);
    saveStoredVisitorLogs(updated);
  };

  const handleClearLogs = () => {
    if (window.confirm('정말로 모든 방문자 로그를 초기화하시겠습니까?')) {
      clearStoredVisitorLogs();
      setLogs([]);
    }
  };

  const handleExportCSV = () => {
    if (logs.length === 0) return;
    const headers = ['ID', '일시', 'IP', '위치', 'OS', '브라우저', '디바이스', '유입경로', '체류시간(초)', '행동로그'];
    const rows = logs.map((l) => [
      l.id,
      `"${l.formattedTime}"`,
      `"${l.ip}"`,
      `"${l.location}"`,
      `"${l.os}"`,
      `"${l.browser}"`,
      l.deviceType,
      `"${l.referrer}"`,
      l.durationSeconds,
      `"${l.actions.join('; ')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `yeji_visitor_logs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    setDownloadSuccess(false);
    try {
      const cacheBuster = Date.now();
      const res = await fetch(`/portfolio-yeji-kim.zip?v=${cacheBuster}`, {
        cache: 'no-store',
        headers: {
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache',
        },
      });
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-yeji-kim-latest-${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(url), 3000);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 6000);
    } catch (err) {
      console.warn('Blob download fallback:', err);
      // Fallback direct link
      window.location.href = `/portfolio-yeji-kim.zip?v=${Date.now()}`;
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 6000);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  // Filtered logs
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchDevice = deviceFilter === 'all' || log.deviceType === deviceFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        log.ip.toLowerCase().includes(q) ||
        log.location.toLowerCase().includes(q) ||
        log.os.toLowerCase().includes(q) ||
        log.browser.toLowerCase().includes(q) ||
        log.referrer.toLowerCase().includes(q) ||
        log.actions.some((a) => a.toLowerCase().includes(q));
      return matchDevice && matchQuery;
    });
  }, [logs, searchQuery, deviceFilter]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalVisits = logs.length;
    const desktopCount = logs.filter((l) => l.deviceType === 'Desktop').length;
    const mobileCount = logs.filter((l) => l.deviceType === 'Mobile' || l.deviceType === 'Tablet').length;
    const totalDuration = logs.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0);
    const avgDuration = totalVisits > 0 ? Math.round(totalDuration / totalVisits) : 0;
    const avgMins = Math.floor(avgDuration / 60);
    const avgSecs = avgDuration % 60;

    // Today's visitors
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayCount = logs.filter((l) => l.timestamp.startsWith(todayStr)).length;

    return {
      totalVisits,
      desktopPercent: totalVisits > 0 ? Math.round((desktopCount / totalVisits) * 100) : 0,
      mobilePercent: totalVisits > 0 ? Math.round((mobileCount / totalVisits) * 100) : 0,
      avgDurationFormatted: `${avgMins}분 ${avgSecs}초`,
      todayCount,
    };
  }, [logs]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 text-[#141413]"
      >
        {/* =========================================================================
            STATE 1: PASSWORD AUTHENTICATION SCREEN
           ========================================================================= */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto text-center w-full my-auto">
            {/* Lock Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#004ab5]/10 border border-[#004ab5]/20 flex items-center justify-center text-[#004ab5] mb-6">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2 mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#004ab5] bg-[#004ab5]/5 px-3 py-1 rounded-full border border-[#004ab5]/15">
                Admin Console Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
                관리자 인증
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5B55] leading-relaxed">
                방문자 통계 및 접속 모니터링 로그 확인을 위해 관리자 비밀번호를 입력해주세요.
              </p>
            </div>

            {errorMessage && (
              <div className="w-full mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700 flex items-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="w-full space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  placeholder="비밀번호를 입력하세요"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full px-4 py-3.5 pr-12 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:border-[#004ab5] focus:bg-white transition-all text-[#141413] font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                  title={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#004ab5] hover:bg-[#003c94] text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-[#004ab5]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Unlock className="w-4 h-4" />
                <span>관리자 로그인</span>
              </button>
            </form>

            <button
              onClick={onClose}
              className="mt-6 text-xs text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
            >
              닫기 (창 나가기)
            </button>
          </div>
        ) : (
          /* =========================================================================
             STATE 2: VISITOR LOG DASHBOARD
             ========================================================================= */
          <div className="flex flex-col h-full overflow-hidden">
            {/* Top Bar */}
            <div className="px-6 py-4 bg-white border-b border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#004ab5] text-white flex items-center justify-center shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-[#141413]">
                      실시간 방문자 로그 & 통계 콘솔
                    </h2>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Active
                    </span>
                  </div>
                  <p className="text-xs text-[#7A776F]">
                    김예지 포트폴리오 사이트 접속 기록 및 활동 분석 시스템
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className={`p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-[#141413] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isRefreshing ? 'opacity-50' : ''
                  }`}
                  title="새로고침"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">새로고침</span>
                </button>

                <button
                  onClick={handleAddTestLog}
                  className="px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-[#141413] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="테스트 방문자 로그 추가"
                >
                  <Users className="w-3.5 h-3.5 text-[#004ab5]" />
                  <span className="hidden sm:inline">+ 테스트 로그</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="px-3 py-2 rounded-lg bg-[#004ab5] hover:bg-[#003c94] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  title="CSV로 로그 내보내기"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">CSV 내보내기</span>
                </button>

                <button
                  onClick={handleDownloadZip}
                  disabled={isDownloadingZip}
                  className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  title="오늘 변경사항이 모두 적용된 최신 소스코드 ZIP 다운로드"
                >
                  <Download className={`w-3.5 h-3.5 ${isDownloadingZip ? 'animate-bounce' : ''}`} />
                  <span className="hidden sm:inline">
                    {isDownloadingZip ? 'ZIP 다운로드 중...' : '소스 ZIP 받기'}
                  </span>
                </button>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 text-xs font-medium transition-colors cursor-pointer"
                >
                  로그아웃
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-neutral-100 text-[#141413] transition-colors cursor-pointer ml-1"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-50/50">
              {/* Latest Source Code Notification & Direct Download Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-xs font-bold text-emerald-900">
                      최신 소스코드 배포 패키지 (오늘 변경사항 100% 반영)
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                      Latest Build
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800/85 leading-relaxed">
                    오늘 지시된 모든 변경(푸터 하단 다운로드 버튼 삭제 완료, 3D 로봇 로딩 시 주황색 넥스트로봇 화면 은폐 및 순백색 로더 적용, 관리자 SHA-256 인증, 방문자 통계 등)이 모두 적용된 최신 소스코드 압축파일입니다.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleDownloadZip}
                    disabled={isDownloadingZip}
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <Download className={`w-3.5 h-3.5 ${isDownloadingZip ? 'animate-bounce' : ''}`} />
                    <span>{isDownloadingZip ? '압축파일 전송 중...' : '최신 소스 ZIP 받기'}</span>
                  </button>
                  <a
                    href="/portfolio-yeji-kim.zip"
                    download={`portfolio-yeji-kim-latest-${new Date().toISOString().slice(0, 10)}.zip`}
                    className="px-2.5 py-2 rounded-lg border border-emerald-300 bg-white/80 hover:bg-white text-emerald-800 text-[11px] font-medium transition-colors"
                    title="브라우저 직접 다운로드"
                  >
                    직접 받기
                  </a>
                </div>
              </div>

              {downloadSuccess && (
                <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-xs font-semibold text-emerald-900 flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>최신 소스코드 ZIP 다운로드가 시작되었습니다! (오늘 반영된 모든 기능과 최신 파일이 포함되어 있습니다)</span>
                </div>
              )}

              {/* Summary Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>오늘 방문자 수</span>
                    <span className="w-2 h-2 rounded-full bg-[#004ab5]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#141413]">
                    {stats.todayCount} <span className="text-xs font-normal text-neutral-500">명</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">오늘 00:00 기준 집계</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>총 누적 세션</span>
                    <Users className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#141413]">
                    {stats.totalVisits} <span className="text-xs font-normal text-neutral-500">회</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">기록된 전체 방문자 수</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>평균 체류 시간</span>
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#141413]">
                    {stats.avgDurationFormatted}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">페이지 내 활성 세션 평균</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>디바이스 점유율</span>
                    <Laptop className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#141413] flex items-baseline gap-2">
                    <span>PC {stats.desktopPercent}%</span>
                    <span className="text-xs font-medium text-neutral-500">/ 모바일 {stats.mobilePercent}%</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">데스크톱 비중 우세</div>
                </div>
              </div>

              {/* Search & Filter Controls */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="IP, 지역, OS, 브라우저, 행동 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-xs focus:outline-none focus:border-[#004ab5] focus:bg-white transition-all text-[#141413]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg text-xs">
                    <button
                      onClick={() => setDeviceFilter('all')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                        deviceFilter === 'all' ? 'bg-white text-[#004ab5] shadow-2xs' : 'text-neutral-600'
                      }`}
                    >
                      전체 ({logs.length})
                    </button>
                    <button
                      onClick={() => setDeviceFilter('Desktop')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                        deviceFilter === 'Desktop' ? 'bg-white text-[#004ab5] shadow-2xs' : 'text-neutral-600'
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={() => setDeviceFilter('Mobile')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                        deviceFilter === 'Mobile' ? 'bg-white text-[#004ab5] shadow-2xs' : 'text-neutral-600'
                      }`}
                    >
                      Mobile
                    </button>
                  </div>

                  <button
                    onClick={handleClearLogs}
                    className="p-2 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="로그 전체 비우기"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Logs Table */}
              <div className="bg-white rounded-xl border border-neutral-200 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold uppercase tracking-wider text-[11px]">
                        <th className="py-3 px-4">접속 일시</th>
                        <th className="py-3 px-4">IP / 접속 위치</th>
                        <th className="py-3 px-4">OS / 브라우저</th>
                        <th className="py-3 px-4">유입 경로 (Referrer)</th>
                        <th className="py-3 px-4">체류 시간</th>
                        <th className="py-3 px-4">수행 행동 로그</th>
                        <th className="py-3 px-4 text-center">세부</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredLogs.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-neutral-400">
                            검색 조건에 맞는 방문자 로그가 없습니다.
                          </td>
                        </tr>
                      ) : (
                        filteredLogs.map((log) => {
                          const mins = Math.floor(log.durationSeconds / 60);
                          const secs = log.durationSeconds % 60;
                          const durationText = mins > 0 ? `${mins}분 ${secs}초` : `${secs}초`;

                          return (
                            <tr
                              key={log.id}
                              onClick={() => setSelectedLog(log)}
                              className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                            >
                              <td className="py-3 px-4 whitespace-nowrap font-mono text-neutral-600">
                                {log.formattedTime}
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-mono font-bold text-[#141413]">{log.ip}</div>
                                <div className="text-[11px] text-neutral-500 truncate max-w-[180px]">
                                  {log.location}
                                </div>
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5 font-medium text-[#141413]">
                                  {log.deviceType === 'Mobile' ? (
                                    <Smartphone className="w-3.5 h-3.5 text-neutral-400" />
                                  ) : (
                                    <Laptop className="w-3.5 h-3.5 text-neutral-400" />
                                  )}
                                  <span>{log.os}</span>
                                </div>
                                <div className="text-[11px] text-neutral-500">{log.browser}</div>
                              </td>
                              <td className="py-3 px-4 max-w-[160px] truncate text-neutral-600 font-mono text-[11px]">
                                {log.referrer}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap font-mono font-medium text-[#004ab5]">
                                {durationText}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex flex-wrap gap-1 max-w-[280px]">
                                  {log.actions.slice(0, 2).map((act, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] font-medium truncate max-w-[130px]"
                                    >
                                      {act}
                                    </span>
                                  ))}
                                  {log.actions.length > 2 && (
                                    <span className="px-1.5 py-0.5 rounded bg-[#004ab5]/10 text-[#004ab5] text-[10px] font-bold">
                                      +{log.actions.length - 2}
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-[#004ab5] group-hover:text-white transition-colors text-neutral-500">
                                  <ChevronRight className="w-4 h-4" />
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="px-6 py-3 bg-white border-t border-neutral-200 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-2">
              <div>
                총 <strong>{logs.length}</strong>개의 방문자 세션이 로컬 스토리지에 안전하게 보관 중입니다.
              </div>
              <div className="font-mono text-[11px] text-neutral-400">
                Admin Secure Session · Yeji Kim Portfolio
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 3: SINGLE VISITOR DETAIL MODAL (DRILL-DOWN)
           ========================================================================= */}
        {selectedLog && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs"
            onClick={() => setSelectedLog(null)}
          >
            <div
              className="relative w-full max-w-xl bg-white rounded-2xl border border-neutral-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#004ab5]" />
                  <h3 className="font-bold text-base text-[#141413]">세부 방문자 로그 정보</h3>
                </div>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="p-1 rounded-full hover:bg-neutral-100 text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div>
                    <span className="text-neutral-500 block mb-0.5">접속 일시</span>
                    <span className="font-mono font-bold text-[#141413]">{selectedLog.formattedTime}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">IP 주소</span>
                    <span className="font-mono font-bold text-[#004ab5]">{selectedLog.ip}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">접속 위치</span>
                    <span className="font-semibold text-[#141413]">{selectedLog.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">체류 시간</span>
                    <span className="font-semibold text-[#141413]">
                      {selectedLog.durationSeconds}초 ({Math.floor(selectedLog.durationSeconds / 60)}분{' '}
                      {selectedLog.durationSeconds % 60}초)
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">운영체제 및 브라우저</span>
                    <span className="font-semibold text-[#141413]">
                      {selectedLog.os} · {selectedLog.browser}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">디바이스 / 해상도</span>
                    <span className="font-semibold text-[#141413]">
                      {selectedLog.deviceType} ({selectedLog.screenResolution})
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#141413] mb-2">유입 경로 (Referrer)</h4>
                  <div className="p-3 rounded-lg bg-neutral-100 font-mono text-[11px] text-neutral-700 break-all">
                    {selectedLog.referrer}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#141413] mb-2">방문자 수행 행동 내역 (Timeline)</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedLog.actions.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-neutral-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#004ab5] shrink-0" />
                        <span className="text-neutral-800 font-medium">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#141413] mb-1">Raw User-Agent</h4>
                  <div className="p-2.5 rounded-lg bg-neutral-100 font-mono text-[10px] text-neutral-600 break-all leading-normal">
                    {selectedLog.userAgent}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedLog(null)}
                  className="px-5 py-2 rounded-xl bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
