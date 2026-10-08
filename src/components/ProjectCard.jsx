import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImage from './ProjectImage';
import { contentText, contentList } from '../data/contentUtils';
const Root = styled.article`
  display: grid; grid-template-columns: ${({ $hasImage }) => $hasImage ? 'minmax(0, 1fr) minmax(0, 1.2fr)' : 'minmax(0, 1fr)'};
  grid-template-areas: ${({ $hasImage }) => $hasImage ? '"copy image"' : '"copy"'}; gap: clamp(40px, 6vw, 100px);
  padding-block: 64px; border-bottom: 1px solid var(--line); align-items: center;
  .project-copy { grid-area: copy; min-width: 0; }
  &:nth-of-type(even) { grid-template-columns: ${({ $hasImage }) => $hasImage ? 'minmax(0, 1.2fr) minmax(0, 1fr)' : 'minmax(0, 1fr)'};
    grid-template-areas: ${({ $hasImage }) => $hasImage ? '"image copy"' : '"copy"'}; }
  .metadata { display: flex; justify-content: space-between; margin-bottom: 40px; font-size: 13px; }
  .number { color: var(--accent-text); font-weight: 700; }
  .year { color: var(--text-muted); }
  h3 { font-size: clamp(36px, 4.5vw, 68px); line-height: 1.02; letter-spacing: -.055em; overflow-wrap: anywhere; text-wrap: balance; }
  .subtitle { margin-top: 16px; font-size: 18px; }
  .description { margin-top: 24px; max-width: 350px; font-size: 16px; color: var(--text-muted); word-break: keep-all; }
  ul { list-style: none; margin: 24px 0 40px; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 12px; color: var(--text-muted); }
  .view { display: inline-flex; align-items: center; gap: 32px; font-size: 12px; font-weight: 700; letter-spacing: .6px; border-bottom: 1px solid var(--text-primary); min-height: 44px; padding-block: 10px; transition: color .6s; }
  .view span { transition: transform .6s; }
  .view:hover { color: var(--accent-text); }
  .view:hover span { transform: translateX(5px); }
  .image { grid-area: image; min-width: 0; }
  img { width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: contain; transition: transform .6s ease; }
  .image:hover img { transform: scale(1.025); }
  @media (max-width: 1199px) { gap: 32px; }
  @media (max-width: 767px) {
    &, &:nth-of-type(even) {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: ${({ $hasImage }) => $hasImage ? '"image" "copy"' : '"copy"'};
    }
    gap: 28px; padding-block: 40px;
    .metadata { margin-bottom: 24px; }
    .subtitle { margin-top: 12px; }
    .description { margin-top: 16px; }
    ul { margin: 20px 0 24px; }
  }
`;
export default function ProjectCard({ project }) {
  const roles = contentList(project.roles);
  const tags = roles.length ? roles : contentList(project.categories);
  return <Root $hasImage={Boolean(contentText(project.thumbnail))} aria-labelledby={`project-${project.id}`}>
    <div className="project-copy"><div className="metadata"><span className="number">/{project.index}</span>{contentText(project.year) && <span className="year">{project.year}</span>}</div>
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p className="subtitle">{project.subtitle}{contentText(project.projectType) && ` · ${project.projectType}`}</p>{contentText(project.description) && <p className="description">{project.description}</p>}
      {tags.length > 0 && <ul aria-label={roles.length ? "프로젝트 역할" : "프로젝트 분야"}>{tags.map(category => <li key={category}>{category}</li>)}</ul>}
      <Link className="view" to={`/project/${project.id}`} aria-label={`${project.subtitle} 프로젝트 보기`}>VIEW PROJECT <span aria-hidden="true">↗</span></Link>
    </div>
    <ProjectImage className="image" project={project} />
  </Root>;
}
