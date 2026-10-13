import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 28px;
  h2 {
    font-size: var(--type-section);
    line-height: 1;
    letter-spacing: -0.065em;
    font-weight: 800;
  }
  span {
    font-size: 12px;
    white-space: nowrap;
    color: var(--text-muted);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: start;
    h2 {
      max-width: 260px;
    }
    span {
      padding-top: 8px;
    }
  }
`;
