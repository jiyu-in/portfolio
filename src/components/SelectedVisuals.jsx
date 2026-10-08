import React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { visualData } from '../data/visualData';
import { contentText } from '../data/contentUtils';

const Root = styled(Section)`
  .visual-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px 48px; align-items: start; }
  figure { margin: 0; min-width: 0; }
  figure:nth-child(even) { margin-top: 120px; }
  figure:only-child { grid-column: 1 / -1; max-width: 1100px; }
  img { width: 100%; height: auto; }
  figcaption { display: flex; justify-content: space-between; gap: 20px; margin-top: 18px; font-size: 13px; }
  figcaption span { color: var(--text-muted); }
  @media (max-width: 767px) {
    .visual-grid { grid-template-columns: 1fr; gap: 40px; }
    figure:nth-child(even) { margin-top: 0; }
    figcaption { flex-direction: column; gap: 4px; }
  }
`;
export default function SelectedVisuals({ visuals = visualData }) {
  const images = visuals.filter(item => item?.verified === true && contentText(item.src) && contentText(item.alt)).slice(0, 6);
  if (!images.length) return null;
  return <Root id="visuals" className="container" aria-labelledby="visuals-title">
    <h2 className="section-label" id="visuals-title">SELECTED VISUALS</h2>
    <div className="visual-grid">{images.map((item, index) => <figure key={item.id || `${item.src}-${index}`}>
      <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
      {(contentText(item.title) || contentText(item.category)) && <figcaption>{contentText(item.title)}{contentText(item.category) && <span>{item.category}</span>}</figcaption>}
    </figure>)}</div>
  </Root>;
}
