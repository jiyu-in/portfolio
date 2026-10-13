import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  :root {
    --type-hero: ${({ theme }) => theme.typography.hero};
    --type-section: ${({ theme }) => theme.typography.section};
    --type-project: ${({ theme }) => theme.typography.project};
    --type-body: ${({ theme }) => theme.typography.body};
    --type-caption: ${({ theme }) => theme.typography.caption};
    --header-height: ${({ theme }) => theme.layout.headerHeight};
    --background: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --surface-soft: ${({ theme }) => theme.colors.surfaceSoft};
    --text-primary: ${({ theme }) => theme.colors.text};
    --text-secondary: ${({ theme }) => theme.colors.secondary};
    --text-muted: ${({ theme }) => theme.colors.secondaryText};
    --accent-text: ${({ theme }) => theme.colors.accentText};
    --line: ${({ theme }) => theme.colors.line};
    --accent: ${({ theme }) => theme.colors.accent};
    --accent-soft: ${({ theme }) => theme.colors.accentSoft};
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 96px; }
  body {
    margin: 0; background: var(--background); color: var(--text-primary);
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 17px; line-height: 1.65; -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, p { margin: 0; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  img { display: block; max-width: 100%; }
  ::selection { background: var(--text-primary); color: var(--background); }
  :focus-visible { outline: 2px solid var(--text-primary); outline-offset: 6px; }
  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    body[data-custom-cursor='true'], body[data-custom-cursor='true'] * { cursor: none !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`;
export default GlobalStyle;
