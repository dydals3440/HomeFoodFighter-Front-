import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './WriteReview.styled';
import Header from '../../components/Header/Header';
import Rating from '@mui/material/Rating';

import { addReview, getDetailRecipe } from 'apis/request/recipe';
import useError from 'hooks/useError';

function WriteReview() {
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [recipeName, setRecipeName] = useState('');

  const navigate = useNavigate();
  const handleError = useError();


  useEffect(() => {
    getDetailRecipe(id)
      .then((res) => {
        setRecipeName(res.data.result[0][0].recipe_name);
      })
      .catch((e) => handleError(e));
  }, []);

  const handleSubmit = () => {
    const reviewData = {
      star: rating,
      content: reviewText,
    };
    addReview(id, reviewData)
      .then((response) => {
        alert('리뷰가 성공적으로 추가되었습니다.');
        navigate(`/mypage/myreview`);
      })
      .catch((error) => {
        alert.error('리뷰 오류가 발생.');
      });
  };

  return (
    <S.ReviewContainer>
      <Header>리뷰 쓰기</Header>
      <WriteReviewRefrigeratorIcon />
      <S.Ask>음식은 어떠셨어요?</S.Ask>
      <S.Title>{recipeName}</S.Title>
      <Rating
        name="hover-feedback"
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        size="large"
        sx={{ fontSize: 65, marginTop: '3px' }}
      />
      <S.ReviewTextArea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="음식의 맛, 양, 과정 등 음식에 대한 솔직한 리뷰를 남겨주세요"
        rows={5}
        cols={40}
      />
      <S.SaveButton type="button" onClick={handleSubmit}>
        저장하기
      </S.SaveButton>
    </S.ReviewContainer>
  );
}

export default WriteReview;
