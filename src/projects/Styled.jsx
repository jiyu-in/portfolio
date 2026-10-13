import styled from 'styled-components';


export const Contents = styled.div`
    position: absolute;
    margin: 8% 12%;
    max-width: 600px;
    font-size: 1rem;
`;

export const Section = styled.div`
    position: absolute;
    top: 100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const TitleStyle = styled.div`
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
`;
export const SubTitleStyle = styled.div`
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
`;
export const ButtonStyled = styled.button`
    background: none;
    border: 0 none ;
    padding: 0;
    margin: 0;
`;


// export const SubTitleStyle = styled.h3`
//    color:#ab6c35;
//    &::before{
//     content: "-";
//     margin-right: 8px;
//    }
// `;

export const DescStyle = styled.p`
   margin: 0;
`;
export const UlStyle = styled.ul`
   
`;


