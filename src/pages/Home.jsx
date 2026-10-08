import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionLink from '../components/SectionLink';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import SelectedVisuals from '../components/SelectedVisuals';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'JIYU. — UI/UX Designer & Publisher';
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(location.state && location.state.section);
      if (target) {
        target.scrollIntoView({ block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
      else document.documentElement.scrollTop = 0;
    });
    return () => cancelAnimationFrame(frame);
  }, [location]);
  return <div id="top"><SectionLink className="skip-link" href="#main">본문으로 건너뛰기</SectionLink><Header />
    <main id="main" tabIndex={-1}><Hero /><SelectedWorks /><SelectedVisuals /><About /><Skills /><Experience /><Contact /></main><Footer />
  </div>;
}
