import React from 'react';
import styled from 'styled-components';
const Root = styled.div`
  display: flex; align-items: baseline; justify-content: space-between; gap: 20px;
  border-bottom: 1px solid var(--line); padding-bottom: 28px;
  h2 { font-size: clamp(42px, 6vw, 90px); line-height: 1; letter-spacing: -.065em; font-weight: 800; }
  span { font-size: 12px; white-space: nowrap; color: var(--text-muted); }
  @media (max-width: 767px) { align-items: start; h2 { max-width: 260px; } span { padding-top: 8px; } }
`;
export default function SectionTitle({ id, children, count }) {
  return <Root><h2 id={id}>{children}</h2><span>({String(count).padStart(2, '0')})</span></Root>;
}
