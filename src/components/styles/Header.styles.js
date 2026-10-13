import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderInner = styled.div``;
export const HeaderLogo = styled(Link)``;
export const HeaderEdition = styled.span``;

export const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--background);
  ${HeaderInner} {
    min-height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    border-bottom: 1px solid var(--line);
  }
  ${HeaderLogo} {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -1.5px;
  }
  nav {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
  }
  nav a {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    transition: color 0.5s;
    padding-block: 12px;
  }
  nav a[aria-current='location'] {
    color: var(--accent-text);
  }
  nav a:hover {
    color: var(--accent-text);
  }
  ${HeaderEdition} {
    font-size: 12px;
    color: var(--text-muted);
  }
  button {
    display: none;
    border: 0;
    background: none;
    padding: 12px 0 12px 20px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${HeaderEdition} {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${HeaderInner} {
      flex-wrap: wrap;
      gap: 0;
    }
    button {
      display: block;
    }
    nav {
      display: ${({ $open }) => ($open ? 'flex' : 'none')};
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding-block: ${({ theme }) => theme.spacing.xs} 20px;
    }
    nav a {
      padding-block: 12px;
    }
  }
`;
