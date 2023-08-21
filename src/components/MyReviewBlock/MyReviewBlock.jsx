import { useEffect } from 'react';
import * as S from './MyReviewBlock.styles';
import { AiOutlineUser } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';



const MyReviewBlock = ({review, myRecipe, onDeleteReview}) => {
 
  const handleDeleteClick = () => {
    onDeleteReview(review.review_id); 
  };

  return (
    <S.Container>
        <S.RecipeContainer>
            <S.Img src={myRecipe?.img_url} alt="음식 사진"/>
            <S.Title>{myRecipe?.recipe_name}</S.Title>
            <S.Nickname><AiOutlineUser /> <span>{myRecipe?.nickname}</span></S.Nickname>
        </S.RecipeContainer>
        <S.ReviewContainer>
            <S.UserName><AiOutlineUser /> <span>{review?.username}</span></S.UserName>
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
