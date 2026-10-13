import { contentList } from './contentUtils';
import { projectData } from './projectData';
import { projectData as originalProjects } from '../projects/data/projectData';

export const scrollPortfolioData = {
  title: ['Designing Interfaces,', 'Building Experiences.'],
  disciplines: 'UI/UX Design · Publishing · Interaction',
  description:
    '사용자의 흐름을 설계하고, 화면으로 구현하는 UI/UX 디자이너 & 퍼블리셔입니다.',
  storyTitle: 'DESIGN & IMPLEMENTATION',
  previewTitle: 'PROJECT PREVIEW',
  archiveTitle: 'PROJECT ARCHIVE',
  referenceCaption: '참고 이미지 · 실제 서비스 화면이 아닙니다.',
  contactDescription: '디자인과 구현 사이에서 더 나은 사용자 경험을 만듭니다.',
  resumeLabel: 'RESUME',
};
export const storyScenes = [
  {
    id: 'flow',
    title: 'I design the flow.',
    description: '흐름을 설계하고',
    image: projectData[0]?.thumbnail || null,
    imageKind: projectData[0]?.imageKind || null,
  },
  {
    id: 'screen',
    title: 'I build the screen.',
    description: '화면을 구현하며',
    image: projectData[2]?.thumbnail || null,
    imageKind: projectData[2]?.imageKind || null,
  },
  {
    id: 'experience',
    title: 'I refine the experience.',
    description: '경험을 다듬습니다',
    image: projectData[3]?.thumbnail || null,
    imageKind: projectData[3]?.imageKind || null,
  },
];
export const previewScenes = projectData.map((project) => ({
  id: project.id,
  title: project.title,
  description: contentList(project.roles).join(' · '),
  image: project.heroImage,
  imageKind: project.imageKind,
}));
// Remaining original records link to the preserved external case studies.
// Unknown roles, dates and types are deliberately omitted.
export const archiveData = [
  ...projectData.map((project) => ({
    ...project,
    route: `/project/${project.id}`,
  })),
  ...originalProjects
    .filter(
      (original) =>
        !projectData.some(
          (project) => project.source === original.componentName,
        ),
    )
    .map((original, index) => ({
      id: original.componentName,
      index: String(projectData.length + index + 1).padStart(2, '0'),
      title: original.title,
      url: original.url,
      roles: [],
      year: null,
      projectType: null,
    })),
];
