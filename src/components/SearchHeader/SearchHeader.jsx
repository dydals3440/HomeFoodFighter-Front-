import * as S from './SearchHeader.styles';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchHeader = ({
  containerBackGroundColor,
  inputContainerBackGroundColor,
  inputBackGroundColor,
  item,
}) => {
  return (
    <S.Container backgroundColor={containerBackGroundColor}>
      <S.InputContainer backgroundColor={inputContainerBackGroundColor}>
        <AiOutlineSearch />
        <S.Input
          placeholder="궁금했던 레시피를 검색해보세요."
          backgroundColor={inputBackGroundColor}
        />
      </S.InputContainer>
      <span>{item || null}</span>
    </S.Container>
  );
};

export default SearchHeader;
