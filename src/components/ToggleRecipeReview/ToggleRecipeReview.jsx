import React, { useCallback, useState } from 'react';
import * as S from './ToggleRecipeReview.styles';
import { Button } from '../Button/Button';
import { RecipeExplanation } from '../RecipeExplanation/RecipeExplanation';
import { ReviewContent } from '../ReviewContent/ReviewContent';

export const ToggleRecipeReview = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const order = props.order;

  const handleChangeRecipe = useCallback((e) => {
    e.preventDefault();
    setIsToggled(false);
  }, []);

  const handleChangeReview = useCallback((e) => {
    e.preventDefault();
    setIsToggled(true);
  }, []);

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Button onClick={handleChangeRecipe}>레시피</S.Button>
        <S.Button onClick={handleChangeReview}>리뷰</S.Button>
      </S.ButtonContainer>
      {/* 별도 레시피 컴포넌트 나중에 API 완성시 동적 붙이기*/}
      {!isToggled && (
        <S.RecipeContainer>
          <RecipeExplanation order={order} />
        </S.RecipeContainer>
      )}
      {/* 리뷰 컨텐트 컴포넌트 나중에 API 동적 구현 */}
      {isToggled && (
        <S.ReviewContainer>
          <Button backgroundColor={'white'} color={'#a5ce55'} width="100%">
            리뷰 쓰기
          </Button>
          <ReviewContent />
        </S.ReviewContainer>
      )}
    </S.Container>
  );
};
