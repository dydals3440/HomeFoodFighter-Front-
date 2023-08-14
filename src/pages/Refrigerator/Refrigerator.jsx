import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Refrigerator.styles';

import {FiChevronLeft} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";
import {ReactComponent as RefrigeratorPlusIcon} from '../../assets/RefrigeratorPlusIcon.svg';

export default function Refrigerator() {
  const movePage = useNavigate();
  function Moveback(){
      movePage(-1);
    }
  function MoveIngredient(){
      movePage("/Refrigerator/1");
    }

  return (
    <div>
    <S.NaviBar>
      <FiChevronLeft onClick={Moveback} size = "35"/>
      냉장고채우기 
      <RiDeleteBin6Line onClick={Moveback} size = "35"/>
    </S.NaviBar>

    <S.RefrigeratorContanier>
        <S.RefrigeratorBoxTop1 />
        <S.RefrigeratorBoxTop2 />
        <S.RefrigeratorBoxTop3 />
        <S.RefrigeratorBoxTop4 />
        <S.RefrigeratorBoxTop5 />
        <S.RefrigeratorBoxTop6 />


      <div style={{width: '93.3%', height: '7%', left: 0, top: '9.8%', position: 'absolute', background: '#678096'}} />

      <div style={{width: '93.6%', height: '153%', left: 0, top: 45, position: 'absolute', background: '#A5C5DE', border: '40px solid #A5C5DE', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} />
      <div style={{width: '84%', height: '143.2%', left: '5%', top: '16%', position: 'absolute', background: 'White'}}>
        <S.RefrigeratorFloor>
          <S.IngredientAddbtn>
            <RefrigeratorPlusIcon onClick={MoveIngredient} size = "30"/>
          </S.IngredientAddbtn>
          <S.RefrigeratorFloorText>채소/과일</S.RefrigeratorFloorText>
        </S.RefrigeratorFloor>
        <S.RefrigeratorFloor style={{left: 3, top: 111}}>
          <S.IngredientAddbtn>
            <RefrigeratorPlusIcon onClick={MoveIngredient} size = "30"/>
          </S.IngredientAddbtn>
          <S.RefrigeratorFloorText>쌀/면/잡곡/견과류</S.RefrigeratorFloorText>
        </S.RefrigeratorFloor>
        <S.RefrigeratorFloor style={{left: 3, top: 219}}>
          <S.IngredientAddbtn>
            <RefrigeratorPlusIcon onClick={MoveIngredient} size = "30"/>
          </S.IngredientAddbtn>
          <S.RefrigeratorFloorText>정육/계란/수산/해산/건어물</S.RefrigeratorFloorText>
        </S.RefrigeratorFloor>
        <S.RefrigeratorFloor style={{left: 3, top: 327}}>
          <S.IngredientAddbtn>
            <RefrigeratorPlusIcon onClick={MoveIngredient} size = "30"/>
          </S.IngredientAddbtn>
          <S.RefrigeratorFloorText>양념/오일</S.RefrigeratorFloorText>
        </S.RefrigeratorFloor>
        <S.RefrigeratorFloor style={{left: 3, top: 435}}>
          <S.IngredientAddbtn>
            <RefrigeratorPlusIcon onClick={MoveIngredient} size = "30"/>
          </S.IngredientAddbtn>
          <S.RefrigeratorFloorText>가공/유제품/기타</S.RefrigeratorFloorText>
        </S.RefrigeratorFloor>
      </div>
    </S.RefrigeratorContanier>
  </div>
  );
}
