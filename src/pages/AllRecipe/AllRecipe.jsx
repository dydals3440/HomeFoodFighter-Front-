import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { getAllRecipe } from 'apis/request/recipe';

import * as S from './AllRecipe.styles';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import SearchHeader from 'components/SearchHeader/SearchHeader';

import allFood from '../../assets/AllRecipeAllIcon.svg';
import koreanFood from '../../assets/AllRecipeKoreaIcon.svg';
import chineseFood from '../../assets/AllRecipeChinaIcon.svg';
import westernFood from '../../assets/AllRecipeWesternIcon.svg';
import dessert from '../../assets/AllRecipeDessertIcon.svg';
import asianFood from '../../assets/AllRecipeAsianIcon.svg';
import fusionFood from '../../assets/AllRecipeFusionIcon.svg';
import { Link } from 'react-router-dom';

const filters = ['전체', '한식', '중식', '양식', '아시안', '퓨전', '디저트'];

const filtersIcons = {
  전체: allFood,
  한식: koreanFood,
  중식: chineseFood,
  양식: westernFood,
  아시안: asianFood,
  퓨전: fusionFood,
  디저트: dessert,
};

const googleFormAddress =
  'https://docs.google.com/forms/d/e/1FAIpQLSdJMX_SXgBdy6jddNS5omXYKfG90_TJI_UGKMkEvb2_m4k0Fg/viewform?usp=sharing';

export default function AllRecipe() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filter, setFilter] = useState(filters[0]);
  const [loading, setLoading] = useState(true);
  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };
  const filteredRecipes = allRecipe.filter(
    (recipe) => filter === '전체' || recipe.type_class === filter,
  );

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const res = await getAllRecipe();
      if (!res.data.isSuccess) {
        throw res.data;
      } else {
        setAllRecipe(res.data.result);
      }
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <SearchHeader
        containerBackGroundColor={'#fff'}
        inputContainerBackGroundColor={'#F5F6F1'}
        inputBackGroundColor={'#F5F6F1'}
        item={
          <S.NewDietBtn>
            <Link
              to={googleFormAddress}
              style={{ color: '#000' }}
              target="_blank"
            >
              <AiOutlinePlus />
            </Link>
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
          <p>레시피를 목록을 업데이트 받는 중입니다.</p>
        ) : filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, idx) => (
            <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
          ))
        ) : (
          <p>해당 조건에 맞는 레시피가 없습니다.</p>
        )}
      </S.RecipeList>
    </S.Container>
  );
}
