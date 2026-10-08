import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';
const Root = styled.section`
  padding-top: 160px; padding-bottom: 140px;
  @media (max-width: 767px) { padding-top: 96px; padding-bottom: 80px; }
`;
export default function SelectedWorks() {
  return <Root id="work" className="container" aria-labelledby="work-title">
    <SectionTitle id="work-title" count={projectData.length}>SELECTED WORKS</SectionTitle>
    {projectData.map(project => <ProjectCard key={project.id} project={project} />)}
  </Root>;
}
