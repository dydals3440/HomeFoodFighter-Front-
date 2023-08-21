import { useEffect, useRef, useState } from 'react';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import * as S from './RecipeList.styles';

import { getFavoritRecipe, getPopularRecipe } from 'apis/request/recipe';
import useUser from 'hooks/useUser';
import useError from 'hooks/useError';

const RecipeList = ({ children, mode }) => {
  const scrollRef = useRef();
  const [recipeList, setRecipeList] = useState([]);

  const navigate = useNavigate();
  const handleError = useError();
  const { isLogin } = useUser();

  useEffect(() => {
    switch (mode) {
      case 'popularity':
        getPopularRecipe().then((res) => setRecipeList(res.data.result));
        break;
      case 'want':
        if (isLogin) {
          getFavoritRecipe()
            .then((res) => {
              if (!res.data.isSuccess) handleError(res.data);
              else setRecipeList(res.data.result);
            })
            .catch((e) => handleError(e));
        }
        break;
      default:
        null;
    }
  }, []);

  const moveToList = () => {
    switch (mode) {
      case 'popularity':
        navigate('/popularity');
        return;
      case 'want':
        if (isLogin) navigate('/jjimrecipe');
        else navigate('/login');
        return;
      default:
        null;
        return;
    }
  };

  return mode === 'want' && !isLogin ? (
    <div
      onClick={moveToList}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h3>찜하기는 로그인 후 이용 가능합니다</h3>
    </div>
  ) : (
    <S.Container>
      <S.Title onClick={moveToList}>
        {mode === 'popularity' ? (
          <AiFillStar style={{ fontSize: '1.825rem' }} color="#c8e293" />
        ) : (
          <BsFillBookmarkFill color="#c8e293" />
        )}
        <span>{children}</span>
      </S.Title>
      <S.List ref={scrollRef}>
        {recipeList &&
          recipeList.slice(0, 10).map((recipe, idx) => (
            <S.Recipe
              to={`/recipe/detail/${recipe.recipe_id}`}
              key={`${idx}-recipeIdx`}
            >
              <img src={recipe.img_url} />
              <span>{recipe.recipe_name}</span>
            </S.Recipe>
          ))}
        <S.Recipe onClick={moveToList}>
          <div>
            <AiOutlineRight color="#c8e293" />
          </div>
          <span>전체 보기</span>
        </S.Recipe>
      </S.List>
    </S.Container>
  );
};

export default RecipeList;
