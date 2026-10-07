export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  category: 'enterprise' | 'rpa' | 'ai' | 'desktop' | 'team' | 'personal';
  categoryLabel: string;
  clientOrOrg?: string;
  teamSize?: string;
  role: string;
  award?: string;
  summary: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  githubUrl?: string;
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface CareerItem {
  company: string;
  period: string;
  department: string;
  role: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  major: string;
  status: string;
  grade?: string;
  description: string;
}

export interface CoreStrength {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
}

export const DEVELOPER_INFO = {
  name: '김예지',
  englishName: 'YEJI KIM',
  role: 'Software Engineer',
  tagline: 'WPF, 자동화부터 인공지능까지, 끊임없이 배우며 성장하는 개발자',
  subTagline: 'C# .NET 데스크톱 엔터프라이즈 솔루션과 RPA 자동화, 그리고 컴퓨터 비전 AI까지 실무 비즈니스 가치를 창출합니다.',
  email: 'allthetimesh29@gmail.com',
  phone: '010-2658-3219',
  github: 'https://github.com/attSmileHappy',
  avatarImage: '/src/assets/images/developer_yeji_portrait_1791370021113.jpg',
  stats: [
    { label: '프로젝트 납기 준수율', value: '100%' },
    { label: '학업 우수 전공학점', value: '4.29 / 4.5' },
    { label: '수행 엔터프라이즈 프로젝트', value: '12+' },
    { label: 'AI 대회 수상 경력', value: '2관왕' }
  ]
};

export const CORE_STRENGTHS: CoreStrength[] = [
  {
    title: 'C#으로 구현한 자동화 및 UI 전문가',
    subtitle: 'Windows 애플리케이션 개발과 서비스 제공',
    description: 'C# 언어를 활용하여 Windows 애플리케이션 자동화(RPA) 프로그램을 개발하고, 웹사이트 데이터 추출 및 조작, Office365와 연계한 고효율 자동화 기능을 구축했습니다. 뿐만 아니라 WPF 및 WinForm 클라이언트 UI 설계 및 인터랙션 구현에 능숙합니다.',
    keywords: ['C# .NET', 'RPA 솔루션', 'Chrome 자동화', 'WPF / WinForm UI', 'Office 365 연계']
  },
  {
    title: 'WinForm & WPF, 데이터 설계 및 협업 능력',
    subtitle: '데이터 구조화 및 현대적 UI 아키텍처 전환',
    description: '기존 DevExpress 기반의 WinForm 엔터프라이즈 프로그램을 Telerik 기반의 최신 WPF로 성공적으로 마이그레이션했습니다. 데이터 분석 및 테이블 설계를 기반으로 EF Core를 통한 데이터 접근 통제, Entity 및 DTO 설계를 주도했습니다.',
    keywords: ['WPF 차세대 전환', 'Telerik / DevExpress', 'EF Core', 'DB 모델링 & DTO', 'PL 리더십']
  },
  {
    title: '효율적인 프로그램 관리와 사내 소스 관리자',
    subtitle: '엄격한 일정 준수와 고객 중심 품질 관리',
    description: '사내 프로그램 소스 관리자로서 철저한 버전 관리와 환경 분석을 수행하였으며, 고객사 요구사항과 개선 피드백을 신속히 반영했습니다. 팀원 간 원활한 커뮤니케이션으로 프로젝트 기간 내 100% 완료를 일관되게 달성했습니다.',
    keywords: ['Git 형상 관리', '사내 소스 관리자', '100% 일정 준수', '고객사 요구사항 분석', '빠른 이슈 해결']
  }
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    company: '와이리즘(주)',
    period: '2024.04 ~ 2025.08',
    department: 'WPF 개발팀',
    role: 'WPF 소프트웨어 엔지니어 (PL / SM / SP)',
    description: 'C# .NET WPF 기반 차세대 엔터프라이즈 솔루션 개발 및 대규모 모듈 전환 프로젝트를 담당했습니다.',
    achievements: [
      'M사 대규모(30명) 차세대 ERP 프로젝트에서 다수 모듈의 PL(Project Leader) 역할 수행',
      '기존 노후 WinForm 기반 시스템을 Telerik 기반 WPF 현대적 UI 아키텍처로 성공적 전환',
      '외교부 여권 진위여부 확인 API 및 여권 OCR, 항공권 예약 API 연동 개발',
      'C사 Visa 신청 및 처리 관리 시스템에서 실물 바코드 스캐너 및 POS 연동 실시간 통신 구축',
      'Azure DevOps 기반의 지속적 통합/배포(CI/CD) 파이프라인 관리'
    ],
    techStack: ['C#', '.NET Framework', 'WPF', 'Telerik', 'EF Core', 'MSSQL', 'Azure DevOps', 'TCP/IP']
  },
  {
    company: '시와소프트(주)',
    period: '2022.09 ~ 2024.01',
    department: 'RPA 사업부 개발부',
    role: 'RPA 솔루션 개발자 (PL / PG / SM / DBA)',
    description: '윈도우 환경 자사 RPA 엔진 및 기업 맞춤형 프로세스 자동화 파이프라인을 구축했습니다.',
    achievements: [
      'Chrome 웹 크롤링 및 브라우저 DOM 제어 엔진 개발 (크롬 드라이버 v116 자동 업데이트 대응)',
      'TCP/IP 기반 라이선스 인증 및 활성화 처리 모듈 구축',
      'W사(은행/세금계산서/급여), M사(나라장터 등 10개 사이트 입찰정보 수집), F사(그룹웨어/ERP) 프로세스 구축',
      '고객사 맞춤 기능 분석 후 신규 액션 추가 개발을 통해 모든 수주 프로젝트 기간 내 완료율 100% 달성'
    ],
    techStack: ['C#', 'Windows Application', 'WPF', 'DevExpress', 'Selenium/Chrome', 'Office 365', 'MSSQL', 'TCP/IP']
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    school: '한국방송통신대학교',
    period: '2025 ~ 현재',
    major: '컴퓨터과학과 (4년제)',
    status: '재학 중',
    description: '컴퓨터 시스템 아키텍처, 알고리즘, 소프트웨어 공학 등 컴퓨터 과학 핵심 이론을 심도 있게 탐구하며 지속적으로 역량을 강화하고 있습니다.'
  },
  {
    school: '남서울대학교',
    period: '2018 ~ 2022',
    major: '호텔경영학과',
    status: '학사 취득 (교직이수 수료)',
    grade: '전공학점 4.29 / 4.5',
    description: '우수한 학업 성취도(4.29/4.5)와 함께 교직과정을 이수하여 체계적인 커뮤니케이션 및 기획 전달 역량을 배양했습니다.'
  },
  {
    school: '중앙정보처리학원',
    period: '2022.02 ~ 2022.08',
    major: '빅데이터 기반 AI 응용 솔루션 개발자 전문과정',
    status: '수료 (우수 성적)',
    description: 'Python, 데이터 분석, 컴퓨터 비전(YOLOv5), 자연어 처리(KorBERT) 실습을 거쳐 대상(1위) 및 우수상을 수상했습니다.'
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    skills: ['C#', 'Python', 'SQL', 'R', 'JAVA', 'JavaScript', 'HTML5 / CSS3', 'Bash', 'Swift', 'Objective-C']
  },
  {
    category: 'Frameworks & Desktop',
    skills: ['.NET Core', '.NET Framework', 'WPF', 'WinForms', 'Telerik UI', 'DevExpress', 'EF Core', 'OpenCV', 'SwiftUI', 'UIKit']
  },
  {
    category: 'AI & Data Science',
    skills: ['PyTorch', 'TensorFlow', 'YOLOv5 / YOLOv3', 'KorBERT', 'DETR', 'SSD', 'Pandas / Numpy', 'Scikit-learn', 'KoNLPy', 'Flask / Django']
  },
  {
    category: 'Database & Cloud',
    skills: ['MSSQL', 'Oracle DBMS', 'MySQL', 'SQLite', 'Firebase', 'Azure DevOps', 'TCP/IP Socket']
  },
  {
    category: 'Dev Tools & Environment',
    skills: ['Visual Studio', 'Visual Studio Code', 'Git / GitLab', 'Google Colab', 'Jupyter Notebook', 'SQL Developer', 'Xcode']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'wpf-visa-mgmt',
    title: '.NET WPF 기반 Visa 신청 및 처리 관리 시스템 개발',
    period: '2025.01 ~ 2025.03',
    category: 'enterprise',
    categoryLabel: '엔터프라이즈 / C# WPF',
    clientOrOrg: 'C사',
    teamSize: '4명',
    role: 'SM, SP, UI/UX 설계 및 구현, 데이터 모델링 및 DB 설계',
    summary: '실제 현장 환경의 바코드 스캐너 및 POS 시스템과의 실시간 연동을 통해 Visa 신청 및 검증 절차를 완전 자동화한 데스크톱 솔루션',
    description: '공항 및 현장 창구에서 신속하고 오류 없는 Visa 처리를 위해 구축된 엔터프라이즈 WPF 시스템입니다. 실물 바코드 스캐너 입력 이벤트를 감지하여 실시간으로 데이터베이스 및 POS 결제 모듈과 연동하고, Telerik Reporting을 통해 규격화된 인쇄물을 즉시 출력할 수 있도록 설계했습니다.',
    keyPoints: [
      'C#, .NET 환경에서 고성능 WPF 기반 Visa 신청/처리 데스크톱 클라이언트 개발',
      '실물 바코드 스캐너 연동을 통한 바코드 인식 시 실시간 비자 현황 조회 기능 개발',
      '바코드 및 POS 시스템과의 TCP/IP 소켓 통신을 통한 실시간 데이터 처리 동기화',
      '텔레릭 리포트(Telerik Report)를 활용한 비자 발급 증명서, 일일 매출/판매 현황 보고서 출력물 개발',
      'Microsoft Azure DevOps 형상 관리 및 배포 자동화 파이프라인 구축',
      '트랜잭션 안정성을 위한 정밀 데이터베이스 모델링 및 저장 프로시저(Stored Procedure) 개발'
    ],
    technologies: ['C#', '.NET', 'WPF', 'Telerik Report', 'TCP/IP', 'MSSQL', 'Azure DevOps', 'Hardware Integration'],
    imageUrl: '/src/assets/images/enterprise_wpf_erp_1791370034167.jpg',
    metrics: [
      { label: '현장 스캔 응답속도', value: '< 200ms' },
      { label: '데이터 무결성', value: '100%' },
      { label: '보고서 템플릿', value: '다양한 일일 현황' }
    ]
  },
  {
    id: 'wpf-erp-nextgen',
    title: '.NET WPF 기반 ERP 차세대 프로그램 개발',
    period: '2024.04 ~ 2025.04',
    category: 'enterprise',
    categoryLabel: '엔터프라이즈 / C# WPF',
    clientOrOrg: 'M사',
    teamSize: '30명 (대규모 프로젝트)',
    role: 'PL, SM, SP, DBA (다수 핵심 모듈의 Project Leader 담당)',
    summary: '기존 노후 WinForm 기반 ERP 시스템을 현대적 WPF 아키텍처로 전면 개편하고, 외부 정부 부처 API 및 실시간 통신을 통합한 대형 프로젝트',
    description: '30인 규모의 엔터프라이즈 팀에서 복수 핵심 모듈의 PL로서 아키텍처 수립과 구현을 주도했습니다. DevExpress에서 Telerik UI 프레임워크로 전면 전환하여 모던 UI를 완성하고, Entity Framework Core를 도입하여 유지보수성과 쿼리 성능을 대폭 향상시켰습니다. 또한 외교부 여권 검증 및 OCR 기술을 성공적으로 연동했습니다.',
    keyPoints: [
      'DevExpress → Telerik 기반 UI 프레임워크 전면 전환 및 현대적 사용자 경험 개선',
      'EF Core(Entity Framework Core)를 활용한 데이터 접근 계층(DAL) 설계 및 성능 최적화',
      '외교부 여권 진위여부 확인 API 연동 및 여권 OCR API 연동 개발',
      '항공권 예약 조회 및 예약 등록 화면 개발, PG 결제사 및 카드사 연동 모듈 개발',
      '판매 아이템 예약/고객 관리, 마일리지 상품 관리, 택배사 배송 관리 화면 개발',
      'TCP/IP 기반 통신 구현을 통해 웹 클라이언트와 실시간 연동 처리',
      '다수의 모듈에 대한 PL(프로젝트 리더) 역할 수행 및 코드 리뷰 주도'
    ],
    technologies: ['C#', '.NET Core', 'WPF', 'Telerik UI', 'EF Core', 'MSSQL', 'Azure DevOps', 'REST API', 'OCR'],
    imageUrl: '/src/assets/images/enterprise_wpf_erp_1791370034167.jpg',
    metrics: [
      { label: '참여 인력', value: '30명' },
      { label: '담당 역할', value: '모듈 PL' },
      { label: '연동 외부 API', value: '외교부 / 항공 / 결제' }
    ]
  },
  {
    id: 'rpa-windows-engine',
    title: '.Net Windows Application 자동화 (RPA) 프로그램 개발',
    period: '2022.09 ~ 2024.01',
    category: 'rpa',
    categoryLabel: '자동화 / RPA 솔루션',
    clientOrOrg: '시와소프트(주)',
    teamSize: '5명',
    role: 'PL, PG, SM, SP, DBA',
    summary: '윈도우 데스크톱 환경에서 다양한 비즈니스 작업을 시각적으로 자동화할 수 있는 자사 독립형 RPA 솔루션 개발',
    description: '복잡한 반복 업무를 간소화하기 위한 엔터프라이즈 RPA 엔진입니다. Chrome 브라우저 DOM 조작, 스크롤 전체 캡처, 이미지 템플릿 매칭, Office 365 엑셀/워드 연계, TCP/IP 라이선스 보안 시스템 등을 포괄적으로 구현했습니다.',
    keyPoints: [
      'Chrome을 이용한 웹 데이터 크롤링 및 브라우저 DOM 조작 등의 자동화 액션 엔진 개발',
      '크롬드라이버 116 버전 자동 업데이트 기능 수정 및 지속적 호환성 보장',
      'DevExpress 서비스를 이용하여 사용자 친화적이고 직관적인 WPF 그래픽 UI 개발',
      'TCP/IP 소켓 통신을 통한 안전한 라이선스 활성화 및 등록/삭제 SQL 기능 개발',
      'Office 365, Excel 셀 조건 쓰기/검색, PDF 텍스트 추출, Zip 압축 생성 기능 개발',
      '웹 메일 본문 변수 저장, 웹페이지 스크롤 전체 캡처, 이미지 매칭 알고리즘 구현'
    ],
    technologies: ['C#', '.NET', 'WPF', 'DevExpress', 'Selenium', 'ChromeDriver', 'TCP/IP', 'MSSQL', 'Office365 API'],
    imageUrl: '/src/assets/images/rpa_automation_flow_1791370046270.jpg',
    metrics: [
      { label: '개발 기간', value: '1년 5개월' },
      { label: '지원 브라우저', value: 'Chrome 최신버전' },
      { label: '제공 액션 수', value: '25+ 자동화 노드' }
    ]
  },
  {
    id: 'rpa-custom-pipelines',
    title: '기업 맞춤형 RPA 프로세스 구축 (W사, M사, F사)',
    period: '2022.10 ~ 2023.11',
    category: 'rpa',
    categoryLabel: '자동화 / 프로세스 구축',
    clientOrOrg: 'W사, M사, F사',
    teamSize: '1 ~ 2명',
    role: 'PL, PM, QA (엔드투엔드 구축)',
    summary: '은행 세금계산서, 조달청 나라장터 입찰공고 수집, 그룹웨어/ERP 데이터 연동 자동화 프로세스 100% 납기 완수',
    description: '고객사 현업 실무자들의 요구사항을 정밀 분석하여 맞춤형 RPA 프로세스를 구축했습니다. 기존 프로그램에 없는 신규 기능이 발생할 경우 즉시 맞춤 액션을 개발 및 테스트하여 약속된 일정 내 100% 성공적으로 완료했습니다.',
    keyPoints: [
      'W사: 은행 금융 업무, 전자세금계산서 발행 및 급여 이체 자동화 프로세스 구축 (2022.10 ~ 2022.11)',
      'M사: 나라장터 등 10개 주요 공공 입찰 사이트의 입찰정보 및 사전규격 자동 수집 프로세스 구축 (2023.03 ~ 2023.04)',
      'F사: 사내 그룹웨어 및 ERP 시스템 간 자료 수집 및 자동 업로드 파이프라인 구축 (2023.06 ~ 2023.11)',
      '기존 솔루션의 기능으로 구현되지 않는 예외 상황 시 필요 기능 추가 개발 및 검증 100% 완료'
    ],
    technologies: ['C#', 'RPA Engine', 'Web Automation', 'Banking API', 'ERP Integration', 'Data Processing'],
    imageUrl: '/src/assets/images/rpa_automation_flow_1791370046270.jpg',
    metrics: [
      { label: '기한 내 납기율', value: '100% 달성' },
      { label: '구축 대상 사이트', value: '10+ 공공/금융' },
      { label: '업무 시간 단축', value: '80% 이상 절감' }
    ]
  },
  {
    id: 'wpf-image-puzzle',
    title: 'C#, WPF 이미지 유사 변환 및 비틀림 보정 프로그램',
    period: '2024.03',
    category: 'desktop',
    categoryLabel: '데스크톱 / OpenCV',
    teamSize: '1명 (개인 솔루션)',
    role: 'PM, QA, UI/UX 설계 및 개발, 이미지 처리 알고리즘 구현',
    githubUrl: 'https://github.com/attSmileHappy/IMGPuzzle',
    summary: '기준 이미지를 토대로 유사도를 측정하고 틀어진 이미지의 위치를 정밀 조정하여 OCR 전처리 품질을 높이는 WPF 도구',
    description: '문서, 카드, 주민등록증 등 스캔 이미지의 각도와 왜곡을 자동으로 감지하고 보정하는 전처리 프로그램입니다. OpenCV 알고리즘과 C# WPF의 부드러운 렌더링 파이프라인을 결합하여 실시간 미리보기 및 저장을 지원합니다.',
    keyPoints: [
      'C#, .NET Framework 4.8 환경의 고효율 WPF 데스크톱 애플리케이션 개발',
      'OpenCV 라이브러리를 활용한 템플릿 매칭 및 이미지 유사도 측정 알고리즘 개발',
      'WPF의 이미지 소스 미러링 처리 및 사용자 액션에 반응하는 직관적인 UI 이벤트 개발',
      '주민등록증, 신분증, 카드 등 틀어진 문서 이미지를 정상 위치로 정렬하는 OCR 전처리 활용 파이프라인'
    ],
    technologies: ['C#', '.NET 4.8', 'WPF', 'OpenCV', 'Image Processing', 'Computer Vision'],
    metrics: [
      { label: '실행 환경', value: '.NET Framework 4.8' },
      { label: '핵심 라이브러리', value: 'OpenCV' }
    ]
  },
  {
    id: 'winform-pos-system',
    title: 'C#, WinForm POS 시스템 개발',
    period: '2024.03',
    category: 'desktop',
    categoryLabel: '데스크톱 / WinForm',
    teamSize: '1명 (개인 솔루션)',
    role: 'PM, QA, UI/UX 설계 및 구현, 데이터베이스 설계',
    githubUrl: 'https://github.com/attSmileHappy/YeziPos',
    summary: '상점 및 외식업 현장에서 사용할 수 있는 시각적 메뉴 선택 및 실시간 주문·매출 통계 데스크톱 POS 프로그램',
    description: '가볍고 반응성이 뛰어난 Windows Form 애플리케이션입니다. 사용자 로그인 보안, 이미지 기반 메뉴 카탈로그, 실시간 장바구니 계산, 일일 주문 수량 및 총 매출액 통계 산출 기능을 완비했습니다.',
    keyPoints: [
      'C#, .NET Framework 4.8 환경의 빠르고 안정적인 WinForm 애플리케이션 개발',
      '관리자/점원 권한 분리를 지원하는 로그인 보안 화면 개발',
      '메뉴 항목 및 가격 관리, 이미지 썸네일 기반 시각적 메뉴 선택 서비스',
      '실시간 주문 처리, 총 매출액 및 주문량 집계 통계 서비스 개발'
    ],
    technologies: ['C#', '.NET 4.8', 'WinForm', 'MSSQL / SQLite', 'Data Analytics', 'Desktop GUI'],
    metrics: [
      { label: '실행 환경', value: 'WinForm 4.8' },
      { label: '기능', value: '주문/매출/통계 풀스택' }
    ]
  },
  {
    id: 'ai-yolov5-nutrition',
    title: 'YOLOv5 음식 인식 및 영양정보 제공 모델',
    period: '2022.06 ~ 2022.07',
    category: 'ai',
    categoryLabel: '인공지능 / 컴퓨터 비전',
    teamSize: '팀 프로젝트',
    role: '데이터 수집 및 전처리, YOLOv5 모델 학습 코드 작성, PPT 총괄',
    award: '🏆 대상 수상 (중앙정보처리학원장상)',
    summary: '업로드된 음식 이미지에서 음식을 실시간으로 감지하고 영양 성분과 칼로리를 자동 분석하는 AI 서비스 (대상 수상)',
    description: 'AI HUB에서 엄선한 31종, 9,528개의 음식 고해상도 이미지 데이터를 전처리하고, YOLOv5, DETR, SSD 3개 딥러닝 모델의 정밀도와 속도를 다각도로 비교 분석하여 최적의 YOLOv5l 모델을 훈련했습니다. Flask 서버를 통해 모바일 웹에서 실시간 영양 정보(칼로리, 탄단지 등)를 시각화했습니다.',
    keyPoints: [
      'AI HUB 선정 31종 9,528개 대규모 음식 데이터(JPG, XML) 정제 및 Roboflow 증강 처리',
      'YOLOv5 vs DETR vs SSD 모델 구조적 비교 분석 후 최종 YOLOv5l 모델 선정 (Epoch 100, Batch 16)',
      'mAP 및 정밀도/재현율 평가를 거쳐 모델 파인튜닝 최적화 수행',
      'Flask 백엔드와 모바일 반응형 웹 뷰를 연동하여 이미지 업로드 즉시 영양 성분 카드 렌더링',
      '중앙정보처리학원 종합 프로젝트 발표회 대상(1위) 수상'
    ],
    technologies: ['Python 3.7', 'PyTorch', 'YOLOv5', 'Roboflow', 'Flask', 'Google Colab', 'Pandas'],
    imageUrl: '/src/assets/images/ai_vision_nutrition_1791370055982.jpg',
    metrics: [
      { label: '학습 데이터', value: '9,528개 이미지' },
      { label: '분류 음식 수', value: '31종' },
      { label: '수상 내역', value: '대상 (1위)' }
    ]
  },
  {
    id: 'ai-korbert-beer',
    title: 'KorBERT 기반 취향 맞춤 수제 맥주 추천 챗봇',
    period: '2022.05 ~ 2022.06',
    category: 'ai',
    categoryLabel: '인공지능 / 자연어 처리 (NLP)',
    teamSize: '팀 프로젝트',
    role: '크롤링 데이터 전처리, 학습용 데이터 문장 생성 및 파인튜닝, 예외 처리, PPT 작성',
    award: '🥈 우수상 수상',
    summary: '사용자가 자연어로 입력하는 맛, 향, 도수 키워드를 KorBERT 모델로 의도 분류하여 최적의 수제 맥주를 추천하는 대화형 엔진 (우수상)',
    description: '생활맥주 사이트에서 55종의 맥주 상세 정보를 웹 크롤링하고 15,000여 개의 대화형 발화 문장을 구축했습니다. 한국어 언어 모델인 KorBERT를 파인튜닝하여 사용자의 취향 문장을 정밀 분석하고, 실시간 Flask 대화창으로 자연스러운 추천을 제공했습니다.',
    keyPoints: [
      'Selenium을 활용한 생활맥주 55종 맥주 특징 데이터 크롤링 및 15,000여 개 문장 데이터셋 생성',
      '정규표현식 및 형태소 정제를 통한 데이터 정제 파이프라인 구축',
      'KorBERT 모델 선정, 학습 배치 사이즈 최적화(32, 64, 128) 및 Dropout 조절을 통한 과적합 방지',
      'Flask 기반 챗봇 웹 UI 개발 및 카카오톡 스타일 메신저 대화 알고리즘 구현',
      '중앙정보처리학원 프로젝트 경진대회 우수상 수상'
    ],
    technologies: ['Python 3.7', 'TensorFlow 1.15', 'KorBERT', 'Selenium', 'Flask', 'Pandas', 'Numpy'],
    metrics: [
      { label: '학습 문장 수', value: '15,000+ 문장' },
      { label: '크롤링 맥주', value: '55종' },
      { label: '수상 내역', value: '우수상' }
    ]
  },
  {
    id: 'game-pygame-shooter',
    title: 'Pygame 공포 테마 슈팅 게임 "KILL OR DIE"',
    period: '2022.05',
    category: 'team',
    categoryLabel: '팀 프로젝트 / 게임 개발',
    teamSize: '팀 프로젝트',
    role: '게임 난이도 조절 로직, 아이템 함수 작성, 객체지향 클래스 설계, PPT 총괄',
    summary: 'Pygame 엔진을 이용한 공포 분위기의 2D 탑다운 서바이벌 슈팅 게임',
    description: 'Python의 Pygame 라이브러리를 활용하여 게임 루프, 플레이어와 몬스터 객체 간 충돌 감지, 스킬 및 아이템 드롭 시스템을 객체지향(OOP) 방식으로 설계하고 구현했습니다.',
    keyPoints: [
      'Class 상속 구조를 활용한 플레이어, 적 몬스터, 탄환 및 아이템 엔티티 모듈화',
      '단계별 난이도 조절 알고리즘 및 웨이브별 몬스터 스폰 주기 설계',
      '특수 스킬 발동 및 체력/공격력 회복 아이템 상호작용 함수 구현',
      '키보드 조작 및 음향 효과 동기화 처리'
    ],
    technologies: ['Python', 'Pygame', 'OOP Architecture', 'Game Loop'],
    metrics: [
      { label: '구현 방식', value: 'OOP 클래스 설계' },
      { label: '플랫폼', value: 'Python Pygame' }
    ]
  },
  {
    id: 'nlp-wordcloud',
    title: 'KoNLPy 한국어 형태소 분석 기반 워드 클라우드 (Word Cloud)',
    period: '2022.06',
    category: 'personal',
    categoryLabel: '개인 프로젝트 / NLP',
    teamSize: '1명 (개인 프로젝트)',
    role: '자연어 데이터 전처리 및 워드클라우드 시각화 파이프라인 개발',
    summary: '맛집 블로그 방대한 텍스트에서 KoNLPy로 핵심 명사/형용사를 추출하고 빈도수 기반 시각화 생성',
    description: '텍스트 데이터로부터 핵심 키워드와 트렌드를 직관적으로 도출하는 자연어 처리 프로젝트입니다. 불용어(Stopwords) 제거, 특수문자 정제, 형태소 토큰화 파이프라인을 체계적으로 구현했습니다.',
    keyPoints: [
      'KoNLPy 한국어 처리 패키지(Okt 토크나이저)를 활용한 명사/형용사 품사 추출',
      '개행문자, 특수문자, 중복 공백 제거 및 영문자 소문자화 정규화 처리',
      '불용어 목록(Stopwords) 구축을 통한 무의미한 단어 필터링',
      'WordCloud 라이브러리와 PIL Image 마스크를 결합한 맞춤형 그래픽 시각화'
    ],
    technologies: ['Python', 'KoNLPy', 'Okt Tokenizer', 'WordCloud', 'Matplotlib', 'Pandas'],
    metrics: [
      { label: '활용 토크나이저', value: 'KoNLPy Okt' },
      { label: '출력 형식', value: '마스크 이미지 시각화' }
    ]
  },
  {
    id: 'api-paper-summary',
    title: 'RapidAPI & Papago OpenAPI 논문 요약 및 번역 파이프라인',
    period: '2022.07',
    category: 'personal',
    categoryLabel: '개인 프로젝트 / API 연동',
    teamSize: '1명 (개인 프로젝트)',
    role: 'OpenAPI 연동 파이프라인 및 요약/번역 자동화 함수 개발',
    summary: '영문 5페이지 학술 논문을 RapidAPI로 핵심 요약하고 Naver Papago API로 실시간 번역하는 워크플로우',
    description: '연구 논문 검토 시간을 획기적으로 줄이기 위해 외부 API를 유기적으로 결합한 자동화 도구입니다. 영어 원문 텍스트를 전송하여 핵심 문장들을 요약받고, 이를 네이버 파파고 API를 통해 자연스러운 한국어로 즉시 번역합니다.',
    keyPoints: [
      'RapidAPI 엔드포인트를 통한 영문 장문 텍스트 압축 요약 알고리즘 연동',
      '네이버 파파고(Papago) 번역 OpenAPI 인증 및 파라미터 제어',
      '요약 단계와 번역 단계를 단일 파이프라인 함수로 결합하여 글자 수 설정 및 포맷팅 처리',
      'RESTful API 통신 예외 처리 및 JSON 파싱 최적화'
    ],
    technologies: ['Python', 'RapidAPI', 'Naver Papago OpenAPI', 'Requests', 'Text Summarization'],
    metrics: [
      { label: '연동 API', value: 'RapidAPI + Papago' },
      { label: '처리 대상', value: '영문 학술 논문' }
    ]
  },
  {
    id: 'chatbot-flask-kakao',
    title: 'Flask & 구름 IDE 기반 카카오톡 동물 품종 판별 챗봇',
    period: '2022.07',
    category: 'personal',
    categoryLabel: '개인 프로젝트 / 챗봇',
    teamSize: '1명 (개인 프로젝트)',
    role: '카카오톡 챗봇 제작 및 관리, Flask 웹 백엔드 작성 및 배포',
    summary: '구름 IDE와 Flask 서버를 구축하고 카카오 i 오픈빌더와 연동한 모바일 메신저 품종 판별 봇',
    description: '카카오 비즈니스 채널 및 오픈빌더 스킬 서버를 직접 구축한 프로젝트입니다. 사용자가 메신저 창에 반려동물 품종이나 질문을 입력하면, 엔티티와 발화 블록을 매핑하여 신속하게 응답을 반환합니다.',
    keyPoints: [
      '구름 IDE 클라우드 환경에서 Flask RESTful 웹 애플리케이션 구축 및 포트 바인딩',
      '카카오 i 오픈빌더 챗봇 채널 생성 및 사용자 발화 키워드/엔티티 블록 설계',
      'JSON 페이로드 응답 프로토콜에 맞춘 응답 텍스트 및 카드 템플릿 생성',
      '카카오톡 실제 메신저 앱 환경에서의 배포 및 테스트 완료'
    ],
    technologies: ['Python', 'Flask', '구름 IDE', '카카오 i 오픈빌더', 'KakaoTalk API', 'JSON Protocol'],
    metrics: [
      { label: '배포 환경', value: '구름 IDE Cloud' },
      { label: '연동 플랫폼', value: '카카오톡 메신저' }
    ]
  }
];
