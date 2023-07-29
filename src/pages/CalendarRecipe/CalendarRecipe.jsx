import * as S from './CalendarRecipe.styles';

import Header from 'components/Header/Header';
import { RECIPE_LIST } from 'constants/recipe';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';

const CalendarRecipe = () => {
  return (
    <S.Container>
      <Header>찜한 레시피에서 선택하기</Header>
      <S.RecipeList>
        {RECIPE_LIST.map((recipe, idx) => (
          <RecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
      </S.RecipeList>
      <S.Btn>저장하기</S.Btn>
    </S.Container>
  );
};

export default CalendarRecipe;
