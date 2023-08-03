import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './SearchHeader.styles';

import useDebounce from 'hooks/useDebounce';
import { searchRecipeByName } from 'apis/request/recipe';

const SearchHeader = ({
  containerBackGroundColor,
  inputContainerBackGroundColor,
  inputBackGroundColor,
  item,
}) => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const debounce = useDebounce();

  const search = debounce(
    (value) => searchRecipeByName(value).then((res) => console.log(res)),
    500,
  );

  const changeSearchValue = (e) => {
    if (e.target.value === '') setSearchMode(false);
    else {
      setSearchMode(true);
      search(e.target.value);
    }
  };

  return (
    <>
      <S.Container backgroundcolor={containerBackGroundColor}>
        <S.InputContainer backgroundcolor={inputContainerBackGroundColor}>
          <AiOutlineSearch />
          <S.Input
            placeholder="궁금했던 레시피를 검색해보세요."
            backgroundcolor={inputBackGroundColor}
            onChange={changeSearchValue}
          />
        </S.InputContainer>
        <span>{item || null}</span>
      </S.Container>
      <></>
    </>
  );
};

export default SearchHeader;
