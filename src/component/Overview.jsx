import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import ShapesCone from "../assets/ShapesCone.png";
import ShapesHelix from "../assets/ShapesHelix.png";
import ShapesIcosahedron from "../assets/ShapesIcosahedron.png";

gsap.registerPlugin(ScrollTrigger);

const List = styled.div`
    position: relative;
    min-width: 80vw;
    height: 75%;
    margin: auto 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ListTitle = styled.div`
    font-family: "Gothic A1", sans-serif;
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 900;
    text-shadow: 2px 2px 0 #fff;
`;

const ListContents = styled.div`
    width: 70%;
    font-size: 0.938rem;
    line-height: 1.2;
    @media (max-width: 786px) {
        width: 100%;
    }
`;

const DescBoxStyle = styled.div`
    letter-spacing: -0.54px;
`;

const ListStyled = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
        position: relative;
        padding-left: 12px;
        margin-bottom: 6px;
        &:before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;

const Dldiv = styled.div`
    & dl {
        & dt {
            font-size: 0.813rem;
            font-weight: 300;
            display: inline-block;
            margin-bottom: 0.5rem;
            padding: 0px 0.25rem;
        }
        & dd {
            font-size: clamp(0.938rem, 2.5vw, 1.125rem);
            font-weight: 500;
        }
    }
`;

const Paragraph = styled.p`
    white-space: pre-wrap;
    font-size: clamp(0.938rem, 2.5vw, 1.125rem);
    line-height: 1.25;
    & span {
        background-color: #f4cfb8;
        padding: 0px 0.25rem;
        font-weight: 500;
    }
`;

const ParagraphSec = styled(Paragraph)`
    & span {
        background-color: #b9cbff;
    }
`;

const Figure = styled.img`
    position: absolute;
    object-fit: contain;
    width: 25vw;
    z-index: -1;
    @media (max-width: 786px) {
        width: 25vh;
    }
`;

const AboutImage = styled(Figure)`
    right: 2%;
    top: 1%;
`;

const CareerImage = styled(Figure)`
    right: 4%;
    bottom: 2%;
`;

const GoalsImage = styled(Figure)`
    left: 10px;
    top: 10px;
`;

const Overview = () => {
    const figureRefs = useRef([]);
    const listRefs = useRef([]);

    useLayoutEffect(() => {
        figureRefs.current.forEach((el, i) => {
            const triggerEl = listRefs.current[i];
            if (!el || !triggerEl) return;
    
            const mm = gsap.matchMedia();
    
            mm.add("(min-width: 768px)", () => {
                
                const tl = gsap.timeline();
    
                if (i === 0) {
                    tl.fromTo(el, { opacity: 0, x: 150, y: -100,  },
                        {
                            opacity: 1,  x: -50, y: 100, duration: 1,
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "top 50%",
                                end: "bottom 30%",
                                scrub: true,
                                ease: "power2.out",
                            }
                        });
                }
    
                if (i === 1) {
                    tl.fromTo(el, { rotate: 180, x: -100, y: -100, },
                        {
                            rotate: 0, x: 100, y: 100,  duration: 1.5,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "+=220%",
                                end: "+=280%",
                                scrub: true,
                            }
                        });
                }
    
                if (i === 2) {
                    tl.fromTo(el, { scale: 0.2,  y: -50 },
                        {
                            scale: 1, y: 50, duration: 1.5, 
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "+=320%",
                                end: "+=380%",
                                scrub: true,
                            },
                            onComplete: () => {
                                gsap.to(el, {
                                    y: 0,
                                    duration: 1,
                                    ease: "power2.out"
                                    });
                            }
                        });
                }
            });
    
            mm.add("(max-width: 767px)", () => {
                const tl = gsap.timeline();
    
                if (i === 0) {
                    tl.fromTo(el, { opacity: 0, x: 150, y: -100,},
                        {
                            opacity: 1,  x: -50, y: 100, duration: 1,
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "top 80%",
                                end: "bottom 40%",
                                scrub: true,
                            }
                        });
                }
    
                if (i === 1) {
                    tl.fromTo(el, { rotate: 90, x: 100, y: 100,  },
                        {
                            rotate: 0, x: -100, y: -100,  duration: 1.5,
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "+=80%",
                                end: "+=120%",
                                scrub: true,
                            }
                        });
                }
    
                if (i === 2) {
                    tl.fromTo(el, { scale: 1 },
                        {
                            scale: 0.3, duration: 1.5,
                            scrollTrigger: {
                                trigger: triggerEl,
                                start: "+=140%",
                                end: "+=180%",
                                scrub: true,
                            },
                            onComplete: () => {
                                gsap.to(el, {
                                    y: 0,
                                    duration: 1,
                                    ease: "power2.out"
                                    });
                            }
                        });
                }
            });
    
            return () => mm.revert(); 
        });
    }, []);

    const process = [
        {
            title: "About me",
            desc: (
                <Dldiv>
                    <dl><dt>Name</dt><dd>Jiyu</dd></dl>
                    <dl><dt>Residence</dt><dd>Seoul</dd></dl>
                    <dl><dt>Education</dt><dd>Bachelor’s Degree, Shenyang Normal University</dd></dl>
                    <dl><dt>Professional Experience</dt><dd>Over 9 years and 5 months of experience in UI/UX design and web publishing.</dd></dl>
                    <dl><dt>Skill</dt><dd>- UI/UX Design, Design System<br/>- HTML5, CSS3, JavaScript<br/>- Web Accessibility, Semantic Markup<br/>- Adobe XD, Figma, Zeplin</dd></dl>
                </Dldiv>
            ),
            fig: (refs, i) => <AboutImage ref={el => refs.current[i] = el} src={ShapesCone} />
        },
        {
            title: "Career",
            desc: (
                <Paragraph><span>UI/UX Designer</span> and <span>Web Publisher</span> with experience in tools like Photoshop, Illustrator, and <span>Figma</span>.
                I specialize in UI&UX and visual design, as well as standard HTML and CSS coding.
                Over the past three years, I've focused on front-end development using the <span>React framework</span>.
                I'm also proficient with <span>prototyping tools</span> such as Zeplin and have worked on <span>responsive web</span> and <span>mobile applications</span>.</Paragraph>
            ),
            fig: (refs, i) => <CareerImage ref={el => refs.current[i] = el} src={ShapesHelix} />
        },
        {
            title: "Future Goals & Role",
            desc: (
                <ParagraphSec>After joining the company, I aim to go beyond simple <span>UI design</span> and focus on optimizing the <span>user experience</span> through comprehensive <span>UI/UX design</span>.
                I also look forward to leading <span>projects</span> proactively and contributing to the team’s success by fostering effective <span>collaboration</span>.
                My goal is to leverage the latest <span>technologies</span> to improve <span>user experiences</span> and create innovative <span>digital content</span> that captures the interest of participants.</ParagraphSec>
            ),
            fig: (refs, i) => <GoalsImage ref={el => refs.current[i] = el} src={ShapesIcosahedron} />
        }
    ];

    return (
        <>
            {process.map((item, index) => (
                <List key={index} ref={(el) => listRefs.current[index] = el}>
                    <ListTitle>{item.title}</ListTitle>
                    <ListContents>
                        <DescBoxStyle>{item.desc}</DescBoxStyle>
                    </ListContents>
                    {item.fig(figureRefs, index)}
                </List>
            ))}
        </>
    );
};

export default Overview;
