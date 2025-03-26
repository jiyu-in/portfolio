import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { FlexCenter, GridBackground, TitleBox, TitleText, SubText } from '../style/Styled';
import Project from "./Project_backup";

const Root = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrap = styled(FlexCenter)`
    flex-direction: column;
    @media (max-width: 640px) {
        padding:0 32px;
    }
`;

const TitleTextStyled = styled(TitleText)`
  font-size: 5rem;
  
`;

const SubTextStyled = styled(SubText)`
  color:#fff;
  font-size: 2rem;
  
`;


function Portfolio() {
      const ref = useRef(null);
      const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 70%", "start 30%"], 
      }); 
      const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
      const scale = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [2, 1.5, 1, 1]);

  
  return (
    <Root>
      <Wrap>
        <GridBackground/>
        <TitleBox ref={ref}>
          <TitleTextStyled
              style={{ opacity, scale }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} 
          >
            Design + Publishing
            {/* → */}
          </TitleTextStyled>
          <SubTextStyled  
            style={{ opacity }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} >
                실력으로 쌓은 중요 프로젝트를 소개합니다.
          </SubTextStyled>
        </TitleBox>
        <Project />
      </Wrap>
    </Root>
  );
}

export default Portfolio;
