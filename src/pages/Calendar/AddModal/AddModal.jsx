import { useState } from 'react';

import * as S from './AddModal.styles';

const AddModal = ({ open, location }) => {
  const [customMode, setCustomMode] = useState(false);
  const customRecipe = () => {};
  return (
    <S.Container open={open} location={location}>
      <S.LinkBtn to="/calendar/recipe">찜한 레시피에서 선택</S.LinkBtn>
      <S.LinkBtn onClick={customRecipe}>직접 입력하기</S.LinkBtn>
      <S.CustomInputBox>
        <S.CustomInput placeholder="음식을 직접 입력해주세요" />
      </S.CustomInputBox>
    </S.Container>
  );
};

export default AddModal;
