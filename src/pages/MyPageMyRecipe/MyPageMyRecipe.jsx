import React, { useState, useEffect } from 'react';
import * as S from './MyPageMyRecipe.styled';
import { Button } from './MyPageMyRecipe.styled';
import Header from '../../components/Header/Header';
import MyRecipeBlock from '../../components/MyRecipeBlock/MyRecipeBlock';
//import { MY_RECIPE } from 'constants/recipe';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { FaPlus } from 'react-icons/fa';


import { getMyRecipe } from 'apis/request/recipe';

function MyPageMyRecipe() {
  const [currentPage, setCurrentPage] = useState('공개중');
  const [myRecipes, setMyRecipes] = useState([]); 

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

 // const MY_RECIPE = []; // 임시로 빈 배열로 설정

 useEffect(() => {
  getMyRecipe()
    .then((response) => {
      const recipes = response.data.result;
      setMyRecipes(recipes);
    })
    .catch((error) => {
      console.error('MyRecipe 데이터를 가져오는 중 에러:', error);
    });
}, []); 

  return (
    <div className='body'>
      <Header style={{ backgroundColor: '#ffffff' }}>
        내 레시피
      </Header>
      <div>
        <S.ButtonContainer>
          <Button
            isActive={currentPage === '공개중'}
            onClick={() => handleButtonClick('공개중')}

          >
            공개중
          </Button>
          <Button
            isActive={currentPage === '작성중'}
            onClick={() => handleButtonClick('작성중')}
       
          >
            작성중
          </Button>
        </S.ButtonContainer>


        {/* 현재 페이지 상태에 따라 해당하는 컨텐츠를 출력합니다. */}
        {currentPage === '공개중' ? (
          <div>
            {/* '공개중' 페이지에 해당하는 컴포넌트들을 추가 */}
            <S.RecipeList>
            {myRecipes.map((recipe, idx) => (
                <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
              ))}
            </S.RecipeList>
          </div>
        ) : (
          <div>
            {/* '작성중' 페이지에 해당하는 컴포넌트들을 추가 */}
            <S.RecipeList>
            {myRecipes.map((recipe, idx) => (
                <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
              ))}
            </S.RecipeList>
          </div>
        )}

        {myRecipes.length === 0 && (
          <S.NoContainer>
            <S.LogoContainer><Logo /></S.LogoContainer>
              <S.Ment>레시피를 직접 올려보세요</S.Ment>
              <S.AddButton type="button" onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdJMX_SXgBdy6jddNS5omXYKfG90_TJI_UGKMkEvb2_m4k0Fg/viewform?usp=sharing"}>
                <S.Icon><FaPlus />레시피 등록하기</S.Icon>
              </S.AddButton> 
          </S.NoContainer>
        )}
      </div>
    </div>
  );
}

export default MyPageMyRecipe;
