import { siteData } from '../data/siteData';
import { Root } from './styles/Header.styles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionLink from './SectionLink';
const menus = siteData.navigation;

export default function Header({ detail = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (detail || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id === 'hero' ? null : entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -55% 0px' },
    );
    ['hero', ...menus.map((menu) => menu.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [detail]);
  const close = () => setOpen(false);
  return (
    <Root
      $open={open}
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          close();
          event.currentTarget.querySelector('button').focus();
        }
      }}
    >
      <div className="container">
        <div className="inner">
          {detail ? (
            <Link className="logo" to="/" aria-label={siteData.homeLabel}>
              {siteData.brand}
            </Link>
          ) : (
            <SectionLink
              className="logo"
              href="#top"
              aria-label={siteData.homeLabel}
              onNavigate={close}
            >
              {siteData.brand}
            </SectionLink>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? siteData.menuClose : siteData.menuOpen}
          </button>
          <nav id="main-navigation" aria-label={siteData.navigationLabel}>
            {menus.map((menu) =>
              detail ? (
                <Link
                  key={menu.id}
                  to="/"
                  state={{ section: menu.id }}
                  onClick={close}
                >
                  {menu.label}
                </Link>
              ) : (
                <SectionLink
                  key={menu.id}
                  href={`#${menu.id}`}
                  aria-current={active === menu.id ? 'location' : undefined}
                  onNavigate={close}
                >
                  {menu.label}
                </SectionLink>
              ),
            )}
          </nav>
          <span className="edition">{siteData.edition}</span>
        </div>
      </div>
    </Root>
  );
}
