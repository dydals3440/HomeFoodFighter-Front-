import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { ReactComponent as WriteReviewRefrigeratorIcon } from '../../assets/WriteReviewRefrigeratorIcon.svg';
import * as S from './MyPageMyRecipe.styled';
import {Button} from './MyPageMyRecipe.styled';
import Header from '../../components/Header/Header';
import MyRecipeBlock from '../../components/MyRecipeBlock/MyRecipeBlock';
import { MY_RECIPE } from '../../constants/myrecipe';

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
      <div className='body'>
        <Header style= {{backgroundColor:'#ffffff'}}>
          내 레시피
        </Header>
        <div>
     
      <Button isActive={currentPage === '공개중'} onClick={() => handleButtonClick('공개중')}
      position={{ left: 0, top: 158 }} 
      >
        공개중
      </Button>
      <Button isActive={currentPage === '작성중'} onClick={() => handleButtonClick('작성중')}
      position={{ left: 200, top: 158 }} 
      >
        작성중
      </Button>

     
      {currentPage === '공개중' ? (
        <div>
          <S.RecipeList>
        {MY_RECIPE.map((recipe, idx) => (
          <MyRecipeBlock key={`${idx}-recipe`} recipe={recipe} />
        ))}
        </S.RecipeList>
        </div>
      ) : (
        <div>
          <S.RecipeList>
        {MY_RECIPE.map((recipe, idx) => (
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