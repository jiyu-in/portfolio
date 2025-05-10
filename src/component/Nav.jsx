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
    padding: 6px 0;
    position: relative;
    &.active {
        color:#7f9fff;
        font-weight: bold;
        border: 1px solid;
        border-width: 1px 0;
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
