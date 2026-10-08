import { projectData as originalProjects } from '../projects/data/projectData';

// Current images are existing reference photos, not verified service screenshots.
// Replace thumbnail and heroImage with actual UI captures before publication.
// Original assets and live Notion links are retained. Confirm years and
// project-specific roles before publishing; no dates or achievements are invented.
const selection = [
  { source: 'Dabang', id: 'personal-finance', title: 'PERSONAL FINANCE', subtitle: '개인자산관리', description: '부동산과 금융 정보를 연결하는 개인 자산관리 대시보드 디자인.' },
  { source: 'ProjectCryptoExchange', id: 'crypto-exchange', title: 'CRYPTO EXCHANGE', subtitle: '가상화폐거래소 UI/UX', description: '복잡한 거래 정보를 정리하는 디지털 금융 인터페이스.' },
  { source: 'OnlineEduSystem', id: 'learning-platform', title: 'LEARNING PLATFORM', subtitle: '비대면 학습관리시스템', description: '온라인 학습을 위한 교육 서비스 인터페이스.' },
  { source: 'SnuDeptRenewal', id: 'snu-renewal', title: 'SNU DEPARTMENT', subtitle: '서울대학교 학과 페이지 리뉴얼', description: '학과의 정보를 전달하는 대학 웹사이트 리뉴얼.' },
];
// Reused and condensed from the existing ProjectFinance page.
// Expected benefits are not presented as measured results.
const caseStudies = {
  'personal-finance': {
    year: '2025', period: '2025.02 시작', projectType: '개인 프로젝트',
    keyWork: ['개인 자산관리 대시보드 디자인', 'React·MUI 환경의 화면 퍼블리싱'],
    roles: ['UI/UX Design', 'Publishing'], skills: ['Figma', 'React', 'MUI'],
    liveUrl: 'https://jiyu-in.github.io/dabang_dashboard/',
    overview: '부동산 중개 서비스의 금융·자산관리 확장을 주제로 디자인하고 퍼블리싱한 개인 프로젝트입니다. 부동산을 포함한 자산과 금융 정보를 직관적으로 제공하여, 사용자가 자신의 재무 상태를 파악하고 의사결정을 할 수 있도록 설계했습니다.',
    problem: '부동산 거래 과정에서 대출·보험·투자 등 여러 금융 서비스가 필요합니다. 사용자가 자산, 대출, 투자 정보를 한눈에 확인하고 부동산 서비스와 금융 서비스 사이의 흐름을 이어갈 수 있도록 정보를 정리하는 것이 주요 목표였습니다.',
    approach: '다방을 이용하는 일반 고객을 대상으로 자산, 대출, 투자 정보를 우선 배치했습니다. 최근 거래 내역과 대출 현황을 목적별로 그룹화하고, 자산 분석·지출 분석 등 숫자 정보를 그래프와 시각 요소로 이해할 수 있도록 구성했습니다.',
    design: '기존 다방의 블루 계열 브랜드 컬러를 유지했습니다. 사이드바로 내비게이션을 구분하고, 서비스 내 각 정보 영역을 카드로 정리했습니다. 중요한 데이터는 컬러와 글자 크기로 구분하여 금융 정보의 우선순위를 전달했습니다.',
    implementation: '대시보드의 서비스 화면을 퍼블리싱했습니다. 기존 자료에는 완성된 퍼블리싱 화면과 부동산 자산 연결·검색 화면의 추가 작업 내용이 기록되어 있습니다.',
    result: null,
    todo: ['실제 UI 화면 이미지 교체', '개인 프로젝트의 현재 진행 상태·공개 가능 범위 확인', '측정된 성과 확인', '실제 배포·서비스 적용 범위 확인'],
  },
  'crypto-exchange': {
    year: '2017–2019', period: '2017–2019',
    roles: ['UI Design', 'UX Design', 'Web / Mobile Design'],
    keyWork: ['메인 페이지 및 배너 제작', '직관적인 거래 버튼과 UI 요소 설계', 'PC/Mobile 적응형 디자인'],
    overview: '가상화폐거래소의 UI 디자인과 사용자 경험을 설계했습니다. PC와 모바일 환경을 고려한 적응형 디자인을 작업했습니다.',
    approach: '사용자가 즉시 거래를 시작할 수 있도록 직관적인 버튼과 UI 요소를 설계했습니다.',
    design: '메인 페이지와 배너를 제작하고, PC와 모바일에 맞는 화면을 디자인했습니다.',
    todo: ['실제 UI 화면 이미지 교체', '사용 도구 확인', '상세 문제 정의·구현 범위·결과 확인'],
  },
  'learning-platform': {
    year: '2022–2024', period: '2022.10–2024.10',
    roles: ['UI/UX Design'], skills: ['React', 'GitHub'],
    keyWork: ['개인 대시보드 중심의 학습관리 UI 디자인', '복잡한 데이터의 사용자 경험 중심 디자인', 'GitHub 프로젝트 관리'],
    overview: '개인 대시보드를 통한 비대면 학습관리 시스템 구축 프로젝트입니다.',
    design: '복잡한 데이터를 사용자 경험에 맞게 정리하고 디자인했습니다.',
    implementation: 'React 환경에서 작업하고 GitHub로 프로젝트를 관리했습니다.',
    todo: ['실제 UI 화면 이미지 교체', '본인의 구체적인 구현 범위 확인', '상세 문제 정의·접근·결과 확인'],
  },
  'snu-renewal': {
    year: '2014–2015', period: '2014.04–2015.04',
    roles: ['Web Design', 'Publishing'], skills: ['PHP', '그누보드'],
    keyWork: ['학과 브랜드 이미지 제작', 'PHP 기반 페이지 코딩', '그누보드 게시판 제작'],
    overview: '서울대학교 학과의 브랜드 이미지와 정보 제공을 개선하기 위한 페이지 리뉴얼입니다.',
    design: '학과의 브랜드 이미지를 제작했습니다.',
    implementation: 'PHP 기반으로 코딩하고 그누보드를 사용해 게시판을 제작했습니다.',
    todo: ['실제 UI 화면 이미지 교체', '상세 문제 정의·접근·결과 및 공개 범위 확인'],
  },
};

export const projectData = selection.map((project, index) => {
  const original = originalProjects.find(item => item.componentName === project.source) || {};
  const thumbnail = project.thumbnail || original.img || null;
  return {
    index: String(index + 1).padStart(2, '0'), year: null, period: null, projectType: null, liveUrl: null,
    categories: original.category || [], roles: [], skills: [], thumbnail,
    heroImage: project.heroImage || thumbnail, url: original.url || null,
    imageKind: 'reference', imageAlt: null, imageCaption: null,
    imageWidth: 1920, imageHeight: 1329,
    keyWork: [], designImages: [],
    overview: project.description || null, problem: null, approach: null,
    design: null, implementation: null, result: null,
    todo: ['실제 UI 화면 이미지 교체', '상세 case study 본문·성과 확인', '작업 연도 확인', '프로젝트별 Role / Skills 확인'],
    ...caseStudies[project.id],
    ...project,
  };
});
