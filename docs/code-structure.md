# 현재 코드 구조

`src/index.jsx` → `App.jsx`에서 ThemeProvider, createGlobalStyle, 커서와 HashRouter를 연결합니다. PageTransition은 styled(motion.div)로 라우트 진입·퇴장을 처리합니다.

`pages/Home.jsx`는 Header, HeroIntro, ScrollStorySection, ProjectPreviewSection, SelectedWorks, ProjectArchive, Contact, Footer를 조합합니다. `pages/Project.jsx`는 기존 프로젝트 데이터와 이미지, 아코디언, 원본 Notion 링크를 유지합니다. 별도의 Drawer 구현은 현재 앱에 없습니다.

모든 컴포넌트 스타일은 `components/styles/*.styles.js`에 있습니다. `Common.styles.js`에서 Container, SkipLink, 숨김 콘텐츠, 제목과 본문, 링크 스타일을 재사용합니다. 스타일 props는 `$` 접두사를 사용합니다. className 전달은 styled 커스텀 컴포넌트 연결에 필요한 경우만 유지합니다.

`styles/theme.js`에서 컬러, 폰트, 간격, 최대 너비와 breakpoints를 관리하고 `GlobalStyle.js`에서 reset, 폰트, focus-visible과 cursor 선택자를 처리합니다. motion style 값은 프레임별 애니메이션을 위한 런타임 값입니다.

`data/scrollPortfolioData.js`, `siteData.js`, `projectData.js`, `profileData.js`에서 화면 문구와 콘텐츠를 수정합니다. `notebookData.js`에는 현재 목록 설명과 이미지 없는 경우의 안내만 남아 있습니다.

Vite 빌드는 styled-components displayName 변환 플러그인을 사용하지 않습니다. 프로덕션 DOM은 런타임 생성 클래스명을 사용합니다. 생성된 클래스와 CSS는 브라우저에서 볼 수 있습니다.
