import styled from 'styled-components';

export const Root = styled.footer`
  .inner {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding-block: 24px;
    font-size: 12px;
    color: var(--text-muted);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .inner {
      flex-direction: column;
      gap: 8px;
    }
  }
`;
