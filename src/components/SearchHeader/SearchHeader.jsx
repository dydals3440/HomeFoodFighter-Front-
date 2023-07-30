import * as S from './SearchHeader.styles';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchHeader = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <AiOutlineSearch />
        <S.Input placeholder="궁금했던 레시피를 검색해보세요." />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchHeader;
