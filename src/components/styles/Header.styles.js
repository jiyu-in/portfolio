import styled from 'styled-components';

export const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--background);
  .inner {
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border-bottom: 1px solid var(--line);
  }
  .logo {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -1.5px;
  }
  nav {
    display: flex;
    gap: 32px;
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
  .edition {
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
    .edition {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .inner {
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
      padding-block: 8px 20px;
    }
    nav a {
      padding-block: 12px;
    }
  }
`;
