import { useEffect, useRef } from 'react';
import { useAnimationControls } from 'framer-motion';

export default function useFloatingScreenMotion(reduceMotion) {
  const controls = useAnimationControls();
  const hovering = useRef(false);

  useEffect(() => {
    let armed = false;
    const replay = () => {
      controls.stop();
      controls.set('scattered');
      if (!hovering.current) controls.start('gathered');
    };
    if (reduceMotion) {
      hovering.current = false;
      controls.set('still');
      return () => controls.stop();
    }
    replay();
    const onScroll = () => {
      if (window.scrollY > Math.max(120, window.innerHeight * 0.5))
        armed = true;
      if (armed && window.scrollY <= 24) {
        armed = false;
        replay();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      controls.stop();
    };
  }, [controls, reduceMotion]);

  const hoverStart = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    hovering.current = true;
    controls.start('scattered');
  };
  const hoverEnd = () => {
    hovering.current = false;
    if (!reduceMotion) controls.start('gathered');
  };
  return { controls, hoverStart, hoverEnd };
}
