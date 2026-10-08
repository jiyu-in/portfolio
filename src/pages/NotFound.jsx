import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Root = styled.main`
  min-height: 70svh; padding-block: 100px;
  h1 { font-size: clamp(48px, 8vw, 120px); line-height: 1; letter-spacing: -.06em; }
  p { margin-top: 28px; }
  a { display: inline-flex; min-height: 44px; align-items: center; margin-top: 24px; border-bottom: 1px solid var(--text-primary); }
  a:hover { color: var(--accent-text); }
`;
export default function NotFound() {
  useEffect(() => { document.title = 'Page not found — JIYU.'; document.documentElement.scrollTop = 0; }, []);
  return <><Header detail /><Root className="container"><h1>PAGE NOT FOUND.</h1><p>요청하신 페이지를 찾을 수 없습니다.</p><Link to="/">← BACK TO HOME</Link></Root><Footer /></>;
}
