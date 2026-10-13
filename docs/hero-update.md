# Hero 진입 효과와 코드 정리

- Hero.jsx: 의미 있는 컴포넌트 단위로 마크업 정리.
- Hero.styles.js: named styled component, theme breakpoint, 두 줄 순차 reveal.
- heroData.js: 제목·설명·분야·edition 데이터를 별도로 관리.
- 제목은 900ms 이동·페이드, 지연 80/240ms. CSS만 사용하며 새 dependency 없음.
- 모션 감소 설정에서는 즉시 표시. 장식 slash는 스크린리더에서 제외.
- 320px에서도 BUILD와 slash가 한 줄에 표시되도록 반응형 타이포그래피 조정.
- 기존 테스트 14개 통과, 빌드 성공. Chromium 320/390/768/1024/1440px에서 실제 애니메이션 시작·중간·완료, reduced motion, 제목 줄바꿈·가로 넘침, 키보드 스크롤 링크, 콘솔 오류/경고 확인.
- 이번 리팩터링 범위는 Hero 전체입니다. 다른 섹션이나 legacy 컴포넌트는 변경하지 않았습니다.
