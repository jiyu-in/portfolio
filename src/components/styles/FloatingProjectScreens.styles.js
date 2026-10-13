import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScreenStack = styled.div`
  position: relative;
  height: 540px;
  min-width: 0;
  @media (max-width: 1199px) {
    height: 450px;
  }
  @media (max-width: 767px) {
    height: 500px;
    margin-top: 24px;
  }
`;
export const Screen = styled(motion.div)`
  position: absolute;
  width: min(88%, 510px);
  left: 6%;
  top: 20%;
  z-index: ${({ $index }) => 3 - $index};
  @media (max-width: 767px) {
    width: 78%;
    top: 20%;
  }
`;
export const Sheet = styled(motion.div)`
  padding: 18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 2px;
  .caption {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 10px;
    margin-bottom: 14px;
    color: var(--text-muted);
  }
  .sheet-title {
    font-size: clamp(14px, 2vw, 22px);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: 12px;
  }
  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    padding: 12px;
  }
`;
export const Mockup = styled.div`
  display: grid;
  grid-template-columns: 22% 1fr;
  min-height: 190px;
  background: ${({ theme, $index }) =>
    [
      theme.colors.surfaceSoft,
      theme.colors.surfaceSoft,
      theme.colors.surfaceSoft,
    ][$index]};
  gap: 16px;
  padding: 18px;
  .sidebar {
    border-right: 1px solid var(--line);
    display: grid;
    align-content: start;
    gap: 12px;
    padding-top: 8px;
  }
  .stroke {
    height: 4px;
    width: 65%;
    background: ${({ theme }) => `${theme.colors.accent}40`};
  }
  .preview {
    display: grid;
    gap: 10px;
  }
  .preview-heading {
    font-size: 11px;
    color: var(--accent-text);
    font-weight: 600;
  }
  .preview-panels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .panel {
    min-height: 28px;
    background: var(--surface-soft);
    border: 1px solid var(--line);
  }
  .chart {
    height: 45px;
    display: flex;
    gap: 8px;
    align-items: end;
  }
  .bar {
    flex: 1;
    background: var(--accent);
  }
  .bar:nth-child(1) {
    height: 45%;
  }
  .bar:nth-child(2) {
    height: 75%;
  }
  .bar:nth-child(3) {
    height: 60%;
  }
  .bar:nth-child(4) {
    height: 95%;
  }
`;
