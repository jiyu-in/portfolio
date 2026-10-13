import { containerLayout, linkStyle } from './Common.styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionLink from '../SectionLink';
export const IntroName = styled.p``;
export const IntroRole = styled.p``;
export const IntroBottom = styled.div``;
export const IntroMeta = styled.p``;

export const Intro = styled.section`
  ${containerLayout};
  position: relative;
  min-height: calc(100svh - var(--header-height));
  padding-block: clamp(56px, 9vh, 110px) ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${IntroMeta} {
    font-size: 12px;
    letter-spacing: 1px;
    color: var(--text-muted);
  }
  ${IntroBottom} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding-top: 20px;
    margin-top: 56px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
`;
export const IntroContent = styled(motion.div)`
  min-width: 0;
`;
export const IntroGreeting = styled.p`
  font-size: var(--type-body);
`;
export const IntroTitle = styled.h1`
  font-size: var(--type-hero);
  font-weight: 650;
  letter-spacing: -0.055em;
  line-height: 1.08;
  margin-top: ${({ theme }) => theme.spacing.lg};
  overflow-wrap: normal;
  word-break: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.heroMobile};
  }
`;
export const IntroIdentity = styled.div`
  margin-top: 40px;
  ${IntroName} {
    font-size: 20px;
    font-weight: 600;
  }
  ${IntroRole} {
    font-size: 14px;
    color: var(--text-muted);
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;
export const IntroDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 480px;
  font-size: var(--type-body);
  color: var(--text-muted);
  word-break: keep-all;
  line-height: 1.8;
`;
export const IntroScroll = styled(SectionLink)`
  ${linkStyle};
  display: inline-flex;
  align-items: center;
  gap: 20px;
  min-height: 44px;
  font-size: 12px;
`;
