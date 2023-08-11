import React, { useState } from 'react';
import * as S from './MenuRecipe.styled';

import { ReactComponent as ShareIcon } from 'assets/DetailrecipeShareIcon.svg';
import { ReactComponent as BookmarkIcon } from 'assets/DetailrecipeSaveIcon.svg';
import { ReactComponent as BookmarkBasicIcon } from 'assets/DetailrecipeSaveDelete.svg';
import { ReactComponent as DifficultyIcon } from 'assets/DetailrecipeDifficultyIcon.svg';
import { ReactComponent as ServingIcon } from 'assets/DetailrecipeServingsIcon.svg';
import { ReactComponent as TimeIcon } from 'assets/DetailrecipeTimeIcon.svg';
import { addFavoriteRecipe, deleteFavoriteRecipe } from 'apis/request/recipe';
import { useParams } from 'react-router-dom';

export default function MenuRecipe(props) {
  const { recipe } = props;
  const { id } = useParams();
  const currentURL = window.location.href;
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);

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
  const handleFavorite = (e) => {
    e.preventDefault();

    if (favorite === false) {
      addFavoriteRecipe(id);
      setFavorite(true);
    } else {
      deleteFavoriteRecipe(id);
      setFavorite(false);
    }
  };

  return (
    <S.Wrapper>
      <S.MenuImage src={recipe[0]?.img_url} />
      <S.NameDescriptionContainer>
        <S.MenuName>{recipe[0]?.recipe_name}</S.MenuName>
        <S.MenuDescription>{recipe[0]?.summary}</S.MenuDescription>
      </S.NameDescriptionContainer>
      <S.ProfileAddOnContainer>
        <S.ProfileContainer>
          <S.ProfileImage src={recipe[0]?.user_img_url} />
          <S.ProfileName>{recipe[0]?.nickname}</S.ProfileName>
        </S.ProfileContainer>
        <S.AddOnContainer>
          <S.BookMark onClick={handleFavorite}>
            {favorite ? <BookmarkIcon /> : <BookmarkBasicIcon />}
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
          <p>{recipe[0]?.cook_time}분</p>
        </S.ServingContainer>
      </S.SubDetailContainer>
    </S.Wrapper>
  );
}
