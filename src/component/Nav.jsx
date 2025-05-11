import React from "react";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Navigation = styled.div`
    display: flex;
    padding:7px 0.5rem;
    border:1px solid #222;
    border-radius: 50px;
    @media (max-width: 786px) {
    }
`;

const LinkStyled = styled(Link)`
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
`;


function Nav() {

    const location = useLocation();

    const menu = [
        { name: "About", linkTo: "/", target:"_self" },
        { name: "Notion", linkTo: "https://www.notion.so/UI-UX-Designer-Web-publisher-1957cdfc3fd0802ba4abf011c0a587df", target:"_blank" },
    ];

 

    return (
        <Navigation>
        {menu.map((item, index) => (
            <LinkStyled
                to={item.linkTo}
                key={index}
                className={location.pathname === item.linkTo ? "active" : ""}
                target={item.target}
            >
            {item.name}
            </LinkStyled>
        ))}
        </Navigation>
    );
}

export default Nav;
