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
  font-size: clamp(46px, 5.8vw, 88px);
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: -0.055em;
  font-family: Georgia, 'Times New Roman', serif;
  span {
    display: block;
  }
  span:last-child {
    font-style: italic;
    color: var(--accent-text);
  }
  @media (max-width: 767px) {
    font-size: clamp(38px, 9vw, 64px);
  }
`;
export const SloganText = styled.p`
  margin-top: 32px;
  max-width: 370px;
  font-size: 17px;
  word-break: keep-all;
`;
