import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  svg {
    margin-top: 1.25rem;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 33px;
  margin-top: 30px;
`;

const Ask = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 27px;
  display: flex;
  align-items: center;
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
  width: 327px;
  height: 44px;
  background: #a5ce55;
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 10%;
  margin-top: 40px;
  gap: 10px;
`;

export { ReviewContainer, Title, Ask, ReviewTextArea, SaveButton };
