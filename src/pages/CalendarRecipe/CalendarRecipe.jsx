import * as S from './CalendarRecipe.styles';

import Header from 'components/Header/Header';
import { RECIPE_LIST } from 'constants/recipe';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';

const CalendarRecipe = () => {
  return (
    <S.Container>
      <Header>헤더에 입력 값</Header>
      <S.RecipeList>
        {RECIPE_LIST.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
    </S.Container>
  );
};

export default CalendarRecipe;
