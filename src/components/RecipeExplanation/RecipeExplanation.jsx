import React from 'react';
import * as S from './RecipeExplanation.styles';

export const RecipeExplanation = () => {
  return (
    <S.RecipeBox>
      <S.RecipeImage src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" />
      <S.RecipeNumber>1</S.RecipeNumber>
      <S.RecipeDescription>
        양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어
        고슬고슬하게 밥을 짓는다. 양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후,
        불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.
      </S.RecipeDescription>
    </S.RecipeBox>
  );
};
