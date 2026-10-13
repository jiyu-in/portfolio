import {
  IntroName,
  IntroRole,
  IntroBottom,
  IntroMeta,
  Intro,
  IntroContent,
  IntroGreeting,
  IntroTitle,
  IntroIdentity,
  IntroDescription,
  IntroScroll,
} from './styles/HeroIntro.styles';
import { useRef } from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { scrollPortfolioData } from '../data/scrollPortfolioData';
import { heroData } from '../data/heroData';
import TextReveal from './TextReveal';
export default function HeroIntro() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.85], [1, 1, 0]);
  const copy = scrollPortfolioData.heroIdentity;
  return (
    <Intro ref={ref} id="hero" aria-labelledby="hero-title">
      <IntroContent style={reduce ? undefined : { y, opacity }}>
        <IntroGreeting>
          <TextReveal>{copy.greeting}</TextReveal>
        </IntroGreeting>
        <IntroTitle id="hero-title">
          {scrollPortfolioData.title.map((line, index) => (
            <TextReveal key={line} delay={0.18 + index * 0.1}>
              {line}
            </TextReveal>
          ))}
        </IntroTitle>
        <IntroIdentity>
          <IntroName>
            <TextReveal delay={0.46}>{copy.name}</TextReveal>
          </IntroName>
          <IntroRole>
            <TextReveal delay={0.56}>{copy.role}</TextReveal>
          </IntroRole>
        </IntroIdentity>
        <IntroDescription>
          <TextReveal delay={0.7}>{copy.description}</TextReveal>
        </IntroDescription>
      </IntroContent>
      <IntroBottom>
        <IntroMeta>{heroData.edition}</IntroMeta>
        <IntroScroll href="#story" aria-label="스크롤 스토리로 이동">
          SCROLL <span aria-hidden="true">↓</span>
        </IntroScroll>
      </IntroBottom>
    </Intro>
  );
}
