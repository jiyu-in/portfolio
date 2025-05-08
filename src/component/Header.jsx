import React from "react";
import Clock from "./Clock";
import styled  from 'styled-components';
import Nav from "./Nav";

const Root = styled.div`
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
`;


function Header() {
  return (
    <Root>
        <Clock/>
        <Nav/>
    </Root>
  );
}

export default Header;
