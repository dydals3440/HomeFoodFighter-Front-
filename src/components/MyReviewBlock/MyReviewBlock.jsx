import { useEffect, useState } from 'react';
import * as S from './MyReviewBlock.styles';
import { AiOutlineUser } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { getDetailRecipe } from 'apis/request/recipe';
import useError from 'hooks/useError';



const MyReviewBlock = ({review, onDeleteReview}) => {
  const [recipe, setRecipe] = useState({})

  const handleError = useError();

  const handleDeleteClick = () => {
    onDeleteReview(review.review_id); 
  };
  useEffect(() => {
    getDetailRecipe(review.recipe_id).then((res)=>setRecipe({
      img_url: res.data.result[0][0].img_url,
      nickname: res.data.result[0][0].nickname,
      recipe_name: res.data.result[0][0].recipe_name
    })).catch(e => handleError(e))
  },[])

  return (
    <S.Container>
        <S.RecipeContainer>
            <S.Img src={recipe?.img_url} alt="음식 사진"/>
            <S.Title>{recipe?.recipe_name}</S.Title>
            <S.Nickname><AiOutlineUser /> <span>{recipe?.nickname}</span></S.Nickname>
        </S.RecipeContainer>
        <S.ReviewContainer>
            <S.UserName><AiOutlineUser /> <span>{review?.nickname}</span></S.UserName>
            <S.Comment>{review?.content}</S.Comment>
            <S.FooterContainer>
              <S.Date>{review?.bydate}</S.Date>
              <FaTrash onClick={handleDeleteClick} />
            </S.FooterContainer>
        </S.ReviewContainer>
    </S.Container>
  );
};

export default MyReviewBlock;
