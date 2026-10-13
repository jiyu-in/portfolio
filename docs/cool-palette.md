# Cool gray palette

- background #F5F6FA, surface #ECEFF5, surfaceSoft #F9FAFC
- text #1E2028, secondary #6B7280, secondaryText #626A78
- line #D8DDE8, accent / accentText #2F3A5F, accentSoft #DDE3F3

Hero 목업의 종이·프리뷰 패널, 프로젝트 카드와 placeholder, 테이프, 그림자를 theme 토큰으로 연결했습니다. 베이지·그린 고정 색상을 제거했습니다. 브라우저 theme-color와 manifest도 갱신했습니다.

secondaryText만 접근성 대비를 위해 제안값보다 진하게 조정했습니다. 배경·surface·surfaceSoft에서 대비는 각각 5.05 / 4.73 / 5.22 : 1입니다.

수정 파일: src/styles/theme.js, GlobalStyle.js; src/components/styles/FloatingProjectScreens.styles.js, ProjectCard.styles.js, ProjectPlaceholder.styles.js; index.html, public/manifest.json.

검증: 테스트 15개 통과, 빌드 성공. Chromium 390/768/1440px에서 실제 배경·카드 색상, Hero와 카드 배치, 가로 넘침·실행 오류 확인. 애니메이션 동작과 기존 레이아웃은 유지했습니다. 추가 dependency 없음.
