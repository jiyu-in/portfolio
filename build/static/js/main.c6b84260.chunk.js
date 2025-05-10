(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7c6xDQAwCANBk1nYfyF7F5IJ3ERIFHwLOjlIFkyZ6c44+GyBCUDUyz1IQuuCBSYAF0/nCqv1Ab8qAAAAAElFTkSuQmCC"},18:function(e,t,n){e.exports=n(28)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),l=n.n(i),o=(n(26),n(9)),c=n(3),s=(n(27),n(4)),p=n(6),d=n(2);const m=d.b.div`
    position: absolute;
    left: 50%;
    top:25%;
    transform: translateX(-50%);
    /* margin-top: 40%; */
    z-index: -1;
`,g=d.b.div`
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
`,u=d.b.div`
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
`;var f=()=>{const e=Object(a.useRef)([]),t=Object(a.useRef)();return Object(a.useEffect)(()=>{s.a.to(e.current,{rotateY:e=>"+="+(360+10*e),z:e=>50*Math.sin(.5*e),duration:6,ease:"none",repeat:-1});const n=s.a.timeline({scrollTrigger:{trigger:t.current,start:"top 20%",end:"bottom center",scrub:!0}});e.current.forEach((e,t)=>{const n=18*t,a=6*t;s.a.set(e,{rotateY:n,z:a,y:0})}),n.to(e.current,{opacity:1,rotateY:0,z:0,ease:"power2.out",stagger:.05},0),n.to(e.current,{opacity:.7,y:e=>100*e,ease:"power2.out",stagger:.05},"<"),n.to(e.current,{rotateY:e=>18*e,z:e=>6*e,y:0,ease:"power2.inOut",stagger:.05},"+=0.3")},[]),r.a.createElement(m,null,r.a.createElement(g,null,Array.from({length:12}).map((t,n)=>r.a.createElement(u,{key:n,index:n,top:10*n,ref:t=>e.current[n]=t}))))};const b=d.c`
  0% {
    transform : translate3d(50%, 0, 0);
  }
  100% {
    transform : translate3d(-100%, 0, 0);
  }
`,h=d.b.div`
  position: relative;
  height: 100%;
  & *{
    color: #131313;
  }
`,x=d.b.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 7.25rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  padding: 48vh 0 4rem 0;
  @media (max-width: 786px) {
    font-size: 3.75rem;
    padding-bottom: 1rem;
  }
`,E=d.b.div`
  width: 80%;
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.5;
  & p{
    margin: 0;
    font-size: 0.938rem;
    letter-spacing: -0.54px;
    @media (max-width: 786px) {
      font-size: 0.75rem;
    }
  }
`,w=d.b.div`
  max-width: 100%;
  position: absolute;
  left: 50%;
  bottom:12%;
  transform: translate(-50%, 0); 
  overflow: hidden;
  background-color: #7f9fff;
`,v=d.b.ul`
  display: flex;
  font-size: 1rem;
  white-space:nowrap;
  animation: ${b} 16s linear infinite; 
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
      background-color: #fff;
    }
  }
  @media (max-width: 786px) {
    & li{
      padding: 0 1rem;
    }
  }
`;s.b.registerPlugin(p.a);var y=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null);Object(a.useEffect)(()=>{s.b.fromTo(e.current,{opacity:1,y:0},{opacity:0,y:-40,duration:1,scrollTrigger:{trigger:e.current,start:"20% top",scrub:!0}}),s.b.fromTo(t.current,{opacity:1,y:0},{opacity:0,y:40,duration:1,scrollTrigger:{trigger:t.current,start:"top 40%",scrub:!0}})},[]);const i=["Figma","Adobe Photoshop","Adobe Illustrator","HTML&CSS","JavaScript","React.js","SCSS","GitHub"];return r.a.createElement(h,null,r.a.createElement(f,null),r.a.createElement(x,{ref:e},"Portfolio"),r.a.createElement(E,{ref:n},r.a.createElement("p",null,"\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uae30\ud68d\ud558\uace0 \ub514\uc790\uc778\ud558\uba70 \ud37c\ube14\ub9ac\uc2f1\uc73c\ub85c \uc6f9 \uc0c1\uc5d0\uc11c \ub3d9\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c0\ub294 \ud654\uba74\uc744 \uad6c\ud604\ud558\uba70 \uc0c8\ub85c\uc6b4 \ucee8\ud150\uce20\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."),r.a.createElement("p",null,"\uc774\uc81c\ub294 \uae30\uc220\uacfc \ub514\uc790\uc778\uc744 \uacb0\ud569\ud55c \ucc3d\uc758\uc801\uc778 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4dc\ub294\ub370 \ub354\uc6b1 \uc9d1\uc911\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),r.a.createElement(w,null,r.a.createElement(v,{ref:t},i.concat(i).map((e,t)=>r.a.createElement("li",{key:t},e)))))};s.b.registerPlugin(p.a);d.b.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${e=>e.bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`,d.b.div`
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
`,d.b.ul`
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
`,d.b.div`
    text-align: left;
    & p{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        font-family:  "Gothic A1", sans-serif ;
    }
`,d.b.a`
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
`;s.a.registerPlugin(p.a);d.b.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`,d.b.div`
    display: flex;
    height: 100%;
    width: fit-content;
    padding: 0 6%;
    box-sizing: border-box;
`,d.b.div`
    min-width: 80vw;
    height: 75%;
    margin: auto 2vw;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(16px);
`,d.b.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0;
    z-index: 20;
`,d.b.div`
    width: 16px;
    height: ${e=>{let{active:t}=e;return t?"16px":"1px"}};
    border: 1px solid #131313;
    transition: all 0.3s;
`;s.a.registerPlugin(p.b);const A=d.b.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(228 228 228);
    overflow: hidden;
`,k=d.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 30;
`,z=d.b.div`
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
`,j=d.b.div`
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
`,O=d.b.p`
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  color: #d1d1d1;
`,C=Object(d.b)(O)`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`,B=Object(d.b)(O)`
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  color: #777;
`,I=d.b.a`
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
`,R=(d.b.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    border: 2px dashed #a7df00;
    box-shadow: 0 0 10px 180px #1717179c;
`,d.b.div`
    width: 7px;
    height: 7px;
    position: absolute;
    &.cuad1{top: -10px; left: -5px; }
    &.cuad2{top: -10px; right: 0px;}
    &.cuad3{bottom: 4px; left: -5px; }
    &.cuad4{bottom: 4px; right: 0px; }
`);var T=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null);return Object(a.useEffect)(()=>{s.a.fromTo(t.current,{opacity:0,height:0,filter:"blur(120px)"},{opacity:1,height:"100vh",filter:"blur(0px)",duration:1,scrollTrigger:{trigger:e.current,start:"top center",end:"bottom bottom",scrub:!0,ease:"power2.inOut",duration:2}})},[]),r.a.createElement(A,{ref:e},r.a.createElement(z,{ref:t}),r.a.createElement(k,null),r.a.createElement(j,{ref:n},r.a.createElement(C,null,"Thank you for staying with me until the end."),r.a.createElement(O,null,"With expertise in creative UI/UX design and web publishing,",r.a.createElement("br",null)," I deliver user-centered and innovative web experiences."),r.a.createElement(I,{href:"https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df",target:"_blank"},Array.from({length:4}).map((e,t)=>r.a.createElement(R,{key:t,className:"cuad"+(t+1)},"+")),"Notion"),r.a.createElement(B,null,"\xa9 2025. All rights reserved")))};n.p;const F=d.b.div`
    /* position: fixed;
    right: 1rem;
    top: 1rem; */
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -1px;
    .title{
        margin-right: 0.25rem;
    }
`;var U=()=>{const[e,t]=Object(a.useState)(new Date);Object(a.useEffect)(()=>{const e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]);return r.a.createElement(F,null,r.a.createElement("span",{className:"title"},"Date")," ",e.toLocaleString("en-US",{weekday:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/,/g,""))};const S=d.b.div`
    display: flex;
    gap: 2.5rem;
    @media (max-width: 786px) {
        gap: 1rem;
    }
`,_=Object(d.b)(o.b)`
    text-decoration: none;
    color: #222;
    position: relative;

    &.active {
        color:#7f9fff;
        font-weight: bold;
    }
    &:hover, &.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 100%;
        background: #7f9fff;
        transition: width 0.5s ease-in-out;
    }
`;var P=function(){const e=Object(c.m)();return r.a.createElement(S,null,[{name:"About",linkTo:"/"},{name:"Work",linkTo:"/projectFinance"}].map((t,n)=>r.a.createElement(_,{to:t.linkTo,key:n,className:e.pathname===t.linkTo?"active":""},t.name)))};const Q=d.b.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 2rem;
    background-color: #ffffff9c;
    backdrop-filter:blur(3px);
    box-sizing: border-box;
    overflow: hidden;
    z-index: 999;
    @media (max-width: 786px) {
        padding:1.5rem 1rem;
    }
`;var Y=function(){return r.a.createElement(Q,null,r.a.createElement(U,null),r.a.createElement(P,null))};n.p;n.p;n.p;n.p;n.p;var N,L;n.p;function X(){return(X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(null,arguments)}const $=e=>{let{svgRef:t,title:n,...a}=e;return r.a.createElement("svg",X({width:20,height:24,viewBox:"0 0 20 24",fill:"none",ref:t},a),n?r.a.createElement("title",null,n):null,N||(N=r.a.createElement("g",{clipPath:"url(#clip0_871_191)"},r.a.createElement("path",{d:"M1.50023 16.5L6.82865 21.8284C7.5788 22.5786 8.59622 23 9.65708 23H15.0002C17.2094 23 19.0002 21.2091 19.0002 19V13.1118C19.0002 12.4304 18.6153 11.8075 18.0058 11.5028C17.3728 11.1863 16.6277 11.1863 15.9946 11.5028L15.3282 11.836C15.1369 11.9317 14.9048 11.8807 14.7712 11.7137L14.3737 11.2169C13.6696 10.3367 12.3309 10.3367 11.6267 11.2169C11.419 11.4766 11.0002 11.3297 11.0002 10.9971V3C11.0002 1.89543 10.1048 1 9.00023 1C7.89566 1 7.00023 1.89543 7.00023 3V15.0525C7.00023 15.4022 6.5775 15.5773 6.33027 15.33L4.50023 13.5C3.6718 12.6716 2.32865 12.6716 1.50023 13.5C0.6718 14.3284 0.671799 15.6716 1.50023 16.5Z",stroke:"white",strokeWidth:1.5,strokeLinecap:"round"}))),L||(L=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0_871_191"},r.a.createElement("rect",{width:20,height:24,fill:"white"})))))},D=r.a.forwardRef((e,t)=>r.a.createElement($,X({svgRef:t},e)));n.p;const Z=d.c`
    0% { transform: translateY(0); }
    50% { transform: translateY(6px); }
    100% { transform: translateY(0); }
`,H=d.b.div`
    perspective: 1000px;
    width: 100%;
    height: 100%;
    min-height: 320px;
`,q=d.b.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${H}:hover & {
        transform: rotateY(180deg);
    }
`,G=d.b.div`
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
    white-space: pre-line;
    word-break: keep-all;
    box-sizing: border-box;
    & svg{
        width: 14px;
        transform-style: preserve-3d;
        animation: ${Z} 1s ease-in-out infinite;
        margin-right: 6px;
    }
`,W=Object(d.b)(G)`
    background: #222;
    color:#fff;
    font-size: 0.938rem;
    line-height: 1.7;
`,M=Object(d.b)(G)`
    transform: rotateY(180deg);
    background: #7f9fff;
    font-size: 0.875rem;
    line-height: 1.5;
`,V=d.b.div`
    font-size: 0.75rem;
    margin-left: auto;
`;var J=()=>r.a.createElement(H,null,r.a.createElement(q,null,r.a.createElement(W,null,"\uc6f9\uc0ac\uc774\ud2b8 \uad6c\ucd95\ud560 \ub54c \ud0c0\uae43\uacfc \ubaa9\ud45c \uc124\uc815\ubd80\ud130 \uc2dc\uc791\ud574 \ubca4\uce58\ub9c8\ud0b9\uc744 \ud1b5\ud574 \ubc29\ud5a5\uc131\uc744 \uc7a1\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uba54\ub274 \uad6c\uc131\uacfc \uc0ac\uc774\ud2b8\ub9f5, \uc2a4\ud1a0\ub9ac\ubcf4\ub4dc\ub97c \ubc14\ud0d5\uc73c\ub85c \uad6c\uc870\ub97c \uc124\uacc4\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4. \ub514\uc790\uc778\uc740 \uceec\ub7ec\uc640 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c \ub4f1\uc744 \uc815\uc758\ud558\uc5ec \ub514\uc790\uc778 \uac00\uc774\ub4dc\ub97c \uc124\uc815\ud558\uace0 \ucee8\uc149\uc744 \uad6c\uccb4\ud654\ud558\uc5ec \uc791\uc5c5\uc744 \ud569\ub2c8\ub2e4. \uc6f9\ud45c\uc900\uacfc \uc811\uadfc\uc131\uc744 \uace0\ub824\ud55c \uc2dc\ub9e8\ud2f1 \ub9c8\ud06c\uc5c5\uacfc \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\ub97c \uc801\uc6a9\ud55c \ud6c4 \ub9c8\uc9c0\ub9c9\uc5d0\ub294 \ucef4\ud3ec\ub10c\ud2b8\ud654\ub97c \ud1b5\ud574 \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc720\uc9c0\ubcf4\uc218 \ud6a8\uc728\uc131\uc744 \ub192\uc600\uc2b5\ub2c8\ub2e4.",r.a.createElement(V,null,r.a.createElement(D,null),"\ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\ubcf4\uc138\uc694")),r.a.createElement(M,null,"When building a website, I start by defining the target audience and project goals, then establish the overall direction through benchmarking. Next, I design the structure based on menu configuration, sitemaps, and storyboards. For the design phase, I set up a style guide by defining colors and typography to refine the concept. After applying semantic markup and style guidelines with web standards and accessibility in mind, I finish by componentizing the code to enhance reusability and maintainability.",r.a.createElement("p",{className:"lang"},"\u5728\u8fdb\u884c\u7f51\u7ad9\u5efa\u8bbe\u65f6\uff0c\u6211\u9996\u5148\u8bbe\u5b9a\u76ee\u6807\u53d7\u4f17\u548c\u9879\u76ee\u76ee\u6807\uff0c\u5e76\u901a\u8fc7\u57fa\u51c6\u5206\u6790\u786e\u5b9a\u6574\u4f53\u65b9\u5411\u3002\u63a5\u7740\uff0c\u6839\u636e\u83dc\u5355\u5e03\u5c40\u3001\u7ad9\u70b9\u5730\u56fe\u548c\u6545\u4e8b\u677f\u8bbe\u8ba1\u7f51\u7ad9\u7ed3\u6784\u3002\u8bbe\u8ba1\u9636\u6bb5\uff0c\u6211\u901a\u8fc7\u5b9a\u4e49\u989c\u8272\u548c\u6392\u7248\u7b49\u8981\u7d20\u6765\u5236\u5b9a\u8bbe\u8ba1\u89c4\u8303\u5e76\u7ec6\u5316\u6982\u5ff5\u3002\u5728\u9075\u5faa\u7f51\u9875\u6807\u51c6\u548c\u53ef\u8bbf\u95ee\u6027\u8981\u6c42\u7684\u524d\u63d0\u4e0b\uff0c\u5e94\u7528\u8bed\u4e49\u5316\u6807\u8bb0\u548c\u6837\u5f0f\u6307\u5bfc\uff0c\u6700\u540e\u901a\u8fc7\u7ec4\u4ef6\u5316\u63d0\u5347\u4ee3\u7801\u7684\u590d\u7528\u6027\u548c\u7ef4\u62a4\u6548\u7387\u3002"))));const K=d.c`
    0% { transform: rotateZ(0); }
    20% { transform: rotateZ(5deg); }
    40% { transform: rotateZ(-5deg); }
    60% { transform: rotateZ(5deg); }
    80% { transform: rotateZ(-5deg); }
    100% { transform: rotateZ(0); }
`,ee=["0s","3s","6s","9s","12s"],te=d.b.div`
    & svg{
        @media (max-width: 786px) {
            width:64px;
        }
    }
`,ne=d.b.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:4rem 0;
`,ae=d.b.div`
    width: 80%;
    max-width: 1440px;
    min-width: 320px;
`,re=d.b.p`
    font-size: 3rem;
    font-weight: 900;
    font-family: "Gothic A1", sans-serif;
    margin: 0;
    @media (max-width: 786px) {
        font-size: 2rem;
    }
`,ie=d.b.p`
    font-size: 1rem;
    font-family: "Gothic A1", sans-serif;
    margin:0 0 5rem 0;
    @media (max-width: 786px) {
        margin:0 0 2rem 0;
    }
`,le=(d.b.div`
    display: grid;
    grid-template-columns: 54% 40%;
    gap: 6%;
    box-sizing: border-box;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`,d.b.div`
    display: flex; 
`);Object(d.b)(le)`
    flex-direction: column;
    gap:2rem;
`,d.b.div`
    display: flex;
    align-items: center;
    gap:2rem;
    &:hover, &:focus{
        cursor: pointer;
        ${te}{
            transform-origin: center bottom;
            animation: ${K} 0.5s ease-in-out infinite;
            /* animation-delay: ${e=>{let{index:t}=e;return ee[t%ee.length]}}; */
        }
    }
`,d.b.div`
    font-size: 0.938rem;
    line-height: 1.2;
    & span{
        display: inline-block;
        margin-bottom: 1rem;
        font-weight: 700;
    }
`,d.b.div`
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
`,d.b.div`
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
`;s.b.registerPlugin(p.a);var oe=function(){const e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(a.useRef)(null),Object(a.useEffect)(()=>{s.b.fromTo(e.current,{opacity:0,y:40},{opacity:1,y:0,duration:1,scrollTrigger:{trigger:e.current,start:"top center",scrub:!0}}),s.b.fromTo(t.current,{opacity:0,x:100},{opacity:1,x:0,duration:1,scrollTrigger:{trigger:t.current,start:"top 80%",end:"85% 50%",scrub:!0}});s.b.utils.toArray(".list-item").forEach((e,t)=>{s.b.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.6,delay:.1*t,scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none none"}})})},[]),r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(re,{ref:e},"How I Work"),r.a.createElement(ie,{ref:e},"A step-by-step look into my approach to building accessible and efficient websites."),r.a.createElement(J,null)))},ce=n(15),se=n.n(ce);const pe=d.b.div`
  /* height: 100vh; */
  width: 100%;
`,de=Object(d.b)(pe)`
  height: 100vh;
  position: relative;
`,me=Object(d.b)(pe)`
    min-height:100vh;
    display:flex;
    align-items:center;
    background-image: url(${se.a});
    inset: 0px;
    background-repeat: repeat;
    background-position: left top;
    background-size: 8px;
`;d.b.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: 999;
    & svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 107px;
    };
    & .shape-fill {
      fill:#7f9fff;
    };
`;var ge=function(){return r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(de,null,r.a.createElement(y,null)),r.a.createElement(me,null,r.a.createElement(oe,null)),r.a.createElement(de,null,r.a.createElement(T,null)))},ue=n(16);const fe=d.b.div`
    position: absolute;
    margin: 8% 12%;
    max-width: 600px;
    font-size: 1rem;
`,be=d.b.div`
    position: absolute;
    top: 100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
`,he=d.b.div`
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
`,xe=d.b.div`
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
`,Ee=(d.b.button`
    background: none;
    border: 0 none ;
    padding: 0;
    margin: 0;
`,d.b.p`
   margin: 0;
`),we=d.b.ul`
   
`;s.b.registerPlugin(p.a,ue.a);const ve=d.b.div`
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
`;d.a`
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
`;function ye(){const e=Object(a.useRef)(null);return Object(a.useEffect)(()=>{let t="top top",n=0;const a=e.current.querySelector("#theCucas"),r=e.current.querySelectorAll(".legsL"),i=e.current.querySelectorAll(".legsR");s.b.set(".cuca",{autoAlpha:1,x:-100,scale:.8,transformOrigin:"center"});const l=s.b.timeline({scrollTrigger:{trigger:a,pin:!0,scrub:.6,start:()=>t,end:"+=400%",markers:!0,onUpdate:e=>{n=-1===e.direction?180:0},onRefresh:()=>{t=window.innerHeight<600?"top top-=200":"top top",p.a.update()}}});return l.to(".cuca",{motionPath:{path:"M -100 100 Q 100 0 200 100 Q 300 300 350 100 Q 350 50 100 100 Q 350 250 400 0 C 500 200 550 150 750 50",alignOrigin:[.5,.5],autoRotate:!0},duration:4,ease:"none",onUpdate(){n&&this.targets().forEach(e=>s.b.set(e,{rotation:s.b.getProperty(e,"rotation")+n}))}}).to(r,{rotation:40,transformOrigin:"80% 10px",duration:.02,stagger:.005,repeat:160,yoyo:!0},.1).to(i,{rotation:-40,transformOrigin:"80% 10px",duration:.02,stagger:.005,repeat:160,yoyo:!0},.115),s.b.utils.toArray(e.current.querySelectorAll("span")).forEach(e=>{p.a.create({trigger:e,start:"top 30%",onEnter:()=>s.b.set(e,{color:"#a22525"})})}),()=>{p.a.getAll().forEach(e=>e.kill()),l.kill()}},[]),r.a.createElement(ve,null,r.a.createElement(be,{ref:e},r.a.createElement("svg",{id:"theCucas",viewBox:"0 0 600 400"},r.a.createElement("path",{id:"mask",d:"M 270 250 C 150 200 100 50 300 50 Q 550 50 450 250 C 340 300 500 350 350 350 Q 50 350 270 250",fill:"#929292",stroke:"none"}))),r.a.createElement(fe,null,r.a.createElement(he,null,"\ub300\uc2dc\ubcf4\ub4dc"),r.a.createElement(Ee,null,"\uac1c\uc778 \uc790\uc0b0 \uad00\ub9ac \ub300\uc2dc\ubcf4\ub4dc\ub294 \uae30\uc874 \ubd80\ub3d9\uc0b0 \uc911\uac1c \uc11c\ube44\uc2a4\uc5d0\uc11c \ud655\uc7a5\ub41c \uc790\uc0b0\uad00\ub9ac \ud50c\ub7ab\ud3fc\uc73c\ub85c, \uae30\uc874 \ubd80\ub3d9\uc0b0 \uac70\ub798 \uc218\uc218\ub8cc \uc678\uc5d0\ub3c4 \ub300\ucd9c\uc911\uac1c, \ubcf4\ud5d8, \ud22c\uc790 \uc0c1\ud488\ud310\ub9e4 \ub4f1 \uc0c8\ub85c\uc6b4 \uc218\uc775\uc6d0\uc744 \ucc3d\ucd9c\ud560 \uc218\uc788\ub3c4\ub85d \uace0\uac1d\uc774 \ubd80\ub3d9\uc0b0\uc744 \uad6c\ub9e4\ud560 \ub54c \uae08\uc735 \uc11c\ube44\uc2a4(\uc8fc\ud0dd\ub2f4\ubcf4\ub300\ucd9c, \uc804\uc138\ub300\ucd9c, \uc2e0\uc6a9\ub300\ucd9c \ub4f1)\uac00 \ud544\uc694\ud558\ubbc0\ub85c, \uc6d0\uc2a4\ud1b1 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uae08\uc735\uc0c1\ud488\uc744 \ud568\uaed8 \uc81c\uacf5\ud558\uba74 \uace0\uac1d\uc774 \ud50c\ub7ab\ud3fc\uc5d0 \uba38\ubb34\ub294 \uc2dc\uac04\uc774 \ub298\uc5b4\ub098\uace0 \uc7ac\ubc29\ubb38 \ucda9\uc131\ub3c4\ub97c \ub192\uc77c\uc218\uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ubd80\ub3d9\uc0b0\uc744 \ud3ec\ud568\ud55c \uac1c\uc778 \uc790\uc0b0\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4, \uae08\uc735 \ub370\uc774\ud130\ub97c \uc9c1\uad00\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc790\uc2e0\uc758 \uc7ac\ubb34 \uc0c1\ud0dc\ub97c \uc27d\uac8c \ud30c\uc545\ud558\uace0, \ub354 \ub098\uc740 \uc7ac\uc815\uc801 \uacb0\uc815\uc744 \ub0b4\ub9b4 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ud588\uc2b5\ub2c8\ub2e4."),r.a.createElement(xe,null,"\ub300\uc0c1 \uc0ac\uc6a9\uc790 \ubc0f \uc8fc\uc694 \ubaa9\ud45c"),r.a.createElement(we,null,r.a.createElement("li",null,"\ub300\uc0c1 \uc0ac\uc6a9\uc790: \ub2e4\ubc29\uc744 \uc774\uc6a9\ud558\ub294 \uc77c\ubc18 \uace0\uac1d"),r.a.createElement("li",null,"\uc8fc\uc694 \ubaa9\ud45c",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uc0ac\uc6a9\uc790\uac00 \uc790\uc2e0\uc758 \uc790\uc0b0\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uc815\ubcf4 \uc81c\uacf5"),r.a.createElement("li",null," \ub300\ucd9c, \ud22c\uc790, \uc9c0\ucd9c \ub0b4\uc5ed \ub4f1\uc744 \uc9c1\uad00\uc801\uc73c\ub85c \ubd84\uc11d\ud560 \uc218 \uc788\ub294 \ub300\uc2dc\ubcf4\ub4dc \uad6c\uc131"),r.a.createElement("li",null," \ubd80\ub3d9\uc0b0 \uac70\ub798\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc790\uc0b0\uad00\ub9ac \uc11c\ube44\uc2a4\uae4c\uc9c0 \ud655\uc7a5\ud558\ub294 \uc5f0\uacb0\uc131 \uc81c\uacf5")))),r.a.createElement(xe,null,"UX \uc124\uacc4 \ubc29\ud5a5"),r.a.createElement(we,null,r.a.createElement("li",null,"\ub370\uc774\ud130 \uc2dc\uac01\ud654 \uc911\uc2ec",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null," \uc0ac\uc6a9\uc790\uc758 \uae08\uc735 \ub370\uc774\ud130\ub97c \uc774\ud574\ud558\uae30 \uc27d\ub3c4\ub85d \uadf8\ub798\ud504 \ubc0f \ube44\uc8fc\uc5bc \uc694\uc18c \ud65c\uc6a9"),r.a.createElement("li",null,"\uc790\uc0b0 \ubd84\uc11d, \uc9c0\ucd9c \ubd84\uc11d \ub4f1 \ucc28\ud2b8 \uae30\ubc18\uc758 UI \uad6c\uc131\uc73c\ub85c \uac00\ub3c5\uc131 \uac15\ud654"),r.a.createElement("li",null," \uc22b\uc790 \uae30\ubc18\uc758 \uc815\ubcf4(\uc608: KOSPI \uc9c0\uc218, \uc21c\uc790\uc0b0)\ub97c \uac15\uc870\ud558\uc5ec \uc815\ubcf4 \uc804\ub2ec\ub825 \uadf9\ub300\ud654"))),r.a.createElement("li",null,"\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\ud575\uc2ec \uc815\ubcf4(\uc790\uc0b0, \ub300\ucd9c, \ud22c\uc790) \uc6b0\uc120 \ubc30\uce58\ub85c \ube60\ub978 \uc815\ubcf4 \ud655\uc778 \uac00\ub2a5"),r.a.createElement("li",null,"\ucd5c\uadfc \uac70\ub798 \ub0b4\uc5ed, \ub300\ucd9c \ud604\ud669 \ub4f1\uc744 \uadf8\ub8f9\ud654\ud558\uc5ec \uc0ac\uc6a9\uc790\uc758 \ubaa9\ud45c \uc911\uc2ec \uc124\uacc4"),r.a.createElement("li",null,"\ubcf5\uc7a1\ud55c \uae08\uc735 \uc6a9\uc5b4 \uc5c6\uc774 \uc9c1\uad00\uc801\uc778 \uc544\uc774\ucf58\uacfc \uc0c9\uc0c1\uc73c\ub85c \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5")))),r.a.createElement(xe,null,"\ubd80\ub3d9\uc0b0\uc790\uc0b0 \uc5f0\uacb0 \ubd80\ub3d9\uc0b0 \uc11c\uce58\ud654\uba74_2025 \ucd94\uac00\ud654\uba74 \uc791\uc5c5\uc911"),r.a.createElement("img",{src:"https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F3a4ad521-a6e3-4995-a040-e7cf405d8698%2F%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF_%E1%84%87%E1%85%AE%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A1%E1%86%AB_%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_2025_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8.jpg/size/w=1420?exp=1744879467&sig=s9118VHr_6hIXcW3uqEeLmkndQ63atOe5-5n52HhUPA&id=1c07cdfc-3fd0-80dd-b876-c6e253d9cea7&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf",alt:"\u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab\u110c\u1161\u1109\u1161\u11ab \u110b\u1167\u11ab\u1100\u1167\u11af \u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab \u1109\u1165\u110e\u1175\u1112\u116a\u1106\u1167\u11ab_2025 \u110e\u116e\u1100\u1161\u1112\u116a\u1106\u1167\u11ab \u110c\u1161\u11a8\u110b\u1165\u11b8.jpg"}),r.a.createElement(xe,null,"UI \ub514\uc790\uc778 \uc811\uadfc\ubc95 "),r.a.createElement(we,null,r.a.createElement("li",null,"\ub2e4\ubc29 \ube0c\ub79c\ub4dc \uceec\ub7ec \uc720\uc9c0",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uae30\uc874 \ub2e4\ubc29\uc758 \ube0c\ub79c\ub4dc \uceec\ub7ec(\ube14\ub8e8 \uacc4\uc5f4)\ub97c \ud65c\uc6a9\ud558\uc5ec \uc77c\uad00\uc131 \uc720\uc9c0"),r.a.createElement("li",null,"\uc2e0\ub8b0\uac10\uc744 \uc8fc\ub294 \uae08\uc735 \uc11c\ube44\uc2a4 \ud2b9\uc131\uc744 \ubc18\uc601\ud55c \ub514\uc790\uc778 \uad6c\uc131"))),r.a.createElement("li",null,"\ubaa8\ub358\ud558\uace0 \uae54\ub054\ud55c \ub808\uc774\uc544\uc6c3",r.a.createElement("ul",{className:"ulDepth"},r.a.createElement("li",null,"\uc0ac\uc774\ub4dc\ubc14\ub97c \ud65c\uc6a9\ud55c \uba85\ud655\ud55c \ub0b4\ube44\uac8c\uc774\uc158 \uad6c\uc870"),r.a.createElement("li",null,"\uac01 \uc139\uc158\uc744 \uce74\ub4dc \ud615\ud0dc\ub85c \uad6c\ubd84\ud558\uc5ec \uac00\ub3c5\uc131\uacfc \uc815\ubcf4 \uc811\uadfc\uc131 \ud5a5\uc0c1"),r.a.createElement("li",null,"\uc911\uc694 \ub370\uc774\ud130\ub294 \uceec\ub7ec \ubc0f \ud3f0\ud2b8 \ud06c\uae30\ub85c \uac15\uc870\ud558\uc5ec \uc815\ubcf4 \uc804\ub2ec\ub825 \uc99d\ub300")))),r.a.createElement(xe,null,"\uc11c\ube44\uc2a4 \ud654\uba74 _ \ud37c\ube14\ub9ac\uc2f1\uc644\uc131\ud654\uba74"),r.a.createElement("img",{src:"https://img.notionusercontent.com/s3/prod-files-secure%2F99c97ace-b538-4cd2-8c61-e51712845945%2F49f12098-ce94-4ae0-94d5-a964f7b3fe3b%2F%E1%84%83%E1%85%A1%E1%84%87%E1%85%A1%E1%86%BC_Web_index.jpg/size/w=1080?exp=1744881992&sig=OKHlC0NIQ45dPX9BpQiysMqc-Z1ABUUde_zm5qGGcfY&id=1bf7cdfc-3fd0-803d-b1ed-e375f1680ad0&table=block&userId=194d872b-594c-815d-8cac-0002e6a17edf",alt:"\u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab\u110c\u1161\u1109\u1161\u11ab \u110b\u1167\u11ab\u1100\u1167\u11af \u1107\u116e\u1103\u1169\u11bc\u1109\u1161\u11ab \u1109\u1165\u110e\u1175\u1112\u116a\u1106\u1167\u11ab_2025 \u110e\u116e\u1100\u1161\u1112\u116a\u1106\u1167\u11ab \u110c\u1161\u11a8\u110b\u1165\u11b8.jpg"}),r.a.createElement(xe,null,"\ucc28\ubcc4\uc810 \ubc0f \uae30\ub300 \ud6a8\uacfc"),r.a.createElement(we,null,r.a.createElement("li",null,"\uae30\uc874 \ubd80\ub3d9\uc0b0 \uc11c\ube44\uc2a4\uc5d0\uc11c \uae08\uc735\xb7\uc790\uc0b0\uad00\ub9ac\ub85c\uc758 \ud655\uc7a5\uc744 \ubc18\uc601\ud55c \ub300\uc2dc\ubcf4\ub4dc "),r.a.createElement("li",null,"\ub370\uc774\ud130 \uc2dc\uac01\ud654 \uc911\uc2ec UI/UX\ub85c \ubcf5\uc7a1\ud55c \uae08\uc735 \uc815\ubcf4\uc758 \uc9c1\uad00\uc801 \uc774\ud574 \uac00\ub2a5"),r.a.createElement("li",null,"\ube0c\ub79c\ub4dc \uc815\uccb4\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c\ub3c4, \ud655\uc7a5 \uac00\ub2a5\ud55c \uae08\uc735 \uc11c\ube44\uc2a4 \uacbd\ud5d8 \uc81c\uacf5"))))}var Ae=function(){return r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(ge,null)}),r.a.createElement(c.a,{path:"/projectFinance",element:r.a.createElement(ye,null)})))};var ke=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:i,getTTFB:l}=t;n(e),a(e),r(e),i(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null))),ke()}},[[18,1,2]]]);
//# sourceMappingURL=main.c6b84260.chunk.js.map