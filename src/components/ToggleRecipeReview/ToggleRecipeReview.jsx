import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ToggleRecipeReview.styles';
import Button from '../Button/Button';
import { RecipeExplanation } from '../RecipeExplanation/RecipeExplanation';
import ReviewContent from '../ReviewContent/ReviewContent';

const ToggleRecipeReview = ({ order, id }) => {
  const [isToggled, setIsToggled] = useState('recipe');

  const handleChangeRecipe = useCallback((e) => {
    e.preventDefault();
    setIsToggled('recipe');
  }, []);

  const navigate = useNavigate();

  const handleNavigateToWriteReview = useCallback(() => {
    navigate(`/writereview/${id}`);
  }, [navigate]);

  const handleChangeReview = useCallback((e) => {
    e.preventDefault();
    setIsToggled('review');
  }, []);

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.RecipeButton
          onClick={handleChangeRecipe}
          active={isToggled === 'recipe'}
        >
          레시피
        </S.RecipeButton>
        <S.ReviewButton
          onClick={handleChangeReview}
          active={isToggled === 'review'}
        >
          리뷰
        </S.ReviewButton>
      </S.ButtonContainer>

      {isToggled === 'recipe' && (
        <S.RecipeContainer>
          <RecipeExplanation order={order} />
        </S.RecipeContainer>
      )}

      {isToggled === 'review' && (
        <S.ReviewContainer>
          <Button
            backgroundColor={'white'}
            color={'#a5ce55'}
            width="100%"
            onClick={handleNavigateToWriteReview}
          >
            리뷰 쓰기
          </Button>
          <ReviewContent />
        </S.ReviewContainer>
      )}
    </S.Container>
  );
};

export default ToggleRecipeReview;
