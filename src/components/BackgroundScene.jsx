import { useRef, useState } from 'react';
import {
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from 'framer-motion';
import { scrollPortfolioData } from '../data/scrollPortfolioData';
import {
  SceneSection,
  SceneStage,
  SceneImage,
  SceneMessage,
  SceneCaption,
  StaticScenes,
} from './styles/BackgroundScene.styles';

function SceneLayer({ scene, index, count, progress }) {
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
  return (
    <>
      <SceneImage style={{ opacity, scale }} aria-hidden="true">
        {scene.image && (
          <img src={scene.image} alt="" loading="lazy" decoding="async" />
        )}
      </SceneImage>
      <SceneMessage
        className="container"
        style={{ opacity: textOpacity, y }}
        aria-hidden="true"
      >
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
  useMotionValueEvent(scrollYProgress, 'change', (value) =>
    setActive(Math.min(scenes.length - 1, Math.floor(value * scenes.length))),
  );
  return (
    <SceneSection
      id={id}
      ref={ref}
      $count={scenes.length}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`} className="sr-only">
        {title}
      </h2>
      <ol className="sr-only">
        {scenes.map((scene) => (
          <li key={scene.id}>
            {scene.title} — {scene.description}
          </li>
        ))}
      </ol>
      <SceneStage>
        {scenes.map((scene, index) => (
          <SceneLayer
            key={scene.id}
            scene={scene}
            index={index}
            count={scenes.length}
            progress={scrollYProgress}
          />
        ))}
        <SceneCaption className="container">
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
        <h2 className="sr-only" id={`${id}-title`}>
          {title}
        </h2>
        {scenes.map((scene) => (
          <div className="static-scene" key={scene.id}>
            <SceneImage aria-hidden="true">
              {scene.image && (
                <img src={scene.image} alt="" loading="lazy" decoding="async" />
              )}
            </SceneImage>
            <div className="container static-message">
              <h3>{scene.title}</h3>
              <p>{scene.description}</p>
              {/* {scene.imageKind === 'reference' && (
                <p className="static-caption">
                  {scrollPortfolioData.referenceCaption}
                </p>
              )} */}
            </div>
          </div>
        ))}
      </StaticScenes>
    );
  return <MotionScenes id={id} title={title} scenes={scenes} />;
}
