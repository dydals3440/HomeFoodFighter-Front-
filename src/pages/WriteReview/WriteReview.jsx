import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as WriteReviewRefrigeratorIcon} from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './WriteReview.styled'

function WriteReview() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  const handleSubmit = () => {
    // 리뷰를 서버에 저장하거나 필요한 로직을 처리합니다.
    console.log('평가: ', rating);
    console.log('리뷰 내용: ', reviewText);
    // 리뷰 작성 폼이 제출되었을 때 메뉴 페이지로 이동합니다.
    navigate('/review-menu');
  };

  return (
    <ReviewContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{'<'}</BackButton>
        <Heading>리뷰 쓰기</Heading>
      </Header>
    
        <WriteReviewRefrigeratorIcon/>

      <div>
          음식은 어떠셨어요?
      </div>
      <Title>나물비빔밥</Title>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            isFilled={star <= rating}
            onClick={() => handleStarClick(star)}
          >
            ★
          </Star>
        ))}
      </StarContainer>
      <ReviewTextArea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="음식의 맛, 양, 과정 등 음식에 대한 솔직한 리뷰를 남겨주세요"
        rows={5}
        cols={40}
      />
      <SaveButton type="button" onClick={handleSubmit}>
        저장하기
      </SaveButton>
    </ReviewContainer>
  );
}

export default WriteReview;
