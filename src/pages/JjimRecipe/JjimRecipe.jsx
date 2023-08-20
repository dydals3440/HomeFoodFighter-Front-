import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

//import { RECIPE_LIST } from '../../constants/recipe';
import * as S from './JjimRecipe.styled';
import Header from '../../components/Header/Header';
import RecipeBlock from '../../components/RecipeBlock/RecipeBlock';
import { axiosWithToken } from 'apis/api';

import { getFavoritRecipe } from 'apis/request/recipe';

function JjimRecipe() {
  const navigate = useNavigate();
  const [favoritRecipes, setFavoritRecipes] = useState([]);

  // 찜한 레시피 정보를 가져오기
  const { data: favoritData } = useQuery(['favoritRecipes'], () =>
    getFavoritRecipe(),
  );

  // favoritData가 변경될 때마다 상태 변수를 업데이트
  useEffect(() => {
    if (favoritData) {
      setFavoritRecipes(favoritData.data.result);
    }
  }, [favoritData]);

  return(
    <div>
      <Header>
        찜한 레시피
      </Header>
      <S.RecipeList>
        {favoritRecipes.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </div>
  );
}


export default JjimRecipe;
