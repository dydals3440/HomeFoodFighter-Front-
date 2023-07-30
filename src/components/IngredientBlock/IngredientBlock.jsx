import React from 'react';
import * as S from './IngredientBlock.styles';

export const IngredientBlock = (props) => {
  return (
    <S.Container>
      <p>{props.mainTitle}</p>
      <S.IngredientBox>
        {/* API받고 이부분을 반복 MAP */}
        <S.Ingredient>
          <S.Image src="https://svgsilh.com/svg/1299318.svg" alt="재료 사진" />
          {/* && 연산자 API찾고 사용 있을시 없을시 */}
          <h5>양상추</h5>
          <h5>반개</h5>
        </S.Ingredient>
      </S.IngredientBox>
    </S.Container>
  );
};
