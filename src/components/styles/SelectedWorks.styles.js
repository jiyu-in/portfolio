import styled from 'styled-components';
export const Root = styled.section`
  padding-top: 120px;
  padding-bottom: 140px;
  .notebook-intro {
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 14px;
  }
  .archive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;
    margin-top: 56px;
    align-items: start;
  }
  @media (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
    .archive-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      margin-top: 40px;
    }
  }
`;
