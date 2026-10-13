import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Slogan = styled(motion.div)`
  position: relative;
  z-index: 4;
  .eyebrow {
    font-size: 12px;
    letter-spacing: 1.4px;
    color: var(--accent-text);
  }
  .edition {
    margin-top: 40px;
    font-size: 11px;
    letter-spacing: 1.4px;
    color: var(--text-muted);
  }
`;
export const SloganTitle = styled.h1`
  margin-top: 32px;
  font-size: var(--type-hero);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.055em;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  span {
    display: block;
  }
  span:last-child {
    font-style: normal;
    color: var(--accent-text);
  }
  @media (max-width: 767px) {
    font-size: clamp(36px, 9vw, 64px);
  }
`;
export const SloganText = styled.p`
  margin-top: 32px;
  max-width: 390px;
  font-size: 16px;
  word-break: keep-all;
`;
