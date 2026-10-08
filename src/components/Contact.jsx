import React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { profileData } from '../data/profileData';
const Root = styled(Section)`
  .statement { font-size: clamp(48px, 8vw, 120px); }
  .contacts { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 64px; }
  .contact-link { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding-block: 20px; border-top: 1px solid var(--line); transition: color .6s; }
  .contact-link:hover { color: var(--accent-text); }
  .label { display: block; font-size: 12px; color: var(--text-muted); margin-bottom: 8px; }
  .value { overflow-wrap: anywhere; }
  @media (max-width: 767px) { .contacts { grid-template-columns: 1fr; gap: 20px; margin-top: 40px; } }
`;
export default function Contact() {
  return <Root id="contact" className="container" aria-labelledby="contact-title">
    <h2 className="section-label" id="contact-title">CONTACT</h2><p className="statement">LET’S WORK<br />TOGETHER.</p>
    <div className="contacts">
      {profileData.email && <a className="contact-link" href={`mailto:${profileData.email}`}><span><span className="label">EMAIL</span><span className="value">{profileData.email}</span></span><span aria-hidden="true">↗</span></a>}
      {profileData.github && <a className="contact-link" href={profileData.github} target="_blank" rel="noopener noreferrer"><span><span className="label">GITHUB</span><span className="value">{profileData.githubLabel}</span></span><span aria-hidden="true">↗</span></a>}
    </div>
  </Root>;
}
