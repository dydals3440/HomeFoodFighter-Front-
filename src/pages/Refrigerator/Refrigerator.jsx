import { useEffect, useState } from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RefrigeratorPlusIcon } from '../../assets/RefrigeratorPlusIcon.svg';

import * as S from './Refrigerator.styles';

import {
  requestDeleteIngredient,
  requestGetRefrigerator,
} from 'apis/request/refrigerator';
import Header from 'components/Header/Header';
import SelectButton from 'components/SelectButton/SelectButton';
import { convertIngredient } from 'utils/ingredient';
import {
  INGREDIENT_ICON,
  INGREDIENT_ID,
  INGREDIENT_LIST,
  INGREDIENT_TITLE,
} from 'constants/ingredient';
import vegetableIcon from 'assets/ingredient/vegetable';
import useError from 'hooks/useError';

function Refrigerator() {
  const [ingredientList, setIngredientList] = useState({});
  const [mode, setMode] = useState('search');
  const [selectedList, setSelectedList] = useState([]);

  const navigate = useNavigate();
  const handleError = useError();

  useEffect(() => {
    requestGetRefrigerator()
      .then((res) => {
        setIngredientList(convertIngredient(res.data.result));
      })
      .catch((e) => {
        handleError(e);
        navigate('/');
      });
  }, []);

  const selectIngredient = (ingr) => () => {
    if (selectedList.includes(ingr)) {
      setSelectedList((prev) => prev.filter((selcted) => selcted !== ingr));
    } else {
      setSelectedList((prev) => [...prev, ingr]);
    }
  };

  const toggleMode = () => {
    if (mode === 'search') setMode('delete');
    else setMode('search');
    setSelectedList([]);
  };

  const removeIngredient = () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    requestDeleteIngredient(selectedList)
      .then((res) => {
        alert('삭제되었습니다');
        location.reload();
      })
      .catch((e) => {
        handleError(e);
      });
    setSelectedList([]);
  };

  const moveRecipe = () => {
    navigate(`/search?ingredient_id=${selectedList.join(',')}`);
  };
  return (
    <S.Container>
      <Header
        item={
          <RiDeleteBin6Line onClick={toggleMode} style={{ fontSize: '2rem' }} />
        }
      >
        냉장고 채우기
      </Header>
      <S.RefrigeratorBox>
        <S.RefrigeratorTopBox>
          {Array(6)
            .fill()
            .map((_, idx) => (
              <S.ColorBlock key={`top-${idx}`} color={idx} />
            ))}
        </S.RefrigeratorTopBox>
        <S.RefrigeratorIngredientBox>
          {Array(5)
            .fill()
            .map((_, idx) => (
              <S.IngredientBox key={`ingre-${idx}`}>
                <S.LinkBtn to={`${idx + 1}`}>
                  <RefrigeratorPlusIcon />
                </S.LinkBtn>
                <S.IngredientList>
                  {ingredientList && ingredientList[idx + 1]?.length > 0 ? (
                    ingredientList[idx + 1].map((ingredient, i) => (
                      <S.Ingredient
                        onClick={selectIngredient(ingredient.ingre_id)}
                        selected={selectedList.includes(ingredient.ingre_id)}
                        mode={mode}
                        key={`${ingredient.ingre_id}-${i}`}
                      >
                        {
                          INGREDIENT_ICON[idx][
                            INGREDIENT_ID[ingredient.ingre_id]
                          ]
                        }
                        <span>
                          {
                            INGREDIENT_LIST[idx][
                              INGREDIENT_ID[ingredient.ingre_id]
                            ]
                          }
                        </span>
                      </S.Ingredient>
                    ))
                  ) : (
                    <S.IngredientTitle>
                      {INGREDIENT_TITLE[idx]}
                    </S.IngredientTitle>
                  )}
                </S.IngredientList>
              </S.IngredientBox>
            ))}
        </S.RefrigeratorIngredientBox>
      </S.RefrigeratorBox>
      {ingredientList.isEmpty ? null : mode === 'search' ? (
        <SelectButton selected={selectedList.length > 0} onClick={moveRecipe}>
          요리보기
        </SelectButton>
      ) : (
        <SelectButton
          selected={selectedList.length > 0}
          onClick={removeIngredient}
          color="#E76464"
        >
          삭제하기
        </SelectButton>
      )}
    </S.Container>
  );
}

export default Refrigerator;
