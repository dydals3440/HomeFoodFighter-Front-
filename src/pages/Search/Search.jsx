import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import * as S from './Search.styles';

import { requestGetPossibleRecipe } from 'apis/request/recipe';
import Header from 'components/Header/Header';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);

  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.has('ingredient_id')) navigate(-1);
    requestGetPossibleRecipe(searchParams.get('ingredient_id'))
      .then((res) => {
        setRecipeList(res.data.result);
      })
      .catch((e) => {
        alert('오류가 발생했습니다');
        navigate(-1);
      });
  }, []);
  return (
    <>
      <Header>요리보기</Header>
      <S.RecipeList>
        {recipeList.map((recipe, idx) => (
          <RecipeBlock key={`recipe-${idx}`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </>
  );
};

export default Search;
