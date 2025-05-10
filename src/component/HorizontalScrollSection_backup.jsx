import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Project from "../projects/Project";
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

const IndicatorWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0;
    z-index: 20;
`;

const IndicatorDot = styled.div`
    width: 16px;
    height: ${({ active }) => (active ? "16px" : "1px")};
    border: 1px solid #131313;
    transition: all 0.3s;
`;

const HorizontalScrollSection = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useLayoutEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;

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
                const cardWidth = totalScrollWidth / projectData.length;
                const scrollX = self.progress * totalScrollWidth;
                const index = Math.min(
                projectData.length - 1,
                Math.round(scrollX / cardWidth)
                );
                setActiveIndex(index);
            },
            },
        });
        }, containerRef);

    return () => ctx.revert();
    }, []);

    useEffect(() => {
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

    useEffect(() => {
        const indicator = document.querySelector("#indicator");
        const fadeInOut = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=700% top",
        //   end: "+=700%",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const opacity = progress < 0.01 || progress > 0.95 ? 0 : 1;
            gsap.to(indicator, {
            opacity,
            duration: 0.3,
            ease: "power2.out",
            });
        },
        });
        return () => fadeInOut.kill();
    }, []);

    return (
    <>
        <Wrapper ref={containerRef}>
            <ScrollContainer ref={scrollRef}>
            {projectData.map((project, idx) => (
                <Card key={project.id}>
                <Project
                    category={project.category}
                    title={project.title}
                    img={project.img}
                    url={project.url}
                />
                </Card>
            ))}
            </ScrollContainer>
        </Wrapper>

        <IndicatorWrapper id="indicator">
            {projectData.map((_, i) => (
            <IndicatorDot key={i} active={i === activeIndex} />
            ))}
        </IndicatorWrapper>
        </>
    );
};

export default HorizontalScrollSection;
