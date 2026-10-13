import styled from 'styled-components';
export const ImageFrame = styled.div``;

export const Root = styled.figure`
  margin: 0;
  ${ImageFrame} {
    background: var(--surface);
    overflow: hidden;
  }
  figcaption {
    margin-top: 12px;
    font-size: 12px;
    color: var(--text-muted);
  }
`;
