import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import * as S from './AllRecipe.styles';
import RecipeBlock from '../../components/RecipeBlock/RecipeBlock';
import { RECIPE_LIST } from '../../constants/recipe';
import SearchHeader from 'components/SearchHeader/SearchHeader';

export default function AllRecipe() {
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
        {RECIPE_LIST.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </S.Container>
  );
}
