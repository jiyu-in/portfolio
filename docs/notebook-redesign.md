# Notebook portfolio redesign

## 기존 구조 유지

React, styled-components, HashRouter, 프로젝트 4개와 기존 상세 경로·콘텐츠 파일 분리 구조를 유지했습니다. Hero → 프로젝트 목록 → 페이지 전환 순서로 구현했습니다. 새 dependency는 framer-motion 12입니다.

## 수정 파일

- src/App.jsx: PageTransition으로 기존 라우팅을 감쌈.
- src/styles/theme.js: 종이색 #F7F1E8, 텍스트 #1F1F1F, 딥그린 #344B39.
- src/components/Hero.jsx, Hero.styles.js: 슬로건과 화면 묶음의 반응형 구성.
- src/components/ProjectCard.jsx, ProjectCard.styles.js: 노트 페이지, 테이프 장식, 핵심 작업 범위, 카드 전체 클릭·포커스, hover·스크롤 등장.
- src/components/SelectedWorks.jsx, SelectedWorks.styles.js: 프로젝트 기록 소개와 노트 목록 여백.
- package.json, package-lock.json: framer-motion 추가.
- index.html, public/manifest.json: theme color 갱신.
- src/App.test.jsx, src/setupTests.js: 새 슬로건 기대값과 브라우저 관찰자 테스트 환경.

## 신규 파일

- FloatingProjectScreens.jsx / .styles.js
- SloganBlock.jsx / .styles.js
- PageTransition.jsx / .styles.js
- ProjectPlaceholder.jsx / .styles.js
- src/data/notebookData.js
- docs/notebook-redesign.md

## 인터랙션

- 3개 목업의 순차 opacity·scale·작은 rotation reveal (0.65초).
- 마우스 반응 최대 가로 6px·세로 5px, spring으로 부드럽게 복귀. 터치에서는 동작하지 않음.
- 프로젝트 진입 fade-up 0.5초, hover -5px·0.4도. 실제 키보드 링크·포커스 유지.
- 페이지 exit 0.4초 + enter 0.4초. 대기 모드에서 이전 화면은 inert 처리.
- reduced motion에서는 초기 reveal·parallax·hover 및 이동 전환을 생략.
- 상세 페이지를 그대로 연결합니다. Drawer와 이미지 공유 확장 전환은 이번 구현에 포함하지 않았습니다.

## 이미지 정책

실제 UI 자료가 아직 없으므로 Hero 목업은 프로젝트 테마 기반의 레이아웃 프리뷰입니다. “실제 작업 화면 아님” 표시를 유지합니다. 실적·측정 결과·디자인 시스템을 새로 만들지 않았습니다. 기존 참고 사진은 목록과 상세의 참고 이미지 표시를 유지합니다. imageKind가 screenshot인 실제 이미지가 등록되면 Hero에도 해당 화면을 표시할 수 있습니다. thumbnail이 없는 프로젝트에는 노트용 placeholder를 표시합니다.

## 검증

- Vitest 15개 통과 (썸네일 없음 fallback 검증 포함), Vite build 성공.
- Chromium 320/390/768/1024/1440px에서 홈·상세 4개·기존 경로·404, 모바일 메뉴·Escape, 키보드·아코디언·목록 복귀 확인.
- 콘솔 오류·경고, 가로 넘침, 로컬 이미지 실패 없음.
- 일반 모션 320/390/768/1440px에서 실제 카드 클릭·진입/퇴장과 hover·스크롤 등장·parallax 확인.
- 모바일 목업과 하단 스크롤 안내 겹침 없음. reduced-motion 환경의 경로 테스트 통과.

## 다음 작업

실제 프로젝트 UI 이미지로 목업 교체, 공개 콘텐츠 검수, GitHub Pages 워크플로 실행 후 공개 주소 확인. 실제 사이트 배포는 하지 않았습니다. ZIP에는 기존 데이터·문서와 전체 소스를 포함합니다.
