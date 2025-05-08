import React from "react";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const Root = styled.div`
    display: flex;
    gap: 2.5rem;
    @media (max-width: 786px) {
        gap: 1rem;
    }
`;


function Work() {
    const location = useLocation();

    const menu = [
        { name: "About", linkTo: "/" },
        { name: "Work", linkTo: "/projectFinance" },
    ];

    return (
        <Root>
        {menu.map((item, index) => (
            <LinkStyled
            to={item.linkTo}
            key={index}
            className={location.pathname === item.linkTo ? "active" : ""}
            >
            {item.name}
            </LinkStyled>
        ))}
        </Root>
    );
}

export default Work;
