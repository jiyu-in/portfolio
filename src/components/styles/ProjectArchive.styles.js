import { containerLayout } from './Common.styles';
import styled from 'styled-components';
export const ArchiveRow = styled.a``;
export const ArchiveIndex = styled.span``;
export const ArchiveTitle = styled.span``;
export const ArchiveRole = styled.span``;
export const ArchiveYear = styled.span``;
export const ArchiveType = styled.span``;
export const ArchiveArrow = styled.span``;

export const Archive = styled.section`
  ${containerLayout};
  padding-block: 100px;
  border-top: 1px solid var(--line);
  h2 {
    font-size: clamp(36px, 5vw, ${({ theme }) => theme.spacing.xxl});
    letter-spacing: -0.05em;
    font-weight: 650;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  ${ArchiveRow} {
    display: grid;
    grid-template-columns: 40px minmax(0, 2fr) minmax(0, 1.2fr) 90px 100px 20px;
    gap: ${({ theme }) => theme.spacing.md};
    padding-block: 28px;
    border-top: 1px solid var(--line);
    align-items: center;
    min-height: var(--header-height);
    transition: background 0.5s;
  }
  ${ArchiveIndex} {
    grid-column: 1;
    grid-row: 1;
  }
  ${ArchiveTitle} {
    grid-column: 2;
    grid-row: 1;
  }
  ${ArchiveRole} {
    grid-column: 3;
    grid-row: 1;
  }
  ${ArchiveYear} {
    grid-column: 4;
    grid-row: 1;
  }
  ${ArchiveType} {
    grid-column: 5;
    grid-row: 1;
  }
  ${ArchiveArrow} {
    grid-column: 6;
    grid-row: 1;
  }
  ${ArchiveRow}:hover,
  ${ArchiveRow}:focus-visible {
    background: var(--surface);
  }
  ${ArchiveIndex},
  ${ArchiveRole},
  ${ArchiveYear},
  ${ArchiveType} {
    font-size: 12px;
    color: var(--text-muted);
  }
  ${ArchiveTitle} {
    font-size: 18px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${ArchiveRow} {
      gap: ${({ theme }) => theme.spacing.sm};
      grid-template-columns: 30px minmax(0, 2fr) minmax(0, 1fr) 80px 20px;
    }
    ${ArchiveArrow} {
      grid-column: 5;
    }
    ${ArchiveType} {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-block: 80px;
    ${ArchiveRow} {
      grid-template-columns: ${({ theme }) => theme.spacing.md} minmax(
          0,
          1fr
        ) 20px;
      gap: 12px;
    }
    ${ArchiveRole},
    ${ArchiveYear} {
      grid-column: 2;
      grid-row: 2;
    }
    ${ArchiveRole} + ${ArchiveYear} {
      grid-row: 3;
    }
    ${ArchiveArrow} {
      grid-column: 3;
      grid-row: 1;
    }
    ${ArchiveTitle} {
      font-size: var(--type-body);
    }
  }
`;
