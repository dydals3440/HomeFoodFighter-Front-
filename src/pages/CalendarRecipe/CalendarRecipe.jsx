import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './CalendarRecipe.styles';

import { addDietWithFavorite, getFavoritRecipe } from 'apis/request/recipe';
import Header from 'components/Header/Header';
import RecipeBlock from 'components/RecipeBlock/RecipeBlock';
import SelectButton from 'components/SelectButton/SelectButton';
import useError from 'hooks/useError';

const CalendarRecipe = () => {
  const [selected, setSelected] = useState(-1);
  const [date, setDate] = useState('');
  const [mealTime, setMealTime] = useState(0);

  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const handleError = useError();
  const { data: result } = useQuery(['chooseFavorit'], () =>
    getFavoritRecipe(),
  );

  useEffect(() => {
    if (!searchParams.has('date')) navigate(-1);
    const [year, month, day, time] = searchParams.get('date').split('-');
    setDate(`${year}-${month}-${day}`);
    setMealTime(Number(time));
  }, []);

  const selectRecipe = (id) => () => {
    if (id === selected) {
      setSelected(-1);
      return;
    }
    setSelected(id);
  };

  const submit = () => {
    addDietWithFavorite(date, { meal_time: mealTime, recipes: selected })
      .then(() => {
        alert('등록되었습니다');
        navigate(-1);
      })
      .catch((e) => {
        handleError(e);
      });
  };
  return (
    <S.Container>
      <Header>찜한 레시피에서 선택하기</Header>
      <S.RecipeList>
        {result &&
          result.data.result.map((recipe) => (
            <S.BlockBox
              key={`${recipe.recipe_id}-recipe`}
              selected={selected === recipe.recipe_id}
              onClick={selectRecipe(recipe.recipe_id)}
            >
              <RecipeBlock recipe={recipe} mode={'select'} />
            </S.BlockBox>
          ))}
      </S.RecipeList>
      <SelectButton onClick={submit} selected={selected !== -1}>
        저장하기
      </SelectButton>
    </S.Container>
  );
};

export default CalendarRecipe;
