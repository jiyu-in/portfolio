import React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { profileData } from '../data/profileData';
const Root = styled(Section)`
  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  h3 { font-size: 24px; letter-spacing: -.6px; margin-bottom: 24px; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { padding-block: 12px; border-bottom: 1px solid var(--line); font-size: 18px; }
  @media (max-width: 767px) { .skills-grid { grid-template-columns: 1fr; gap: 48px; } }
`;
export default function Skills() {
  return <Root className="container" aria-labelledby="skills-title"><h2 className="section-label" id="skills-title">SKILLS</h2>
    <div className="skills-grid">{profileData.skills.map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
  </Root>;
}
