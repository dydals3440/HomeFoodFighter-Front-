import { useState, useEffect } from 'react';

import * as S from './AddModal.styles';
import { addDietWithCustom, deleteDiet } from 'apis/request/recipe';
import useError from 'hooks/useError';

const AddModal = ({
  open,
  location,
  params,
  deleteMode,
  addCustomRecipe,
  deleteRecipe,
  toggleMode,
}) => {
  const [customMode, setCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState('');
  const handleError = useError();

  useEffect(() => {
    if (!customMode) setCustomValue('');
  }, [customMode]);

  useEffect(() => {
    if (!open) setCustomMode(false);
  }, [open]);

  const customRecipe = () => {
    setCustomMode(!customMode);
  };

  const changeValue = (e) => {
    setCustomValue(e.target.value);
  };

  const addCustom = (e) => {
    if (!customMode || e.key !== 'Enter' || customValue.trim().length === 0)
      return;
    const [year, month, day, time] = params.split('-');
    addDietWithCustom(`${year}-${month}-${day}`, {
      name: customValue,
      meal_time: Number(time),
    })
      .then((res) => {
        setCustomMode(false);
        addCustomRecipe({
          userid: 5,
          recipe_id: null,
          bydate: `${year}-${month}-${day}`,
          meal_time: time,
          name: customValue,
        });
        toggleMode();
      })
      .catch((e) => handleError(e));
  };

  const deleteDietRecipe = () => {
    const [year, month, day, time] = params.split('-');
    deleteDiet(`${year}-${month}-${day}`, time)
      .then((res) => {
        alert('삭제되었습니다.');
        deleteRecipe(new Date(`${year}-${month}-${day}`), time);
        toggleMode();
      })
      .catch((e) => handleError(e));
  };
  return (
    <S.Container open={open} location={location}>
      {deleteMode ? (
        <S.LinkBtn onClick={deleteDietRecipe}>삭제하기</S.LinkBtn>
      ) : (
        <>
          <S.LinkBtn to={`/calendar/recipe?date=${params}`}>
            찜한 레시피에서 선택
          </S.LinkBtn>
          <S.LinkBtn onClick={customRecipe}>직접 입력하기</S.LinkBtn>
          <S.CustomInputBox open={customMode}>
            <S.CustomInput
              value={customValue}
              onChange={changeValue}
              onKeyDown={addCustom}
              placeholder="음식을 직접 입력해주세요"
            />
          </S.CustomInputBox>
        </>
      )}
    </S.Container>
  );
};

export default AddModal;
