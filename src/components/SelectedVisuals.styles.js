import styled from 'styled-components';
import { Section } from './Section.styles';

export const Root = styled(Section)`
  .visual-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 80px 48px;
    align-items: start;
  }
  figure {
    margin: 0;
    min-width: 0;
  }
  figure:nth-child(even) {
    margin-top: 120px;
  }
  figure:only-child {
    grid-column: 1 / -1;
    max-width: 1100px;
  }
  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 18px;
    font-size: 13px;
  }
  figcaption span {
    color: var(--text-muted);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .visual-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    figure:nth-child(even) {
      margin-top: 0;
    }
    figcaption {
      flex-direction: column;
      gap: 4px;
    }
  }
`;
