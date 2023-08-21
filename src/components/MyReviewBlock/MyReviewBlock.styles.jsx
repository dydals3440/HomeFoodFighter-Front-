import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white; 
  padding: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  border-radius: 15px 15px 0px 0px;
`;

const RecipeContainer = styled.div`
  height: 235px;
  border-bottom: 3px solid #ccc; 
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 180px;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px; 
  height: 50%;
  border-radius: 15px;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Nickname = styled.div`
margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #B0B0B0;
  font-weight: 500;
  svg {
    color: black;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Comment = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Date = styled.div`
  white-space: nowrap;
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
