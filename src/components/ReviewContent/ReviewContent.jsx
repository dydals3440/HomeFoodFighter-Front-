import React from 'react';
import * as S from './ReviewContent.styles.jsx';

export const ReviewContent = () => {
  return (
    <S.ReviewBox>
      <S.ReviewImage src="https://i.namu.wiki/i/fiJBOkC5Z8L0wIhl-59O3GZeYVHPoBOtJdnv7CzyIHFVmn8NteDpg-KQSQVCdLC5SsJ0R5wuj7emU6n7dvOaSg.webp" />
      <S.ReviewTextContainer>
        <h3>홈푸파</h3>
        <p>한식이 먹고 싶었는데 쉽게 잘 만들어 먹었어요!</p>
      </S.ReviewTextContainer>
    </S.ReviewBox>
  );
};
