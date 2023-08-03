import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white; /* Container 배경색 설정 */
  padding: 20px; /* Container 내부 여백 설정 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 그림자를 회색으로 추가 */
  border-radius: 15px 15px 0px 0px;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #ccc; 
  gap: 10px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
const FooterContainer = styled.div`
  display: flex;
  gap: 180px;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px; /* Img 테두리 둥글게 설정 */
  height: 50%;
  border-radius: 15px;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
`;

const Nickname = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Comment = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

export {
  Container,
  RecipeContainer,
  ReviewContainer,
  FooterContainer,
  Img,
  Title,
  Nickname,
  UserName,
  Comment,
  Date,
};
