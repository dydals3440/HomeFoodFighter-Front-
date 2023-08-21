import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as S from './RefrigeratorIngredient.styles';

import Header from 'components/Header/Header';
import SelectButton from 'components/SelectButton/SelectButton';
import {
  INGREDIENT_ICON,
  INGREDIENT_LIST,
  INGREDIENT_TITLE,
} from 'constants/ingredient';
import {
  getIngredientByType,
  getIngredientId,
  getIngredientKorean,
} from 'utils/ingredient';
import {
  requestAddIngredient,
  requestGetRefrigerator,
} from 'apis/request/refrigerator';
import useError from 'hooks/useError';

function RefrigeratorIngredient() {
  const [title, setTitle] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [containList, setContainList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  const { ingredient } = useParams();
  const navigate = useNavigate();
  const handleError = useError();

  useEffect(() => {
    switch (Number(ingredient)) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        setTitle(INGREDIENT_TITLE[Number(ingredient) - 1]);
        setIngredientList(getIngredientKorean(Number(ingredient)));
        requestGetRefrigerator()
          .then((res) =>
            setContainList(
              getIngredientByType(res.data.result, Number(ingredient)),
            ),
          )
          .catch((e) => handleError(e));

        break;
      default:
        navigate('/refrigerator');
        break;
    }
  }, [ingredient]);

  const selectIngredient = (ingr) => () => {
    if (selectedList.includes(ingr)) {
      setSelectedList((prev) => prev.filter((selcted) => selcted !== ingr));
    } else {
      setSelectedList((prev) => [...prev, ingr]);
    }
  };

  const addIngredient = () => {
    if (selectedList.length === 0) return;
    requestAddIngredient(
      ingredient,
      selectedList.map((selected) => Number(getIngredientId(selected))),
    )
      .then((res) => {
        alert('재료 등록에 성공했습니다.');
        navigate('/refrigerator');
      })
      .catch((e) => {
        handleError(e);
        setSelectedList([]);
      });
  };
  return (
    <S.Container>
      <Header>{title}</Header>
      <S.IngredientList>
        {ingredientList.map((ingr) => (
          <S.Ingredient
            key={ingr}
            onClick={containList.includes(ingr) ? null : selectIngredient(ingr)}
            selected={selectedList.includes(ingr)}
            already={containList.includes(ingr)}
          >
            {INGREDIENT_ICON[Number(ingredient) - 1][ingr]}
            <span>{INGREDIENT_LIST[Number(ingredient) - 1][ingr]}</span>
          </S.Ingredient>
        ))}
      </S.IngredientList>
      <SelectButton
        type="button"
        onClick={addIngredient}
        selected={selectedList.length !== 0}
      >
        저장하기
      </SelectButton>
    </S.Container>
  );
}

export default RefrigeratorIngredient;
