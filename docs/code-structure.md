# JSX / 스타일 / 콘텐츠 분리

## 관리 위치

- JSX 및 동작: src/components/*.jsx, src/pages/*.jsx
- 컴포넌트 스타일: src/components/styles/이름.styles.js
- 사이트 공통 문구·메뉴·상세 섹션 제목: src/data/siteData.js
- Hero 내용: src/data/heroData.js
- 프로젝트 사실·기간·역할·본문: src/data/projectData.js
- 프로필·스킬·연락처: src/data/profileData.js
- 검증된 비주얼: src/data/visualData.js
- 공통 줄바꿈 렌더링: src/components/TextLines.jsx
- 공통 섹션 스타일: src/components/styles/Section.styles.js (기존 Section.jsx 이동)
- 전체 테마 및 초기 스타일: 기존 src/styles/theme.js, GlobalStyle.js

## 분리된 스타일 파일

- src/components/styles/About.styles.js
- src/components/styles/Contact.styles.js
- src/components/styles/Experience.styles.js
- src/components/styles/Footer.styles.js
- src/components/styles/Header.styles.js
- src/components/styles/ProjectCard.styles.js
- src/components/styles/ProjectImage.styles.js
- src/components/styles/Section.styles.js
- src/components/styles/SectionTitle.styles.js
- src/components/styles/SelectedVisuals.styles.js
- src/components/styles/SelectedWorks.styles.js
- src/components/styles/Skills.styles.js
- src/components/styles/NotFound.styles.js
- src/components/styles/Project.styles.js

기존 CSS의 레이아웃·색상·클래스·hover는 유지하고 breakpoint를 theme에서 참조하도록 정리했습니다. React JSX 자동 변환을 사용해 불필요한 React 기본 import를 정리했습니다. 의존성과 package-lock은 변경하지 않았습니다. 포맷 도구는 일회성 실행했으며 프로젝트 dependency로 추가하지 않았습니다.

## 범위

현재 앱에서 사용하는 Header / SelectedWorks / ProjectCard / ProjectImage / SelectedVisuals / About / Skills / Experience / Contact / Footer / SectionTitle과 Project / NotFound 페이지를 분리했습니다. Home은 스타일이 없는 페이지 조합으로 유지합니다. SectionLink는 스타일이 없는 링크 동작 컴포넌트입니다. 기존 Hero 구조도 유지합니다.

현재 사용하지 않는 src/component/와 이전 src/projects/*.jsx는 보존했습니다. src/projects/data/projectData.js는 현재 프로젝트 데이터가 참조하는 원본입니다. 이전 작업이 기록된 legacy 소스에는 이번 구조 변경을 적용하지 않았습니다.

## 검증

- 기존 Vitest 14개 통과, npm run build 성공.
- Chromium 320/390/768/1024/1440px에서 홈·4개 상세 경로, 이미지 로딩, 모바일 메뉴·Escape, 키보드 이동·아코디언, 목록 복귀, 기존 프로젝트 경로·404 점검.
- 화면의 가로 넘침과 콘솔 오류·경고 및 로컬 리소스 실패 점검.
- 콘텐츠 및 공개 사실을 추가·변경하지 않았습니다. 실제 이미지 미확보에 따른 Selected Visuals 숨김도 유지합니다.

## 스타일 폴더·모으기 모션 후속 수정

- 모든 컴포넌트 및 페이지 스타일 19개를 src/components/styles/로 모았습니다. 공통 src/styles/GlobalStyle.js·theme.js는 유지합니다.
- FloatingProjectScreens의 시작 위치·회전과 스택의 최종 위치는 src/data/notebookData.js의 floatingScreenMotion에서 수정합니다.
- 페이지 진입 시 흩어져 있는 화면을 작은 회전을 유지한 스택으로 차례로 모읍니다. 모션 감소에서는 즉시 모인 상태를 표시합니다.
- 테스트 15개·빌드 성공. 실제 브라우저에서 모바일·태블릿·데스크톱 시작/완료 배치와 가로 넘침 점검.
