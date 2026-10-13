import { HiddenHeading, HiddenList } from './styles/Common.styles';
import {
  StaticScene,
  StaticMessage,
  StaticCaption,
  SceneSection,
  SceneStage,
  SceneImage,
  SceneMessage,
  SceneCaption,
  StaticScenes,
} from './styles/BackgroundScene.styles';
import { useRef, useState } from 'react';
import {
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from 'framer-motion';
import { scrollPortfolioData } from '../data/scrollPortfolioData';
function SceneLayer({ scene, index, count, progress, entryProgress }) {
  const start = index / count;
  const end = (index + 1) / count;
  const opacity = useTransform(
    progress,
    index === 0
      ? [0, end - 0.05, Math.min(1, end + 0.04)]
      : [start - 0.04, start + 0.04, end - 0.04, Math.min(1, end + 0.04)],
    index === 0 ? [1, 1, 0] : [0, 1, 1, index === count - 1 ? 1 : 0],
  );
  const textOpacity = useTransform(
    progress,
    index === 0 ? [0, end - 0.06, end] : [start, start + 0.06, end - 0.06, end],
    index === 0 ? [1, 1, 0] : [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [28, 0, -28],
  );
  const scale = useTransform(progress, [start, end], [1.03, 1]);
  const entryScale = useTransform(entryProgress, [0, 1], [0.98, 1.03]);
  return (
    <>
      <SceneImage
        style={{ opacity, scale: index === 0 ? entryScale : scale }}
        aria-hidden="true"
      >
        {scene.image && (
          <img src={scene.image} alt="" loading="lazy" decoding="async" />
        )}
      </SceneImage>
      <SceneMessage style={{ opacity: textOpacity, y }} aria-hidden="true">
        <h3>{scene.title}</h3>
        {scene.description && <p>{scene.description}</p>}
      </SceneMessage>
    </>
  );
}
function MotionScenes({ id, title, scenes }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: entryProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (value) =>
    setActive(
      Math.max(
        0,
        Math.min(scenes.length - 1, Math.floor(value * scenes.length)),
      ),
    ),
  );
  return (
    <SceneSection
      id={id}
      ref={ref}
      $count={scenes.length}
      aria-labelledby={`${id}-title`}
    >
      <HiddenHeading id={`${id}-title`}>{title}</HiddenHeading>
      <HiddenList>
        {scenes.map((scene) => (
          <li key={scene.id}>
            {scene.title} — {scene.description}
          </li>
        ))}
      </HiddenList>
      <SceneStage>
        {scenes.map((scene, index) => (
          <SceneLayer
            key={scene.id}
            scene={scene}
            index={index}
            count={scenes.length}
            progress={scrollYProgress}
            entryProgress={entryProgress}
          />
        ))}
        <SceneCaption>
          <span>
            {title} / {String(active + 1).padStart(2, '0')}
          </span>
          {/* {scenes[active].imageKind === 'reference' && (
            <span>{scrollPortfolioData.referenceCaption}</span>
          )} */}
        </SceneCaption>
      </SceneStage>
    </SceneSection>
  );
}
export default function BackgroundScene({ id, title, scenes }) {
  const reduce = useReducedMotion();
  if (!scenes.length) return null;
  if (reduce)
    return (
      <StaticScenes id={id} aria-labelledby={`${id}-title`}>
        <HiddenHeading id={`${id}-title`}>{title}</HiddenHeading>
        {scenes.map((scene) => (
          <StaticScene key={scene.id}>
            <SceneImage aria-hidden="true">
              {scene.image && (
                <img src={scene.image} alt="" loading="lazy" decoding="async" />
              )}
            </SceneImage>
            <StaticMessage>
              <h3>{scene.title}</h3>
              <p>{scene.description}</p>
              {/* {scene.imageKind === 'reference' && (
                <StaticCaption>
                  {scrollPortfolioData.referenceCaption}
                </StaticCaption>
              )} */}
            </StaticMessage>
          </StaticScene>
        ))}
      </StaticScenes>
    );
  return <MotionScenes id={id} title={title} scenes={scenes} />;
}
