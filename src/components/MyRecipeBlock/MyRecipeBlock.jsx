import * as S from './MyRecipeBlock.styles';
import { AiOutlineCalendar, AiOutlineEye,AiOutlineComment} from 'react-icons/ai';
import { FaBookmark } from 'react-icons/fa';

const MyRecipeBlock = ({ recipe }) => {
  return (
    <S.Container>
      <S.Img src={recipe.img_url} alt="음식 사진" />
      <S.ContentContainer>
        <S.TextContainer>
          <S.Title>{recipe.recipe_name}</S.Title>
          {recipe.summary && <S.Summary>{recipe.summary}</S.Summary>}
        </S.TextContainer>

        <S.IconContainer>
          <S.Date><AiOutlineCalendar/>{recipe.date}</S.Date>
          <S.Watch><AiOutlineEye/>{recipe.watch}</S.Watch>
          <S.Scrap><FaBookmark/>{recipe.scrap}</S.Scrap>
          <S.Comment><AiOutlineComment/>{recipe.comment}</S.Comment>
        </S.IconContainer>
        {/* <S.Button type="button" onClick={handleSubmit}>수정하기</S.Button> */}
        <S.Button type="button">수정하기</S.Button>
      </S.ContentContainer>

      
    </S.Container>
  );
};

export default MyRecipeBlock;
