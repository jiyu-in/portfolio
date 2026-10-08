import React from 'react';
import styled from 'styled-components';
import { contentText } from '../data/contentUtils';

const Root = styled.figure`
  margin: 0;
  .image-frame { background: var(--surface); overflow: hidden; }
  figcaption { margin-top: 12px; font-size: 12px; color: var(--text-muted); }
`;

export default function ProjectImage({ project, detail = false, className }) {
  const source = contentText(detail ? project.heroImage : project.thumbnail);
  if (!source) return null;
  const reference = project.imageKind === 'reference';
  return <Root className={className}>
    <div className="image-frame"><img src={source}
      alt={contentText(project.imageAlt) || `${project.subtitle} ${reference ? '참고 이미지' : '서비스 화면'}`}
      loading={detail ? 'eager' : 'lazy'} decoding="async"
      width={project.imageWidth} height={project.imageHeight} /></div>
    {(contentText(project.imageCaption) || reference) && <figcaption>{contentText(project.imageCaption) || '참고 이미지 · 실제 서비스 화면이 아닙니다.'}</figcaption>}
  </Root>;
}
