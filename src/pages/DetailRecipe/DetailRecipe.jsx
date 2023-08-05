import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DETAIL_RECIPE_LIST } from 'constants/recipe';
import { getDetailRecipe } from 'apis/request/recipe';

import { BackIcon, FormContainer } from './DetailRecipe.styled';
import MenuRecipe from '../../components/DetailRecipe/MenuRecipe';
import { IngredientBlock } from '../../components/IngredientBlock/IngredientBlock';
import { ToggleRecipeReview } from '../../components/ToggleRecipeReview/ToggleRecipeReview';

const DetailRecipe = () => {
  const { id } = useParams();
  const [detailRecipe, setDetailRecipe] = useState([]);

  useEffect(() => {
    getDetailRecipe(id).then((res) => setDetailRecipe(res.data.result));
  }, []);

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
      <IngredientBlock mainTitle={'주재료'} detailRecipe={detailRecipe} />
      <IngredientBlock mainTitle={'보조재료'} detailRecipe={detailRecipe} />
      <IngredientBlock mainTitle={'양념'} detailRecipe={detailRecipe} />
      <ToggleRecipeReview />
    </FormContainer>
  );
};

export default DetailRecipe;
