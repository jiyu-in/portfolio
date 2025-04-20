import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFadeIn = () => {
  const boxRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "40% center",
          end : "30% top",
          scrub:true,
          markers:true,
        },
      }
    );
      gsap.from(imageRef.current, {
        scale: 0,
        duration: 1,
        delay: 0.3,
      });
  
      gsap.to(buttonRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });
  }, []);

  return (
    <div>
    <div
      ref={boxRef}
      style={{
        width: "300px",
        height: "200px",
        background: "#ff6b6b",
        margin: "100vh auto",
        textAlign: "center",
        lineHeight: "200px",
        color: "#fff",
        fontSize: "1.5rem",
      }}
    >
      스크롤하면 등장!
    </div>
      <div style={{ padding: "2rem" }}>
        <h1 ref={titleRef}>제목입니다</h1>
        <img
          ref={imageRef}
          src="https://jiyu-in.github.io/portfolio/images/BannerLMS.jpg"
          alt="샘플 이미지"
          style={{ display: "block", margin: "2rem 0" }}
        />
        <button ref={buttonRef}>클릭해보세요</button>
      </div>
    </div>
  );
};

export default ScrollFadeIn;
