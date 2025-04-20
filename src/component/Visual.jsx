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
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 1px;
  padding: 40vh 0 4rem 0;
  @media (max-width: 786px) {
    font-size: 4rem;
  }
`;

const WrapBox = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
const TextBox = styled.ul`
  display: flex;
  font-size: 0.85rem;
  white-space:nowrap;
  animation: ${textLoop} 16s linear infinite; 
  & li{
    padding: 0 4rem;
    list-style: none;
  }
  @media (max-width: 786px) {
    & li{
      padding: 0 1rem;
    }
  }
`;

const SloganText = styled.div`
  position: absolute;
  left: 50%;
  bottom:10%;
  transform: translate(-50%, 0);
  width: 80%;
  max-width: 1440px;
  min-width: 320px;
  text-align: center;
  word-break: keep-all;
  & p{
    margin: 0;
    font-size: 0.875rem;
    letter-spacing: -0.54px;
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

  return (
    <Root>
      <Spiral3D/>
      <TitleBox ref={titleRef}>
        Portfolio
      </TitleBox>
      <WrapBox>
        <TextBox ref={textRef}>
          <li>Figma</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>HTML&CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>SCSS</li>
          <li>GitHub</li>
        </TextBox>
      </WrapBox>
      <SloganText ref={sloganRef}>
        <p>사용자 경험을 기획하고 디자인하며 퍼블리싱으로 웹 상에서 동적으로 보여지는 화면을 구현하며 새로운 컨텐츠를 만들어내는 일을 좋아합니다.</p>
        <p>이제는 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는 데 더욱 집중하고 있습니다.</p>
      </SloganText>
    </Root>
  );
};

export default Visual;
