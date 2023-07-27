import React from 'react';
import styled from 'styled-components';

const HeaderBefore = styled.div`
position: absolute;
left: 7.47%;
right: 89.39%;
top: 11.45%;
bottom: 86.08%;
background: #000000;
`;

const HeaderTitle = styled.div`
position: absolute;
width: 160px;
height: 20px;
left: 107px;
top: 95px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`;


const JjimHeader = () => {
    return(
        <div>
            <HeaderBefore>{'<'}</HeaderBefore>
            <HeaderTitle>찜한 레시피에서 선택하기</HeaderTitle>
        </div>
    );
}

export default JjimHeader;