import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 1rem;
  p {
    margin-bottom: 0.3rem;
    font-weight: bold;
  }
`;

const IngredientBox = styled.div`
  border-radius: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  color: rgb(150, 153, 156);
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.725rem;
    @media screen and (max-width: 426px) {
      height: 0.2rem;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #c8e293;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(200, 226, 147, 0.1);
  }
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    background-color: #d9d9d9;
    padding: 5px;
    width: 4rem;
    height: 4rem;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
`;

export { Container, IngredientBox, Ingredient };
