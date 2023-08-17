import styled from 'styled-components';

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: white;
`;

export { RecipeList };