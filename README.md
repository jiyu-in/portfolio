# JIYU. Portfolio

UI/UX Designer & Publisher 포트폴리오. React 19, styled-components, Vite를 사용합니다.

## 로컬 실행

Node.js **24 LTS**를 권장합니다. Node 22 사용 시 22.12 이상이 필요합니다.
ZIP을 새 폴더에 풀거나 변경 파일을 반영하고, `package.json`이 있는 폴더에서 실행합니다.
Windows CMD·PowerShell·macOS·Linux에서 같은 명령을 사용합니다.

```sh
npm ci
npm start
```

터미널의 Local 주소를 브라우저에서 엽니다. 기본 경로는 `/portfolio_2026/`입니다.
클라우드 파일은 사용자 PC에 자동 동기화되지 않습니다.
기존 CRA와 Yarn 이중 lockfile을 정리했으므로 추가 OpenSSL 옵션이나 Yarn 설치가 필요 없습니다.
기존 `node_modules`가 있어도 `npm ci`로 새 lockfile에 맞춰 설치합니다.
기존 폴더를 업데이트할 때는 App.js → App.jsx, index.js → index.jsx, App.test.js → App.test.jsx 이동을 반영하고, 이전 `.js` 파일을 중복으로 남기지 않습니다. public/index.html은 루트 index.html로 이동했습니다.
`.npmrc`의 peer 설정은 기존 React 18용 커서 라이브러리 보존을 위한 것입니다.
현재 사이트에서는 해당 커서를 사용하지 않습니다.

```sh
npm test
npm run build
npm run preview
```

`npm test`는 Vitest로 기존 화면·링크·라우트 테스트를 실행합니다.
빌드 출력은 `dist/`이며, 기존에 저장소에 있던 `build/`는 수정하지 않습니다.

## 콘텐츠 관리

- 대표 프로젝트: `src/data/projectData.js`
- 프로필·스킬·연락처: `src/data/profileData.js`
- 상세 자료가 없는 항목은 `null`로 두면 해당 아코디언이 표시되지 않습니다.
- 새 프로젝트는 `projectData.js`의 selection에 id·title·subtitle·categories·thumbnail·heroImage·url·상세 본문을 추가합니다. 기존 originalProjects나 컴포넌트를 수정할 필요가 없습니다. 이미지·외부 URL이 없으면 해당 요소를 표시하지 않습니다.
- 현재 대표 이미지는 기존 참고 사진입니다. 실제 서비스 화면으로 교체해야 합니다.
- 확정이 필요한 항목과 입력 형식은 [콘텐츠 검수 목록](docs/content-review.md)을 참고합니다.

HashRouter를 사용하며 상세 경로는 `#/project/personal-finance` 형태입니다.
기존 `#/projectFinance` 링크는 새 개인자산관리 상세 페이지로 연결됩니다.
이전 컴포넌트와 GSAP 작업 파일은 보존했습니다. SVG를 컴포넌트로 불러올 때는 `?react`를 붙입니다.

## GitHub Pages 배포 준비

현재 선택한 저장소 `jiyu-in/portfolio_2026`에 맞춰 base 경로를 `/portfolio_2026/`로 설정했습니다.
다른 경로에 배포할 경우 다음처럼 별도로 빌드할 수 있습니다.

```sh
npm run build -- --base=/portfolio/
```

코드와 실제 콘텐츠를 검토한 후 GitHub에 반영하고, 저장소 Settings → Pages에서 Source를 GitHub Actions로 설정합니다.
Actions의 **Publish portfolio to GitHub Pages** 워크플로를 수동 실행하면 테스트·빌드·게시가 순서대로 진행됩니다.
이 워크플로는 자동 게시를 유발하지 않도록 `workflow_dispatch`만 사용합니다.
다운로드용 브랜치에는 ZIP을 올렸습니다. 사이트 소스의 main 반영·공개 게시·워크플로 실행은 아직 하지 않았습니다.

기존 gh-pages 방식도 `npm run deploy`로 사용할 수 있습니다. 게시 전에 실제 캡처·이력·프로젝트 내용을 먼저 확정합니다.

## 1차 공개 버전

- 미확인 성과·빈 메타데이터는 표시하지 않습니다.
- About의 50+ PROJECTS와 6 INDUSTRIES는 제거했습니다.
- 실제 경력 시작 연도 확인 전에는 Experience 날짜 타임라인을 표시하지 않습니다.
- `src/data/visualData.js`에 검증된 실제 작업 이미지가 없으면 Selected Visuals는 표시되지 않습니다.
- 상세 DESIGN 이미지도 `designImages`의 verified 항목만 최대 3개 표시합니다.
- 변경 파일·검증 결과·보존한 legacy 파일은 [1차 공개 버전 보고](docs/first-public-release.md)를 참고하세요.
