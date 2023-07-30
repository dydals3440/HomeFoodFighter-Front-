import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.725rem 2rem;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
`;

const BtnBox = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 100%;
  position: relative;

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  width: 100%;
  height: 100%;

  img {
    width: 20%;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export { Container, BtnContainer, BtnBox, LinkBtn };
