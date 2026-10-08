# 1차 공개 버전 보고

## 수정 파일

- src/components/About.jsx
- src/components/Experience.jsx
- src/components/Hero.jsx
- src/components/ProjectCard.jsx
- src/components/ProjectImage.jsx
- src/pages/Home.jsx
- src/pages/Project.jsx
- src/data/profileData.js
- src/data/projectData.js
- src/App.test.jsx
- README.md
- docs/content-review.md

## 신규 파일

- src/components/SelectedVisuals.jsx
- src/data/visualData.js
- src/data/contentUtils.js
- docs/first-public-release.md

이번 단계의 파일 삭제·추가 dependency는 없습니다.

## 주요 화면 변경

- Hero: 큰 타이포그래피·비대칭 정렬을 유지하고 PORTFOLIO 2026 표기 추가.
- About: 50+ PROJECTS와 6 INDUSTRIES 제거. 10+ / UI/UX DESIGN / PUBLISHING & FRONT-END의 텍스트 구성. 모바일은 세로 배치.
- Selected Works: 대표 작업 4개 유지. 디자인 역할을 먼저 보여주고 사용 도구는 상세 페이지로 분리. 개인 프로젝트 표기 유지.
- Experience: 미확인 시작 연도는 null로 관리, 날짜 타임라인 숨김. 2026 — PRESENT 중복 표기 제거. 기존 자료로 확인 가능한 산업만 표시.
- 상세: OVERVIEW / ROLE / KEY WORK / DESIGN / IMPLEMENTATION 중심. 실제 결과가 있을 때만 RESULT 표시. 빈 문자열·배열·객체 등은 화면에 출력하지 않음.
- Selected Visuals: 기존 사진 7장을 확인했으나 작업 UI가 아니므로 실제 사용 이미지 0개, 섹션 숨김. 빈 갤러리·placeholder는 없음.
- 검증된 이미지가 제공되면 visualData에 최대 6개, 상세 designImages에 최대 3개 표시할 수 있는 구조. 모두 verified: true와 src·alt 필요.
- 디자인 시스템·Before/After는 실제 자료가 없어 표시하지 않음. 추가 장식·애니메이션·NEWSWAY 프로젝트 없음.

## 미표시 항목과 확인 필요 콘텐츠

- 실제 화면 이미지, 상세 디자인 가이드, Before/After, 실측 성과 없음.
- 가상화폐거래소의 사용 기술과 실제 구현 범위는 미확인.
- LMS의 구체적인 본인 구현 범위 확인 필요.
- 재직 기준 경력 시작 연도, 10+ 문구, 현재 이메일 공개 사용, 개인 프로젝트 현재 진행 상태와 화면 공개 가능 범위 최종 확인 필요.
- 날짜와 역할은 제공된 Notion 소개 Markdown 기준. 프로젝트 시작 기록을 재직 시작 연도로 추정하지 않음.

## 현재 렌더링에서 사용하지 않는 legacy 파일 (보존)

- src/component/About.jsx
- src/component/Clock.jsx
- src/component/Cursor.jsx
- src/component/FlipCart.jsx
- src/component/Header.jsx
- src/component/HorizontalScrollSection.jsx
- src/component/HorizontalScrollSection_backup.jsx
- src/component/Nav.jsx
- src/component/Overview.jsx
- src/component/ScrollFadeIn.jsx
- src/component/Spiral3D.jsx
- src/component/Visual.jsx
- src/component/Work.jsx
- src/component/WorkProcess.jsx
- src/projects/Project.jsx
- src/projects/ProjectFinance.jsx
- src/projects/Styled.jsx

위 목록은 src/index.jsx부터의 import 경로를 확인했습니다. src/projects/data/projectData.js는 현재 프로젝트 데이터에서 재사용하므로 미사용 목록에 포함하지 않습니다. 기존 src/assets의 장식 파일과 App.css, build 출력도 삭제하지 않습니다.

## 검증

- npm test: 14개 통과. 라우팅·빈 데이터·미확인 통계 숨김 검증 포함.
- npm run build: Vite 프로덕션 빌드 성공.
- 320/390/768/1024/1280/1440px Chromium: 가로 넘침·콘솔 오류/경고·로컬 리소스 실패 없음.
- 홈 직접 접근, 대표 상세 4개 직접 접근, 기존 #/projectFinance 복귀 경로 정상.
- 모바일 메뉴, 키보드 건너뛰기·아코디언·작업 목록 복귀 확인.
- 홈·개인자산관리 상세 axe WCAG 2 A/AA·2.1 AA 자동 검사 위반 0개. 자동 검사로 모든 접근성을 보장하지는 않음.
- GitHub Pages /portfolio_2026/ base에서 프로덕션 이미지·JS 경로 로딩 확인.
- Selected Visuals는 숨겨져 있으므로 신규 갤러리의 실제 이미지 경로 검사는 자료 등록 후 수행 필요.

## GitHub Pages 배포 전 남은 작업

1. 공개 연락처와 10+ 문구 최종 확인, 가능하면 실제 UI 이미지 교체.
2. 최신 전체 소스를 사이트 소스 브랜치(main 등)에 반영. 다운로드용 브랜치는 ZIP·안내 파일만 포함함.
3. Settings → Pages → Source를 GitHub Actions로 설정.
4. Publish portfolio to GitHub Pages 워크플로 수동 실행.
5. 공개 URL에서 홈·4개 상세 경로·새로고침·이미지·외부 링크 확인.

빌드와 로컬 프로덕션 검증만 완료했으며 실제 Pages 워크플로 실행·공개 게시를 수행하지 않았습니다.
