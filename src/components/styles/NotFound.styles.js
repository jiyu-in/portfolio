import { containerLayout } from './Common.styles';
import styled from 'styled-components';
export const Root = styled.main`
  ${containerLayout};
  min-height: 70svh;
  padding-block: 100px;
  h1 {
    font-size: clamp(${({ theme }) => theme.spacing.xl}, 8vw, 120px);
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
    margin-top: ${({ theme }) => theme.spacing.md};
    border-bottom: 1px solid var(--text-primary);
  }
  a:hover {
    color: var(--accent-text);
  }
`;
