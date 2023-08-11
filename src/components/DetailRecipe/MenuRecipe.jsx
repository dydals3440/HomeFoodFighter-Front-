import React from 'react';
import * as S from './MenuRecipe.styled';

import { ReactComponent as ShareIcon } from 'assets/DetailrecipeShareIcon.svg';
import { ReactComponent as BookmarkIcon } from 'assets/DetailrecipeSaveIcon.svg';
import { ReactComponent as DifficultyIcon } from 'assets/DetailrecipeDifficultyIcon.svg';
import { ReactComponent as ServingIcon } from 'assets/DetailrecipeServingsIcon.svg';
import { ReactComponent as TimeIcon } from 'assets/DetailrecipeTimeIcon.svg';

export default function MenuRecipe(props) {
  const { recipe } = props;
  const currentURL = window.location.href;
  const handleShare = (e) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        navigator.share({
          title: recipe[0]?.recipe_name,
          url: currentURL,
          text: '레시피 상세설명',
        });
        console.log('성공적으로 공유되었습니다.');
      } catch (error) {
        console.error('에러 이유:', error);
      }
    } else {
      console.log('공유하기가 지원되지 않는 환경입니다.');
    }
  };

  return (
    <S.Wrapper>
      <S.MenuImage src={recipe[0]?.img_url} />
      <S.NameDescriptionContainer>
        <S.MenuName>{recipe[0]?.recipe_name}</S.MenuName>
        <S.MenuDescription>
          육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥
        </S.MenuDescription>
      </S.NameDescriptionContainer>
      <S.ProfileAddOnContainer>
        <S.ProfileContainer>
          <S.ProfileImage src="https://i.namu.wiki/i/fiJBOkC5Z8L0wIhl-59O3GZeYVHPoBOtJdnv7CzyIHFVmn8NteDpg-KQSQVCdLC5SsJ0R5wuj7emU6n7dvOaSg.webp" />
          <S.ProfileName>닉네임</S.ProfileName>
        </S.ProfileContainer>
        <S.AddOnContainer>
          <S.BookMark>
            <BookmarkIcon />
          </S.BookMark>
          <S.Share>
            <ShareIcon onClick={handleShare} />
          </S.Share>
        </S.AddOnContainer>
      </S.ProfileAddOnContainer>
      <S.SubDetailContainer>
        <S.TimeContainer>
          <TimeIcon width="40" height="40" />
          <p>{recipe[0]?.cook_time}분</p>
        </S.TimeContainer>
        <S.DifficultyContainer>
          <DifficultyIcon width="40" height="40" />
          <p>{recipe[0]?.difficulty}</p>
        </S.DifficultyContainer>
        <S.ServingContainer>
          <ServingIcon width="40" height="40" />
          <p>20분</p>
        </S.ServingContainer>
      </S.SubDetailContainer>
    </S.Wrapper>
  );
}
