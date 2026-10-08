import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionLink from '../components/SectionLink';
import ProjectImage from '../components/ProjectImage';
import { projectData } from '../data/projectData';
import { contentText, contentList } from '../data/contentUtils';
const Root = styled.main`
  padding-top: 64px; padding-bottom: 120px;
  .back { display: inline-flex; align-items: center; min-height: 44px; margin-bottom: 64px; font-size: 12px; font-weight: 700; }
  .back:hover, .original:hover { color: var(--accent-text); }
  h1 { font-size: clamp(48px, 8vw, 120px); line-height: 1; letter-spacing: -.065em; overflow-wrap: anywhere; text-wrap: balance; }
  .subtitle { margin-top: 20px; font-size: 22px; }
  .metadata { display: flex; justify-content: space-between; gap: 24px; margin-block: 40px; font-size: 14px; }
  .metadata p { max-width: 600px; }
  .metadata strong { display: block; font-size: 12px; margin-bottom: 8px; }
  .hero-image { margin-bottom: 64px; }
  .hero-image img { width: 100%; height: auto; aspect-ratio: 16 / 9; max-height: 700px; object-fit: contain; }
  details { border-top: 1px solid var(--line); }
  details:last-child { border-bottom: 1px solid var(--line); }
  summary { cursor: pointer; padding-block: 28px; display: flex; gap: 32px; align-items: center; list-style: none; font-size: 22px; font-weight: 600; }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: '+'; margin-left: auto; font-weight: 400; }
  details[open] summary::after { content: '−'; }
  .number { color: var(--accent-text); font-size: 13px; }
  .content { max-width: 800px; margin-left: 54px; padding-bottom: 32px; white-space: pre-line; word-break: keep-all; }
  .content ul { margin: 0; padding-left: 20px; }
  .content li + li { margin-top: 8px; }
  .design-visual { margin: 40px 0; }
  .design-visual img { width: 100%; height: auto; }
  .original { display: inline-flex; align-items: center; min-height: 44px; margin-top: 40px; font-size: 13px; border-bottom: 1px solid currentColor; padding-bottom: 6px; }
  @media (max-width: 767px) { padding-top: 40px; padding-bottom: 80px; .back { margin-bottom: 40px; } .subtitle { font-size: 18px; } .metadata { flex-direction: column; margin-block: 32px; } .hero-image { margin-bottom: 40px; } .hero-image img { aspect-ratio: 4 / 3; } summary { gap: 20px; font-size: 18px; } .content { margin-left: 0; } }
`;
const sectionLabels = [['overview', 'OVERVIEW'], ['roles', 'ROLE'], ['keyWork', 'KEY WORK'], ['design', 'DESIGN'], ['implementation', 'IMPLEMENTATION'], ['result', 'RESULT']];
export default function Project() {
  const { id } = useParams();
  const project = projectData.find(item => item.id === id);
  const roles = contentList(project?.roles);
  const skills = contentList(project?.skills);
  const images = Array.isArray(project?.designImages) ? project.designImages.filter(item => item?.verified === true && contentText(item.src) && contentText(item.alt)).slice(0, 3) : [];
  const sections = project ? sectionLabels.map(([key, label]) => ({ key, label, text: contentText(project[key]), items: contentList(project[key]) })).filter(section => section.text || section.items.length || (section.key === 'design' && images.length)) : [];
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = `${project ? project.title : 'Project not found'} — JIYU.`;
  }, [id, project]);
  return <><SectionLink className="skip-link" href="#main">본문으로 건너뛰기</SectionLink><Header detail /><Root className="container" id="main" tabIndex={-1}>
    <Link className="back" to="/" state={{ section: 'work' }}>← BACK TO WORK</Link>
    {project ? <>
      <h1>{project.title}</h1><p className="subtitle">{project.subtitle}</p>
      {contentText(project.projectType) && <p>{project.projectType}</p>}
      {(roles.length > 0 || contentText(project.year) || contentText(project.period)) && <div className="metadata">
        {roles.length > 0 && <p><strong>ROLE</strong>{roles.join(' / ')}</p>}
        {(contentText(project.period) || contentText(project.year)) && <p><strong>PERIOD</strong>{contentText(project.period) || contentText(project.year)}</p>}
      </div>}
      {skills.length > 0 && <p className="metadata"><span><strong>TOOLS / TECHNOLOGIES</strong>{skills.join(' / ')}</span></p>}
      <ProjectImage className="hero-image" project={project} detail />
      <div>{sections.map((section, index) => <details key={section.key} open={section.key === 'overview'}>
        <summary><span className="number">{String(index + 1).padStart(2, '0')}</span>{section.label}</summary>
        <div className="content">
          {section.text && <p>{section.text}</p>}
          {section.items.length > 0 && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.key === 'design' && images.map((item, imageIndex) => <figure className="design-visual" key={item.id || imageIndex}><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />{contentText(item.caption) && <figcaption>{item.caption}</figcaption>}</figure>)}
        </div>
      </details>)}</div>
      {contentText(project.liveUrl) && <p><a className="original" href={project.liveUrl} target="_blank" rel="noopener noreferrer">퍼블리싱 화면 보기 ↗</a></p>}
      {contentText(project.url) && <a className="original" href={project.url} target="_blank" rel="noopener noreferrer">NOTION에서 전체 프로젝트 보기 ↗</a>}
    </> : <><h1>PROJECT NOT FOUND.</h1><p className="subtitle">요청하신 프로젝트를 찾을 수 없습니다.</p></>}
  </Root><Footer /></>;
}
