import styled from 'styled-components';
import { motion } from 'framer-motion';
export const CursorLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: difference;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  @media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
export const CursorRing = styled.div`
  width: ${({ $hovering, theme }) => ($hovering ? theme.spacing.xxl : '36px')};
  height: ${({ $hovering, theme }) => ($hovering ? theme.spacing.xxl : '36px')};
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    width 0.25s,
    height 0.25s;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
`;
export const CursorDot = styled.div`
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ $hovering }) => ($hovering ? 0 : 1)};
  transition: opacity 0.2s;
`;
