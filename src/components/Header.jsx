import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionLink from './SectionLink';
import styled from 'styled-components';
const menus = ['WORK', 'ABOUT', 'EXPERIENCE', 'CONTACT'];
const Root = styled.header`
  position: sticky; top: 0; z-index: 20; background: var(--background);
  .inner { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid var(--line); }
  .logo { font-size: 26px; font-weight: 800; letter-spacing: -1.5px; }
  nav { display: flex; gap: 32px; align-items: center; }
  nav a { font-size: 12px; font-weight: 700; letter-spacing: 1px; transition: color .5s; padding-block: 12px; }
  nav a[aria-current="location"] { color: var(--accent-text); }
  nav a:hover { color: var(--accent-text); }
  .edition { font-size: 12px; color: var(--text-muted); }
  button { display: none; border: 0; background: none; padding: 12px 0 12px 20px; font-size: 12px; font-weight: 700; cursor: pointer; }
  @media (max-width: 1199px) { .edition { display: none; } }
  @media (max-width: 767px) {
    .inner { flex-wrap: wrap; gap: 0; }
    button { display: block; }
    nav { display: ${({ $open }) => $open ? 'flex' : 'none'}; width: 100%; flex-direction: column; align-items: stretch; gap: 0; padding-block: 8px 20px; }
    nav a { padding-block: 12px; }
  }
`;
export default function Header({ detail = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (detail || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id === 'hero' ? null : entry.target.id);
      });
    }, { rootMargin: '-20% 0px -55% 0px' });
    ['hero', ...menus.map(menu => menu.toLowerCase())].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [detail]);
  const close = () => setOpen(false);
  return <Root $open={open} onKeyDown={event => { if (open && event.key === 'Escape') { close(); event.currentTarget.querySelector('button').focus(); } }}><div className="container"><div className="inner">
    {detail ? <Link className="logo" to="/" aria-label="JIYU 홈">JIYU.</Link> : <SectionLink className="logo" href="#top" aria-label="JIYU 홈" onNavigate={close}>JIYU.</SectionLink>}
    <button type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'CLOSE −' : 'MENU +'}</button>
    <nav id="main-navigation" aria-label="주요 메뉴">{menus.map(menu => detail
      ? <Link key={menu} to="/" state={{ section: menu.toLowerCase() }} onClick={close}>{menu}</Link>
      : <SectionLink key={menu} href={`#${menu.toLowerCase()}`} aria-current={active === menu.toLowerCase() ? "location" : undefined} onNavigate={close}>{menu}</SectionLink>)}</nav>
    <span className="edition">PORTFOLIO / 2026</span>
  </div></div></Root>;
}
