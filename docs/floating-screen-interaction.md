# FloatingProjectScreens 후속 인터랙션

## 변경 파일

- src/components/FloatingProjectScreens.jsx: 애니메이션 controls와 hover 이벤트 연결.
- src/data/notebookData.js: scattered / gathered / still variants 관리.
- src/hooks/useFloatingScreenMotion.js (신규): 진입·hover·상단 복귀와 이벤트 정리.

## 동작

- 처음에는 흩어진 상태로 보이고, 0.35초 대기 후 카드마다 0.18초 간격으로 모입니다. 각 카드의 모으기 동작은 1.65초이며 전체 스택 완료는 약 2.36초입니다.
- 마우스 hover: 약 0.9초에 흩어진 상태로 이동. 벗어나면 다시 천천히 모입니다. 터치 hover를 적용하지 않습니다.
- 페이지를 화면 높이 절반 이상(최소 120px) 내려간 뒤 상단 24px 이내로 돌아오면 진입 모션을 다시 시작합니다. 작은 스크롤 흔들림만으로는 재생하지 않습니다.
- hover 중 상단 복귀하면 흩어진 상태를 유지하고, 마우스가 벗어나면 모이기를 시작합니다.
- reduced motion에서는 모인 상태를 즉시 표시하고 hover 이동·상단 반복 재생·parallax를 생략합니다.
- 컴포넌트 종료 시 스크롤 리스너와 애니메이션을 정리합니다.

## 검증

- Vitest 15개 통과, 프로덕션 빌드 성공.
- Chromium 320/390/768/1440px에서 느린 진입, hover 펼침·이탈 후 모임, 스크롤 상단 복귀 재생, 모션 감소 설정, 가로 넘침과 콘솔 확인.
