import { useEffect, useRef, useState } from 'react';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './RecipeList.styles';

import { RECIPE_LIST } from 'constants/recipe';
import useThrottle from 'hooks/useThrottle';
import { getFavoritRecipe, getPopularRecipe } from 'apis/request/recipe';

const RecipeList = ({ children, mode }) => {
  const scrollRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [recipeList, setRecipeList] = useState([]);

  const throttle = useThrottle();
  const navigate = useNavigate();

  useEffect(() => {
    switch (mode) {
      case 'popularity':
        getPopularRecipe().then((res) => setRecipeList(res.data.result));
        break;
      case 'want':
        getFavoritRecipe().then((res) => setRecipeList(res.data.result));
        break;
      default:
        null;
    }
  }, []);

  const dragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const dragEnd = () => setIsDrag(false);

  const dragMove = (e) => {
    if (!isDrag) return;
    scrollRef.current.scrollLeft = startX - e.pageX;
  };

  const moveToList = () => {
    switch (mode) {
      case 'popularity':
        navigate('/popularity');
        return;
      case 'want':
        navigate('/jjimrecipe');
        return;
      default:
        null;
        return;
    }
  };

  const dragMoveByThrottle = throttle(dragMove, 50);

  return (
    <S.Container>
      <S.Title onClick={moveToList}>
        {mode === 'popularity' ? (
          <AiFillStar style={{ fontSize: '1.825rem' }} color="#c8e293" />
        ) : (
          <BsFillBookmarkFill color="#c8e293" />
        )}
        <span>{children}</span>
      </S.Title>
      <S.List
        ref={scrollRef}
        onMouseDown={dragStart}
        onMouseMove={isDrag ? dragMoveByThrottle : null}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
      >
        {recipeList.slice(0, 10).map((recipe, idx) => (
          <S.Recipe key={`${idx}-recipeIdx`}>
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
