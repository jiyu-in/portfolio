import styled from 'styled-components';
import { Section } from './Section.styles';

export const Root = styled(Section)`
  .statement {
    max-width: 950px;
  }
  .industries {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    padding: 0;
    margin: 64px 0 24px;
    font-size: 13px;
    font-weight: 600;
  }
  .timeline {
    height: 16px;
    position: relative;
    border-top: 1px solid var(--line);
  }
  .timeline::before,
  .timeline::after {
    content: '';
    position: absolute;
    top: -4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--text-primary);
  }
  .timeline::after {
    right: 0;
    background: var(--accent);
  }
  .years {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .current {
    font-weight: 700;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .industries {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 40px;
    }
  }
`;
