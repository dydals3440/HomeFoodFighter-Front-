import * as S from './MyRecipeBlock.styles';

import { AiOutlineCalendar, AiOutlineEye,AiOutlineComment} from 'react-icons/ai';
import { FaBookmark } from 'react-icons/fa';

const MyRecipeBlock = ({ recipe }) => {
  return (
    <S.Container>
      <S.Img src={recipe.img_url} alt="음식 사진" />
      <S.Title>{recipe.recipe_name}</S.Title>
      {recipe.summary && <S.Summary>{recipe.summary}</S.Summary>}
      <S.Date>
        <AiOutlineCalendar/>{recipe.date}
        </S.Date>
      <S.Watch>
        <AiOutlineEye/>
        {recipe.watch}
    </S.Watch>
      <S.Scrap><FaBookmark/>{recipe.scrap}</S.Scrap>
      <S.Comment><AiOutlineComment/>{recipe.comment}</S.Comment>
    </S.Container>
  );
};

export default MyRecipeBlock;
