import React, { useCallback, useState } from 'react';
import * as S from './ToggleRecipeReview.styles';
import Button from '../Button/Button';
import { RecipeExplanation } from '../RecipeExplanation/RecipeExplanation';
import ReviewContent from '../ReviewContent/ReviewContent';

const ToggleRecipeReview = (props) => {
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
        <S.RecipeButton onClick={handleChangeRecipe}>레시피</S.RecipeButton>
        <S.ReviewButton onClick={handleChangeReview}>리뷰</S.ReviewButton>
      </S.ButtonContainer>

      {!isToggled && (
        <S.RecipeContainer>
          <RecipeExplanation order={order} />
        </S.RecipeContainer>
      )}

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

export default ToggleRecipeReview;
