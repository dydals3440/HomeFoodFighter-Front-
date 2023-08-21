import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  svg{
    margin-top: 1.25rem;
  }
`;

const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin-top: 30px;
`;


const Ask = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 30px;

`;
const ReviewTextArea = styled.textarea`
color: #black;
box-sizing: border-box;
width: 309px;
height: 261px;
left: 34px;
top: 373px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
margin-top: 10px;
margin-left: 10px;
padding-top: 10px;
`;

const SaveButton = styled.button`
  margin-top: 30px;
  color: #fff;
  border: none;
  cursor: pointer;
  position: absolute;
  width: 327px;
  height: 44px;
  left: 27px;
  top: 711px;
  background: #A5CE55;
  border-radius: 30px;
  padding : 10px 20px;
  margin-left: 37.5%;
  margin-bottom: 10%;
  margin-top: 40px;
  gap: 10px;
`;

export {
  ReviewContainer,
  Title,
  Ask,
  ReviewTextArea,
  SaveButton
};