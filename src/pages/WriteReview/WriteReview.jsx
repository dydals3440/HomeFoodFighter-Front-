import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './WriteReview.styled';
import Header from '../../components/Header/Header';

function WriteReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // 드래그할 때의 별점 상태를 따로 저장
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  const handleStarHoverEnd = () => {
    setRating(hoverRating); // 드래그가 끝날 때 hoverRating 값을 rating으로 반영
  };

  const handleStarDrag = (e, starRating) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const starWidth = rect.width / 5; // 각 별의 너비
    const mouseX = e.clientX - rect.left; // 드래그한 마우스의 X 위치
  
    // 드래그한 마우스 위치에 따라 별점 계산
    const starPercentage = (mouseX / starWidth) * 100;
    let calculatedRating = Math.round(starRating * 2) / 2; // 소수점 한 자리 반올림 (0.5 단위)
    
    // 별점이 0.5 미만으로 떨어지지 않도록 보정
    if (starPercentage <= 25 && calculatedRating > 0) {
      calculatedRating = calculatedRating - 0.5;
    } else if (starPercentage >= 75 && calculatedRating < 5) {
      calculatedRating = calculatedRating + 0.5;
    }
  
    setHoverRating(calculatedRating);
  };

  const handleSubmit = () => {
    // 리뷰 작성 폼이 제출되었을 때 이동되는 페이지
    navigate('/allrecipe');
  };

  return (
    <S.ReviewContainer>
      <Header>
        리뷰 쓰기
      </Header>
      <WriteReviewRefrigeratorIcon />
      <S.Ask>음식은 어떠셨어요?</S.Ask>
      <S.Title>나물비빔밥</S.Title>
      <S.StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <S.Star
            key={star}
            isFilled={hoverRating >= star || rating >= star } // 드래그할 때만 hoverRating을 기준으로 별점 표시
            onMouseMove={(e) => handleStarDrag(e, star)} // 드래그 이벤트 추가
            onMouseLeave={handleStarHoverEnd} // 드래그가 끝나면 rating 값에 반영
          >
            ★
          </S.Star>
        ))}
      </S.StarContainer>
      <S.ReviewTextArea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder=" 음식의 맛, 양, 과정 등 음식에 대한 
      솔직한 리뷰를 남겨주세요"
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


