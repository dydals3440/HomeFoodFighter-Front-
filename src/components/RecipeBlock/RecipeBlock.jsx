import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import * as S from './RecipeBlock.styles';

const RecipeBlock = ({ recipe, mode }) => {
  const navigate = useNavigate();

  const moveToDetailRecipe = () => {
    navigate(`/recipe/detail/${recipe.recipe_id}`);
  };

  return (
    <S.Container onClick={mode === 'select' ? null : moveToDetailRecipe}>
      <S.Img src={recipe.img_url} alt="음식 사진" />
      <S.Title>{recipe.recipe_name}</S.Title>
      {recipe.summary && <S.Summary>{recipe?.summary}</S.Summary>}
      <S.Nickname>
        <AiOutlineUser />{' '}
        <span>{recipe?.nickname || recipe?.name || recipe?.user_name}</span>
      </S.Nickname>
      <S.Score>
        ⭐ <span>{recipe?.star}</span>
        {'  '}
        <span>{`(${recipe?.count || recipe?.review_count})`}</span>
      </S.Score>
    </S.Container>
  );
};

export default RecipeBlock;
