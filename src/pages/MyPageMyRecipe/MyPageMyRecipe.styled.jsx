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

const ButtonContainer = styled.div`
display: flex;
@media screen and (max-width: 768px) {
  display: flex;
}
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 261px;
  height: 41px;
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

const Icon = styled.div`
  gap: 5px;  
`;

const Ment = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 800;
  font-size: 15px;
  /* 추가적인 스타일 속성 */
`;

const NoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh; 
  gap: 50px; 
  margin-bottom: 170px; 
  
`;
const LogoContainer = styled.div`
svg{
  width: 100px; 
  height: 130px; 
}
`;

export{
    Button,
    RecipeList,
    ButtonContainer,
    body,
    AddButton,
    Ment,
    NoContainer,
    LogoContainer,
    Icon,
};