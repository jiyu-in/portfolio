import styled from 'styled-components';
export const PlaceholderSidebar = styled.div``;
export const PlaceholderPanel = styled.div``;

export const PlaceholderLabel = styled.p``;
export const PlaceholderLayout = styled.div``;
export const PlaceholderContent = styled.div``;

export const Placeholder = styled.div`
  min-height: 260px;
  padding: ${({ theme }) => theme.spacing.md};
  background: var(--surface);
  border: 1px solid var(--line);
  ${PlaceholderLabel} {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  ${PlaceholderLayout} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${({ theme }) => theme.spacing.sm};
    min-height: 160px;
  }
  ${PlaceholderSidebar} {
    border-right: 1px solid var(--line);
  }
  ${PlaceholderContent} {
    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};
  }
  ${PlaceholderPanel} {
    background: var(--surface-soft);
    border: 1px solid var(--line);
  }
`;
