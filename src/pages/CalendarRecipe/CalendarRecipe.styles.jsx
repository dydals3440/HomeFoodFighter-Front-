import { styled } from 'styled-components';

const Container = styled.div``;

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 2rem;
`;

export { Container, RecipeList };
