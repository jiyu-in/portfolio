import styled from 'styled-components';
import { motion } from 'framer-motion';
export const SceneSection = styled.section`
  position: relative;
  height: ${({ $count }) => ($count + 1) * 100}svh;
  background: #000;
  color: #fff;
  @media (max-width: 767px) {
    height: ${({ $count }) => $count * 100}svh;
  }
`;
export const SceneStage = styled.div`
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  background: #000;
`;
export const SceneImage = styled(motion.div)`
  position: absolute;
  inset: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.68);
  }
`;
export const SceneMessage = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
  h3 {
    font-size: clamp(48px, 7vw, 104px);
    line-height: 1.08;
    letter-spacing: -0.05em;
    font-weight: 600;
    max-width: 1050px;
    overflow-wrap: anywhere;
  }
  p {
    font-size: 18px;
    margin-top: 24px;
  }
  @media (max-width: 767px) {
    h3 {
      font-size: clamp(34px, 9vw, 58px);
    }
    p {
      font-size: 16px;
    }
  }
`;
export const SceneCaption = styled.div`
  position: absolute;
  inset: auto 0 36px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  font-size: 12px;
  color: #fff;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    bottom: 24px;
  }
`;
export const StaticScenes = styled.section`
  background: #000;
  color: #fff;
  .static-scene {
    position: relative;
    min-height: 70svh;
    overflow: hidden;
  }
  .static-message {
    position: relative;
    padding-block: 120px 80px;
  }
  h3 {
    font-size: clamp(36px, 6vw, 80px);
    line-height: 1.1;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }
  p {
    margin-top: 24px;
  }
  .static-caption {
    font-size: 12px;
    margin-top: 48px;
  }
`;
