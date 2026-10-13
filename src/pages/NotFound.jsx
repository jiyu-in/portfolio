import { siteData } from '../data/siteData';
import { Root } from '../components/styles/NotFound.styles';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function NotFound() {
  useEffect(() => {
    document.title = siteData.notFound.documentTitle;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header detail />
      <Root>
        <h1>{siteData.notFound.title}</h1>
        <p>{siteData.notFound.description}</p>
        <Link to="/">{siteData.notFound.back}</Link>
      </Root>
      <Footer />
    </>
  );
}
