import { useReducedMotion } from 'framer-motion';
import { notebookData } from '../data/notebookData';
import { heroData } from '../data/heroData';
import { Slogan, SloganTitle, SloganText } from './styles/SloganBlock.styles';

export default function SloganBlock() {
  const reduceMotion = useReducedMotion();
  return (
    <Slogan
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow">{heroData.eyebrow}</p>
      <SloganTitle id="hero-title">
        {notebookData.slogan.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </SloganTitle>
      <SloganText>{notebookData.introduction}</SloganText>
      <p className="edition">{heroData.edition}</p>
    </Slogan>
  );
}
