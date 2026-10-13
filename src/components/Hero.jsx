import { heroData } from '../data/heroData';
import SloganBlock from './SloganBlock';
import FloatingProjectScreens from './FloatingProjectScreens';
import {
  HeroSection,
  HeroComposition,
  HeroFooter,
  Disciplines,
  ScrollLink,
  ScrollLabel,
} from './styles/Hero.styles';

export default function Hero() {
  return (
    <HeroSection id="hero" className="container" aria-labelledby="hero-title">
      <HeroComposition>
        <SloganBlock />
        <FloatingProjectScreens />
      </HeroComposition>
      <HeroFooter>
        <Disciplines>{heroData.disciplines.join(' / ')}</Disciplines>
        <ScrollLink href="#work" aria-label="Selected Works로 이동">
          <ScrollLabel>SCROLL TO EXPLORE</ScrollLabel>
          <ScrollLabel $compact>SCROLL</ScrollLabel>
          <span aria-hidden="true">↓</span>
        </ScrollLink>
      </HeroFooter>
    </HeroSection>
  );
}
