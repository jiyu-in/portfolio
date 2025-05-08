import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled, { keyframes } from 'styled-components';
import { ReactComponent as DiagramCapsule } from "../assets/DiagramCapsule.svg";
import { ReactComponent as DiagramParallelogram } from "../assets/DiagramParallelogram.svg";
import { ReactComponent as DiagramRhombus } from "../assets/DiagramRhombus.svg";
import { ReactComponent as DiagramSquare } from "../assets/DiagramSquare.svg";
import { ReactComponent as DiagramWavyrectangle } from "../assets/DiagramWavyrectangle.svg";
import FlipCard from "./FlipCart";

const shake = keyframes`
    0% { transform: rotateZ(0); }
    20% { transform: rotateZ(5deg); }
    40% { transform: rotateZ(-5deg); }
    60% { transform: rotateZ(5deg); }
    80% { transform: rotateZ(-5deg); }
    100% { transform: rotateZ(0); }
`;
const delays = ["0s", "3s", "6s", "9s", "12s"];

const ListObject = styled.div`
    & svg{
        @media (max-width: 786px) {
            width:64px;
        }
    }
`;

const Root = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:4rem 0;
`;    

const Wrapper = styled.div`
    width: 80%;
    max-width: 1440px;
    min-width: 320px;
`;

const Title = styled.p`
    font-size: 3rem;
    font-weight: 900;
    font-family: "Gothic A1", sans-serif;
    margin: 0;
    @media (max-width: 786px) {
        font-size: 2rem;
    }
`;
const Subtitle = styled.p`
    font-size: 1rem;
    font-family: "Gothic A1", sans-serif;
    margin:0 0 5rem 0;
    @media (max-width: 786px) {
        margin:0 0 2rem 0;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 54% 40%;
    gap: 6%;
    box-sizing: border-box;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

const GridItem = styled.div`
    display: flex; 
`;
const GridItemLeft = styled(GridItem)`
    flex-direction: column;
    gap:2rem;
`;

const List = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
    &:hover, &:focus{
        cursor: pointer;
        ${ListObject}{
            transform-origin: center bottom;
            animation: ${shake} 0.5s ease-in-out infinite;
            /* animation-delay: ${({ index }) => delays[index % delays.length]}; */
        }
    }
`;

const ListContents = styled.div`
    font-size: 0.938rem;
    line-height: 1.2;
    & span{
        display: inline-block;
        margin-bottom: 1rem;
        font-weight: 700;
    }
`;

const DescBoxStyle = styled.div`
    letter-spacing: -0.54px;
    & ul{
        list-style: none;
        margin: 0;
        padding: 0;
        & li{
            position: relative;
            padding-left: 12px;
            margin-bottom: 6px;
            &:before{
                content:"";
                position: absolute;
                left: 0;
                top:5px;
                display: block;
                width: 3px;
                height: 3px;
                background-color: #7f9fff;
                border:1px solid #222;
                border-radius: 2px;
            }
        }
    }
`;
const Explanation = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #222;
    color:#ffffff;
    font-size: 0.938rem;
    line-height: 1.7;
    padding:1.5rem 2rem;
    border-radius: 25px;
    white-space: pre-line;
    word-break: keep-all;
    box-sizing: border-box;
    & p.lang{
        font-size: 0.75rem;
        letter-spacing: -0.54px;
        color:#7f9fff;
        line-height: 1.5;
        margin-top: 2rem;
        @media (max-width: 940px) {
            display: none;
        }
    }
`;

gsap.registerPlugin(ScrollTrigger);

function WorkProcess() {
    const titleRef = useRef(null);
    const exRef = useRef(null);
    const listRef = useRef(null);
    
    useEffect(() => {

    gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: titleRef.current,
            start: "top center",
            scrub:true,
        },
        }
    );
    gsap.fromTo(
        exRef.current,
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: exRef.current,
                start: "top 80%",
                end: "85% 50%",
                scrub: true,
                // markers: true,
            },
        }
    );

    const items = gsap.utils.toArray(".list-item");
    items.forEach((item, i) => {
        gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
            },
        }
        );
    });

    }, []);

    const process = [
        { svg: <DiagramCapsule/>, title: "기획설계", 
            desc:
            <ul>
                <li>목표와 타깃을 정하여 기대효과를 파악</li>
                <li>벤치마킹 사이트 조사</li>
            </ul> },
        { svg: <DiagramSquare/>, title: "사이트 구조설계", 
            desc:
            <ul>
                <li>메뉴 구성, 사이트맵 작성 </li>
                <li>스토리보드 : 와이터프레임 + 기능설명 문서</li>
            </ul> },
        { svg: <DiagramWavyrectangle/>, title: "디자인 컨셉", 
            desc:
            <ul>
                <li>컬러, 폰트, 등 디자인 컨셉 도출 및 스타일 가이드 정의 </li>
                <li>디자인 가이드 제작 </li>
            </ul> },
        { svg: <DiagramParallelogram/>, title: "퍼블 기준을 정립", 
            desc:
            <ul>
            <li>웹표준, 웹 접근성을 고려한 마크업 및 시맨틱 태그 적용</li>
            <li>CSS 스타일링, JS인터렉션 구현 </li>
        </ul> },
        { svg: <DiagramRhombus/>, title: "퍼블리싱 코드 정리 및 컨포넌트화 ",desc:"" },
    ];

    return (
        <Root>
            <Wrapper>
            <Title ref={titleRef}>How I Work</Title>
            <Subtitle ref={titleRef}>
                A step-by-step look into my approach to building accessible and efficient websites.
            </Subtitle>
            <GridContainer>
                <GridItemLeft>
                    {process.map((item, index) => (
                        <List key={index} className="list-item">
                            <ListObject index={index}>{item.svg}</ListObject>
                            <ListContents>
                                <span>{item.title}</span>
                                <DescBoxStyle>{item.desc}</DescBoxStyle>
                            </ListContents>
                        </List>
                    ))}
                </GridItemLeft>
                <GridItem>
                    <FlipCard/>
                </GridItem>
            </GridContainer>
            </Wrapper>
        </Root>
    );
}

export default WorkProcess;
