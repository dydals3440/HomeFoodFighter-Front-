import { useRef, useState } from 'react';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';

import * as S from './RecipeList.styles';

import { RECIPE_LIST } from 'constants/recipe';
import useThrottle from 'hooks/useThrottle';

const RecipeList = ({ children, mode }) => {
  const scrollRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const throttle = useThrottle();

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

  const dragMoveByThrottle = throttle(dragMove, 50);

  return (
    <S.Container>
      <S.Title>
        {mode === 'trend' ? (
          <AiFillStar color="#c8e293" />
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
      </S.List>
    </S.Container>
  );
};

export default RecipeList;
