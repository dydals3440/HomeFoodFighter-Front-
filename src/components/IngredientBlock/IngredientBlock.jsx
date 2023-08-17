import React from 'react';

import * as S from './IngredientBlock.styles';

import { INGREDIENT_ICON, INGREDIENT_ID } from 'constants/ingredient';

const IngredientBlock = (props) => {
  const { mainTitle, ingredient } = props;

  return (
    <S.Container>
      <p>{mainTitle}</p>
      <S.IngredientBox>
        {ingredient.map((ingre, idx) => (
          <S.Ingredient key={idx}>
            {INGREDIENT_ICON[0][INGREDIENT_ID[ingre.ingre_id]]}
            <h5>{ingre.ingre_name}</h5>
            <h5>{ingre.amount}</h5>
          </S.Ingredient>
        ))}
      </S.IngredientBox>
    </S.Container>
  );
};

export default IngredientBlock;
