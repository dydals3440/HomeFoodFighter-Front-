import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './JjimRecipe.styled';
import Header from '../../components/Header/Header';
import RecipeBlock from '../../components/RecipeBlock/RecipeBlock';

import { getFavoritRecipe } from 'apis/request/recipe';

function FavoritRecipe() {
  const [favoritRecipe, setFavoritRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  const fetchData = async () => {
    try {
      const res = await getFavoritRecipe();
      setLoading(false);
      setFavoritRecipe(res.data.result);
    } catch (error) {
      setLoading(false);
      console.error('데이터를 받아오는데 실패했습니다.', error);
    }
  };

  return (
    <div>
      <Header>찜한 레시피</Header>
      <S.RecipeList>
        {favoritRecipe.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </div>
  );
}

export default FavoritRecipe;
