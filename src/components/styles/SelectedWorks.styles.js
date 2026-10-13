import { containerLayout } from './Common.styles';
import styled from 'styled-components';
export const WorksDescription = styled.p``;
export const WorksGrid = styled.div``;

export const Root = styled.section`
  ${containerLayout};
  padding-top: 120px;
  padding-bottom: 140px;
  ${WorksDescription} {
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 14px;
  }
  ${WorksGrid} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;
    margin-top: 56px;
    align-items: start;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 80px;
    padding-bottom: 80px;
    ${WorksGrid} {
      grid-template-columns: 1fr;
      gap: ${({ theme }) => theme.spacing.lg};
      margin-top: 40px;
    }
  }
`;
