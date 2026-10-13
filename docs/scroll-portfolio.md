# Scroll interaction portfolio

## 최종 페이지 흐름

HeroIntro → ScrollStorySection → ProjectPreviewSection → SelectedWorks(Project Reveal) → ProjectArchive → Contact → Footer.

- Intro: 이미지 없는 white hero, 큰 타이틀·직무·설명·짧은 scroll indicator.
- Story: desktop 400svh / mobile 300svh sticky, 3개 메시지와 background scene.
- Preview: 대표 프로젝트 4개를 background image crossfade와 제목·역할로 소개. desktop 500svh / mobile 400svh.
- Reveal: 기존 ProjectCard 재사용, 프로젝트 1개씩 큰 이미지/제목/역할/기간/기술/작업 범위/링크.
- Archive: 기존 7개 작업의 최소 목록. 대표 4개는 internal detail, 나머지 3개는 기존 Notion. 확인 안 된 역할·기간·타입은 표시하지 않음.
- Contact: 새 문구·실제 email/GitHub 유지. resumeUrl이 없으면 Resume 링크 숨김.

## 구조·파일

신규: src/components/HeroIntro.jsx, BackgroundScene.jsx, ScrollStorySection.jsx, ProjectPreviewSection.jsx, ProjectArchive.jsx; styles/HeroIntro.styles.js, BackgroundScene.styles.js, ProjectArchive.styles.js; src/data/scrollPortfolioData.js; docs/scroll-portfolio.md.

수정: Home.jsx, Contact.jsx, ProjectCard.jsx, styles/Contact.styles.js, ProjectCard.styles.js, SelectedWorks.styles.js; theme.js, GlobalStyle.js; siteData.js, profileData.js; App.test.jsx; index.html, public/manifest.json, README.md.

기존 Hero/FloatingProjectScreens/노트형 관련 컴포넌트·About/Skills/Experience는 보존했으며 새 Home에서는 렌더링하지 않습니다. 상세 4개와 기존 #/projectFinance redirect, 404는 유지합니다. Header는 WORK / STORY / ARCHIVE / CONTACT로 연결합니다.

## 모션·접근성

framer-motion useScroll/useTransform으로 sticky 진행도를 연결했습니다. 장면 midpoint에서는 한 메시지만 강조합니다. 이미지 scale 1.03→1, 텍스트 y 28→-28, Reveal fade-up 40px·0.6초. 실제 document scroll을 사용하며 scroll hijacking은 없습니다.

이미지를 grayscale 처리하고 black overlay .68로 white text 대비를 확보했습니다. 스크린리더는 장면 문장을 순서대로 읽으며 겹친 애니메이션 텍스트는 aria-hidden입니다. reduced motion에서는 sticky 대신 정적인 장면들을 제공하고 reveal을 생략합니다.

Framer의 browser scroll animation offsets는 0~1 범위로 제한했습니다. 마지막 장면의 crossfade를 100% 넘어가는 범위로 설정하면 Web Animations API 오류가 발생하므로 Math.min으로 제한합니다.

## 데이터·이미지

기존 4개 대표 작업과 원본 데이터 7개를 사용했습니다. 예시 Newsway/호텔/접근성 프로젝트·성과·연도는 추가하지 않았습니다. 현재 배경 이미지와 대표 이미지는 기존 참고 사진이며 “실제 서비스 화면이 아닙니다” 표기를 유지합니다. 실제 UI 캡처와 공개 가능한 Resume URL이 다음 콘텐츠 TODO입니다. 이미지 loading=lazy·async decoding을 사용하고 동일 URL은 브라우저 캐시를 재사용합니다. 추가 dependency 없음.

## 검증

- npm test: 15개 통과. 새 Home 흐름 기대값을 수정하고 기존 라우팅·빈 데이터·fallback 검증 유지.
- npm run build: 성공.
- Chromium 320/390/768/1440px: Story 3개·Preview 4개 midpoint opacity, 한 메시지씩 표시, background image load, Archive 7개, nav·상세 진입·목록 복귀, reduced motion 7개 static scenes, horizontal overflow·console·local resources 확인. 모두 통과.
- 일반 모션/reduced motion에서 axe WCAG 2 A/AA·2.1 AA 위반 0개, 키보드 본문 이동 통과.
- 실제 repo 이름의 /portfolio/ base로 별도 build·HTTP serve 후 이미지 경로·crypto detail 직접 진입 검증.
- 기본 local /portfolio_2026/ base도 정상. GitHub Actions workflow는 저장소명으로 base를 설정합니다.

실제 GitHub Pages 게시·워크플로 실행은 하지 않았습니다. 최신 디자인은 이 문서가 이전 리디자인 문서보다 우선합니다.
