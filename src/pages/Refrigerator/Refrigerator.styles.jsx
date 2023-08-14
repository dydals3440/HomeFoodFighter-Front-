import { styled } from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';



const NaviBar = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    padding: 15px 30px 8px 30px;
    display: flex;
    justify-content: space-between;  
`

const RefrigeratorContanier = styled.div`
  position: relative;
  left: 25%;
  width: 55%;
  height: 380px;
`
const RefrigeratorBoxTop1 = styled.div`
  width: 38%;
  height: 38%;
  left: 0;
  top: 0;
  position: absolute;
  background: #C7D8ED;
  border-top-left-radius: 10px;
`;
const RefrigeratorBoxTop2 = styled.div`
  width: 38%;
  height: 38%;
  left: 10%;
  top: 0;
  position: absolute;
  background: #DBEEFE;
`;
const RefrigeratorBoxTop3 = styled.div`
  width: 38%;
  height: 38%;
  left: 33%;
  top: 0;
  position: absolute;
  background: #C0D9EF;
`;
const RefrigeratorBoxTop4 = styled.div`
  width: 15%;
  height: 38%;
  left: 66%;
  top: 0;
  position: absolute;
  background: #C0D9EF;
`;
const RefrigeratorBoxTop5 = styled.div`
  width: 10%;
  height: 38%;
  left: 55%;
  top: 0;
  position: absolute;
  background: #AFC8DE;
`;
const RefrigeratorBoxTop6 = styled.div`
  width: 18.6%;
  height: 38%;
  left: 75%;
  top: 0;
  position: absolute;
  background: #AFC8DE;
  border-top-right-radius: 10px;
`;

const RefrigeratorFloor = styled.div`
  width: 98%;
  height: 19.3%;
  left: 3px;
  top: 3px;
  position: absolute;
  background: #8DB0CC;
`;

const IngredientAddbtn = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
`;

const RefrigeratorFloorText= styled.div`
  position: absolute;
  top: 35%;
  left: 20%;
  color: white;
  font-size: 20px;
  font-family: 'Noto Sans';
  font-weight: 700;
  word-wrap: break-word;
`;

const RefrigeratorFloorIngredient = styled.div`
  position: absolute;
  top: 35%;
  left: 20%;
  color: white;
  font-size: 20px;
  font-family: 'Noto Sans';
  font-weight: 700;
  word-wrap: break-word;
`;

export {NaviBar, RefrigeratorContanier, RefrigeratorFloor, IngredientAddbtn, RefrigeratorFloorText,
        RefrigeratorBoxTop1, RefrigeratorBoxTop2, RefrigeratorBoxTop3, RefrigeratorBoxTop4, RefrigeratorBoxTop5, RefrigeratorBoxTop6,};
