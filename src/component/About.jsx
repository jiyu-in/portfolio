import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(228 228 228);
    overflow: hidden;
`;
const GridBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
`;

const GradientOverlay = styled.div`
  background-color: black;
  width: 100%;
  height: 0;
  z-index: 10;
  pointer-events: none;
  &:after{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
  }
`;


const CreditContent = styled.div`
    position: absolute;
    top: 50%;
    left:50%;
    display: inline-flex;
    flex-direction: column;
    width: 80%;
    transform: rotateX(15deg) translate(-50%, -50%);
    transform-origin: center center;
    will-change: transform;
    z-index: 20;
    color: #fff;
    /* backdrop-filter: blur(10px); */
`;

const TextLine = styled.p`
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  color: #d1d1d1;
`;
const TitleTextLine = styled(TextLine)`
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;

const CopyrightLine = styled(TextLine)`
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #777;
`;


const Linkstyled = styled.a`
    position: relative;
    max-width: 480px;
    background: #ffffff0d;
    color: #fff;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    backdrop-filter: blur(4px);
    margin: 2rem auto;
    padding: 0.5rem 3rem;
`;

const Dashed = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    border: 2px dashed #a7df00;
    box-shadow: 0 0 10px 180px #1717179c;
`;

const Cuadrado = styled.div`
    width: 7px;
    height: 7px;
    position: absolute;
    &.cuad1{top: -10px; left: -5px; }
    &.cuad2{top: -10px; right: 0px;}
    &.cuad3{bottom: 4px; left: -5px; }
    &.cuad4{bottom: 4px; right: 0px; }
`;


const About = () => {
    const rootRef = useRef(null);
    const gadientRef = useRef(null);
    const creditsRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(
        gadientRef.current,
        { opacity: 0, height:0, filter:'blur(120px)'},
        {
          opacity: 1,
          height:"100vh",
          filter:'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top center",
            end:"bottom bottom",
            scrub:true,
            ease: 'power2.inOut',
            duration:2,
          },
        }
      );
    //   gsap.fromTo(creditsRef.current, 
    //     {y: "0%",},
    //     {
    //     y: "50%",
    //     ease: 'power2.inOut',
    //     scrollTrigger: {
    //       trigger: creditsRef.current,
    //       start: "top center+=200",
    //       end: "+=2000",
    //       scrub: true,
    //     },
    //   });
    }, []);
    return (
    <Wrapper ref={rootRef}>
        <GradientOverlay ref={gadientRef} />
        <GridBackground/>
        <CreditContent ref={creditsRef}>
            <TitleTextLine>Thank you for staying with me until the end.</TitleTextLine>
            <TextLine>With expertise in creative UI/UX design and web publishing, I deliver user-centered and innovative web experiences.</TextLine>
            <Linkstyled href="https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df" target="_blank">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Cuadrado key={index} className={`cuad${index+1}`}>+</Cuadrado>
                ))}
                Notion 
            </Linkstyled>
            <CopyrightLine>© 2025. All rights reserved</CopyrightLine>
        </CreditContent>
    </Wrapper>
  );
};

export default About;
