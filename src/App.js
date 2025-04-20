import React from "react";
import './App.css';
import ScrollFadeIn from './component/ScrollFadeIn';
import Clock from "./component/Clock";
import Visual from "./component/Visual";
import styled from 'styled-components';
import HorizontalScrollSection from "./component/HorizontalScrollSection";
import About from "./component/About";

const Section = styled.div`
  /* height: 100vh; */
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <Clock/>
      <Section style={{height:'100vh'}}> 
        <Visual/>
      </Section>
      <Section style={{minHeight:'100vh'}}>
        <HorizontalScrollSection/>
      </Section>
      <Section>
        <About/>
      </Section>
    </div>
  );
}

export default App;
