import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;

  top: ${({ location }) => `${location.y}px`};
  left: ${({ location }) => `${location.x}px`};

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border: 1px solid #a5ce55;
  border-radius: 10px;
  background-color: #fff;
`;

const LinkBtn = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.725rem;
`;

const CustomInputBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
`;

const CustomInput = styled.input`
  position: absolute;
  width: 200%;
  bottom: -60px;
  left: -50%;

  font-size: 1.115rem;

  border: 1px solid #a5ce55;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

export { Container, LinkBtn, CustomInputBox, CustomInput };
