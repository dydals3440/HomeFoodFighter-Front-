import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';

import MainCalendar from './MainCalendar/MainCalendar';
import * as S from './Main.styles';

import refrigerator from 'assets/MainRegrigeratorIcon.svg';
import recipeIcon from 'assets/MainRecipeIcon.svg';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import { RECIPE_LIST } from 'constants/recipe';

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
        <S.RecipeListContainer>
          <S.RecipeListTitle>
            <AiFillStar color="#c8e293" />
            <span>실시간 인기 레시피</span>
          </S.RecipeListTitle>
          <S.RecipeList>
            {RECIPE_LIST.slice(0, 10).map((recipe, idx) => (
              <S.Recipe key={`${idx}-recipeIdx`}>
                <img src={recipe.img_url} />
                <span>{recipe.recipe_name}</span>
              </S.Recipe>
            ))}
            <S.Recipe>
              <div>
                <AiOutlineRight color="#c8e293" />
              </div>
              <span>전체 보기</span>
            </S.Recipe>
          </S.RecipeList>
        </S.RecipeListContainer>
        <S.RecipeListContainer>
          <S.RecipeListTitle>
            <BsFillBookmarkFill color="#c8e293" />
            <span>찜한 레시피</span>
          </S.RecipeListTitle>
          <S.RecipeList>
            {RECIPE_LIST.slice(0, 10).map((recipe, idx) => (
              <S.Recipe key={`${idx}-recipeIdx`}>
                <img src={recipe.img_url} />
                <span>{recipe.recipe_name}</span>
              </S.Recipe>
            ))}
            <S.Recipe>
              <div>
                <AiOutlineRight color="#c8e293" />
              </div>
              <span>전체 보기</span>
            </S.Recipe>
          </S.RecipeList>
        </S.RecipeListContainer>
      </S.Container>
    </>
  );
};

export default Main;
