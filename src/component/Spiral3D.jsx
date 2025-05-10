import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Root = styled.div`
    position: absolute;
    left: 50%;
    top:25%;
    transform: translateX(-50%);
    /* margin-top: 40%; */
    z-index: -1;
`;

const Wrapper = styled.div`
    perspective: 1000px;
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(15deg);
    width: 400px;
    height: 400px;
    position: relative;
    @media (max-width: 480px) {
        width: 280px;
        height: 280px;
    }
`;
const Segment = styled.div`
    position: absolute;
    width: 280px;
    height: 80px;
    left: 30px;
    top: ${(props) => props.top}px;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(199, 199, 199, 0.6), rgba(160, 160, 160, 0.3));
    box-shadow: inset -4px -4px 10px rgba(100, 100, 100, 0.2),
        inset 4px 4px 10px rgba(195, 195, 195, 0.1); 
    opacity: ${(props) => 1 - props.index * 0.1};
    backdrop-filter: blur(26px);
    transform: rotateY(${props => props.index * 20}deg) translateZ(${props => props.index * 6}px);
    @media (max-width: 480px) {
        width: 200px;
        height: 50px;
    }
`;

const Spiral3D = () => {
    const segmentsRef = useRef([]);
    const wrapperRef = useRef();
    const segmentCount = 12;

    useEffect(() => {

        const autoRotate = gsap.to(segmentsRef.current, {
            rotateY: (i) => `+=${360 + i * 10}`, 
            z: (i) => Math.sin(i * 0.5) * 50,
            duration: 6,
            ease: 'none',
            repeat: -1,
        });

        const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 20%',
            end: 'bottom center',
            scrub: true,
        },
    });

        segmentsRef.current.forEach((el, i) => {
        const initialRotate = i * 18;
        const initialZ = i * 6;

        // 초기 상태 설정
        gsap.set(el, {
            rotateY: initialRotate,
            z: initialZ,
            y: 0,
            });
        });

      // 1. 스크롤 내려가며 순차적으로 펼치기
        timeline.to(segmentsRef.current, {
        opacity: 1,
        rotateY: 0,
        z: 0,
        ease: 'power2.out',
        stagger: 0.05, // 순차 애니메이션
        }, 0);

      // 2. 행 형태로 펼쳐지도록 Y값 이동
        timeline.to(segmentsRef.current, {
            opacity: 0.7,
            y: (i) => i * 100,
            ease: 'power2.out',
            stagger: 0.05,
        }, '<'); // 직전 애니메이션과 동시에 시작

      // 3. 스크롤 끝나면 다시 Spiral로 복귀
        timeline.to(segmentsRef.current, {
        rotateY: (i) => i * 18,
        z: (i) => i * 6,
        y: 0,
        ease: 'power2.inOut',
        stagger: 0.05,
      }, '+=0.3'); // 잠깐 쉬고 복귀
    }, []);

    return (
        <Root>
            <Wrapper>
            {Array.from({ length: segmentCount }).map((_, i) => (
                <Segment 
                    key={i}
                    index={i}
                    top={i * 10}
                    ref={(el) => (segmentsRef.current[i] = el)}
                />
            ))}
            </Wrapper>
        </Root>
    );
};

export default Spiral3D;
