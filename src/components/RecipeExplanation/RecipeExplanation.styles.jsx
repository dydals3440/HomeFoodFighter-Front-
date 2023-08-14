import styled from 'styled-components';

const RecipeBox = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const RecipeImage = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const RecipeDescription = styled.div`
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  box-shadow: -1px 6px 0px -2px rgba(207, 205, 205, 0.75);
  -webkit-box-shadow: -1px 6px 0px -2px rgba(207, 205, 205, 0.75);
  -moz-box-shadow: -1px 6px 0px -2px rgba(207, 205, 205, 0.75);
`;

const RecipeNumber = styled.div`
  position: absolute;
  top: 9.8rem;
  border: 2px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: white;
`;

export { RecipeBox, RecipeImage, RecipeDescription, RecipeNumber };
