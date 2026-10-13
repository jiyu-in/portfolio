import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionLink from '../SectionLink';
export const Intro = styled.section`
  min-height: calc(100svh - 72px);
  padding-block: clamp(64px, 12vh, 140px) 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .meta {
    font-size: 12px;
    letter-spacing: 1px;
    color: var(--text-muted);
  }
  .description {
    margin-top: 32px;
    max-width: 480px;
    font-size: 16px;
    color: var(--text-muted);
    word-break: keep-all;
  }
  .intro-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding-top: 20px;
    margin-top: 64px;
  }
`;
export const IntroTitle = styled(motion.h1)`
  font-size: clamp(56px, 7.6vw, 116px);
  font-weight: 650;
  letter-spacing: -0.055em;
  line-height: 1.04;
  margin-top: 32px;
  span {
    display: block;
  }
  @media (max-width: 767px) {
    font-size: clamp(38px, 9vw, 68px);
  }
`;
export const IntroMeta = styled(motion.p)`
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 32px;
`;
export const IntroScroll = styled(SectionLink)`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  min-height: 44px;
  font-size: 12px;
`;
