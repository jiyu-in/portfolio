# JIYU. Portfolio

React 19 · Vite · styled-components · framer-motion 기반 UI/UX Designer & Publisher 포트폴리오입니다.

## 실행

Node 24 LTS 권장, Node 22는 22.12 이상이 필요합니다. ZIP을 새 폴더에 풀고 package.json이 있는 폴더에서 실행합니다. Windows에서도 동일합니다.

```sh
npm ci
npm start
```

터미널의 Local 주소를 엽니다. 기본 base는 `/portfolio_2026/`입니다. 이전 CRA/OpenSSL 옵션은 필요 없습니다. 기존 폴더에 덮어쓰기보다 새 폴더에 압축을 풀어 삭제된 구형 파일이 남지 않도록 합니다.

```sh
npm test
npm run build
npm run preview
```

빌드는 `dist/`에 생성됩니다. 다른 호스팅 경로는 `npm run build -- --base=/portfolio/`로 지정합니다. HashRouter 상세 주소는 `#/project/personal-finance`이며 이전 `#/projectFinance`도 유지합니다.

## 현재 구성

HeroIntro → ScrollStorySection → ProjectPreviewSection → SelectedWorks → ProjectArchive → Contact입니다. Hero에는 줄 단위 masked reveal, 커스텀 커서는 마우스 장치에만 적용됩니다. reduced-motion과 키보드 사용 시 접근성을 유지합니다.

- JSX: `src/components/`, `src/pages/`
- 컴포넌트 스타일: `src/components/styles/`
- 전역 스타일·색상·간격·반응형: `src/styles/`
- 프로젝트·문구·연락처: `src/data/`
- 원본 프로젝트 기록 7개: `src/projects/data/projectData.js`

실제 서비스 캡처 교체와 이력서 URL 입력은 남아 있습니다. 참고 이미지는 실제 작업 화면으로 표시하지 않습니다. 검증되지 않은 성과와 빈 정보는 숨깁니다.

[현재 코드 구조](docs/code-structure.md) · [스타일 통일 및 삭제 목록](docs/styled-cleanup.md) · [콘텐츠 검수](docs/content-review.md)

## 게시

GitHub Actions 워크플로는 수동 실행만 지원합니다. 다운로드용 ZIP 브랜치와 실제 사이트 게시는 별개입니다. 사이트 main 반영·공개 배포는 수행하지 않았습니다. 기존 `npm run deploy` 방식도 유지합니다.

다른 docs 문서는 이전 리디자인 단계의 기록입니다. 현재 구조와 삭제 여부는 위의 최신 안내를 기준으로 확인하세요.
