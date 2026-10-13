import { motion, useReducedMotion } from 'framer-motion';
import { scrollPortfolioData } from '../data/scrollPortfolioData';
import { heroData } from '../data/heroData';
import {
  Intro,
  IntroTitle,
  IntroMeta,
  IntroScroll,
} from './styles/HeroIntro.styles';
export default function HeroIntro() {
  const reduce = useReducedMotion();
  return (
    <Intro id="hero" className="container" aria-labelledby="hero-title">
      <div>
        <p className="meta">{heroData.eyebrow}</p>
        <IntroTitle
          id="hero-title"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {scrollPortfolioData.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </IntroTitle>
        <IntroMeta
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.08 }}
        >
          {scrollPortfolioData.disciplines}
        </IntroMeta>
        <p className="description">{scrollPortfolioData.description}</p>
      </div>
      <div className="intro-bottom">
        <p className="meta">{heroData.edition}</p>
        <IntroScroll href="#story" aria-label="스크롤 스토리로 이동">
          SCROLL{' '}
          <motion.span
            aria-hidden="true"
            animate={reduce ? undefined : { y: [0, 3, 0] }}
            transition={{ duration: 0.8, repeat: 1, delay: 0.7 }}
          >
            ↓
          </motion.span>
        </IntroScroll>
      </div>
    </Intro>
  );
}
