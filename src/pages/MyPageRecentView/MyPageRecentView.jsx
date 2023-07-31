import React from 'react';
import { RECIPE_LIST } from '../../constants/recipe';
import * as S from './MyPageRecentView.Styles';
import Header from '../../components/Header/Header';
import RecipeBlock from '../../components/RecipeBlock/RecipeBlock';


function MyPageRecentView() {
  return(
    <div>
      <Header>
        내가 본 레시피
      </Header>
      <S.RecipeList>
        {RECIPE_LIST.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </div>
  );
}


export default MyPageRecentView;