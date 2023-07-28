import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.725rem 2rem;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
`;

const BtnBox = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 100%;
  position: relative;

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  width: 100%;
  height: 100%;

  img {
    width: 20%;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const RecipeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const RecipeListTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  gap: 0.25rem;
`;

const RecipeList = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Recipe = styled.div`
  min-width: 120px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.725rem;

  img {
    flex-grow: 5;
    width: 100%;
    height: 120px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  span {
    flex-grow: 1;
    display: block;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    font-size: 1.725rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export {
  Container,
  BtnContainer,
  BtnBox,
  LinkBtn,
  RecipeListContainer,
  RecipeListTitle,
  RecipeList,
  Recipe,
};
