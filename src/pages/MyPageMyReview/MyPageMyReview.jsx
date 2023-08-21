import React, { useState, useEffect, useRef } from 'react';
import * as S from './MyPageMyReview.styled';
import Header from '../../components/Header/Header';
import MyReviewBlock from '../../components/MyReviewBlock/MyReviewBlock';

import { getMyReview, deleteMyReview, getDetailRecipe } from 'apis/request/recipe';
import useError from 'hooks/useError';

function MyPageMyReview() {
    
  const [myReviews, setMyReviews] = useState([]);
  const [recipeIds, setRecipeIds] = useState([]);

  const recipeList = useRef({})

  const handleError = useError();

  useEffect(() => {
    getMyReview().then((res) => {
      setMyReviews(res.data.result);
      const data = res.data.result.map(review => review.recipe_id)
      setRecipeIds(data.filter((item, pos) => data.indexOf(item) === pos))
      
    }).catch(e => handleError(e));
  }, []);

  useEffect(() => {
    console.log(recipeIds)
    if(recipeIds.length > 0){
      recipeIds.map(id => getDetailRecipe(id).then(res => {
        recipeList.current[id] ={
          img_url: res.data.result[0][0].img_url,
          nickname: res.data.result[0][0].nickname,
          recipe_name: res.data.result[0][0].recipe_name
        }
      }).catch(e => handleError(e)))
    }
  }, [recipeIds]);
 
  const handleDeleteReview = (id) => {
    deleteMyReview(id)
      .then(() => {
        alert('리뷰가 성공적으로 삭제되었습니다.');
        setMyReviews(myReviews.filter((review) => review.recipe_id !== id));
      })
      .catch((e) => {
        handleError(e);
      });
  };

  return (
    <div>
      <Header>내 리뷰</Header>
      <S.ReviewList>
          {myReviews.map((review, idx) => (
              <MyReviewBlock
                key={`${idx}-review`}
                review={review}
                myRecipe={recipeList.current[review?.recipe_id]}
                onDeleteReview={handleDeleteReview} 
              />
            ))}
      </S.ReviewList>
    </div>
  );
} 
export default MyPageMyReview;
