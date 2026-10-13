import styled from 'styled-components';

export const Root = styled.section`
  padding-top: 120px;
  .notebook-intro {
    margin-top: 24px;
    color: var(--text-muted);
    font-size: 16px;
  }
  padding-bottom: 140px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 96px;
    padding-bottom: 80px;
  }
`;
