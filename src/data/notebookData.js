export const notebookData = {
  slogan: ['Designing Interfaces,', 'Building Experiences.'],
  introduction:
    'UI/UX 디자인부터 퍼블리싱 구현까지, 사용자의 흐름을 설계하고 화면으로 완성합니다.',
  heroVisualLabel: '프로젝트 테마를 소개하는 레이아웃 프리뷰',
  previewLabel: 'LAYOUT PREVIEW · 실제 작업 화면 아님',
  screenLabel: 'PROJECT SCREEN',
  notebookLabel: 'CASE STUDY ARCHIVE / 01—04',
  notebookDescription: '선택한 프로젝트의 디자인과 구현 기록.',
  scopeLabel: 'KEY WORK',
};

// Each sheet starts apart, then settles into a compact stack.
export const floatingScreenMotion = [
  {
    start: { x: '-5%', y: -32, rotate: -4, scale: 0.98 },
    end: { x: '0%', y: 0, rotate: -1, scale: 1 },
  },
  {
    start: { x: '7%', y: 32, rotate: 4, scale: 0.98 },
    end: { x: '3%', y: 18, rotate: 1, scale: 1 },
  },
  {
    start: { x: '-3%', y: 72, rotate: -3, scale: 0.98 },
    end: { x: '-2%', y: 36, rotate: -1, scale: 1 },
  },
];

export const floatingScreenVariants = {
  scattered: (index) => ({
    ...floatingScreenMotion[index].start,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
  gathered: (index) => ({
    ...floatingScreenMotion[index].end,
    transition: {
      duration: 0.65,
      delay: 0.08 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  still: (index) => ({
    ...floatingScreenMotion[index].end,
    rotate: 0,
    transition: { duration: 0 },
  }),
};
