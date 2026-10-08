import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --text-primary: ${({ theme }) => theme.colors.text};
    --text-secondary: ${({ theme }) => theme.colors.secondary};
    --text-muted: ${({ theme }) => theme.colors.secondaryText};
    --accent-text: ${({ theme }) => theme.colors.accentText};
    --line: ${({ theme }) => theme.colors.line};
    --accent: ${({ theme }) => theme.colors.accent};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
  }

  body {
    margin: 0;
    background: var(--background);
    color: var(--text-primary);

    font-family: 'SUITE', sans-serif;
    font-size: 17px;
    line-height: 1.65;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: var(--text-primary);
    color: var(--background);
  }

  :focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 6px;
  }

  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin-inline: auto;
    padding-inline: 64px;
  }

  .skip-link {
    position: fixed;
    top: 12px;
    left: 20px;
    padding: 8px 16px;
    background: var(--text-primary);
    color: var(--background);
    z-index: 100;
    transform: translateY(-160%);
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  @media (max-width: 1199px) {
    .container {
      padding-inline: 32px;
    }
  }

  @media (max-width: 767px) {
    .container {
      padding-inline: 20px;
    }

    body {
      font-size: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export default GlobalStyle;