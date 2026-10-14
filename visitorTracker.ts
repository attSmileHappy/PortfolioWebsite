/**
 * Visitor Tracking Engine for Portfolio Admin Dashboard
 */

export interface VisitorLog {
  id: string;
  timestamp: string; // ISO string
  formattedTime: string;
  ip: string;
  location: string;
  country: string;
  city: string;
  os: string;
  browser: string;
  deviceType: 'Desktop' | 'Mobile' | 'Tablet';
  screenResolution: string;
  referrer: string;
  visitedPath: string;
  durationSeconds: number;
  actions: string[];
  userAgent: string;
}

const STORAGE_KEY = 'yeji_portfolio_visitor_logs_v1';
const SESSION_KEY = 'yeji_portfolio_session_id';

function parseClientEnvironment() {
  if (typeof window === 'undefined') {
    return {
      os: 'Windows 11',
      browser: 'Chrome 126',
      deviceType: 'Desktop' as const,
      screenResolution: '1920x1080',
      userAgent: 'Mozilla/5.0',
    };
  }

  const ua = navigator.userAgent;
  let os = 'Windows 11';
  if (/Windows NT 10.0/i.test(ua)) os = 'Windows 11/10';
  else if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS (Apple Silicon/Intel)';
  else if (/iPhone/i.test(ua)) os = 'iOS (iPhone)';
  else if (/iPad/i.test(ua)) os = 'iPadOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Linux/i.test(ua)) os = 'Linux';

  let browser = 'Google Chrome';
  if (/Edg\//i.test(ua)) browser = 'Microsoft Edge';
  else if (/Chrome\//i.test(ua)) browser = 'Google Chrome';
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Apple Safari';
  else if (/Firefox\//i.test(ua)) browser = 'Mozilla Firefox';

  let deviceType: 'Desktop' | 'Mobile' | 'Tablet' = 'Desktop';
  if (/iPad|Tablet/i.test(ua)) deviceType = 'Tablet';
  else if (/Mobi|Android|iPhone/i.test(ua)) deviceType = 'Mobile';

  const screenResolution = `${window.screen.width}x${window.screen.height}`;

  return { os, browser, deviceType, screenResolution, userAgent: ua };
}

function formatKoreanDateTime(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

const INITIAL_SEED_LOGS: VisitorLog[] = [
  {
    id: 'log-seed-1',
    timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 18)),
    ip: '210.108.34.12',
    location: '대한민국 경기 성남시 판교',
    country: 'KR',
    city: 'Pangyo',
    os: 'Windows 11',
    browser: 'Google Chrome',
    deviceType: 'Desktop',
    screenResolution: '2560x1440',
    referrer: 'https://github.com/attSmileHappy',
    visitedPath: '/#featured',
    durationSeconds: 245,
    actions: ['페이지 로드 (3D Spline)', 'Visa WPF 상세 명세서 열람', '기술 스택 탭 전환'],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0',
  },
  {
    id: 'log-seed-2',
    timestamp: new Date(Date.now() - 1000 * 60 * 75).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 75)),
    ip: '175.209.44.89',
    location: '대한민국 서울 강남구 테헤란로',
    country: 'KR',
    city: 'Seoul',
    os: 'macOS (Apple Silicon)',
    browser: 'Apple Safari',
    deviceType: 'Desktop',
    screenResolution: '1728x1117',
    referrer: 'https://www.linkedin.com',
    visitedPath: '/#experience',
    durationSeconds: 382,
    actions: ['페이지 로드', 'Resume Overview 모달 열람', '경력 타임라인 확인', 'PDF 인쇄 미리보기'],
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/17.5',
  },
  {
    id: 'log-seed-3',
    timestamp: new Date(Date.now() - 1000 * 60 * 190).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 190)),
    ip: '121.134.88.201',
    location: '대한민국 대전 유성구',
    country: 'KR',
    city: 'Daejeon',
    os: 'Windows 10',
    browser: 'Microsoft Edge',
    deviceType: 'Desktop',
    screenResolution: '1920x1080',
    referrer: 'https://www.google.co.kr',
    visitedPath: '/#projects',
    durationSeconds: 154,
    actions: ['페이지 로드', '차세대 ERP 케이스 스터디 열람', 'FAQ 아코디언 확인'],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Edg/127.0',
  },
  {
    id: 'log-seed-4',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 60 * 14)),
    ip: '223.38.19.112',
    location: '대한민국 서울 영등포구 여의도',
    country: 'KR',
    city: 'Seoul',
    os: 'iOS (iPhone)',
    browser: 'Apple Safari',
    deviceType: 'Mobile',
    screenResolution: '393x852',
    referrer: 'Direct / Bookmark',
    visitedPath: '/',
    durationSeconds: 98,
    actions: ['모바일 히어로 확인', '경력 및 학력 사항 스크롤', '이메일 주소 복사'],
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
  },
  {
    id: 'log-seed-5',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 60 * 22)),
    ip: '14.52.128.77',
    location: '대한민국 경기 수원시 영통구',
    country: 'KR',
    city: 'Suwon',
    os: 'Windows 11',
    browser: 'Google Chrome',
    deviceType: 'Desktop',
    screenResolution: '1920x1080',
    referrer: 'Direct',
    visitedPath: '/#projects',
    durationSeconds: 290,
    actions: ['RPA 자동화 프로젝트 확인', 'OpenCV 이미지 변환 프로젝트 열람', 'GitHub 링크 이동'],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0',
  },
  {
    id: 'log-seed-6',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    formattedTime: formatKoreanDateTime(new Date(Date.now() - 1000 * 60 * 60 * 36)),
    ip: '118.235.15.63',
    location: '대한민국 서울 마포구 상암',
    country: 'KR',
    city: 'Seoul',
    os: 'macOS (Intel)',
    browser: 'Google Chrome',
    deviceType: 'Desktop',
    screenResolution: '2560x1440',
    referrer: 'https://github.com',
    visitedPath: '/#intro',
    durationSeconds: 410,
    actions: ['페이지 로드', 'AI 프로젝트 (YOLOv5 대상) 상세 확인', 'Resume Overview 확인'],
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/127.0',
  },
];

export function getStoredVisitorLogs(): VisitorLog[] {
  if (typeof window === 'undefined') return INITIAL_SEED_LOGS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_LOGS));
      return INITIAL_SEED_LOGS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // fallback
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_LOGS));
  return INITIAL_SEED_LOGS;
}

export function saveStoredVisitorLogs(logs: VisitorLog[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch (err) {
    console.error('Failed to save visitor logs', err);
  }
}

export function clearStoredVisitorLogs(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

/**
 * Initializes the visitor session on page load
 */
export async function initializeVisitorSession(): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    const logs = getStoredVisitorLogs();

    if (sessionId) {
      // Session already created, simply update duration or heartbeat
      const existing = logs.find((l) => l.id === sessionId);
      if (existing) {
        existing.durationSeconds += 10;
        saveStoredVisitorLogs(logs);
      }
      return;
    }

    // New visitor session!
    sessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);

    const env = parseClientEnvironment();
    const now = new Date();

    // Default IP and location
    let ip = '127.0.0.1 (Local Client)';
    let location = '대한민국 서울 (추정)';
    let country = 'KR';
    let city = 'Seoul';

    // Asynchronously attempt to fetch real public IP
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch('https://api.ipify.org?format=json', { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data.ip) {
          ip = data.ip;
          location = '대한민국 (실시간 접속 IP 확인됨)';
        }
      }
    } catch {
      // Ignore network timeout
    }

    const referrer = document.referrer ? document.referrer : 'Direct / Bookmark';

    const newLog: VisitorLog = {
      id: sessionId,
      timestamp: now.toISOString(),
      formattedTime: formatKoreanDateTime(now),
      ip,
      location,
      country,
      city,
      os: env.os,
      browser: env.browser,
      deviceType: env.deviceType,
      screenResolution: env.screenResolution,
      referrer,
      visitedPath: window.location.pathname + window.location.hash,
      durationSeconds: 15,
      actions: ['페이지 첫 진입 (3D Spline 로봇 로드)'],
      userAgent: env.userAgent,
    };

    // Prepend new visitor to the log list
    const updated = [newLog, ...logs];
    saveStoredVisitorLogs(updated);

    // Heartbeat duration updater
    const interval = setInterval(() => {
      const currentLogs = getStoredVisitorLogs();
      const target = currentLogs.find((l) => l.id === sessionId);
      if (target) {
        target.durationSeconds += 15;
        saveStoredVisitorLogs(currentLogs);
      }
    }, 15000);

    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
    });
  } catch (e) {
    console.error('Visitor tracking error:', e);
  }
}

/**
 * Record custom interaction in the visitor session log
 */
export function recordVisitorAction(actionText: string): void {
  if (typeof window === 'undefined') return;

  try {
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) return;

    const logs = getStoredVisitorLogs();
    const target = logs.find((l) => l.id === sessionId);
    if (target) {
      if (!target.actions.includes(actionText)) {
        target.actions.push(actionText);
        saveStoredVisitorLogs(logs);
      }
    }
  } catch {}
}

/**
 * Add a simulated test visitor log for testing purposes
 */
export function generateTestVisitorLog(): VisitorLog {
  const sampleIps = [
    { ip: '218.154.210.4', loc: '대한민국 서울 구로디지털단지' },
    { ip: '125.132.88.92', loc: '대한민국 경기 안양시 동안구' },
    { ip: '112.170.9.14', loc: '대한민국 인천 연수구 송도' },
    { ip: '220.73.142.6', loc: '대한민국 대구 수성구' },
  ];
  const sample = sampleIps[Math.floor(Math.random() * sampleIps.length)];
  const now = new Date();

  return {
    id: `test-${Date.now()}`,
    timestamp: now.toISOString(),
    formattedTime: formatKoreanDateTime(now),
    ip: sample.ip,
    location: sample.loc,
    country: 'KR',
    city: 'Korea',
    os: Math.random() > 0.5 ? 'Windows 11' : 'macOS (Apple Silicon)',
    browser: Math.random() > 0.4 ? 'Google Chrome' : 'Apple Safari',
    deviceType: 'Desktop',
    screenResolution: '1920x1080',
    referrer: 'https://github.com/attSmileHappy',
    visitedPath: '/#projects',
    durationSeconds: Math.floor(Math.random() * 300) + 40,
    actions: ['페이지 로드', '테스트 세션 시뮬레이션', '프로젝트 아카이브 열람'],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) TestBrowser/1.0',
  };
}
