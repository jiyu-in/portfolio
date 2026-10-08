import React from 'react';
import SectionLink from './SectionLink';
import styled, { keyframes } from 'styled-components';

const reveal = keyframes`from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); }`;
const Root = styled.section`
  min-height: calc(95vh - 72px); min-height: calc(95svh - 72px); display: flex; flex-direction: column; justify-content: space-between;
  padding-top: clamp(48px, 7vh, 100px); padding-bottom: 32px;
  .eyebrow { font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
  h1 { margin-top: 30px; font-size: clamp(72px, 12vw, 170px); font-weight: 900; line-height: .88; letter-spacing: -.075em; animation: ${reveal} .9s ease-out both; }
  h1 span { display: block; }
  h1 .second { padding-left: 17%; }
  h1 i { font-style: normal; font-weight: 400; color: var(--accent); }
  .intro { display: grid; grid-template-columns: 1fr 1fr; margin-top: 48px; }
  .intro p { grid-column: 2; max-width: 400px; font-size: 18px; word-break: keep-all; }
  .edition { margin-top: 28px; font-size: 12px; letter-spacing: 1.2px; color: var(--text-muted); }
  .bottom { display: flex; justify-content: space-between; align-items: end; gap: 24px; border-top: 1px solid var(--line); padding-top: 20px; margin-top: 60px; font-size: 12px; letter-spacing: .5px; }
  .disciplines { color: var(--text-muted); }
  .scroll { display: flex; gap: 20px; align-items: center; transition: color .5s; }
  .compact-label { display: none; }
  .scroll:hover { color: var(--accent-text); }
  @media (max-width: 767px) {
    min-height: calc(90vh - 72px); min-height: calc(90svh - 72px); padding-top: 56px; padding-bottom: 24px;
    h1 { font-size: clamp(68px, 17vw, 128px); margin-top: 48px; }
    h1 .second { padding-left: 8%; }
    .intro { display: block; margin-top: 40px; }
    .intro p { font-size: 16px; max-width: 280px; }
    .bottom { margin-top: 56px; align-items: start; }
    .disciplines { max-width: 190px; line-height: 1.9; }
    .scroll { gap: 10px; min-height: 44px; white-space: nowrap; align-self: center; }
    .full-label { display: none; }
    .compact-label { display: inline; }
  }
`;
export default function Hero() {
  return <Root id="hero" className="container" aria-labelledby="hero-title">
    <div><p className="eyebrow">UI/UX DESIGNER &amp; PUBLISHER</p>
      <h1 id="hero-title"><span>DESIGN</span><span className="second">&amp; BUILD<i> /</i></span></h1>
      <div className="intro"><p>디자인과 구현 사이의 간극을 줄이는 일을 합니다.</p></div>
      <p className="edition">PORTFOLIO 2026</p>
    </div>
    <div className="bottom"><p className="disciplines">UI/UX / Web Design / Publishing / React</p><SectionLink className="scroll" href="#work" aria-label="Selected Works로 이동"><span className="full-label">SCROLL TO EXPLORE</span><span className="compact-label">SCROLL</span> <span aria-hidden="true">↓</span></SectionLink></div>
  </Root>;
}
