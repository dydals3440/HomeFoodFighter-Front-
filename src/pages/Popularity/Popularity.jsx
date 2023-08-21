import { useEffect, useState } from 'react';

import { getPopularRecipe } from 'apis/request/recipe';
import * as S from './Popularity.styles';

import Header from 'components/Header/Header';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import { RECIPE_LIST } from 'constants/recipe';
import useError from 'hooks/useError';

const Popularity = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const handleError = useError();
  useEffect(() => {
    getPopularRecipe()
      .then((res) => setPopularRecipes(res.data.result))
      .catch((e) => handleError(e));
  }, []);

  return (
    <>
      <Header>실시간 인기 레시피</Header>
      <S.RecipeList>
        {popularRecipes.slice(0, 10).map((recipe, idx) => (
          <S.BlockContainer key={`${idx}-recipe`}>
            <RecipeBlock recipe={recipe} />
            <S.Dot>{idx + 1}</S.Dot>
          </S.BlockContainer>
        ))}
      </S.RecipeList>
    </>
  );
};

export default Popularity;
