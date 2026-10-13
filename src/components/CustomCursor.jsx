import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import {
  CursorLayer,
  CursorRing,
  CursorDot,
} from './styles/CustomCursor.styles';
const emptyState = { visible: false, hovering: false, text: '' };
const interactiveSelector =
  'a[href], button:not(:disabled), [role="button"], .clickable, input, textarea, select, summary, [data-cursor]';

export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState(emptyState);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40 });
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(media.matches && !reduce);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [reduce]);
  useEffect(() => {
    if (!enabled) return;
    let current = emptyState;
    setState(emptyState);
    const update = (next) => {
      if (
        next.visible !== current.visible ||
        next.hovering !== current.hovering ||
        next.text !== current.text
      ) {
        current = next;
        setState(next);
      }
    };
    const targetState = (target) => {
      const element =
        target instanceof Element ? target.closest(interactiveSelector) : null;
      return {
        hovering: Boolean(element),
        text: element?.getAttribute('data-cursor') || '',
      };
    };
    const move = (event) => {
      if (event.sourceCapabilities?.firesTouchEvents) return;
      x.set(event.clientX);
      y.set(event.clientY);
      document.body.dataset.customCursor = 'true';
      update({ visible: true, ...targetState(event.target) });
    };
    const over = (event) =>
      update({ visible: current.visible, ...targetState(event.target) });
    const out = (event) =>
      update({ visible: current.visible, ...targetState(event.relatedTarget) });
    const hide = () => {
      delete document.body.dataset.customCursor;
      update(emptyState);
    };
    const key = (event) => {
      if (event.key === 'Tab' || event.key === 'Escape') hide();
    };
    const touch = (event) => {
      if (event.pointerType !== 'mouse') hide();
    };
    const scroll = () => {
      if (current.visible)
        update({
          visible: true,
          ...targetState(document.elementFromPoint(x.get(), y.get())),
        });
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', move);
    window.addEventListener('blur', hide);
    window.addEventListener('keydown', key);
    window.addEventListener('pointerdown', touch);
    return () => {
      delete document.body.dataset.customCursor;
      window.removeEventListener('mousemove', move);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', move);
      window.removeEventListener('blur', hide);
      window.removeEventListener('keydown', key);
      window.removeEventListener('pointerdown', touch);
    };
  }, [enabled, x, y]);
  if (!enabled) return null;
  return (
    <>
      <CursorLayer
        aria-hidden="true"
        data-custom-cursor-ring
        $visible={state.visible}
        style={{ x: ringX, y: ringY }}
      >
        <CursorRing $hovering={state.hovering}>{state.text}</CursorRing>
      </CursorLayer>
      <CursorLayer aria-hidden="true" $visible={state.visible} style={{ x, y }}>
        <CursorDot $hovering={state.hovering} />
      </CursorLayer>
    </>
  );
}
