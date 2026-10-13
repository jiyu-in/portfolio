export const notebookData = {
  slogan: ['Designing Interfaces,', 'Building Experiences.'],
  introduction: '화면을 설계하고, 경험으로 구현하는 UI/UX 디자이너 & 퍼블리셔',
  heroVisualLabel: '프로젝트 테마를 소개하는 레이아웃 프리뷰',
  previewLabel: 'LAYOUT PREVIEW · 실제 작업 화면 아님',
  screenLabel: 'PROJECT SCREEN',
  notebookLabel: 'PROJECT NOTES / 01—04',
  notebookDescription: '화면을 만들기까지의 생각과 작업을 기록합니다.',
  scopeLabel: 'KEY WORK',
};

// Each sheet starts apart, then settles into a compact stack.
export const floatingScreenMotion = [
  {
    start: { x: '-5%', y: -60, rotate: -12, scale: 0.94 },
    end: { x: '0%', y: 0, rotate: -2, scale: 1 },
  },
  {
    start: { x: '7%', y: 45, rotate: 12, scale: 0.94 },
    end: { x: '3%', y: 18, rotate: 2, scale: 1 },
  },
  {
    start: { x: '-3%', y: 120, rotate: -8, scale: 0.94 },
    end: { x: '-2%', y: 36, rotate: -1, scale: 1 },
  },
];

export const floatingScreenVariants = {
  scattered: (index) => ({
    ...floatingScreenMotion[index].start,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
  gathered: (index) => ({
    ...floatingScreenMotion[index].end,
    transition: {
      duration: 1.65,
      delay: 0.35 + index * 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  still: (index) => ({
    ...floatingScreenMotion[index].end,
    rotate: 0,
    transition: { duration: 0 },
  }),
};
