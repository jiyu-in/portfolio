import styled, { css } from 'styled-components';
import SectionLink from '../SectionLink';
export const containerLayout = css`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.padding.desktop};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-inline: ${({ theme }) => theme.layout.padding.tablet};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-inline: ${({ theme }) => theme.layout.padding.mobile};
  }
`;
export const Container = styled.div`
  ${containerLayout};
`;
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
export const HiddenHeading = styled.h2`
  ${visuallyHidden};
`;
export const HiddenList = styled.ol`
  ${visuallyHidden};
`;
export const SkipLink = styled(SectionLink)`
  position: fixed;
  top: 12px;
  left: 20px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: var(--text-primary);
  color: var(--background);
  z-index: 100;
  transform: translateY(-160%);
  &:focus {
    transform: translateY(0);
  }
`;
export const SectionLabel = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: var(--type-caption);
  font-weight: 700;
  letter-spacing: 1px;
`;
export const Statement = styled.p`
  font-size: var(--type-section);
  font-weight: 650;
  line-height: 1.05;
  letter-spacing: -0.05em;
`;
export const linkStyle = css`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: var(--type-caption);
  &:hover {
    color: var(--accent-text);
  }
`;
