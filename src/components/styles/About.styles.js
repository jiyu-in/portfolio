import styled from 'styled-components';
import { Section } from './Section.styles';

export const Root = styled(Section)`
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
  .copy {
    max-width: 500px;
    word-break: keep-all;
  }
  .copy p + p {
    margin-top: 24px;
    color: var(--text-muted);
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 80px 0 0;
    border-top: 1px solid var(--line);
    padding-top: 32px;
    gap: 24px;
  }
  .stats div {
    min-width: 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
  }
  dt {
    font-size: 12px;
    letter-spacing: 0.5px;
    color: var(--text-muted);
  }
  dd {
    margin: 0 0 8px;
    font-size: clamp(28px, 3.8vw, 60px);
    overflow-wrap: anywhere;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.06em;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .stats {
      margin-top: 48px;
      grid-template-columns: 1fr;
      gap: 28px;
    }
    dt {
      font-size: 11px;
    }
  }
`;
