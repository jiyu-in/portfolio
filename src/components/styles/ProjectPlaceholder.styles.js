import styled from 'styled-components';
export const Placeholder = styled.div`
  min-height: 260px;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  .placeholder-label {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 24px;
  }
  .placeholder-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
    min-height: 160px;
  }
  .placeholder-sidebar {
    border-right: 1px solid var(--line);
  }
  .placeholder-content {
    display: grid;
    gap: 16px;
  }
  .placeholder-panel {
    background: var(--surface-soft);
    border: 1px solid var(--line);
  }
`;
