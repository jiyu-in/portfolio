import styled from 'styled-components';

export const Root = styled.main`
  min-height: 70svh;
  padding-block: 100px;
  h1 {
    font-size: clamp(48px, 8vw, 120px);
    line-height: 1;
    letter-spacing: -0.06em;
  }
  p {
    margin-top: 28px;
  }
  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    margin-top: 24px;
    border-bottom: 1px solid var(--text-primary);
  }
  a:hover {
    color: var(--accent-text);
  }
`;
