import React from "react";
import styled, { keyframes } from "styled-components";


const List = styled.div`
    min-width: 80vw;
    height: 75%;
    margin: auto 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap:2rem; */
`;

const ListTitle = styled.div`
    font-family: "Gothic A1", sans-serif;
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 900;
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
    & li{
        position: relative;
        padding-left: 12px;
        margin-bottom: 6px;
        &:before{
            content:"-";
            position: absolute;
            left: 0;
            top:0;
            /* display: block;
            width: 3px;
            height: 3px;
            background-color: #7f9fff;
            border:1px solid #222;
            border-radius: 2px; */
        }
    }
`;

const Dldiv = styled.div`
    & dl{
        & dt{
            font-size:0.813rem;
            font-weight: 300;
            display: inline-block;
            margin-bottom: 0.5rem;
            padding: 0px 0.25rem;
        }
        & dd{
            font-size:clamp(0.938rem, 2.5vw, 1.125rem);
            font-weight: 500;
        }
    }
`;
const Paragraph = styled.p`
    white-space: pre-wrap;
    font-size:clamp(0.938rem, 2.5vw, 1.125rem);
    line-height: 1.25;
    & span{
            background-color: #f4cfb8;
            padding: 0px 0.25rem;
            font-weight: 500;
    }
`;
const ParagraphSec = styled(Paragraph)`
    & span{
            background-color: #b9cbff;
           
    }
`;

const Overview = () => {
    const process = [
        { title: "About me",desc:
            <Dldiv>
                <dl><dt>Name</dt><dd>Jiyu</dd></dl>
                <dl><dt>Residence</dt><dd>Seoul</dd></dl>
                <dl><dt>Education</dt>
                <dd>Bachelor’s Degree, Shenyang Normal University</dd></dl>
                <dl><dt>Professional Experience</dt>
                <dd>Over 9 years and 5 months of experience in UI/UX design and web publishing.</dd></dl>
                <dl><dt>Skill</dt>
                    <dd>- UI/UX Design, Design System <br/>  
                        - HTML5, CSS3, JavaScript  <br/>
                        - Web Accessibility, Semantic Markup<br/>  
                        - Adobe XD, Figma, Zeplin  
                        </dd>
                </dl>
            </Dldiv>
        },
        { title: "Career", 
            desc:
            <Paragraph><span>UI/UX Designer</span> and  <span>Web Publisher</span> with experience in tools like Photoshop, llustrator, and <span>Figma</span>.
            I specialize in UI&UX and visual design, as well as standard HTML and CSS coding.
            Over the past three years, I've focused on front-end development using the <span>React framework</span>.
            I'm also proficient with <span>prototyping tools</span> such as Zeplin and have worked on <span>responsive web</span> and <span>mobile applications</span>.</Paragraph> },
        { title: "Future Goals & Role", 
            desc:
            <ParagraphSec>After joining the company, I aim to go beyond simple <span>UI design</span> and focus on optimizing the <span>user experience</span> through comprehensive <span>UI/UX design</span>.
            I also look forward to leading <span>projects</span> proactively and contributing to the team’s success by fostering effective <span>collaboration</span>.
            My goal is to leverage the latest <span>technologies</span> to improve <span>user experiences</span> and create innovative <span>digital content</span> that captures the interest of participants.</ParagraphSec> },
    ];

    return (
    <>
        {process.map((item, index) => (
            <List key={index}>
                <ListTitle index={index}>{item.title}</ListTitle>
                <ListContents>
                    <DescBoxStyle>{item.desc}</DescBoxStyle>
                </ListContents>
            </List>
        ))}
    </>
  );
};

export default Overview;
