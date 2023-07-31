import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './MyPageMyRecipe.styled';
import {Button} from './MyPageMyRecipe.styled';
import Header from '../../components/Header/Header';
import MyRecipeBlock from '../../components/MyRecipeBlock/MyRecipeBlock';
import { RECIPE_LIST } from '../../constants/myrecipe';

function MyPageMyRecipe() {
  const [currentPage, setCurrentPage] = useState('공개중');
  const [recipeData, setRecipeDate] = useState(null);
  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  //레시피 데이터 받아오는 함수
  // const fetchRecipeDate = async() => {
  //   try{
  //     const data = await fetch('/api/recipe'); //레시피api구현해야함
  //     const recipeData = await data.json();
  //     setRecipeDate(recipeData);
  //   } catch(error){
  //     console.error('Error fetching recipe data:', error);
  //   }
  // };

  //  // 페이지가 로드될 때 레시피 데이터를 가져옴 (예시)
  //  useEffect(() => {
  //   fetchRecipeData();
  // }, []);

    return(
      <div>
        <Header>
          내 레시피
        </Header>
        <div>
      {/* 상단의 버튼을 통해 페이지를 변경할 수 있도록 설정합니다. */}
      <Button isActive={currentPage === '공개중'} onClick={() => handleButtonClick('공개중')}
      position={{ left: 0, top: 158 }} // 첫 번째 버튼의 위치
      >
        공개중
      </Button>
      <Button isActive={currentPage === '작성중'} onClick={() => handleButtonClick('작성중')}
      position={{ left: 200, top: 158 }} // 두 번째 버튼의 위치
      >
        작성중
      </Button>

      {/* 현재 페이지 상태에 따라 해당하는 컨텐츠를 출력합니다. */}
      {currentPage === '공개중' ? (
        <div>
          {/* '공개중' 페이지에 해당하는 컴포넌트들을 추가 */}
          <S.RecipeList>
        {RECIPE_LIST.map((recipe, idx) => (
          <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
        </S.RecipeList>
        </div>
      ) : (
        <div>
          {/* '작성중' 페이지에 해당하는 컴포넌트들을 추가 */}
          <S.RecipeList>
        {RECIPE_LIST.map((recipe, idx) => (
          <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
        </S.RecipeList>
        </div>
      )}
    </div>
      </div>
    );
  }
  
  
  export default MyPageMyRecipe;