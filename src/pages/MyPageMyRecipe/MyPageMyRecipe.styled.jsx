import styled, {css} from 'styled-components';

const body = styled.div`
background-color: white;
`;

const Button = styled.button`
background-color: white;
  box-sizing: border-box;
  width: 383px;
  height: 39px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#FFFFFF' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#000' : '#dddddd')};

 
  ${(props) =>
    props.isActive &&
    css`
      border-width: 2px 2px 0px 0px; 
      border-style: solid;
      border-color: #000000;
    `}
  ${(props) =>
    !props.isActive &&
    css`
      border: none;
    `}
    
  ${(props) =>
    props.position &&
    css`
      left: ${props.position.left}px;
      top: ${props.position.top}px;
    `}
`;

const RecipeList = styled.div`
background-color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem;
  padding: 1rem 2rem;
`;

export{
    Button,
    RecipeList,
    body,
};