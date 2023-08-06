import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { getAllRecipe } from 'apis/request/recipe';
import * as S from './AllRecipe.styles';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import SearchHeader from 'components/SearchHeader/SearchHeader';

const filters = ['전체', '한식', '중식', '양식', '아시안', '퓨전', '디저트'];

export default function AllRecipe() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [filter, setFilter] = useState(filters[0]);

  useEffect(() => {
    getAllRecipe().then((res) => {
      setAllRecipe(res.data.result);
      setFilteredRecipe(res.data.result);
    });
  }, []);

  useEffect(() => {
    console.log(filteredRecipe);
  }, [filteredRecipe]);

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === '전체') {
      setFilteredRecipe(allRecipe[0]?.result || []);
    } else {
      const filteredRecipes = allRecipe[0]?.result.filter((recipe) => {
        return recipe.type_class === selectedFilter;
      });
      console.log(filteredRecipes);
      setFilteredRecipe(filteredRecipes || []);
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
            <AiOutlinePlus />
          </S.NewDietBtn>
        }
      />
      {/* FilterComponent */}
      {filters.map((filter, idx) => (
        <button key={idx} value={filter} onClick={handleFilter}>
          {filter}
        </button>
      ))}
      <S.RecipeList>
        {filteredRecipe.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </S.Container>
  );
}
