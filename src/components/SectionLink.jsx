import React from 'react';

// Section anchors must not replace the HashRouter route fragment.
export default function SectionLink({ href, children, onNavigate, ...props }) {
  const navigate = event => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    if (onNavigate) onNavigate();
    target.scrollIntoView({ block: 'start' });
    if (href === '#main' || onNavigate) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  };
  return <a {...props} href={href} onClick={navigate}>{children}</a>;
}
