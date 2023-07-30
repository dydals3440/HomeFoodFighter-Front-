import React from 'react';

import MenuRecipe from '../../components/DetailRecipe/MenuRecipe';
import { IngredientBlock } from '../../components/IngredientBlock/IngredientBlock';
import { FormContainer } from './DetailRecipe.styled';
import { ToggleRecipeReview } from '../../components/ToggleRecipeReview/ToggleRecipeReview';

export default function DetailRecipe() {
  return (
    <FormContainer>
      <MenuRecipe />
      <IngredientBlock mainTitle={'주재료'} />
      <IngredientBlock mainTitle={'보조재료'} />
      <IngredientBlock mainTitle={'양념'} />
      <ToggleRecipeReview />
    </FormContainer>
  );
}
