import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Root = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;
const MaskBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: radial-gradient(#5d5d5d 1px, #5d5d5d, #333 2px);
    background-size: 20px 20px;
    mask: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 0;
    &:hover{
        background: none;
        transition: background 3s ;
    }
`;

const BoxStyled = styled.div`
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: flex;
    flex-direction: column;
    gap:8px;
    /* mix-blend-mode: difference; */
    color:#fff;
    padding:24px;
    & p{
        color:#fff;
    }
`;

const Category = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap:6px;
    list-style: none;
    margin: 0;
    padding: 0;
    & li{
        font-size: 0.75em;
        font-weight: 400;
        letter-spacing: -0.45px;
        word-break: keep-all;
    }
`;

const Title = styled.div`
    text-align: left;
    & p{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        font-family:  "Gothic A1", sans-serif ;
    }
`;

const ButtonStyled = styled.a`
    position: absolute;
    right: 40px;
    bottom: 40px;
    background: transparent;
    padding:0.75rem 0.5rem;
    font-size: 0.75rem;
    color:#131313;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: -0.28px;
    border: 0 none;
    background-color: #fff;
    backdrop-filter: blur(4px);
    z-index: 9999;
`;


const Project = ({category, title, img, url}) => {
    const imgboxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imgboxRef.current,
            { 
                width: "80%",
                height: "80%",
            },
            {
                width: "100%",
                height: "100%",
                duration: 2,
                delay: 0.6,
            scrollTrigger: {
                trigger: imgboxRef.current,
                start: "center 80%",
                end: "center 20%",
                scrub:1.5,
                // ease: "power2.out",
                ease: "back.out(4)",
                // markers:true,
            },
            });
    }, []);

    return (
        <Root ref={imgboxRef} bg={img}>
            {/* <MaskBg/> */}
            <BoxStyled>
                <Category>
                    {category.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                </Category>
                <Title><p>{title}</p></Title>
            </BoxStyled>
            <ButtonStyled target="_blank" href={url}>Learn more</ButtonStyled>
        </Root>
    );
};

export default Project;
