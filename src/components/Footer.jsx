import React from 'react';
import styled from 'styled-components';
import { profileData } from '../data/profileData';
const Root = styled.footer`
  .inner { display: flex; justify-content: space-between; gap: 20px; border-top: 1px solid var(--line); padding-block: 24px; font-size: 12px; color: var(--text-muted); }
  @media (max-width: 767px) { .inner { flex-direction: column; gap: 8px; } }
`;
export default function Footer() {
  return <Root className="container"><div className="inner"><span>© {new Date().getFullYear()} {profileData.name}.</span><span>UI/UX DESIGNER &amp; PUBLISHER</span></div></Root>;
}
