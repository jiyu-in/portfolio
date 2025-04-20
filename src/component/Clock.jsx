import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeDataStyled = styled.div`
    position: fixed;
    right: 1rem;
    top: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -1px;
    .title{
        margin-right: 0.25rem;
    }
`;


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
    return () => clearInterval(timer);
}, []);

const formatDateTime = (date) => {
    const options = {
        //timeZoneName: 'short',
        weekday: 'short',   // Mon, Tue, ...
        //year: 'numeric',
        //month: 'short',     // Jan, Feb, ...
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false       // 24시간 형식
    };

    return date.toLocaleString('en-US', options).replace(/,/g, '');
};

return (
    <TimeDataStyled><span className="title">Date</span> {formatDateTime(time)}</TimeDataStyled>
);
};

export default Clock;
