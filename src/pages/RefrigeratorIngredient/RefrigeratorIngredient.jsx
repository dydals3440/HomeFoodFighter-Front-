import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RefrigeratorIngredient.styles';

import {FiChevronLeft} from "react-icons/fi";
import Apple from '../../assets/Apple.svg';
import RefrigeratorIcon from '../../assets/RefrigeratorIcon.svg';


export default function RefrigeratorIngredient() {
  const movePage = useNavigate();
  function Moveback(){
      movePage(-1);
    }
  
    const items = [
      { id: 1, src: Apple, name: "사과" },
      { id: 2, src: RefrigeratorIcon, name: "냉장고"  },
      { id: 3, src: Apple },
      { id: 4, src: RefrigeratorIcon },
      { id: 5, src: RefrigeratorIcon },
      { id: 6, src: RefrigeratorIcon },
      { id: 7, src: RefrigeratorIcon },
      { id: 8, src: Apple },
      { id: 9, src: RefrigeratorIcon },
      { id: 10, src: Apple },
      { id: 11, src: RefrigeratorIcon },
      { id: 12, src: RefrigeratorIcon },
      { id: 13, src: RefrigeratorIcon },
      { id: 14, src: RefrigeratorIcon },
      { id: 15, src: RefrigeratorIcon },
      { id: 16, src: Apple },
      { id: 17, src: RefrigeratorIcon },
      { id: 18, src: RefrigeratorIcon },
      { id: 19, src: RefrigeratorIcon },
      { id: 20, src: RefrigeratorIcon },
      { id: 21, src: RefrigeratorIcon },
      { id: 22, src: Apple },
      { id: 23, src: RefrigeratorIcon },
      { id: 24, src: RefrigeratorIcon },
      { id: 25, src: RefrigeratorIcon },
      { id: 26, src: RefrigeratorIcon },
      { id: 11, src: RefrigeratorIcon },
      { id: 12, src: RefrigeratorIcon },
      { id: 13, src: RefrigeratorIcon },
      { id: 14, src: RefrigeratorIcon },
      { id: 15, src: RefrigeratorIcon },
      { id: 16, src: Apple },
      { id: 17, src: RefrigeratorIcon },
      { id: 18, src: RefrigeratorIcon },
      { id: 19, src: RefrigeratorIcon },
      { id: 16, src: Apple },
      { id: 17, src: RefrigeratorIcon },
      { id: 18, src: RefrigeratorIcon },
      { id: 19, src: RefrigeratorIcon }

    ];

  return (
    <div>
    <S.NaviBar>
      <FiChevronLeft onClick={Moveback} size = "35"/>
      채소/과일
      <div style={{width: '55px'}}/>
    </S.NaviBar>
    
    <S.IngredientContainer>
    <S.IngredientGridContainer>
      {items.map((item) => (
        <S.Ingredient key={item.id}>
        <img src={item.src} alt={`Item ${item.id}`}/>
        <S.IngredientName>{item.name}</S.IngredientName>
      </S.Ingredient>
      ))}
    </S.IngredientGridContainer>
    </S.IngredientContainer>
    <div style={{margin: 10, position: 'relative', left: '28%', width: 327, height: 44, background: '#C8E293', borderRadius: 30}} onClick={Moveback}>
    <S.IngredientSaveBtnText>
    저장하기
    </S.IngredientSaveBtnText>
    </div>
    </div>
  );
}
