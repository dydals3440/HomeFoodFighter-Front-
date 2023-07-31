// import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 25%;
  border-radius: 15px;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Summary = styled.span``;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Watch = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Scrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;



export { Container, Img, Title, Summary, Date, Watch, Scrap, Comment };




const InfoRow = styled.div`
  display: flex; /* Date, Watch, Scrap, Comment 컴포넌트들을 가로로 배치하기 위해 flex 사용 */
  align-items: center;
  gap: 5px;
`;

// const Date = styled(InfoRow)``;

// const Watch = styled(InfoRow)``;

// const Scrap = styled(InfoRow)``;

// const Comment = styled(InfoRow)``;
