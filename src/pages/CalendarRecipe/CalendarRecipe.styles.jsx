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

const BlockBox = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border: ${({ selected }) => (selected ? '3px solid #FF0707' : 'none')};
`;

const Btn = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 90%;
  padding: 1rem;
  background-color: ${({ selected }) => (selected ? '#71a60b' : '#C8E293')};
  cursor: ${({ selected }) => (selected ? 'pointer' : 'auto')};
  transition: all 0.5s ease;
  color: #fff;
  border-radius: 1000000px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

export { Container, RecipeList, BlockBox, Btn };
