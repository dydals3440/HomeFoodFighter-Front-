import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { getAllRecipe } from 'apis/request/recipe';

import * as S from './AllRecipe.styles';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';

import SearchHeader from 'components/SearchHeader/SearchHeader';

export default function AllRecipe() {
  const [allRecipe, setAllRecipe] = useState([]);
  useEffect(() => {
    getAllRecipe().then((res) => setAllRecipe(res.data.result));
  }, []);
  console.log(allRecipe.result);
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
      <h3>필터</h3>
      <S.RecipeList>
        {allRecipe.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe.result[0]} />
        ))}
      </S.RecipeList>
    </S.Container>
  );
}
