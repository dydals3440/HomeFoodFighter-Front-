import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './WriteReview.styled';
import Header from '../../components/Header/Header';
import Rating from '@mui/material/Rating';

function WriteReview() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/allrecipe');
  };

  return (
    <S.ReviewContainer>
      <Header>리뷰 쓰기</Header>
      <WriteReviewRefrigeratorIcon />
      <S.Ask>음식은 어떠셨어요?</S.Ask>
      <S.Title>나물비빔밥</S.Title>
      <Rating
        name="hover-feedback"
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        size="large"
        sx={{ fontSize: 65,
              marginTop: '3px',
         }} 
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
