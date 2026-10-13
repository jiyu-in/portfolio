# styled-components 통일 및 정리

## 변경

HeroIntro의 순차 masked reveal, 스크롤 스토리, 프로젝트 카드·아카이브, 커스텀 커서와 상세 화면을 styled-components로 통일했습니다. 직접 지정했던 스타일 클래스는 styled 요소 및 컴포넌트 선택자로 교체했습니다. 기능상 필요한 id, aria와 data-cursor 선택자는 유지합니다.

공통 Container, SkipLink, 텍스트, 링크 스타일은 `components/styles/Common.styles.js`에서 관리합니다. 색상·간격·폰트·반응형은 theme와 전역 변수로 공유합니다. 기존 스타일 CSS 파일과 미사용 태그 규칙을 제거했습니다.

커서는 fine pointer만 지원하며 일반 텍스트에는 확대하지 않습니다. 키보드·터치·reduced-motion에서는 기본 동작을 복원합니다. 타이틀 reveal과 스크롤 이동은 서로 다른 래퍼에서 처리합니다.

## 삭제

import 및 동적 import, 라우트, 데이터 문자열과 public URL 참조를 확인했습니다. 이전 build 산출물 전체, 중복 CRA 파일, 이전 장식 화면과 다음 미사용 파일을 삭제했습니다.

- `src/.DS_Store`
- `src/logo.svg`
- `src/main.js`
- `src/App.css`
- `src/projects/ProjectFinance.jsx`
- `src/projects/Styled.jsx`
- `src/projects/Project.jsx`
- `src/component/ScrollFadeIn.jsx`
- `src/component/Cursor.jsx`
- `src/component/Clock.jsx`
- `src/component/HorizontalScrollSection.jsx`
- `src/component/Header.jsx`
- `src/component/About.jsx`
- `src/component/Spiral3D.jsx`
- `src/component/Nav.jsx`
- `src/component/FlipCart.jsx`
- `src/component/Visual.jsx`
- `src/component/HorizontalScrollSection_backup.jsx`
- `src/component/Overview.jsx`
- `src/component/Work.jsx`
- `src/component/WorkProcess.jsx`
- `src/components/Experience.jsx`
- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Skills.jsx`
- `src/components/FloatingProjectScreens.jsx`
- `src/components/SloganBlock.jsx`
- `src/components/SelectedVisuals.jsx`
- `src/hooks/useFloatingScreenMotion.js`
- `src/data/visualData.js`
- `src/assets/CursorWhiteIcon.svg`
- `src/assets/CursorIcon.svg`
- `src/assets/ShapesHelix.png`
- `src/assets/ShapesCone.png`
- `src/assets/BgEmpty.png`
- `src/assets/DiagramParallelogram.svg`
- `src/assets/DiagramRhombus.svg`
- `src/assets/DiagramWavyrectangle.svg`
- `src/assets/ShapesThorus.png`
- `src/assets/WavesOpacity.svg`
- `src/assets/ShapesIcosahedron.png`
- `src/assets/DiagramCapsule.svg`
- `src/assets/DiagramSquare.svg`
- `src/components/styles/Skills.styles.js`
- `src/components/styles/Experience.styles.js`
- `src/components/styles/FloatingProjectScreens.styles.js`
- `src/components/styles/SelectedVisuals.styles.js`
- `src/components/styles/About.styles.js`
- `src/components/styles/SloganBlock.styles.js`
- `src/components/styles/Hero.styles.js`

추가 삭제: `src/index.css`, `src/reportWebVitals.js`, `public/favicon.ico`, `public/favicon.png`, `public/logo192.png`, `public/logo512.png`, `build/` 전체, 불필요해진 `.npmrc` peer 우회 설정.

미사용 패키지 제거: gsap, split-type, react-animated-cursor, 직접 의존성 react-router, web-vitals, @testing-library/user-event, vite-plugin-svgr. react-router는 router-dom의 전이 의존성으로 유지됩니다. 새 패키지는 추가하지 않았습니다.

원본 프로젝트 데이터 7개와 참조된 public/assets JPEG 7개, favicon.svg, manifest, robots, 상세 4개, `/projectFinance` 리다이렉트, 외부 링크, 연락처와 이력서 config는 유지합니다.

## 검증

프로덕션 빌드와 기존 15개 테스트, 320/390/768/1440px 스크롤·라우트·이미지·reduced-motion·커서 확인을 수행했습니다. 프로덕션에서 디버그 displayName이 클래스에 포함되지 않는지도 확인합니다.

## TODO

검증된 실제 작업 캡처, 공개 이력서 URL, 최종 경력·성과 정보. 이미지가 없으면 명시적인 레이아웃 프리뷰를 표시합니다.
