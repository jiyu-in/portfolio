// CucaScroll.jsx
import React, { useEffect, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styled from "styled-components";
import {Section, Contents, TitleStyle, SubTitleStyle, DescStyle, UlStyle} from './Styled';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Root = styled.div`
    position: relative;
    margin: 0;
    height: 300%;
    #theCucas {
        position: absolute;
        top: 0;
        left: 0;
        overflow: visible;
    }
    .cuca {
        visibility: hidden;
    }
`;


const GlobalStyle = createGlobalStyle`
    .gsap {
        text-align: right;
        margin: 10px 10px 0 0;
        color: green;
    }
    /* main {
        position: absolute;
        margin: 20%;
        max-width: 600px;
    }
    main p {
        font-size: calc(18px + 1vw);
        margin: 0 0 100px 0;
    } */
    /* #theCucas {
        position: absolute;
        top: 0;
        left: 0;
        overflow: visible;
    }
    .cuca {
        visibility: hidden;
    } */
`;

export default function ProjectFinance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let start = 'top top';
    let rotation = 0;

    const svgEl = sectionRef.current.querySelector('#theCucas');
    const legsLeft = sectionRef.current.querySelectorAll('.legsL');
    const legsRight = sectionRef.current.querySelectorAll('.legsR');

    gsap.set('.cuca', {
      autoAlpha: 1,
      x: -100,
      scale: 0.8,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgEl,
        pin: true,
        scrub: 0.6,
        start: () => start,
        end: '+=400%',
        markers:true,
        onUpdate: self => {
          rotation = self.direction === -1 ? 180 : 0;
        },
        onRefresh: () => {
          if (window.innerHeight < 600) {
            start = 'top top-=200';
          } else {
            start = 'top top';
          }
          ScrollTrigger.update();
        },
      },
    });

    tl.to('.cuca', {
      motionPath: {
        path:
          'M -100 100 Q 100 0 200 100 Q 300 300 350 100 Q 350 50 100 100 Q 350 250 400 0 C 500 200 550 150 750 50',
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 4,
      ease: 'none',
      onUpdate() {
        if (rotation) {
          this.targets().forEach(cuca =>
            gsap.set(cuca, {
              rotation: gsap.getProperty(cuca, 'rotation') + rotation,
            })
          );
        }
      },
    })
      .to(
        legsLeft,
        {
          rotation: 40,
          transformOrigin: '80% 10px',
          duration: 0.02,
          stagger: 0.005,
          repeat: 160,
          yoyo: true,
        },
        0.1
      )
      .to(
        legsRight,
        {
          rotation: -40,
          transformOrigin: '80% 10px',
          duration: 0.02,
          stagger: 0.005,
          repeat: 160,
          yoyo: true,
        },
        0.115
      );

      
    gsap.utils.toArray(sectionRef.current.querySelectorAll('span')).forEach(elem => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 30%',
        onEnter: () => gsap.set(elem, { color: '#a22525' }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <Root>
      {/* <GlobalStyle /> */}
      <Section ref={sectionRef}>
        <svg id="theCucas" viewBox="0 0 600 400">
          {/* <defs>
            <mask id="theMask">
              <path
                id="mask"
                d="M 270 250 C 150 200 100 50 300 50 Q 550 50 450 250 C 340 300 500 350 350 350 Q 50 350 270 250"
                fill="#fff"
                stroke="none"
              />
            </mask>
          </defs> */}
          <path
            id="mask"
            d="M 270 250 C 150 200 100 50 300 50 Q 550 50 450 250 C 340 300 500 350 350 350 Q 50 350 270 250"
            fill="#929292"
            stroke="none"
          />
          {/* <g className="cuca">
            <g id="legsR" stroke="#484848">
              <path
                className="legsR"
                d="M62.834 189.864l6.609 4.588c5.795 3.522-10.068 11.459-21.014 22.168-1.196.688-1.749.46-3.357.212.715.59 2.549 1.18 3.353.644 7.861-6.222 16.305-12.33 23.364-18.711 1.761-1.988 1.932-3.805-.11-5.381l-6.337-4.397-2.508.877z"
              />
            </g>
          </g> */}

          {/* <g mask="url(#theMask)">
            <g className="cuca cuca02">
            </g>
          </g> */}
        </svg>
      </Section>

        <Contents>
            <TitleStyle>대시보드</TitleStyle>
            <DescStyle>개인 자산 관리 대시보드는 기존 부동산 중개 서비스에서 확장된 자산관리 플랫폼으로, 기존 부동산 거래 수수료 외에도 대출중개, 보험, 투자 상품판매 등 새로운 수익원을 창출할 수있도록 고객이 부동산을 구매할 때 금융 서비스(주택담보대출, 전세대출, 신용대출 등)가 필요하므로, 원스톱 서비스를 제공합니다. 
                금융상품을 함께 제공하면 고객이 플랫폼에 머무는 시간이 늘어나고 재방문 충성도를 높일수있습니다.
                사용자가 부동산을 포함한 개인 자산을 효율적으로 관리할 수 있도록 설계, 금융 데이터를 직관적으로 제공하여 사용자들이 자신의 재무 상태를 쉽게 파악하고, 더 나은 재정적 결정을 내릴 수 있도록 설계했습니다.</DescStyle>

                <SubTitleStyle>대상 사용자 및 주요 목표</SubTitleStyle>

                <UlStyle>
                    <li>대상 사용자: 다방을 이용하는 일반 고객</li>
                    <li>주요 목표
                        <ul className="ulDepth">
                            <li>사용자가 자신의 자산을 한눈에 확인할 수 있도록 정보 제공</li>
                            <li> 대출, 투자, 지출 내역 등을 직관적으로 분석할 수 있는 대시보드 구성</li>
                            <li> 부동산 거래뿐만 아니라 자산관리 서비스까지 확장하는 연결성 제공</li>
                        </ul>
                    </li>
                </UlStyle>
                <SubTitleStyle>UX 설계 방향</SubTitleStyle>
                <UlStyle>
                    <li>
                        데이터 시각화 중심
                        <ul className="ulDepth">
                            <li> 사용자의 금융 데이터를 이해하기 쉽도록 그래프 및 비주얼 요소 활용</li>
                            <li>자산 분석, 지출 분석 등 차트 기반의 UI 구성으로 가독성 강화</li>
                            <li> 숫자 기반의 정보(예: KOSPI 지수, 순자산)를 강조하여 정보 전달력 극대화</li>
                        </ul>
                    </li>
                    <li>
                        사용자 친화적인 인터페이스
                        <ul className="ulDepth">
                            <li>핵심 정보(자산, 대출, 투자) 우선 배치로 빠른 정보 확인 가능</li>
                            <li>최근 거래 내역, 대출 현황 등을 그룹화하여 사용자의 목표 중심 설계</li>
                            <li>복잡한 금융 용어 없이 직관적인 아이콘과 색상으로 인사이트 제공</li>
                        </ul>
                    </li>
                    </UlStyle>

                <SubTitleStyle>부동산자산 연결 부동산 서치화면_2025 추가화면 작업중</SubTitleStyle>
                <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3a4ad521-a6e3-4995-a040-e7cf405d8698%2F%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF_%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_2025_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8.jpg/size/w=1420?exp=1744879467&sig=s9118VHr_6hIXcW3uqEeLmkndQ63atOe5-5n52HhUPA&id=1c07cdfc-3fd0-80dd-b876-c6e253d9cea7&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/>
                <SubTitleStyle>UI 디자인 접근법 </SubTitleStyle>
                <UlStyle>
                <li> 
                    다방 브랜드 컬러 유지
                        <ul className="ulDepth">
                            <li>기존 다방의 브랜드 컬러(블루 계열)를 활용하여 일관성 유지</li>
                            <li>신뢰감을 주는 금융 서비스 특성을 반영한 디자인 구성</li>
                        </ul>
                    </li>
                    <li>
                        모던하고 깔끔한 레이아웃
                        <ul className="ulDepth">
                            <li>사이드바를 활용한 명확한 내비게이션 구조</li>
                            <li>각 섹션을 카드 형태로 구분하여 가독성과 정보 접근성 향상</li>
                            <li>중요 데이터는 컬러 및 폰트 크기로 강조하여 정보 전달력 증대</li>
                        </ul>
                    </li>
                    </UlStyle>

                <SubTitleStyle>서비스 화면 _ 퍼블리싱완성화면</SubTitleStyle>
                <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F49f12098-ce94-4ae0-94d5-a964f7b3fe3b%2F%E1%84%83%E1%85%A1%E1%84%87%E1%85%A1%E1%86%BC_Web_index.jpg/size/w=1080?exp=1744881992&sig=OKHlC0NIQ45dPX9BpQiysMqc-Z1ABUUde_zm5qGGcfY&id=1bf7cdfc-3fd0-803d-b1ed-e375f1680ad0&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/>
                {/* <img src='https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3777ac50-b87b-4b6e-a66a-280068a6f02b%2FMobile.jpg/size/w=250?exp=1744882024&sig=cGwQ16q5nDDvGCEaM-Hmd8Ox0VRSWVUGcM-J_wad294&id=1bf7cdfc-3fd0-8045-a089-fb7e86eec7e5&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf' alt="부동산자산 연결 부동산 서치화면_2025 추가화면 작업.jpg"/> */}
                <SubTitleStyle>차별점 및 기대 효과</SubTitleStyle>
                <UlStyle>
                    <li>기존 부동산 서비스에서 금융·자산관리로의 확장을 반영한 대시보드 </li>
                    <li>데이터 시각화 중심 UI/UX로 복잡한 금융 정보의 직관적 이해 가능</li>
                    <li>브랜드 정체성을 유지하면서도, 확장 가능한 금융 서비스 경험 제공</li>
                </UlStyle>
        </Contents>
    </Root>
  );
}
