import React, { useState, useEffect } from 'react';
import * as S from './MyPageMyReview.styled';
import Header from '../../components/Header/Header';
import MyReviewBlock from '../../components/MyReviewBlock/MyReviewBlock';

import { getMyReview, deleteMyReview } from 'apis/request/recipe';

function MyPageMyReview() {
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    getMyReview()
      .then((response) => {
        console.log(response.data.result);
        setMyReviews(response.data.result);
      })
      .catch((error) => {
        console.error('리뷰 에러:', error);
      });
  }, []);

  const handleDeleteReview = (reviewId) => {
    deleteMyReview(reviewId)
      .then((response) => {
        console.log('리뷰가 성공적으로 삭제되었습니다.');
        const updatedReviews = myReviews.filter(
          (review) => review.id !== reviewId,
        );
        setMyReviews(updatedReviews);
      })
      .catch((error) => {
        console.error('리뷰 삭제 오류:', error.response);
      });
  };

  return (
    <div>
      <Header>내 리뷰</Header>
      <S.RecipeList>
        {myReviews.map((review, idx) => (
          <MyReviewBlock
            key={`${idx}-review`}
            review={review}
            onDeleteReview={() => handleDeleteReview(review.id)} // 삭제
          />
        ))}
      </S.RecipeList>
    </div>
  );
}

export default MyPageMyReview;
