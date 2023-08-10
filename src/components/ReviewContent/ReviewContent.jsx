import React, { useEffect, useState } from 'react';
import * as S from './ReviewContent.styles.jsx';
import { useParams } from 'react-router-dom';
import { getDetailRecipeReview } from 'apis/request/recipe.js';

const ReviewContent = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(id);
  useEffect(() => {
    getDetailRecipeReview(id).then((res) => {
      const reviews = res.data.result;
      setReviews(reviews);
      console.log(reviews);
    });
  }, []);
  return (
    <>
      {reviews.map((review, index) => {
        return (
          <S.ReviewBox key={index}>
            <S.ReviewImage src={review?.image} />
            <S.ReviewTextContainer>
              <h3>{review?.userid}</h3>
              <p>{review?.content}</p>
            </S.ReviewTextContainer>
          </S.ReviewBox>
        );
      })}
    </>
  );
};

export { ReviewContent };
