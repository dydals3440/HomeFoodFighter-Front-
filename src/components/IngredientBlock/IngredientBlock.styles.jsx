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
  color: #96999c;
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
`;

const Image = styled.img`
  box-sizing: border-box;
  background-color: #d9d9d9;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
`;

export { Container, IngredientBox, Ingredient, Image };
