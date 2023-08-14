import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ReviewButton = styled.button`
  width: 50%;
  height: 3rem;
  background-color: white;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid black;

  &:click {
    border: none;
  }
`;

const RecipeButton = styled.button`
  width: 50%;
  height: 3rem;
  background-color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;

  &:active {
    border: 1px solid black;
    border-top: none;
    border-left: none;
  }
`;

const RecipeContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
`;

export {
  Container,
  ButtonContainer,
  ReviewButton,
  RecipeButton,
  RecipeContainer,
  ReviewContainer,
};
