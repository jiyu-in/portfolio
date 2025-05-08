import React from "react";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const Navigation = styled.div`
    display: flex;
    gap: 2.5rem;
    @media (max-width: 786px) {
        gap: 1rem;
    }
`;

const LinkStyled = styled(Link)`
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
`;

function Nav() {
    const location = useLocation();

    const menu = [
        { name: "About", linkTo: "/" },
        { name: "Work", linkTo: "/projectFinance" },
    ];

    return (
        <Navigation>
        {menu.map((item, index) => (
            <LinkStyled
            to={item.linkTo}
            key={index}
            className={location.pathname === item.linkTo ? "active" : ""}
            >
            {item.name}
            </LinkStyled>
        ))}
        </Navigation>
    );
}

export default Nav;
