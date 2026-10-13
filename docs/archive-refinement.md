# Case study archive refinement

## 디자인

- 배경 #F7F8FB, white surface #FFFFFF, soft surface #EEF1F6, accent #2E3A59.
- secondary는 #737782. 작은 본문 대비를 위해 secondaryText는 #626A78 유지.
- Hero: serif·italic 대신 큰 sans-serif, 최대 104px. 문구는 사용자 제공 문구로 교체. 텍스트/화면 여백 확대, 목업 최대 510px, 그림자 제거.
- 프로젝트: 장식 테이프·불규칙 좌우 margin·회전·그림자 제거. desktop/tablet 2열, mobile 1열.
- 정보 순서: 이미지 → 제목·부제 → 역할/기간/기술 → 한 줄 소개 → 분야 키워드. 작업 범위의 상세는 기존 상세 페이지에 보존.
- 키워드는 얇은 pill. border·divider·caption·index로 구분. hover는 -3px, border 색상, 이미지 1.02배만 사용.
- 타이포그래피 크기를 theme.typography에서 Hero/section/project/body/caption으로 관리.

## 모션

기존 hover 펼침과 상단 복귀는 유지합니다. 가장 최근 요청에 맞춰 이전 느린 모션 설정을 단축했습니다.

- Hero: scale 0.98→1, 회전 최대 ±4°, gather 0.65초, scatter 0.6초, stagger 0.08초.
- 프로젝트: fade-up 16px, 0.6초, 한 번만 등장.
- 페이지: 진입/퇴장 각 0.5초. 모션 감소 지원 유지.

## 수정 파일

- src/styles/theme.js, GlobalStyle.js
- src/components/ProjectCard.jsx, SelectedWorks.jsx, PageTransition.jsx
- src/components/styles/ProjectCard.styles.js, SelectedWorks.styles.js, Hero.styles.js, SloganBlock.styles.js, FloatingProjectScreens.styles.js, SectionTitle.styles.js, Section.styles.js
- src/data/notebookData.js, siteData.js
- index.html, public/manifest.json, README.md

신규 문서는 이 파일입니다. dependency 추가·legacy 삭제 없음. 사실·이미지를 새로 만들어내지 않았습니다. 실제 작업 화면이 없는 프리뷰·참고 이미지 표기도 유지합니다.

## 검증

테스트 15개 통과, 빌드 성공. Chromium 320/390/768/1024/1440px에서 1/2열 배치, 장식·그림자 제거, 이미지 로딩, 상세 진입·복귀, 가로 넘침과 콘솔 오류/경고 확인. 일반 모션에서 hover·상단 재생과 카드 링크도 확인했습니다.

현재 최종 디자인 안내이며 이전 노트형 리디자인 문서보다 우선합니다. 공개 사이트 배포는 수행하지 않았습니다.
