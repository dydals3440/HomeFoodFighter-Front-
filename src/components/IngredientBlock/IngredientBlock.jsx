import React from 'react';

import * as S from './IngredientBlock.styles';

import { INGREDIENT_ICON, INGREDIENT_ID } from 'constants/ingredient';

const findValidIcon = (ingreId) => {
  for (let i = 0; i < INGREDIENT_ICON.length; i++) {
    if (INGREDIENT_ICON[i][INGREDIENT_ID[ingreId]]) {
      return INGREDIENT_ICON[i][INGREDIENT_ID[ingreId]];
    }
  }
  return null;
};

const IngredientBlock = (props) => {
  const { mainTitle, ingredient } = props;

  return (
    <S.Container>
      <p>{mainTitle}</p>
      <S.IngredientBox>
        {ingredient.map((ingre, idx) => {
          const selectedIcon = findValidIcon(ingre.ingre_id);
          return (
            <S.Ingredient key={idx}>
              {selectedIcon}
              <h5>{ingre.ingre_name}</h5>
              <h5>{ingre.amount}</h5>
            </S.Ingredient>
          );
        })}
      </S.IngredientBox>
    </S.Container>
  );
};

export default IngredientBlock;
