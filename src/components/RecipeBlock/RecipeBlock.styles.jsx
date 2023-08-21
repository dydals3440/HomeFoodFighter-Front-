import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  border-radius: 15px;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Summary = styled.span``;

const Nickname = styled.span`
  span {
    opacity: 0.5;
  }
`;

const Score = styled.span`
  span:first-child {
    font-weight: 700;
  }
  span:last-child {
    opacity: 0.5;
  }
`;
export { Container, Img, Title, Summary, Nickname, Score };
