import { containerLayout } from './Common.styles';
import styled from 'styled-components';
export const FooterInner = styled.div``;

export const Root = styled.footer`
  ${containerLayout};
  ${FooterInner} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding-block: ${({ theme }) => theme.spacing.md};
    font-size: 12px;
    color: var(--text-muted);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${FooterInner} {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.xs};
    }
  }
`;
