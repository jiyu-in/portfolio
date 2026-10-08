# JIYU. Portfolio

UI/UX Designer & Publisher 포트폴리오.  
React 19, styled-components, Vite를 사용합니다.

## AI-assisted Workflow

본 포트폴리오는 AI를 활용하여 코드 구조 개선, 컴포넌트 구현, 오류 점검 및 문서화 작업을 진행하고 있습니다.

디자인 방향, UI/UX 구조, 콘텐츠 구성 및 최종 결과물 검수는 직접 수행하며, AI가 생성한 결과 역시 실제 개발 환경에 맞게 수정·검증하여 반영합니다.

AI를 디자인과 개발을 대체하는 도구가 아닌, 작업 효율과 구현 완성도를 높이는 협업 도구로 활용하고 있습니다.

## 로컬 실행

Node.js **24 LTS**를 권장합니다. Node 22 사용 시 22.12 이상이 필요합니다.

```sh
npm ci
npm start
```

빌드 및 테스트:

```sh
npm test
npm run build
npm run preview
```

## 콘텐츠 관리

- 대표 프로젝트: `src/data/projectData.js`
- 프로필·스킬·연락처: `src/data/profileData.js`
- 상세 자료가 없는 항목은 `null`로 두면 해당 영역이 표시되지 않습니다.
- 검증된 실제 작업 이미지만 화면에 노출합니다.

## GitHub Pages 배포

현재 저장소 `jiyu-in/portfolio_2026` 기준으로 `/portfolio_2026/` 경로를 사용합니다.

```sh
npm run build
```

기존 gh-pages 방식:

```sh
npm run deploy
```

## 1차 공개 버전

- 확인되지 않은 프로젝트 성과·수치는 표시하지 않습니다.
- 실제 경력과 역할이 확인된 내용만 반영합니다.
- 검증된 실제 작업 이미지만 사용합니다.
- 프로젝트 상세는 실제 콘텐츠가 존재하는 섹션만 표시합니다.