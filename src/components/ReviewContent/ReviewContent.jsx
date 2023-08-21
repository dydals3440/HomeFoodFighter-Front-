import React, { useEffect, useState } from 'react';
import * as S from './ReviewContent.styles.jsx';
import { useParams } from 'react-router-dom';
import { getDetailRecipeReview } from 'apis/request/recipe.js';
import useError from 'hooks/useError.js';

const ReviewContent = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const handleError = useError();

  useEffect(() => {
    getDetailRecipeReview(id)
      .then((res) => {
        if (!res.data.isSuccess) throw res.data;
        else {
          const reviews = res.data.result;
          setReviews(reviews);
        }
      })
      .catch((e) => handleError(e));
  }, []);

  return (
    <>
      {reviews.map((review, index) => {
        return (
          <S.ReviewBox key={index}>
            <S.ReviewImage src={review?.image} />
            <S.ReviewTextContainer>
              <h3>{review?.nickname}</h3>
              <p>{review?.content}</p>
            </S.ReviewTextContainer>
          </S.ReviewBox>
        );
      })}
    </>
  );
};

export default ReviewContent;
