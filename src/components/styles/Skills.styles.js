import styled from 'styled-components';
import { Section } from './Section.styles';

export const Root = styled(Section)`
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
  h3 {
    font-size: 24px;
    letter-spacing: -0.6px;
    margin-bottom: 24px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding-block: 12px;
    border-bottom: 1px solid var(--line);
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
`;
