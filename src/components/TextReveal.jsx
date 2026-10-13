import { useReducedMotion } from 'framer-motion';
import { RevealMask, RevealText } from './styles/TextReveal.styles';
export default function TextReveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();
  return (
    <RevealMask className={className}>
      <RevealText
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </RevealText>
    </RevealMask>
  );
}
