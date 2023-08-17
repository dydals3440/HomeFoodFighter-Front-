import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const TOP_COLOR = [
  '#C7D8ED',
  '#DBEEFE',
  '#C0D9EF',
  '#AFC8DE',
  '#C0D9EF',
  '#AFC8DE',
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const RefrigeratorBox = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 80vh;
  width: 90%;
  border-radius: 10px;
  overflow: hidden;
`;

const RefrigeratorTopBox = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  border-bottom: 7px solid #678096;
`;

const ColorBlock = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: ${({ color }) => TOP_COLOR[Number(color)]};
`;

const RefrigeratorIngredientBox = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 2rem;
  background-color: #a5c5de;

  display: flex;
  flex-direction: column;
`;

const IngredientBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  min-height: 8rem;
  padding: 1rem;
  background-color: #8db0cc;
  border: 3px solid #fff;

  svg {
    font-size: 2.5rem;
  }
`;

const IngredientList = styled.div`
  color: #fff;
  display: flex;
  gap: 1.25rem;
  min-width: 90%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0.725rem;
    @media screen and (max-width: 426px) {
      display: none;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #c8e293;
    border-radius: 10px;
  }
  @media screen and (max-width: 426px) {
    min-width: 80%;
  }
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  svg {
    width: 4rem;
    height: 4rem;
    border: ${({ selected, mode }) =>
      selected
        ? mode === 'search'
          ? '3px solid #a5ce55'
          : '3px solid #E76464'
        : 'none'};
    border-radius: 50%;
  }
`;

const IngredientTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

export {
  Container,
  RefrigeratorBox,
  RefrigeratorTopBox,
  ColorBlock,
  RefrigeratorIngredientBox,
  IngredientBox,
  IngredientList,
  Ingredient,
  IngredientTitle,
  LinkBtn,
};
