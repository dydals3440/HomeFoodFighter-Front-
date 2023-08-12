import React from 'react';
import * as S from './IngredientBlock.styles';

const IngredientBlock = (props) => {
  const { mainTitle, ingredient } = props;

  return (
    <S.Container>
      <p>{mainTitle}</p>
      <S.IngredientBox>
        {ingredient.map((ingre, idx) => (
          <S.Ingredient key={idx}>
            <S.Image
              src="https://svgsilh.com/svg/1299318.svg"
              alt="재료 사진"
            />
            <h5>{ingre.ingre_name}</h5>
            <h5>{ingre.amount}</h5>
          </S.Ingredient>
        ))}
      </S.IngredientBox>
    </S.Container>
  );
};

export default IngredientBlock;
