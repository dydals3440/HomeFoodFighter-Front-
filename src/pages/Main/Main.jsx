import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';

import MainCalendar from './MainCalendar/MainCalendar';
import * as S from './Main.styles';

import refrigerator from 'assets/MainRegrigeratorIcon.svg';
import recipeIcon from 'assets/MainRecipeIcon.svg';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import { RECIPE_LIST } from 'constants/recipe';
import RecipeList from './RecipeList/RecipeList';

const Main = () => {
  return (
    <>
      <SearchHeader />
      <S.Container>
        <S.BtnContainer>
          <S.BtnBox>
            <S.LinkBtn to="/refrigerator">
              <img src={refrigerator} alt="냉장고" />
              <span>냉장고</span>
              <span>채우기</span>
            </S.LinkBtn>
          </S.BtnBox>
          <S.BtnBox>
            <S.LinkBtn to="/allrecipe">
              <img src={recipeIcon} alt="냉장고" />
              <span>전체</span>
              <span>레시피</span>
            </S.LinkBtn>
          </S.BtnBox>
        </S.BtnContainer>
        <MainCalendar />
        <RecipeList mode={'popularity'}>실시간 인기 레시피</RecipeList>
        <RecipeList mode={'want'}>찜한 레시피</RecipeList>
      </S.Container>
    </>
  );
};

export default Main;
