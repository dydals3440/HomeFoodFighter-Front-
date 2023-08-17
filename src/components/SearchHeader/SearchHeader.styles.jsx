import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor || '#c8e293;'};
  padding: 0.5725rem 2rem;
`;

const InputContainer = styled.label`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.backgroundcolor || '#fff'};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 100vw;
  gap: 0.5rem;
  overflow: hidden;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1.25rem;
  background-color: ${(props) => props.backgroundColor || '#fff'};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

const ResultContainer = styled.div`
  z-index: 111;
  width: 100%;
  overflow: hidden;
  position: absolute;
  height: ${({ open }) => (open ? 'auto' : '0')};
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  padding: ${({ open }) => (open ? '0.25rem 0.725rem' : '0')};
`;

const ResultTitle = styled.span`
  color: #96999c;
  font-size: 0.725rem;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
`;

const Result = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Point = styled.span`
  color: #098e27;
`;
export {
  Container,
  InputContainer,
  Input,
  ResultContainer,
  ResultTitle,
  ResultBox,
  Result,
  Point,
};
