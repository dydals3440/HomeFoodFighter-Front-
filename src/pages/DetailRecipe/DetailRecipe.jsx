import React from 'react';
import { useNavigate } from 'react-router-dom';

import MenuRecipe from '../../components/DetailRecipe/MenuRecipe';
import { IngredientBlock } from '../../components/IngredientBlock/IngredientBlock';
import { BackIcon, FormContainer } from './DetailRecipe.styled';
import { ToggleRecipeReview } from '../../components/ToggleRecipeReview/ToggleRecipeReview';

export default function DetailRecipe() {
  const navigate = useNavigate();
  const moveToPrev = () => {
    navigate(-1);
  };
  return (
    <FormContainer>
      <BackIcon
        className="back"
        onClick={moveToPrev}
        width="20"
        height="30"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
          fill="white"
        />
      </BackIcon>
      <MenuRecipe />
      <IngredientBlock mainTitle={'주재료'} />
      <IngredientBlock mainTitle={'보조재료'} />
      <IngredientBlock mainTitle={'양념'} />
      <ToggleRecipeReview />
    </FormContainer>
  );
}
