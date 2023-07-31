import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WriteReviewRefrigeratorIcon = styled.div`
width: 92px;
height: 107px;
margin-top: 30px; /* 30px 아래로 이동 */
`;

const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin-top: 15px;
`;

const StarContainer = styled.div`
  display: flex;
  /* 추가: 별표들을 가운데로 정렬 */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* 추가: 다른 요소와의 간격을 조정 */
  margin-top: 5px;
`;

const Star = styled.span`
  cursor: pointer;
  font-size: 50px;
  color: ${(props) => (props.isFilled ? 'gold' : '#dddddd')};
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
color: #f2f2f2;
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
`;

export {
  ReviewContainer,
  WriteReviewRefrigeratorIcon,
  Title,
  StarContainer,
  Star,
  Ask,
  ReviewTextArea,
  SaveButton
};

