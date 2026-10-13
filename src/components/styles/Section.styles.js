import styled from 'styled-components';
export const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  border-top: 1px solid var(--line);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-block: ${({ theme }) => theme.spacing.xxl};
  }
`;
