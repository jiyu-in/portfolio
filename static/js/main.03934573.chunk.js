(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/ShapesCone.dfecdf52.png"},17:function(e,t,a){e.exports=a.p+"static/media/ShapesHelix.242b7e0d.png"},18:function(e,t,a){e.exports=a.p+"static/media/ShapesIcosahedron.57f3892b.png"},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7c6xDQAwCANBk1nYfyF7F5IJ3ERIFHwLOjlIFkyZ6c44+GyBCUDUyz1IQuuCBSYAF0/nCqv1Ab8qAAAAAElFTkSuQmCC"},22:function(e,t,a){e.exports=a(33)},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),l=a.n(i),o=(a(29),a(8)),c=a(3);a(30),a(13);var s=a(4),d=a(6),p=a(2);const m=p.a.div`
    position: absolute;
    left: 50%;
    top:25%;
    transform: translateX(-50%);
    /* margin-top: 40%; */
    z-index: -1;
`,u=p.a.div`
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
`,g=p.a.div`
    position: absolute;
    width: 280px;
    height: 80px;
    left: 30px;
    top: ${e=>e.top}px;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(199, 199, 199, 0.6), rgba(160, 160, 160, 0.3));
    box-shadow: inset -4px -4px 10px rgba(100, 100, 100, 0.2),
        inset 4px 4px 10px rgba(195, 195, 195, 0.1); 
    opacity: ${e=>1-.1*e.index};
    backdrop-filter: blur(26px);
    transform: rotateY(${e=>20*e.index}deg) translateZ(${e=>6*e.index}px);
    @media (max-width: 480px) {
        width: 200px;
        height: 50px;
    }
`;var f=()=>{const e=Object(n.useRef)([]),t=Object(n.useRef)();return Object(n.useEffect)(()=>{s.a.to(e.current,{rotateY:e=>"+="+(360+10*e),z:e=>50*Math.sin(.5*e),duration:6,ease:"none",repeat:-1});const a=s.a.timeline({scrollTrigger:{trigger:t.current,start:"top 20%",end:"bottom center",scrub:!0}});e.current.forEach((e,t)=>{const a=18*t,n=6*t;s.a.set(e,{rotateY:a,z:n,y:0})}),a.to(e.current,{opacity:1,rotateY:0,z:0,ease:"power2.out",stagger:.05},0),a.to(e.current,{opacity:.7,y:e=>100*e,ease:"power2.out",stagger:.05},"<"),a.to(e.current,{rotateY:e=>18*e,z:e=>6*e,y:0,ease:"power2.inOut",stagger:.05},"+=0.3")},[]),r.a.createElement(m,null,r.a.createElement(u,null,Array.from({length:12}).map((t,a)=>r.a.createElement(g,{key:a,index:a,top:10*a,ref:t=>e.current[a]=t}))))};const h=p.b`
  0% {
    transform : translate3d(50%, 0, 0);
  }
  100% {
    transform : translate3d(-100%, 0, 0);
  }
`,b=p.a.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,x=p.a.div`
  display: flex;
  flex-direction: column;
  padding:6rem 0 10px 0;
  overflow: hidden;
`,E=p.a.div`
  margin-bottom:4rem;
`,w=p.a.div`
  font-family: "Gothic A1", sans-serif;
  font-size:clamp(4.5rem, 16vw, 16.25rem);
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  padding-bottom:1rem;
`,v=p.a.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  /* white-space: pre-wrap;
  word-break: keep-all; */
  line-height: 1.5;
  & p{
    margin: 0;
    font-family: "Gothic A1", sans-serif;
    font-size:clamp(0.813rem, 2.5vw, 1rem);
    letter-spacing: -0.54px;
    /* @media (max-width: 786px) {
      font-size: 0.75rem;
    } */
  }
`,y=p.a.div`
  max-width: 100%;
  border:1px solid #222;
  border-width: 1px 0;
`,A=p.a.ul`
  display: flex;
  font-size: 1rem;
  white-space:nowrap;
  animation: ${h} 16s linear infinite; 
  cursor: pointer;
  will-change: transform;
  &:hover,
  &:focus-within {
    animation-play-state: paused;
  }
  & li{
    color:#222;
    padding: 0 4rem;
    list-style: none;
    &:hover,
    &:focus-within {
      background-color: #7f9fff;
    }
  }
  @media (max-width: 786px) {
    & li{
      padding: 0 1rem;
    }
  }
`;s.b.registerPlugin(d.a);var k=()=>{const e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null);Object(n.useEffect)(()=>{const n=s.b.context(()=>{s.b.fromTo(t.current,{opacity:1,y:0},{opacity:0,y:-40,duration:1,scrollTrigger:{trigger:t.current,start:"20% top",scrub:!0}}),s.b.fromTo(a.current,{opacity:1,y:0},{opacity:0,y:40,duration:1,scrollTrigger:{trigger:a.current,start:"top 40%",scrub:!0}})},e);return()=>{n.revert()}},[]);const l=["Figma","Adobe Photoshop","Adobe Illustrator","HTML&CSS","JavaScript","React.js","SCSS","GitHub"];return r.a.createElement(b,{ref:e},r.a.createElement(f,null),r.a.createElement(x,null,r.a.createElement(E,null,r.a.createElement(w,{ref:t},"Portfolio"),r.a.createElement(v,{ref:i},r.a.createElement("p",null,"\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uae30\ud68d\ud558\uace0 \ub514\uc790\uc778\ud558\uba70 \ud37c\ube14\ub9ac\uc2f1\uc73c\ub85c \uc6f9 \uc0c1\uc5d0\uc11c \ub3d9\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c0\ub294 \ud654\uba74\uc744 \uad6c\ud604\ud558\uba70 \uc0c8\ub85c\uc6b4 \ucee8\ud150\uce20\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."),r.a.createElement("p",null,"\uc774\uc81c\ub294 \uae30\uc220\uacfc \ub514\uc790\uc778\uc744 \uacb0\ud569\ud55c \ucc3d\uc758\uc801\uc778 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4dc\ub294\ub370 \ub354\uc6b1 \uc9d1\uc911\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),r.a.createElement(y,null,r.a.createElement(A,{ref:a},l.concat(l).map((e,t)=>r.a.createElement("li",{key:t},e))))))},j=a(16),z=a.n(j),O=a(17),I=a.n(O),U=a(18),S=a.n(U);s.b.registerPlugin(d.a);const T=p.a.div`
    position: relative;
    min-width: 80vw;
    height: 75%;
    margin: auto 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,C=p.a.div`
    font-family: "Gothic A1", sans-serif;
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 900;
    text-shadow: 2px 2px 0 #fff;
`,B=p.a.div`
    width: 70%;
    font-size: 0.938rem;
    line-height: 1.2;
    @media (max-width: 786px) {
        width: 100%;
    }
`,R=p.a.div`
    letter-spacing: -0.54px;
`,F=p.a.div`
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
`,P=p.a.p`
    white-space: pre-wrap;
    font-size: clamp(0.938rem, 2.5vw, 1.125rem);
    line-height: 1.25;
    & span {
        background-color: #f4cfb8;
        padding: 0px 0.25rem;
        font-weight: 500;
    }
`,X=Object(p.a)(P)`
    & span {
        background-color: #b9cbff;
    }
`,D=p.a.img`
    position: absolute;
    object-fit: contain;
    width: 25vw;
    z-index: -1;
    @media (max-width: 786px) {
        width: 25vh;
    }
`,_=Object(p.a)(D)`
    right: 2%;
    top: 1%;
`,Q=Object(p.a)(D)`
    right: 4%;
    bottom: 2%;
`,Y=Object(p.a)(D)`
    left: 10px;
    top: 10px;
`;var N=()=>{const e=Object(n.useRef)([]),t=Object(n.useRef)([]);Object(n.useLayoutEffect)(()=>{e.current.forEach((e,a)=>{const n=t.current[a];if(!e||!n)return;const r=s.b.matchMedia();return r.add("(min-width: 768px)",()=>{const t=s.b.timeline();0===a&&t.fromTo(e,{opacity:0,x:150,y:-100},{opacity:1,x:-50,y:100,duration:1,scrollTrigger:{trigger:n,start:"top 50%",end:"bottom 30%",scrub:!0,ease:"power2.out"}}),1===a&&t.fromTo(e,{rotate:180,x:-100,y:-100},{rotate:0,x:100,y:100,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:n,start:"+=220%",end:"+=280%",scrub:!0}}),2===a&&t.fromTo(e,{scale:.2,y:-50},{scale:1,y:50,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:n,start:"+=320%",end:"+=380%",scrub:!0},onComplete:()=>{s.b.to(e,{y:0,duration:1,ease:"power2.out"})}})}),r.add("(max-width: 767px)",()=>{const t=s.b.timeline();0===a&&t.fromTo(e,{opacity:0,x:150,y:-100},{opacity:1,x:-50,y:100,duration:1,scrollTrigger:{trigger:n,start:"top 80%",end:"bottom 40%",scrub:!0}}),1===a&&t.fromTo(e,{rotate:90,x:100,y:100},{rotate:0,x:-100,y:-100,duration:1.5,scrollTrigger:{trigger:n,start:"+=80%",end:"+=120%",scrub:!0}}),2===a&&t.fromTo(e,{scale:1},{scale:.3,duration:1.5,scrollTrigger:{trigger:n,start:"+=140%",end:"+=180%",scrub:!0},onComplete:()=>{s.b.to(e,{y:0,duration:1,ease:"power2.out"})}})}),()=>r.revert()})},[]);const a=[{title:"About me",desc:r.a.createElement(F,null,r.a.createElement("dl",null,r.a.createElement("dt",null,"Name"),r.a.createElement("dd",null,"Jiyu")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Residence"),r.a.createElement("dd",null,"Seoul")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Education"),r.a.createElement("dd",null,"Bachelor\u2019s Degree, Shenyang Normal University")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Professional Experience"),r.a.createElement("dd",null,"Over 9 years and 5 months of experience in UI/UX design and web publishing.")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Skill"),r.a.createElement("dd",null,"- UI/UX Design, Design System",r.a.createElement("br",null),"- HTML5, CSS3, JavaScript",r.a.createElement("br",null),"- Web Accessibility, Semantic Markup",r.a.createElement("br",null),"- Adobe XD, Figma, Zeplin"))),fig:(e,t)=>r.a.createElement(_,{ref:a=>e.current[t]=a,src:z.a})},{title:"Career",desc:r.a.createElement(P,null,r.a.createElement("span",null,"UI/UX Designer")," and ",r.a.createElement("span",null,"Web Publisher")," with experience in tools like Photoshop, Illustrator, and ",r.a.createElement("span",null,"Figma"),". I specialize in UI&UX and visual design, as well as standard HTML and CSS coding. Over the past three years, I've focused on front-end development using the ",r.a.createElement("span",null,"React framework"),". I'm also proficient with ",r.a.createElement("span",null,"prototyping tools")," such as Zeplin and have worked on ",r.a.createElement("span",null,"responsive web")," and ",r.a.createElement("span",null,"mobile applications"),"."),fig:(e,t)=>r.a.createElement(Q,{ref:a=>e.current[t]=a,src:I.a})},{title:"Future Goals & Role",desc:r.a.createElement(X,null,"After joining the company, I aim to go beyond simple ",r.a.createElement("span",null,"UI design")," and focus on optimizing the ",r.a.createElement("span",null,"user experience")," through comprehensive ",r.a.createElement("span",null,"UI/UX design"),". I also look forward to leading ",r.a.createElement("span",null,"projects")," proactively and contributing to the team\u2019s success by fostering effective ",r.a.createElement("span",null,"collaboration"),". My goal is to leverage the latest ",r.a.createElement("span",null,"technologies")," to improve ",r.a.createElement("span",null,"user experiences")," and create innovative ",r.a.createElement("span",null,"digital content")," that captures the interest of participants."),fig:(e,t)=>r.a.createElement(Y,{ref:a=>e.current[t]=a,src:S.a})}];return r.a.createElement(r.a.Fragment,null,a.map((a,n)=>r.a.createElement(T,{key:n,ref:e=>t.current[n]=e},r.a.createElement(C,null,a.title),r.a.createElement(B,null,r.a.createElement(R,null,a.desc)),a.fig(e,n))))};s.a.registerPlugin(d.a);const L=p.a.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`,G=p.a.div`
    display: flex;
    height: 100%;
    width: fit-content;
    padding: 0 6%;
    box-sizing: border-box;
`;p.a.div`
    min-width: 80vw;
    height: 75%;
    margin: auto 2vw;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(16px);
`;var H=()=>{const e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(n.useLayoutEffect)(()=>{const a=e.current,n=t.current;if(!a||!n)return;const r=n.scrollWidth,i=window.innerWidth,l=r-i,o=s.a.context(()=>{s.a.to(n,{x:-l,ease:"none",scrollTrigger:{trigger:a,start:"top top",end:()=>"+="+r,scrub:!0,pin:!0,anticipatePin:1,onUpdate:e=>{}}})},a);return()=>o.revert()},[]),Object(n.useLayoutEffect)(()=>{s.a.to(e.current,{backgroundColor:"rgba(160, 160, 160, 0.3)",scrollTrigger:{trigger:e.current,start:"top top",end:"bottom top",scrub:!0}})},[]),r.a.createElement(L,{ref:e},r.a.createElement(G,{ref:t},r.a.createElement(N,null)))};s.a.registerPlugin(d.b);const M=p.a.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(228 228 228);
    overflow: hidden;
`,Z=p.a.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
`,$=p.a.div`
  background-color: black;
  width: 100%;
  height: 0;
  z-index: 10;
  pointer-events: none;
  &:after{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
  }
`,q=p.a.div`
    position: absolute;
    top: 50%;
    left:50%;
    display: inline-flex;
    flex-direction: column;
    gap:1rem;
    width: 80%;
    max-width: 1440px;
    min-width: 320px;
    transform: rotateX(15deg) translate(-50%, -50%);
    transform-origin: center center;
    will-change: transform;
    z-index: 20;
    color: #fff;
    /* backdrop-filter: blur(10px); */
`,W=p.a.p`
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  color: #d1d1d1;
`,J=Object(p.a)(W)`
  margin-bottom: 20px;
  font-family: "Gothic A1", sans-serif;
  font-size:clamp(2.75rem, 6vw, 6.25rem);
  font-weight: 800;
  color: #fff;
`,K=Object(p.a)(W)`
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #777;
`,V=p.a.a`
    position: relative;
    max-width: 480px;
    background: #ffffff0d;
    color: #fff;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    backdrop-filter: blur(4px);
    margin: 2rem auto;
    padding: 0.5rem 3rem;
    &:hover, &:focus{
      background-color: #7f9fff;
      transition: all 0.5s ease-in-out;
    }
`,ee=p.a.div`
    width: 7px;
    height: 7px;
    position: absolute;
    &.cuad1{top: -10px; left: -5px; }
    &.cuad2{top: -10px; right: 0px;}
    &.cuad3{bottom: 4px; left: -5px; }
    &.cuad4{bottom: 4px; right: 0px; }
`;var te=()=>{const e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)(()=>{s.a.fromTo(t.current,{opacity:0,height:0,filter:"blur(120px)"},{opacity:1,height:"100vh",filter:"blur(0px)",duration:1,scrollTrigger:{trigger:e.current,start:"top center",end:"bottom bottom",scrub:!0,ease:"power2.inOut",duration:2}})},[]),r.a.createElement(M,{ref:e},r.a.createElement($,{ref:t}),r.a.createElement(Z,null),r.a.createElement(q,{ref:a},r.a.createElement(J,null,"Thank you for staying with me until the end."),r.a.createElement(W,null,"With expertise in creative UI/UX design and web publishing,",r.a.createElement("br",null)," I deliver user-centered and innovative web experiences."),r.a.createElement(V,{href:"mailto:jyin2205@naver.com",target:"_blank"},Array.from({length:4}).map((e,t)=>r.a.createElement(ee,{key:t,className:"cuad"+(t+1)},"+")),"Let\u2019s connect"),r.a.createElement(K,null,"\xa9 2025. All rights reserved")))};a.p;const ae=p.a.div`
    /* position: fixed;
    right: 1rem;
    top: 1rem; */
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -1px;
    .title{
        margin-right: 0.25rem;
    }
`;var ne=()=>{const[e,t]=Object(n.useState)(new Date);Object(n.useEffect)(()=>{const e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]);return r.a.createElement(ae,null,r.a.createElement("span",{className:"title"},"Date")," ",e.toLocaleString("en-US",{weekday:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/,/g,""))};const re=p.a.div`
    display: flex;
    padding:7px 0.5rem;
    border:1px solid #222;
    border-radius: 50px;
    @media (max-width: 786px) {
    }
`,ie=Object(p.a)(o.b)`
    text-decoration: none;
    color: #222;
    position: relative;
    padding: 6px 1rem;
    &.active {
        background-color: #222;
        color:#fff;
        border-radius: 50px;
        font-weight: bold;
    }
`;var le=function(){const e=Object(c.m)();return r.a.createElement(re,null,[{name:"About",linkTo:"/",target:"_self"},{name:"Notion",linkTo:"https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df",target:"_blank"}].map((t,a)=>r.a.createElement(ie,{to:t.linkTo,key:a,className:e.pathname===t.linkTo?"active":"",target:t.target},t.name)))};const oe=p.a.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 2rem;
    background-color: #ffffffe0;
    backdrop-filter:blur(3px);
    box-sizing: border-box;
    overflow: hidden;
    z-index: 10;
    @media (max-width: 786px) {
        padding:1.5rem 1rem;
    }
`;var ce=function(){return r.a.createElement(oe,null,r.a.createElement(ne,null),r.a.createElement(le,null))};a.p;a.p;a.p;a.p;a.p;a.p;a.p;const se=p.b`
    0% { transform: translateY(0); }
    50% { transform: translateY(6px); }
    100% { transform: translateY(0); }
`,de=p.a.div`
    perspective: 1000px;
    width: 100%;
    max-width: 1440px;
    min-width: 320px;
    height: 100%;
    min-height: 320px;
`,pe=(p.a.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${de}:hover & {
        transform: rotateY(180deg);
    }
`,p.a.div`
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
        animation: ${se} 1s ease-in-out infinite;
        margin-right: 6px;
    }
`);Object(p.a)(pe)`
    background: #222;
    color:#fff;
    font-size: 0.938rem;
    line-height: 1.7;
`,Object(p.a)(pe)`
    transform: rotateY(180deg);
    background: #7f9fff;
    font-size: 0.875rem;
    line-height: 1.5;
`,p.a.div`
    font-size: 0.75rem;
    margin-left: auto;
`;const me=p.b`
    0% { transform: rotateZ(0); }
    20% { transform: rotateZ(5deg); }
    40% { transform: rotateZ(-5deg); }
    60% { transform: rotateZ(5deg); }
    80% { transform: rotateZ(-5deg); }
    100% { transform: rotateZ(0); }
`,ue=["0s","3s","6s","9s","12s"],ge=p.a.div`
    & svg{
        @media (max-width: 786px) {
            width:64px;
        }
    }
`,fe=(p.a.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:4rem 0;
`,p.a.div`
    width: 80%;
    max-width: 1440px;
    min-width: 320px;
`,p.a.p`
    font-size: 3rem;
    font-weight: 900;
    font-family: "Gothic A1", sans-serif;
    margin: 0;
    @media (max-width: 786px) {
        font-size: 2rem;
    }
`,p.a.p`
    font-size: 1rem;
    font-family: "Gothic A1", sans-serif;
    margin:0 0 5rem 0;
    @media (max-width: 786px) {
        margin:0 0 2rem 0;
    }
`,p.a.div`
    display: grid;
    grid-template-columns: 54% 40%;
    gap: 6%;
    box-sizing: border-box;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`,p.a.div`
    display: flex; 
`);Object(p.a)(fe)`
    flex-direction: column;
    gap:2rem;
`,p.a.div`
    display: flex;
    align-items: center;
    gap:2rem;
    &:hover, &:focus{
        cursor: pointer;
        ${ge}{
            transform-origin: center bottom;
            animation: ${me} 0.5s ease-in-out infinite;
            /* animation-delay: ${e=>{let{index:t}=e;return ue[t%ue.length]}}; */
        }
    }
`,p.a.div`
    font-size: 0.938rem;
    line-height: 1.2;
    & span{
        display: inline-block;
        margin-bottom: 1rem;
        font-weight: 700;
    }
`,p.a.div`
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
`,p.a.div`
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
`;s.b.registerPlugin(d.a);var he=a(19),be=a.n(he);const xe=p.a.div`
  /* height: 100vh; */
  width: 100%;
`,Ee=Object(p.a)(xe)`
  height: 100vh;
  position: relative;
`;Object(p.a)(xe)`
    min-height:100vh;
    display:flex;
    align-items:center;
    background-image: url(${be.a});
    inset: 0px;
    background-repeat: repeat;
    background-position: left top;
    background-size: 8px;
`;var we=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(Ee,null,r.a.createElement(k,null)),r.a.createElement(xe,{style:{minHeight:"100vh"}},r.a.createElement(H,null)),r.a.createElement(Ee,null,r.a.createElement(te,null)))},ve=a(20);const ye=p.a.div`
    position: absolute;
    margin: 8% 12%;
    max-width: 600px;
    font-size: 1rem;
`,Ae=p.a.div`
    position: absolute;
    top: 100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
`,ke=p.a.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:1.25rem;
    & h2{
        display: inline-block;
        /* font-size: 4rem; */
        font-size: calc(16px + 0.5vw);
        color: #F88960;
        margin: 0;
        text-shadow: 0px 5px 0px #5E3235, -2px 0px #5E3235, 2px 0px #5E3235, 0px -2px #5E3235;
    }
    @media (max-width: 960px) {
        & h2{
        /* font-size: 2.5rem; */
        font-size: calc(16px + 0.5vw);
    }
    }
`,je=p.a.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:1.25rem;
    & h3{
        display: inline-block;
        font-size: 4rem;
        color: #F88960;
        margin: 0;
        text-shadow: 0px 5px 0px #5E3235, -2px 0px #5E3235, 2px 0px #5E3235, 0px -2px #5E3235;
    }
    @media (max-width: 960px) {
        & h3{
        font-size: 2.5rem;
    }
    }
`,ze=(p.a.button`
    background: none;
    border: 0 none ;
    padding: 0;
    margin: 0;
`,p.a.p`
   margin: 0;
`),Oe=p.a.ul`
   
`;s.b.registerPlugin(d.a,ve.a);const Ie=p.a.div`
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
`;function Ue(){const e=Object(n.useRef)(null);return Object(n.useEffect)(()=>{let t="top top",a=0;const n=e.current.querySelector("#theCucas"),r=e.current.querySelectorAll(".legsL"),i=e.current.querySelectorAll(".legsR");s.b.set(".cuca",{autoAlpha:1,x:-100,scale:.8,transformOrigin:"center"});const l=s.b.timeline({scrollTrigger:{trigger:n,pin:!0,scrub:.6,start:()=>t,end:"+=400%",markers:!0,onUpdate:e=>{a=-1===e.direction?180:0},onRefresh:()=>{t=window.innerHeight<600?"top top-=200":"top top",d.a.update()}}});return l.to(".cuca",{motionPath:{path:"M -100 100 Q 100 0 200 100 Q 300 300 350 100 Q 350 50 100 100 Q 350 250 400 0 C 500 200 550 150 750 50",alignOrigin:[.5,.5],autoRotate:!0},duration:4,ease:"none",onUpdate(){a&&this.targets().forEach(e=>s.b.set(e,{rotation:s.b.getProperty(e,"rotation")+a}))}}).to(r,{rotation:40,transformOrigin:"80% 10px",duration:.02,stagger:.005,repeat:160,yoyo:!0},.1).to(i,{rotation:-40,transformOrigin:"80% 10px",duration:.02,stagger:.005,repeat:160,yoyo:!0},.115),s.b.utils.toArray(e.current.querySelectorAll("span")).forEach(e=>{d.a.create({trigger:e,start:"top 30%",onEnter:()=>s.b.set(e,{color:"#a22525"})})}),()=>{d.a.getAll().forEach(e=>e.kill()),l.kill()}},[]),r.a.createElement(Ie,null,r.a.createElement(Ae,{ref:e},r.a.createElement("svg",{id:"theCucas",viewBox:"0 0 600 400"},r.a.createElement("path",{id:"mask",d:"M 270 250 C 150 200 100 50 300 50 Q 550 50 450 250 C 340 300 500 350 350 350 Q 50 350 270 250",fill:"#929292",stroke:"none"}))),r.a.createElement(ye,null,r.a.createElement(ke,null,"\ub300\uc2dc\ubcf4\ub4dc"),r.a.createElement(ze,null,"\uac1c\uc778 \uc790\uc0b0 \uad00\ub9ac \ub300\uc2dc\ubcf4\ub4dc\ub294 \uae30\uc874 \ubd80\ub3d9\uc0b0 \uc911\uac1c \uc11c\ube44\uc2a4\uc5d0\uc11c \ud655\uc7a5\ub41c \uc790\uc0b0\uad00\ub9ac \ud50c\ub7ab\ud3fc\uc73c\ub85c, \uae30\uc874 \ubd80\ub3d9\uc0b0 \uac70\ub798 \uc218\uc218\ub8cc \uc678\uc5d0\ub3c4 \ub300\ucd9c\uc911\uac1c, \ubcf4\ud5d8, \ud22c\uc790 \uc0c1\ud488\ud310\ub9e4 \ub4f1 \uc0c8\ub85c\uc6b4 \uc218\uc775\uc6d0\uc744 \ucc3d\ucd9c\ud560 \uc218\uc788\ub3c4\ub85d \uace0\uac1d\uc774 \ubd80\ub3d9\uc0b0\uc744 \uad6c\ub9e4\ud560 \ub54c \uae08\uc735 \uc11c\ube44\uc2a4(\uc8fc\ud0dd\ub2f4\ubcf4\ub300\ucd9c, \uc804\uc138\ub300\ucd9c, \uc2e0\uc6a9\ub300\ucd9c \ub4f1)\uac00 \ud544\uc694\ud558\ubbc0\ub85c, \uc6d0\uc2a4\ud1b1 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uae08\uc735\uc0c1\ud488\uc744 \ud568\uaed8 \uc81c\uacf5\ud558\uba74 \uace0\uac1d\uc774 \ud50c\ub7ab\ud3fc\uc5d0 \uba38\ubb34\ub294 \uc2dc\uac04\uc774 \ub298\uc5b4\ub098\uace0 \uc7ac\ubc29\ubb38 \ucda9\uc131\ub3c4\ub97c \ub192\uc77c\uc218\uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ubd80\ub3d9\uc0b0\uc744 \ud3ec\ud568\ud55c \uac1c\uc778 \uc790\uc0b0\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4, \uae08\uc735 \ub370\uc774\ud130\ub97c \uc9c1\uad00\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc790\uc2e0\uc758 \uc7ac\ubb34 \uc0c1\ud0dc\ub97c \uc27d\uac8c \ud30c\uc545\ud558\uace0, \ub354 \ub098\uc740 \uc7ac\uc815\uc801 \uacb0\uc815\uc744 \ub0b4\ub9b4 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ud588\uc2b5\ub2c8\ub2e4."),r.a.createElement(je,null,"\ub300\uc0c1 \uc0ac\uc6a9\uc790 \ubc0f \uc8fc\uc694 \ubaa9\ud45c"),r.a.createElement(Oe,null,r.a.createElement("li",null,"\ub300\uc0c1 \uc0ac\uc6a9\uc790: \ub2e4\ubc29\uc744 \uc774\uc6a9\ud558\ub294 \uc77c\ubc18 \uace0\uac1d"),r.a.createElement("li",null,"\uc8fc\uc694 \ubaa9\ud45c",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uc0ac\uc6a9\uc790\uac00 \uc790\uc2e0\uc758 \uc790\uc0b0\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uc815\ubcf4 \uc81c\uacf5"),r.a.createElement("li",null," \ub300\ucd9c, \ud22c\uc790, \uc9c0\ucd9c \ub0b4\uc5ed \ub4f1\uc744 \uc9c1\uad00\uc801\uc73c\ub85c \ubd84\uc11d\ud560 \uc218 \uc788\ub294 \ub300\uc2dc\ubcf4\ub4dc \uad6c\uc131"),r.a.createElement("li",null," \ubd80\ub3d9\uc0b0 \uac70\ub798\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc790\uc0b0\uad00\ub9ac \uc11c\ube44\uc2a4\uae4c\uc9c0 \ud655\uc7a5\ud558\ub294 \uc5f0\uacb0\uc131 \uc81c\uacf5")))),r.a.createElement(je,null,"UX \uc124\uacc4 \ubc29\ud5a5"),r.a.createElement(Oe,null,r.a.createElement("li",null,"\ub370\uc774\ud130 \uc2dc\uac01\ud654 \uc911\uc2ec",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null," \uc0ac\uc6a9\uc790\uc758 \uae08\uc735 \ub370\uc774\ud130\ub97c \uc774\ud574\ud558\uae30 \uc27d\ub3c4\ub85d \uadf8\ub798\ud504 \ubc0f \ube44\uc8fc\uc5bc \uc694\uc18c \ud65c\uc6a9"),r.a.createElement("li",null,"\uc790\uc0b0 \ubd84\uc11d, \uc9c0\ucd9c \ubd84\uc11d \ub4f1 \ucc28\ud2b8 \uae30\ubc18\uc758 UI \uad6c\uc131\uc73c\ub85c \uac00\ub3c5\uc131 \uac15\ud654"),r.a.createElement("li",null," \uc22b\uc790 \uae30\ubc18\uc758 \uc815\ubcf4(\uc608: KOSPI \uc9c0\uc218, \uc21c\uc790\uc0b0)\ub97c \uac15\uc870\ud558\uc5ec \uc815\ubcf4 \uc804\ub2ec\ub825 \uadf9\ub300\ud654"))),r.a.createElement("li",null,"\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\ud575\uc2ec \uc815\ubcf4(\uc790\uc0b0, \ub300\ucd9c, \ud22c\uc790) \uc6b0\uc120 \ubc30\uce58\ub85c \ube60\ub978 \uc815\ubcf4 \ud655\uc778 \uac00\ub2a5"),r.a.createElement("li",null,"\ucd5c\uadfc \uac70\ub798 \ub0b4\uc5ed, \ub300\ucd9c \ud604\ud669 \ub4f1\uc744 \uadf8\ub8f9\ud654\ud558\uc5ec \uc0ac\uc6a9\uc790\uc758 \ubaa9\ud45c \uc911\uc2ec \uc124\uacc4"),r.a.createElement("li",null,"\ubcf5\uc7a1\ud55c \uae08\uc735 \uc6a9\uc5b4 \uc5c6\uc774 \uc9c1\uad00\uc801\uc778 \uc544\uc774\ucf58\uacfc \uc0c9\uc0c1\uc73c\ub85c \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5")))),r.a.createElement(je,null,"\ubd80\ub3d9\uc0b0\uc790\uc0b0 \uc5f0\uacb0 \ubd80\ub3d9\uc0b0 \uc11c\uce58\ud654\uba74_2025 \ucd94\uac00\ud654\uba74 \uc791\uc5c5\uc911"),r.a.createElement("img",{src:"https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3a4ad521-a6e3-4995-a040-e7cf405d8698%2F%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF_%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_2025_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8.jpg/size/w=1420?exp=1744879467&sig=s9118VHr_6hIXcW3uqEeLmkndQ63atOe5-5n52HhUPA&id=1c07cdfc-3fd0-80dd-b876-c6e253d9cea7&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf",alt:"\u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab\u110c\u1161\u1109\u1161\u11ab \u110b\u1167\u11ab\u1100\u1167\u11af \u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab \u1109\u1165\u110e\u1175\u1112\u116a\u1106\u1167\u11ab_2025 \u110e\u116e\u1100\u1161\u1112\u116a\u1106\u1167\u11ab \u110c\u1161\u11a8\u110b\u1165\u11b8.jpg"}),r.a.createElement(je,null,"UI \ub514\uc790\uc778 \uc811\uadfc\ubc95 "),r.a.createElement(Oe,null,r.a.createElement("li",null,"\ub2e4\ubc29 \ube0c\ub79c\ub4dc \uceec\ub7ec \uc720\uc9c0",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uae30\uc874 \ub2e4\ubc29\uc758 \ube0c\ub79c\ub4dc \uceec\ub7ec(\ube14\ub8e8 \uacc4\uc5f4)\ub97c \ud65c\uc6a9\ud558\uc5ec \uc77c\uad00\uc131 \uc720\uc9c0"),r.a.createElement("li",null,"\uc2e0\ub8b0\uac10\uc744 \uc8fc\ub294 \uae08\uc735 \uc11c\ube44\uc2a4 \ud2b9\uc131\uc744 \ubc18\uc601\ud55c \ub514\uc790\uc778 \uad6c\uc131"))),r.a.createElement("li",null,"\ubaa8\ub358\ud558\uace0 \uae54\ub054\ud55c \ub808\uc774\uc544\uc6c3",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uc0ac\uc774\ub4dc\ubc14\ub97c \ud65c\uc6a9\ud55c \uba85\ud655\ud55c \ub0b4\ube44\uac8c\uc774\uc158 \uad6c\uc870"),r.a.createElement("li",null,"\uac01 \uc139\uc158\uc744 \uce74\ub4dc \ud615\ud0dc\ub85c \uad6c\ubd84\ud558\uc5ec \uac00\ub3c5\uc131\uacfc \uc815\ubcf4 \uc811\uadfc\uc131 \ud5a5\uc0c1"),r.a.createElement("li",null,"\uc911\uc694 \ub370\uc774\ud130\ub294 \uceec\ub7ec \ubc0f \ud3f0\ud2b8 \ud06c\uae30\ub85c \uac15\uc870\ud558\uc5ec \uc815\ubcf4 \uc804\ub2ec\ub825 \uc99d\ub300")))),r.a.createElement(je,null,"\uc11c\ube44\uc2a4 \ud654\uba74 _ \ud37c\ube14\ub9ac\uc2f1\uc644\uc131\ud654\uba74"),r.a.createElement("img",{src:"https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F49f12098-ce94-4ae0-94d5-a964f7b3fe3b%2F%E1%84%83%E1%85%A1%E1%84%87%E1%85%A1%E1%86%BC_Web_index.jpg/size/w=1080?exp=1744881992&sig=OKHlC0NIQ45dPX9BpQiysMqc-Z1ABUUde_zm5qGGcfY&id=1bf7cdfc-3fd0-803d-b1ed-e375f1680ad0&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf",alt:"\u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab\u110c\u1161\u1109\u1161\u11ab \u110b\u1167\u11ab\u1100\u1167\u11af \u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab \u1109\u1165\u110e\u1175\u1112\u116a\u1106\u1167\u11ab_2025 \u110e\u116e\u1100\u1161\u1112\u116a\u1106\u1167\u11ab \u110c\u1161\u11a8\u110b\u1165\u11b8.jpg"}),r.a.createElement(je,null,"\ucc28\ubcc4\uc810 \ubc0f \uae30\ub300 \ud6a8\uacfc"),r.a.createElement(Oe,null,r.a.createElement("li",null,"\uae30\uc874 \ubd80\ub3d9\uc0b0 \uc11c\ube44\uc2a4\uc5d0\uc11c \uae08\uc735\xb7\uc790\uc0b0\uad00\ub9ac\ub85c\uc758 \ud655\uc7a5\uc744 \ubc18\uc601\ud55c \ub300\uc2dc\ubcf4\ub4dc "),r.a.createElement("li",null,"\ub370\uc774\ud130 \uc2dc\uac01\ud654 \uc911\uc2ec UI/UX\ub85c \ubcf5\uc7a1\ud55c \uae08\uc735 \uc815\ubcf4\uc758 \uc9c1\uad00\uc801 \uc774\ud574 \uac00\ub2a5"),r.a.createElement("li",null,"\ube0c\ub79c\ub4dc \uc815\uccb4\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c\ub3c4, \ud655\uc7a5 \uac00\ub2a5\ud55c \uae08\uc735 \uc11c\ube44\uc2a4 \uacbd\ud5d8 \uc81c\uacf5"))))}var Se=function(){return r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(we,null)}),r.a.createElement(c.a,{path:"/projectFinance",element:r.a.createElement(Ue,null)})))};var Te=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:i,getTTFB:l}=t;a(e),n(e),r(e),i(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null))),Te()}},[[22,1,2]]]);
//# sourceMappingURL=main.03934573.chunk.js.map