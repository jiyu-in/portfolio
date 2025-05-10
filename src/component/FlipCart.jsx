// FlipCard.jsx
import React from "react";
import styled, { keyframes }  from "styled-components";
import { ReactComponent as CursorIcon } from "../assets/CursorIcon.svg";
import { ReactComponent as CursorWhiteIcon } from "../assets/CursorWhiteIcon.svg";

const upDown = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(6px); }
    100% { transform: translateY(0); }
`;

const CardContainer = styled.div`
    perspective: 1000px;
    width: 100%;
    max-width: 1440px;
    min-width: 320px;
    height: 100%;
    min-height: 320px;
`;

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${CardContainer}:hover & {
        transform: rotateY(180deg);
    }
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    padding: 2rem 2rem;
    backface-visibility: hidden;
    border-radius: 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    overflow-y: auto;
    color: #333;
    letter-spacing: -0.54px;
    white-space: pre-line;
    word-break: keep-all;
    box-sizing: border-box;
    & > p b{
        display: inline-block;
        margin-bottom: 1rem;
    }
    & svg{
        width: 14px;
        transform-style: preserve-3d;
        animation: ${upDown} 1s ease-in-out infinite;
        margin-right: 6px;
    }
`;

const CardFront = styled(CardFace)`
    background: #222;
    color:#fff;
    font-size: 0.938rem;
    line-height: 1.7;
`;

const CardBack = styled(CardFace)`
    transform: rotateY(180deg);
    background: #7f9fff;
    font-size: 0.875rem;
    line-height: 1.5;
`;

const HoverText = styled.div`
    font-size: 0.75rem;
    margin-left: auto;
`;

const FlipCard = () => {
    return (
        <CardContainer>
        <CardInner>
            <CardFront>
            <p><b>접근성과 효율성을 고려한 웹사이트 구축 과정을 단계별로 소개합니다.</b>
            웹사이트 구축할 때 타깃과 목표 설정부터 시작해 벤치마킹을 통해 방향성을 잡습니다. 그리고 메뉴 구성과 사이트맵, 스토리보드를 바탕으로 구조를 설계하는 방식으로 진행했습니다.
            디자인은 컬러와 타이포그래피 등을 정의하여 디자인 가이드를 설정하고 컨셉을 구체화하여 작업을 합니다.
            웹표준과 접근성을 고려한 시맨틱 마크업과 스타일 가이드를 적용한 후 마지막에는 컴포넌트화를 통해 코드의 재사용성과 유지보수 효율성을 높였습니다.</p>
            <HoverText><CursorWhiteIcon/>마우스를 올려보세요</HoverText>
            </CardFront>
            <CardBack>
            <p><b>A step-by-step look into my approach to building accessible and efficient websites.</b>
            When building a website, I start by defining the target audience and project goals, then establish the overall direction through benchmarking.
            Next, I design the structure based on menu configuration, sitemaps, and storyboards.
            For the design phase, I set up a style guide by defining colors and typography to refine the concept.
            After applying semantic markup and style guidelines with web standards and accessibility in mind,
            I finish by componentizing the code to enhance reusability and maintainability.</p>
            {/* <p className="lang">
                在进行网站建设时，我首先设定目标受众和项目目标，并通过基准分析确定整体方向。接着，根据菜单布局、站点地图和故事板设计网站结构。设计阶段，我通过定义颜色和排版等要素来制定设计规范并细化概念。在遵循网页标准和可访问性要求的前提下，应用语义化标记和样式指导，最后通过组件化提升代码的复用性和维护效率。
                </p> */}
            {/* <HoverText><CursorIcon/>Hover to see English</HoverText> */}
            </CardBack>
        </CardInner>
        </CardContainer>
    );
};

export default FlipCard;
