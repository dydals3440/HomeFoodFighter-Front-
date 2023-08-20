import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './WriteReview.styled';
import Header from '../../components/Header/Header';
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';

import {addReview} from 'apis/request/recipe';

function WriteReview() {
  const { recipe_id } = useParams();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  //레시피 이름 저장
  const location = useLocation();
  const { recipeName } = location.state || {};

  const handleSubmit = () => {
    // 리뷰 데이터 생성
    const reviewData = {
      star: rating,
      content: reviewText,
    };
    // 리뷰 데이터 서버에 전송
    addReview(recipe_id, reviewData) 
      .then((response) => {
        console.log('리뷰가 성공적으로 추가되었습니다.');
        navigate('/allrecipe'); 
      })
      .catch((error) => {
        console.error('리뷰 오류가 발생.');
        if (error.response) {
          console.error(error.response);
        } else {
          console.error('응답 없음');
        }
      });
      
  };

  
  return (
    <S.ReviewContainer>
      <Header>리뷰 쓰기</Header>
      <WriteReviewRefrigeratorIcon />
      <S.Ask>음식은 어떠셨어요?</S.Ask>
      {recipeName && <S.Title>{recipeName}</S.Title>}
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
