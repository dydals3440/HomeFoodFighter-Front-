import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 2rem;
`;

const Btn = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 90%;
  padding: 1rem;
  background-color: #71a60b;
  color: #fff;
  border-radius: 1000000px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

export { Container, RecipeList, Btn };
