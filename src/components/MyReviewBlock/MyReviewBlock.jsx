import * as S from './MyReviewBlock.styles';
import { AiOutlineUser } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

<<<<<<< HEAD
const MyReviewBlock = ({review, onDeleteReview}) => {
  const handleDeleteClick = () => {
    onDeleteReview(review.id); 
  };

  return (
    <S.Container>
        <S.RecipeContainer>
            <S.Img src={review.img_url} alt="음식 사진" />
            <S.Title>{review.recipe_name}</S.Title>
            <S.Nickname><AiOutlineUser /> <span>{review.nickname}</span></S.Nickname>
        </S.RecipeContainer>
        <S.ReviewContainer>
            <S.UserName><AiOutlineUser /> <span>{review.username}</span></S.UserName>
            <S.Comment>{review.comment}</S.Comment>
            <S.FooterContainer>
              <S.Date>{review.date}</S.Date>
              <FaTrash onClick={handleDeleteClick} />
            </S.FooterContainer>
        </S.ReviewContainer>
=======
const MyReviewBlock = ({ review }) => {
  return (
    <S.Container>
      <S.RecipeContainer>
        <S.Img src={review.img_url} alt="음식 사진" />
        <S.Title>{review.recipe_name}</S.Title>
        <S.Nickname>
          <AiOutlineUser /> <span>{review.nickname}</span>
        </S.Nickname>
      </S.RecipeContainer>
      <S.ReviewContainer>
        <S.UserName>
          <AiOutlineUser /> <span>{review.username}</span>
        </S.UserName>
        <S.Comment>{review.comment}</S.Comment>
        <S.FooterContainer>
          <S.Date>{review.date}</S.Date>
          <FaTrash />
        </S.FooterContainer>
      </S.ReviewContainer>
>>>>>>> c170dc7af97904a46d619fab7587fdbeadd88bb9
    </S.Container>
  );
};

export default MyReviewBlock;
