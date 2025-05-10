import React from "react";
import Visual from "./component/Visual";
import styled  from 'styled-components';
import HorizontalScrollSection from "./component/HorizontalScrollSection";
import About from "./component/About";
import { ReactComponent as Waves } from "./assets/WavesOpacity.svg";
import Header from "./component/Header";
import WorkProcess from "./component/WorkProcess";
import BgEmpty from "./assets/BgEmpty.png";

const Section = styled.div`
  /* height: 100vh; */
  width: 100%;
`;
const SectionMain = styled(Section)`
  height: 100vh;
  position: relative;
`;
const SectionBoard = styled(Section)`
    min-height:100vh;
    display:flex;
    align-items:center;
    background-image: url(${BgEmpty});
    inset: 0px;
    background-repeat: repeat;
    background-position: left top;
    background-size: 8px;
`;
const BgDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: 999;
    & svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 107px;
    };
    & .shape-fill {
      fill:#7f9fff;
    };
`;

function Main() {
  return (
    <div>
      <Header/>
      <SectionMain>
        <Visual/>
      </SectionMain>
      <Section style={{minHeight:'100vh'}}>
        <HorizontalScrollSection/>
      </Section>
      {/* <SectionBoard>
        <WorkProcess/>
      </SectionBoard> */}
      <SectionMain>
        {/* <BgDiv><Waves/></BgDiv> */}
        <About/>
      </SectionMain>
    </div>
  );
}

export default Main;
