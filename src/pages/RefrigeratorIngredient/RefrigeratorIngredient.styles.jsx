import { styled } from 'styled-components';

const NaviBar = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    padding: 15px 30px 8px 30px;
    display: flex;
    justify-content: space-between;  
`
const IngredientGridContainer = styled.div`
    position: relative;
    left: 17%;
    margin: 5px;
    padding: 5px;
    width: 480px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    background-color: white;
`;

const Ingredient = styled.div`
  margin: 8px;
  background-color: white;
  height: 90px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IngredientContainer = styled.div`
  overflow-y: auto;
  height: 760px;
`;

const IngredientSaveBtnText = styled.div`
  position: absolute;
  top: 25%;
  left: 40%;
  color: white;
  font-size: 15px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const IngredientName = styled.p`
  margin-top: 1px;
  text-align: center;
  font-family: 'Noto Sans';
  font-weight: 600;
`;

export{NaviBar, IngredientGridContainer, Ingredient, IngredientSaveBtnText, IngredientContainer, IngredientName}