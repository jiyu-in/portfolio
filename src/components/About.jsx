import React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { profileData } from '../data/profileData';
const Root = styled(Section)`
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  .copy { max-width: 500px; word-break: keep-all; }
  .copy p + p { margin-top: 24px; color: var(--text-muted); }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); margin: 80px 0 0; border-top: 1px solid var(--line); padding-top: 32px; gap: 24px; }
  .stats div { min-width: 0; display: flex; flex-direction: column-reverse; align-items: start; }
  dt { font-size: 12px; letter-spacing: .5px; color: var(--text-muted); }
  dd { margin: 0 0 8px; font-size: clamp(28px, 3.8vw, 60px); overflow-wrap: anywhere; font-weight: 700; line-height: 1.1; letter-spacing: -.06em; }
  @media (max-width: 767px) { .about-grid { grid-template-columns: 1fr; gap: 32px; } .stats { margin-top: 48px; grid-template-columns: 1fr; gap: 28px; } dt { font-size: 11px; } }
`;
export default function About() {
  return <Root className="container" id="about" aria-labelledby="about-title">
    <h2 className="section-label" id="about-title">ABOUT</h2>
    <div className="about-grid"><p className="statement">I DESIGN.<br />I BUILD.</p><div className="copy"><p>{profileData.introduction}</p><p>{profileData.description}</p></div></div>
    <dl className="stats">{profileData.stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
  </Root>;
}
