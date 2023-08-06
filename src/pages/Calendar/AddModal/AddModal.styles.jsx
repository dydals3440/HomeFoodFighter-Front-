import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;

  top: ${({ location }) => `${location.y}px`};
  left: ${({ location }) => `${location.x}px`};

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  padding: 0.725rem;
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
  display: ${({ open }) => (open ? 'auto' : 'none')};
  position: relative;
  width: 100%;
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
