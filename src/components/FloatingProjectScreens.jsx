import useFloatingScreenMotion from '../hooks/useFloatingScreenMotion';
import { useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { projectData } from '../data/projectData';
import { notebookData, floatingScreenVariants } from '../data/notebookData';
import {
  ScreenStack,
  Screen,
  Sheet,
  Mockup,
} from './styles/FloatingProjectScreens.styles';

export default function FloatingProjectScreens() {
  const stack = useRef(null);
  const reduceMotion = useReducedMotion();
  const { controls, hoverStart, hoverEnd } =
    useFloatingScreenMotion(reduceMotion);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 24 });
  const move = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const box = stack.current.getBoundingClientRect();
    pointerX.set(((event.clientX - box.left) / box.width - 0.5) * 12);
    pointerY.set(((event.clientY - box.top) / box.height - 0.5) * 10);
  };
  return (
    <ScreenStack
      ref={stack}
      onPointerEnter={hoverStart}
      onPointerMove={move}
      onPointerLeave={() => {
        hoverEnd();
        pointerX.set(0);
        pointerY.set(0);
      }}
      aria-label={notebookData.heroVisualLabel}
    >
      {projectData.slice(0, 3).map((project, index) => {
        const screenshot =
          project.imageKind === 'screenshot' && project.thumbnail;
        return (
          <Screen
            key={project.id}
            $index={index}
            custom={index}
            variants={floatingScreenVariants}
            initial={reduceMotion ? 'still' : 'scattered'}
            animate={controls}
          >
            <Sheet style={reduceMotion ? undefined : { x, y }}>
              <p className="caption">
                <span>
                  {screenshot
                    ? notebookData.screenLabel
                    : notebookData.previewLabel}
                </span>
                <span>/{project.index}</span>
              </p>
              {screenshot ? (
                <img
                  src={project.thumbnail}
                  alt={project.imageAlt || project.subtitle}
                />
              ) : (
                <Mockup $index={index} aria-hidden="true">
                  <div className="sidebar">
                    {[0, 1, 2, 3].map((i) => (
                      <span className="stroke" key={i} />
                    ))}
                  </div>
                  <div className="preview">
                    <span className="preview-heading">{project.title}</span>
                    <div className="preview-panels">
                      {[0, 1, 2].map((i) => (
                        <span className="panel" key={i} />
                      ))}
                    </div>
                    <div className="chart">
                      {[0, 1, 2, 3].map((i) => (
                        <span className="bar" key={i} />
                      ))}
                    </div>
                  </div>
                </Mockup>
              )}
              <p className="sheet-title">{project.subtitle}</p>
            </Sheet>
          </Screen>
        );
      })}
    </ScreenStack>
  );
}
