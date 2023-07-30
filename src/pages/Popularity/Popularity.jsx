import * as S from './Popularity.styles';

import Header from 'components/Header/Header';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import { RECIPE_LIST } from 'constants/recipe';

const Popularity = () => {
  return (
    <>
      <Header>실시간 인기 레시피</Header>
      <S.RecipeList>
        {RECIPE_LIST.slice(0, 10).map((recipe, idx) => (
          <S.BlockContainer key={`${idx}-recipe`}>
            <RecipeBlock recipe={recipe} />
            <S.Dot>{idx + 1}</S.Dot>
          </S.BlockContainer>
        ))}
      </S.RecipeList>
    </>
  );
};

export default Popularity;
