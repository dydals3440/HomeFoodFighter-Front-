import { styled } from 'styled-components';

const Container = styled.div``;

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 2rem;
`;

const NewDietBtn = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid lightgray;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  background-color: #a5ce55;
  font-size: 1.725rem;

  display: ${({ mode }) => (mode ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

export { Container, RecipeList, NewDietBtn };
