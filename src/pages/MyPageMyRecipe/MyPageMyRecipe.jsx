import React, { useState, useEffect } from 'react';
import * as S from './MyPageMyRecipe.styled';
import { Button } from './MyPageMyRecipe.styled';
import Header from '../../components/Header/Header';
import MyRecipeBlock from '../../components/MyRecipeBlock/MyRecipeBlock';
import { MY_RECIPE } from '../../constants/myrecipe'; // 이 부분을 확인하세요
import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { FaPlus } from 'react-icons/fa';

function MyPageMyRecipe() {
  const [currentPage, setCurrentPage] = useState('공개중');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

 // const MY_RECIPE = []; // 임시로 빈 배열로 설정

  return (
    <div className='body'>
      <Header style={{ backgroundColor: '#ffffff' }}>
        내 레시피
      </Header>
      <div>
        <Button
          isActive={currentPage === '공개중'}
          onClick={() => handleButtonClick('공개중')}
          position={{ left: 0, top: 158 }}
        >
          공개중
        </Button>
        <Button
          isActive={currentPage === '작성중'}
          onClick={() => handleButtonClick('작성중')}
          position={{ left: 200, top: 158 }}
        >
          작성중
        </Button>

        {/* 현재 페이지 상태에 따라 해당하는 컨텐츠를 출력합니다. */}
        {currentPage === '공개중' ? (
          <div>
            {/* '공개중' 페이지에 해당하는 컴포넌트들을 추가 */}
            <S.RecipeList>
              {MY_RECIPE.map((recipe, idx) => (
                <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
              ))}
            </S.RecipeList>
          </div>
        ) : (
          <div>
            {/* '작성중' 페이지에 해당하는 컴포넌트들을 추가 */}
            <S.RecipeList>
              {MY_RECIPE.map((recipe, idx) => (
                <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
              ))}
            </S.RecipeList>
          </div>
        )}

        {MY_RECIPE.length === 0 && (
          <S.NoContainer>
            <S.LogoContainer><Logo /></S.LogoContainer>
              <S.Ment>레시피를 직접 올려보세요</S.Ment>
              <S.AddButton type="button" onClick={() => alert("레시피를 등록합니다!")}>
                <S.Icon><FaPlus />레시피 등록하기</S.Icon>
              </S.AddButton> 
          </S.NoContainer>
        )}
      </div>
    </div>
  );
}

export default MyPageMyRecipe;
