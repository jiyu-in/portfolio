import { siteData } from '../data/siteData';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionLink from '../components/SectionLink';
import Header from '../components/Header';
import HeroIntro from '../components/HeroIntro';
import ScrollStorySection from '../components/ScrollStorySection';
import ProjectPreviewSection from '../components/ProjectPreviewSection';
import ProjectArchive from '../components/ProjectArchive';
import SelectedWorks from '../components/SelectedWorks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  const location = useLocation();
  useEffect(() => {
    document.title = siteData.homeTitle;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(
        location.state && location.state.section,
      );
      if (target) {
        target.scrollIntoView({ block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      } else document.documentElement.scrollTop = 0;
    });
    return () => cancelAnimationFrame(frame);
  }, [location]);
  return (
    <div id="top">
      <SectionLink className="skip-link" href="#main">
        {siteData.skipLink}
      </SectionLink>
      <Header />
      <main id="main" tabIndex={-1}>
        <HeroIntro />
        <ScrollStorySection />
        <ProjectPreviewSection />
        <SelectedWorks />
        <ProjectArchive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
