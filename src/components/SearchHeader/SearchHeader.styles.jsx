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
  background-color: ${(props) => props.backgroundcolor || '#fff'};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

export { Container, InputContainer, Input };
