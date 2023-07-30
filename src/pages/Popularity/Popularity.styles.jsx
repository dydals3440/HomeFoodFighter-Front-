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

const BlockContainer = styled.div`
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  z-index: 1;
  top: -0.5rem;
  left: -0.5rem;

  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
`;
export { Container, RecipeList, BlockContainer, Dot };
