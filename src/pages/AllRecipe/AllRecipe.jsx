import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { getAllRecipe } from 'apis/request/recipe';

import * as S from './AllRecipe.styles';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import SearchHeader from 'components/SearchHeader/SearchHeader';

import koreanFood from '../../assets/AllRecipeKoreaIcon.svg';
import chineseFood from '../../assets/AllRecipeChinaIcon.svg';
import westernFood from '../../assets/AllRecipeWesternIcon.svg';
import dessert from '../../assets/AllRecipeDessertIcon.svg';
// import asianFood from 'assets/AllRecipeAsianIcon.svg';
// import fusionFood from 'assets/AllRecipeFusionIcon.svg';

const filters = ['전체', '한식', '중식', '양식', '아시안', '퓨전', '디저트'];

const filtersIcons = {
  전체: null,
  한식: koreanFood,
  중식: chineseFood,
  양식: westernFood,
  아시안: null,
  퓨전: null,
  디저트: dessert,
};

export default function AllRecipe() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filter, setFilter] = useState(filters[0]);
  const [loading, setLoading] = useState(true);
  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const res = await getAllRecipe();
      setLoading(false);
      setAllRecipe(res.data.result);
    } catch (error) {
      setLoading(false);
      console.error('데이터를 받아오는데 실패했습니다.', error);
    }
  };

  const filteredRecipes = allRecipe.filter(
    (recipe) => filter === '전체' || recipe.type_class === filter,
  );

  return (
    <S.Container>
      <SearchHeader
        containerBackGroundColor={'#fff'}
        inputContainerBackGroundColor={'#F5F6F1'}
        inputBackGroundColor={'#F5F6F1'}
        item={
          <S.NewDietBtn>
            <AiOutlinePlus />
          </S.NewDietBtn>
        }
      />
      <S.FilterWrapper>
        {filters.map((filter, idx) => (
          <S.FilterButton key={idx} value={filter} onClick={handleFilter}>
            {filtersIcons[filter] && (
              <img src={filtersIcons[filter]} alt={filter} />
            )}
            <h4>{filter}</h4>
          </S.FilterButton>
        ))}
      </S.FilterWrapper>
      <S.RecipeList>
        {loading ? (
          <p>레시피를 불러오는 중 입니다.</p>
        ) : (
          filteredRecipes.map((recipe, idx) => (
            <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
          ))
        )}
      </S.RecipeList>
    </S.Container>
  );
}
