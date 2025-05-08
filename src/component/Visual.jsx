import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled, {keyframes} from 'styled-components';
import Spiral3D from "./Spiral3D";


const textLoop = keyframes`
  0% {
    transform : translate3d(50%, 0, 0);
  }
  100% {
    transform : translate3d(-100%, 0, 0);
  }
`;

const Root = styled.div`
  position: relative;
  height: 100%;
  & *{
    color: #131313;
  }
`;

const TitleBox = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 7.25rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  padding: 48vh 0 4rem 0;
  @media (max-width: 786px) {
    font-size: 3.75rem;
    padding-bottom: 1rem;
  }
`;

const SloganText = styled.div`
  width: 80%;
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.5;
  & p{
    margin: 0;
    font-size: 0.938rem;
    letter-spacing: -0.54px;
    @media (max-width: 786px) {
      font-size: 0.75rem;
    }
  }
`;
const WrapBox = styled.div`
  max-width: 100%;
  position: absolute;
  left: 50%;
  bottom:12%;
  transform: translate(-50%, 0); 
  overflow: hidden;
  background-color: #7f9fff;
`;
const TextBox = styled.ul`
  display: flex;
  font-size: 1rem;
  white-space:nowrap;
  animation: ${textLoop} 16s linear infinite; 
  cursor: pointer;
  will-change: transform;
  &:hover,
  &:focus-within {
    animation-play-state: paused;
  }
  & li{
    color:#222;
    padding: 0 4rem;
    list-style: none;
    &:hover,
    &:focus-within {
      background-color: #fff;
    }
  }
  @media (max-width: 786px) {
    & li{
      padding: 0 1rem;
    }
  }
`;



gsap.registerPlugin(ScrollTrigger);

const Visual = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const sloganRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      titleRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -40,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "20% top",
          scrub:true,
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%",
          scrub:true,
        },
      }
    );

  }, []);
  
  const skills = [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "HTML&CSS",
    "JavaScript",
    "React.js",
    "SCSS",
    "GitHub"
  ]

  return (
    <Root>
      <Spiral3D/>
      <TitleBox ref={titleRef}>
        Portfolio
      </TitleBox>
      <SloganText ref={sloganRef}>
        <p>사용자 경험을 기획하고 디자인하며 퍼블리싱으로 웹 상에서 동적으로 보여지는 화면을 구현하며 새로운 컨텐츠를 만들어내는 일을 좋아합니다.</p>
        <p>이제는 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는데 더욱 집중하고 있습니다.</p>
      </SloganText>
      <WrapBox>
        <TextBox ref={textRef}>
          {skills.concat(skills).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </TextBox>
      </WrapBox>
    </Root>
  );
};

export default Visual;
