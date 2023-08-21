import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getDetailRecipe } from 'apis/request/recipe';

import { BackIcon, FormContainer } from './DetailRecipe.styled';
import MenuRecipe from '../../components/DetailRecipe/MenuRecipe';
import IngredientBlock from '../../components/IngredientBlock/IngredientBlock';
import ToggleRecipeReview from '../../components/ToggleRecipeReview/ToggleRecipeReview';
import useError from 'hooks/useError';

const DetailRecipe = () => {
  const { id } = useParams();
  const [detailRecipe, setDetailRecipe] = useState([]);
  const [recipeExplanation, setRecipeExplanation] = useState([]);
  const [mainIngredients, setMainIngredients] = useState([]);
  const [secondaryIngredients, setSecondaryIngredients] = useState([]);
  const [seasonings, setSeasonings] = useState([]);
  const [recipeOrder, setRecipeOrder] = useState([]);

  const handleError = useError();

  useEffect(() => {
    getDetailRecipe(id)
      .then((res) => {
        const result = res.data.result;
        setDetailRecipe(result);
        const recipeExplanation = result[0];
        const order = result[1];
        const mainIngredients = result[2]?.filter(
          (ingredient) => ingredient.DetailIngre_type === 1,
        );
        const secondaryIngredients = result[2]?.filter(
          (ingredient) => ingredient.DetailIngre_type === 2,
        );
        const seasonings = result[2]?.filter(
          (ingredient) => ingredient.DetailIngre_type === 3,
        );
        setRecipeExplanation(recipeExplanation);
        setMainIngredients(mainIngredients);
        setSecondaryIngredients(secondaryIngredients);
        setSeasonings(seasonings);
        setRecipeOrder(order);
      })
      .catch((e) => handleError(e));
  }, [id]);

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
      <MenuRecipe recipe={recipeExplanation} />

      <IngredientBlock mainTitle={'주재료'} ingredient={mainIngredients} />
      <IngredientBlock
        mainTitle={'보조재료'}
        ingredient={secondaryIngredients}
      />
      <IngredientBlock mainTitle={'양념'} ingredient={seasonings} />

      <ToggleRecipeReview order={recipeOrder} id={id} />
    </FormContainer>
  );
};

export default DetailRecipe;
