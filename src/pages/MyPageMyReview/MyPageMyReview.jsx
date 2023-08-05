import React, { useState} from 'react';
import * as S from './MyPageMyReview.styled';
import Header from '../../components/Header/Header';
import MyReviewBlock from '../../components/MyReviewBlock/MyReviewBlock';
import { MY_REVIEW } from 'constants/myreview';


function MyPageMyReview() {
    return(
      <div>
        <Header>
          내 리뷰
        </Header>
        <S.RecipeList>
          {MY_REVIEW.map((review, idx) => (
            <MyReviewBlock key={`${idx}-review`} review={review} />
          ))}
        </S.RecipeList>
      </div>
    );
  }
  
  
  export default MyPageMyReview;
  