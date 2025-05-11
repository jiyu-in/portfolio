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
        <About/>
      </SectionMain>
    </div>
  );
}

export default Main;
