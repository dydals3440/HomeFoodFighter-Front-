import { useState, useEffect } from 'react';

import * as S from './AddModal.styles';

const AddModal = ({ open, location, params }) => {
  const [customMode, setCustomMode] = useState(false);
  useEffect(() => {
    if (!open) setCustomMode(false);
  }, [open]);
  const customRecipe = () => {
    setCustomMode(!customMode);
  };
  return (
    <S.Container open={open} location={location}>
      <S.LinkBtn to={`/calendar/recipe?date=${params}`}>
        찜한 레시피에서 선택
      </S.LinkBtn>
      <S.LinkBtn onClick={customRecipe}>직접 입력하기</S.LinkBtn>
      <S.CustomInputBox open={customMode}>
        <S.CustomInput placeholder="음식을 직접 입력해주세요" />
      </S.CustomInputBox>
    </S.Container>
  );
};

export default AddModal;
