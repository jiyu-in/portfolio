import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Overview from "./Overview";
import { projectData } from "../projects/data/projectData";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const ScrollContainer = styled.div`
    display: flex;
    height: 100%;
    width: fit-content;
    padding: 0 6%;
    box-sizing: border-box;
`;

const Card = styled.div`
    min-width: 80vw;
    height: 75%;
    margin: auto 2vw;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(16px);
`;

const HorizontalScrollSection = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const scrollContent = scrollRef.current;
        if (!container || !scrollContent) return;

        const totalScrollWidth = scrollContent.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollLength = totalScrollWidth - viewportWidth;

        const ctx = gsap.context(() => {
        gsap.to(scrollContent, {
            x: -scrollLength,
            ease: "none",
            scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                // 필요하다면 여기서 activeIndex 계산 로직 유지 가능
                // const cardWidth = totalScrollWidth / projectData.length;
                // const scrollX = self.progress * totalScrollWidth;
                // const index = Math.min(
                //   projectData.length - 1,
                //   Math.round(scrollX / cardWidth)
                // );
                // setActiveIndex(index);
            },
            },
        });
    }, container);

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        gsap.to(containerRef.current, {
        backgroundColor: "rgba(160, 160, 160, 0.3)",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        });
    }, []);

    return (
    <Wrapper ref={containerRef}>
        <ScrollContainer ref={scrollRef}>
            {/* projectData.map(...) 으로 Card 컴포넌트를 렌더링하고, Overview 컴포넌트도 포함 */}
            {/* {projectData.map((project) => (
            <Card key={project.id}>
                <Project
                category={project.category}
                title={project.title}
                img={project.img}
                url={project.url}
                />
            </Card>
            ))} */}
            <Overview />
        </ScrollContainer>
        </Wrapper>
    );
};

export default HorizontalScrollSection;