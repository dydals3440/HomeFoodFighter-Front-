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
  const [searchResult, setSearchResult] = useState([]);

  const debounce = useDebounce();

  const search = debounce((value) => {
    if (value.length > 0)
      searchRecipeByName(value).then((res) => setSearchResult(res.data.result));
  }, 500);

  const changeSearchValue = (e) => {
    if (e.target.value === '') setSearchMode(false);
    else setSearchMode(true);

    search(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <S.Container backgroundcolor={containerBackGroundColor}>
        <S.InputContainer backgroundcolor={inputContainerBackGroundColor}>
          <AiOutlineSearch />
          <S.Input
            placeholder="궁금했던 레시피를 검색해보세요."
            backgroundColor={inputBackGroundColor}
            onChange={changeSearchValue}
          />
        </S.InputContainer>
        <span>{item || null}</span>
      </S.Container>
      <S.ResultContainer open={searchMode}>
        <S.ResultTitle>레시피 바로가기</S.ResultTitle>
        <S.ResultBox>
          {searchResult.map((recipe) => (
            <S.Result
              key={`${recipe.recipe_name}-${recipe.recipe_id}`}
              to={`/recipe/detail/${recipe.recipe_id}`}
            >
              {recipe.recipe_name.includes(searchValue) ? (
                <>
                  {recipe.recipe_name.split(searchValue)[0]}
                  <S.Point>{searchValue}</S.Point>
                  {recipe.recipe_name.split(searchValue)[1]}
                </>
              ) : null}
            </S.Result>
          ))}
        </S.ResultBox>
      </S.ResultContainer>
    </div>
  );
};

export default SearchHeader;
