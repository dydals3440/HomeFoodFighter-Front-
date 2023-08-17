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
  color: black;
  border: none;
  border-top: ${(props) => (props.active ? '1px solid black' : 'none')};
  border-left: ${(props) => (props.active ? '1px solid black' : 'none')};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid black')};
`;

const RecipeButton = styled.button`
  width: 50%;
  height: 3rem;
  background-color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-top: ${(props) => (props.active ? '1px solid black' : 'none')};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid black')};
  border-right: ${(props) => (props.active ? '1px solid black' : 'none')};

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
