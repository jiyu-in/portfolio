# 구현 및 환경 정리 내역

## 화면·데이터

- Header, Hero, SelectedWorks, ProjectCard, SectionTitle, SectionLink
- About, Skills, Experience, Contact, Footer
- Home, Project, NotFound 페이지
- GlobalStyle/theme: 기존 팔레트 유지, 작은 글자용 접근성 색상 추가
- projectData/profileData: UI와 콘텐츠 분리, 확인되지 않은 본문은 null 유지
- 개인자산관리 본문: 기존 설명 재사용, 실제 결과는 확인 전 공란 유지
- 이미지 크기·async decoding·lazy loading·비율 정리
- 모바일 메뉴, 현재 위치, 본문 바로가기, 목록 복귀 포커스, reduced motion 지원
- 신규 프로젝트는 한 데이터 파일에 추가 가능. 이미지·외부 URL이 없어도 페이지가 동작

## 실행·테스트·배포

- CRA 3 → Vite 8, Jest 실행 → Vitest
- 추가 개발 도구: vite, @vitejs/plugin-react, vitest, jsdom, vite-plugin-svgr
- 제거 의존성: react-scripts, 사용되지 않는 단수형 styled-component
- npm lockfile 갱신, 중복 yarn.lock 제거, .npmrc/.nvmrc 추가
- App.js → App.jsx, index.js → index.jsx, App.test.js → App.test.jsx
- public/index.html → 루트 index.html
- 기존 SVG ReactComponent import를 ?react 방식으로 조정
- 기존 GSAP 컴포넌트 소스 유지. WorkProcess/FlipCart/ProjectFinance의 호환 빌드 확인
- 기존 /projectFinance는 새 개인자산관리 상세 페이지로 연결
- 잘못된 일반 페이지 및 프로젝트 URL에 복귀 링크 제공
- favicon.svg, manifest, 제목·description·Open Graph 정리
- .github/workflows/pages.yml: 수동 실행만 허용하는 GitHub Pages 워크플로
- 선택 저장소의 /portfolio_2026/ base, 기존 /portfolio/ override 빌드 모두 확인
- 빌드 출력은 dist. 기존 tracked build 파일은 변경하지 않음

## 검증

- npm ci 실제 재설치 성공
- Vitest 8개 테스트 통과
- 기본·이전 base 빌드 성공
- 320/390/768/1024/1440px 및 1280×600 화면 확인
- 홈·개인자산관리 상세의 axe WCAG 2 A/AA 및 2.1 AA 자동 검사에서 위반 0개
- 프로덕션 콘솔 오류·경고, 로컬 리소스 로딩 실패, 가로 넘침 없음
- 모든 대표 프로젝트 직접 진입과 기존 finance 링크 확인
- 키보드 본문 이동·아코디언·목록 복귀 포커스 확인
- npm ci 중 실행 중이던 개발 서버의 최적화 캐시는 재시작 후 정상 확인

## 아직 확정되지 않은 부분

- 실제 서비스 UI 캡처, 프로젝트별 연도·역할·성과, 경력 수치 확인
- Notion 내용: 현재 클라우드 정책으로 접근 차단, 도메인 추가 초안 저장
- 실제 GitHub push·워크플로 실행·공개 게시: 실행하지 않음
- 사용자 Windows 기기에서의 직접 실행과 새 클라우드 스냅샷 복원: 별도 검증하지 않음

상세 자료 요청 형식은 content-review.md, 실행·배포 방법은 README.md를 참고합니다.
