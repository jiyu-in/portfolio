import styled from 'styled-components';
import { Section } from './Section.styles';

export const Root = styled(Section)`
  .statement {
    font-size: clamp(40px, 6vw, 88px);
  }
  .contact-description {
    max-width: 540px;
    color: var(--text-muted);
    margin-top: 28px;
    font-size: 16px;
  }
  .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-top: 64px;
  }
  .contact-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding-block: 20px;
    border-top: 1px solid var(--line);
    transition: color 0.6s;
  }
  .contact-link:hover {
    color: var(--accent-text);
  }
  .label {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .value {
    overflow-wrap: anywhere;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .contacts {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 40px;
    }
  }
`;
