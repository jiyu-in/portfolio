import styled from 'styled-components';
export const Archive = styled.section`
  padding-block: 100px;
  border-top: 1px solid var(--line);
  h2 {
    font-size: clamp(36px, 5vw, 64px);
    letter-spacing: -0.05em;
    font-weight: 650;
    margin-bottom: 48px;
  }
  .archive-row {
    display: grid;
    grid-template-columns: 40px minmax(0, 2fr) minmax(0, 1.2fr) 90px 100px 20px;
    gap: 24px;
    padding-block: 28px;
    border-top: 1px solid var(--line);
    align-items: center;
    min-height: 72px;
    transition: background 0.5s;
  }
  .archive-index {
    grid-column: 1;
    grid-row: 1;
  }
  .archive-title {
    grid-column: 2;
    grid-row: 1;
  }
  .archive-role {
    grid-column: 3;
    grid-row: 1;
  }
  .archive-year {
    grid-column: 4;
    grid-row: 1;
  }
  .archive-type {
    grid-column: 5;
    grid-row: 1;
  }
  .archive-arrow {
    grid-column: 6;
    grid-row: 1;
  }
  .archive-row:hover,
  .archive-row:focus-visible {
    background: var(--surface);
  }
  .archive-index,
  .archive-role,
  .archive-year,
  .archive-type {
    font-size: 12px;
    color: var(--text-muted);
  }
  .archive-title {
    font-size: 18px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }
  @media (max-width: 1199px) {
    .archive-row {
      gap: 16px;
      grid-template-columns: 30px minmax(0, 2fr) minmax(0, 1fr) 80px 20px;
    }
    .archive-arrow {
      grid-column: 5;
    }
    .archive-type {
      display: none;
    }
  }
  @media (max-width: 767px) {
    padding-block: 80px;
    .archive-row {
      grid-template-columns: 24px minmax(0, 1fr) 20px;
      gap: 12px;
    }
    .archive-role,
    .archive-year {
      grid-column: 2;
      grid-row: 2;
    }
    .archive-role + .archive-year {
      grid-row: 3;
    }
    .archive-arrow {
      grid-column: 3;
      grid-row: 1;
    }
    .archive-title {
      font-size: 16px;
    }
  }
`;
