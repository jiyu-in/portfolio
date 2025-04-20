(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,r){e.exports=r(23)},21:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(8),o=r.n(i),l=(r(21),r(22),r(2)),c=r(4);l.b.registerPlugin(c.a);var s=r(1);const p=s.a.div`
    position: fixed;
    right: 1rem;
    top: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -1px;
    .title{
        margin-right: 0.25rem;
    }
`;var d=()=>{const[e,t]=Object(a.useState)(new Date);Object(a.useEffect)(()=>{const e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]);return n.a.createElement(p,null,n.a.createElement("span",{className:"title"},"Date")," ",(e=>e.toLocaleString("en-US",{weekday:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/,/g,""))(e))};const u=s.a.div`
    position: absolute;
    left: 50%;
    top:25%;
    transform: translateX(-50%);
    /* margin-top: 40%; */
    z-index: -1;
`,g=s.a.div`
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
`,m=s.a.div`
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
`;var f=()=>{const e=Object(a.useRef)([]),t=Object(a.useRef)();return Object(a.useEffect)(()=>{l.a.to(e.current,{rotateY:e=>`+=${360+10*e}`,z:e=>50*Math.sin(.5*e),duration:6,ease:"none",repeat:-1});const r=l.a.timeline({scrollTrigger:{trigger:t.current,start:"top 20%",end:"bottom center",scrub:!0}});e.current.forEach((e,t)=>{const r=18*t,a=6*t;l.a.set(e,{rotateY:r,z:a,y:0})}),r.to(e.current,{opacity:1,rotateY:0,z:0,ease:"power2.out",stagger:.05},0),r.to(e.current,{opacity:.7,y:e=>100*e,ease:"power2.out",stagger:.05},"<"),r.to(e.current,{rotateY:e=>18*e,z:e=>6*e,y:0,ease:"power2.inOut",stagger:.05},"+=0.3")},[]),n.a.createElement(u,null,n.a.createElement(g,null,Array.from({length:12}).map((t,r)=>n.a.createElement(m,{key:r,index:r,top:10*r,ref:t=>e.current[r]=t}))))};const b=s.b`
  0% {
    transform : translate3d(50%, 0, 0);
  }
  100% {
    transform : translate3d(-100%, 0, 0);
  }
`,h=s.a.div`
  position: relative;
  height: 100%;
  & *{
    color: #131313;
  }
`,x=s.a.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 1px;
  padding: 40vh 0 4rem 0;
  @media (max-width: 786px) {
    font-size: 4rem;
  }
`,E=s.a.div`
  max-width: 100vw;
  overflow: hidden;
`,w=s.a.ul`
  display: flex;
  font-size: 0.85rem;
  white-space:nowrap;
  animation: ${b} 16s linear infinite; 
  & li{
    padding: 0 4rem;
    list-style: none;
  }
  @media (max-width: 786px) {
    & li{
      padding: 0 1rem;
    }
  }
`,v=s.a.div`
  position: absolute;
  left: 50%;
  bottom:10%;
  transform: translate(-50%, 0);
  width: 80%;
  max-width: 1440px;
  min-width: 320px;
  text-align: center;
  word-break: keep-all;
  & p{
    margin: 0;
    font-size: 0.875rem;
    letter-spacing: -0.54px;
  }
`;l.b.registerPlugin(c.a);var y=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null),r=Object(a.useRef)(null);return Object(a.useEffect)(()=>{l.b.fromTo(e.current,{opacity:1,y:0},{opacity:0,y:-40,duration:1,scrollTrigger:{trigger:e.current,start:"20% top",scrub:!0}}),l.b.fromTo(t.current,{opacity:1,y:0},{opacity:0,y:40,duration:1,scrollTrigger:{trigger:t.current,start:"top 40%",scrub:!0}})},[]),n.a.createElement(h,null,n.a.createElement(f,null),n.a.createElement(x,{ref:e},"Portfolio"),n.a.createElement(E,null,n.a.createElement(w,{ref:t},n.a.createElement("li",null,"Figma"),n.a.createElement("li",null,"Adobe Photoshop"),n.a.createElement("li",null,"Adobe Illustrator"),n.a.createElement("li",null,"HTML&CSS"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"React.js"),n.a.createElement("li",null,"SCSS"),n.a.createElement("li",null,"GitHub"))),n.a.createElement(v,{ref:r},n.a.createElement("p",null,"\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uae30\ud68d\ud558\uace0 \ub514\uc790\uc778\ud558\uba70 \ud37c\ube14\ub9ac\uc2f1\uc73c\ub85c \uc6f9 \uc0c1\uc5d0\uc11c \ub3d9\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c0\ub294 \ud654\uba74\uc744 \uad6c\ud604\ud558\uba70 \uc0c8\ub85c\uc6b4 \ucee8\ud150\uce20\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."),n.a.createElement("p",null,"\uc774\uc81c\ub294 \uae30\uc220\uacfc \ub514\uc790\uc778\uc744 \uacb0\ud569\ud55c \ucc3d\uc758\uc801\uc778 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub354\uc6b1 \uc9d1\uc911\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")))};l.b.registerPlugin(c.a);const k=s.a.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${e=>e.bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`,j=s.a.div`
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
`,O=s.a.ul`
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
`,z=s.a.div`
    text-align: left;
    & p{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        font-family:  "Gothic A1", sans-serif ;
    }
`,S=s.a.a`
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
`;var T=e=>{let{category:t,title:r,img:i,url:o}=e;const c=Object(a.useRef)(null);return Object(a.useEffect)(()=>{l.b.fromTo(c.current,{width:"80%",height:"80%"},{width:"100%",height:"100%",duration:2,delay:.6,scrollTrigger:{trigger:c.current,start:"center 80%",end:"center 20%",scrub:1.5,ease:"back.out(4)"}})},[]),n.a.createElement(k,{ref:c,bg:i},n.a.createElement(j,null,n.a.createElement(O,null,t.map((e,t)=>n.a.createElement("li",{key:t},e))),n.a.createElement(z,null,n.a.createElement("p",null,r))),n.a.createElement(S,{target:"_blank",href:o},"Learn more"))};const P=[{category:["Real estate","Asset management"],title:"\uac1c\uc778\uc790\uc0b0\uad00\ub9ac",img:"/portfolio/assets/ProjectFinance.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/1967cdfc3fd08149b708d50a1eb4f2d8?pvs=4",componentName:"Dabang"},{category:["Education","Enterprise solutions"],title:"\ube44\ub300\uba74 LMS(\ud559\uc2b5\uad00\ub9ac\uc2dc\uc2a4\ud15c) \uc0ac\uc774\ud2b8",img:"/portfolio/assets/LMS.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/LMS-1bf7cdfc3fd0805aa481fc322f427fe9",componentName:"OnlineEduSystem"},{category:["Digital rights management"],title:"\uc74c\uc131 \uc800\uc791\uad8c\uc778 VOICE \ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378",img:"/portfolio/assets/Dubidub.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/VOICE-1a67cdfc3fd080b3a918e6011d1e3e94?pvs=4",componentName:"ProjectVoiceEntertainment"},{category:["AI","Smart mobility"],title:"TBN \uad50\ud1b5\ud63c\uc7a1\uc608\ubcf4 \uc11c\ube44\uc2a4",img:"/portfolio/assets/TBN.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/TBN-1967cdfc3fd081d1bd8fe75ac30fa625",componentName:"ProjectTrafficPrediction"},{category:["Blockchain","Financial services"],title:"\uac00\uc0c1\ud654\ud3d0\uac70\ub798\uc18c UI&UX",img:"/portfolio/assets/Exchange.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/UI-UX-1967cdfc3fd081d5a9efd3cb48cd5a10",componentName:"ProjectCryptoExchange"},{category:["Education","Media & content platforms"],title:"\ud55c\uad6d\ubc29\uc1a1\uc608\uc220\uad50\uc721\uc9c4\ud765\uc6d0 \ub9ac\ub274\uc5bc \ubc0f \ud589\uc0ac\ud3ec\uc2a4\ud130 ",img:"/portfolio/assets/KBAS.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/1a77cdfc3fd0808dafa8e468a8f84302?pvs=42",componentName:"ProjectKoreaBroadcastArts"},{category:["Education","Public sector websites"],title:"\uc11c\uc6b8\ub300\ud559\uad50 \ud559\uacfc \ud398\uc774\uc9c0 \ub9ac\ub274\uc5bc",img:"/portfolio/assets/Snu.jpg",url:"https://sumptuous-amaryllis-ad1.notion.site/1967cdfc3fd081eb9bcfd81e7cd80d4d",componentName:"SnuDeptRenewal"}];l.a.registerPlugin(c.a);const R=s.a.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`,N=s.a.div`
    display: flex;
    height: 100%;
    width: fit-content;
    padding: 0 6%;
    box-sizing: border-box;
`,I=s.a.div`
    min-width: 80vw;
    height: 75%;
    margin: auto 2vw;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(16px);
`,A=s.a.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0;
    z-index: 20;
`,U=s.a.div`
    width: 16px;
    height: ${e=>{let{active:t}=e;return t?"16px":"1px"}};
    border: 1px solid #131313;
    transition: all 0.3s;
`;var $=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null),[r,i]=Object(a.useState)(0);return Object(a.useLayoutEffect)(()=>{const r=e.current,a=t.current,n=a.scrollWidth,o=window.innerWidth,c=n-o,s=l.a.context(()=>{l.a.to(a,{x:-c,ease:"none",scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${n}`,scrub:!0,pin:!0,anticipatePin:1,onUpdate:e=>{const t=n/P.length,r=e.progress*n,a=Math.min(P.length-1,Math.round(r/t));i(a)}}})},e);return()=>s.revert()},[]),Object(a.useEffect)(()=>{l.a.to(e.current,{backgroundColor:"rgba(160, 160, 160, 0.3)",scrollTrigger:{trigger:e.current,start:"top top",end:"bottom top",scrub:!0}})},[]),Object(a.useEffect)(()=>{const t=document.querySelector("#indicator"),r=c.a.create({trigger:e.current,start:"top top",end:"bottom+=700% top",scrub:!0,onUpdate:e=>{const r=e.progress,a=r<.01||r>.95?0:1;l.a.to(t,{opacity:a,duration:.3,ease:"power2.out"})}});return()=>r.kill()},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(R,{ref:e},n.a.createElement(N,{ref:t},P.map((e,t)=>n.a.createElement(I,{key:e.id},n.a.createElement(T,{category:e.category,title:e.title,img:e.img,url:e.url}))))),n.a.createElement(A,{id:"indicator"},P.map((e,t)=>n.a.createElement(U,{key:t,active:t===r}))))};l.a.registerPlugin(c.b);const C=s.a.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(228 228 228);
    overflow: hidden;
`,D=s.a.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
`,L=s.a.div`
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
`,M=s.a.div`
    position: absolute;
    top: 50%;
    left:50%;
    display: inline-flex;
    flex-direction: column;
    width: 80%;
    transform: rotateX(15deg) translate(-50%, -50%);
    transform-origin: center center;
    will-change: transform;
    z-index: 20;
    color: #fff;
    /* backdrop-filter: blur(10px); */
`,B=s.a.p`
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  color: #d1d1d1;
`,F=Object(s.a)(B)`
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`,X=Object(s.a)(B)`
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #777;
`,Y=s.a.a`
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
`,W=(s.a.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    border: 2px dashed #a7df00;
    box-shadow: 0 0 10px 180px #1717179c;
`,s.a.div`
    width: 7px;
    height: 7px;
    position: absolute;
    &.cuad1{top: -10px; left: -5px; }
    &.cuad2{top: -10px; right: 0px;}
    &.cuad3{bottom: 4px; left: -5px; }
    &.cuad4{bottom: 4px; right: 0px; }
`);var G=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null),r=Object(a.useRef)(null);return Object(a.useEffect)(()=>{l.a.fromTo(t.current,{opacity:0,height:0,filter:"blur(120px)"},{opacity:1,height:"100vh",filter:"blur(0px)",duration:1,scrollTrigger:{trigger:e.current,start:"top center",end:"bottom bottom",scrub:!0,ease:"power2.inOut",duration:2}})},[]),n.a.createElement(C,{ref:e},n.a.createElement(L,{ref:t}),n.a.createElement(D,null),n.a.createElement(M,{ref:r},n.a.createElement(F,null,"Thank you for staying with me until the end."),n.a.createElement(B,null,"With expertise in creative UI/UX design and web publishing, I deliver user-centered and innovative web experiences."),n.a.createElement(Y,{href:"https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df",target:"_blank"},Array.from({length:4}).map((e,t)=>n.a.createElement(W,{key:t,className:`cuad${t+1}`},"+")),"Notion"),n.a.createElement(X,null,"\xa9 2025. All rights reserved")))};const H=s.a.div`
  /* height: 100vh; */
  width: 100%;
`;var J=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(H,{style:{height:"100vh"}},n.a.createElement(y,null)),n.a.createElement(H,{style:{minHeight:"100vh"}},n.a.createElement($,null)),n.a.createElement(H,null,n.a.createElement(G,null)))};var V=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then(t=>{let{getCLS:r,getFID:a,getFCP:n,getLCP:i,getTTFB:o}=t;r(e),a(e),n(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(J,null))),V()}},[[12,1,2]]]);
//# sourceMappingURL=main.698d02cd.chunk.js.map