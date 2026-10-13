import styled from 'styled-components';
import { motion } from 'framer-motion';
export const RevealMask = styled.span`
  display: block;
  overflow: hidden;
  padding-block: 0.15em;
  margin-block: -0.15em;
`;
export const RevealText = styled(motion.span)`
  display: block;
`;
