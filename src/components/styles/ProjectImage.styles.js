import styled from 'styled-components';

export const Root = styled.figure`
  margin: 0;
  .image-frame {
    background: var(--surface);
    overflow: hidden;
  }
  figcaption {
    margin-top: 12px;
    font-size: 12px;
    color: var(--text-muted);
  }
`;
