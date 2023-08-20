import styled from 'styled-components';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100%;
  width: 100%;
`;

const BackIcon = styled.svg`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.4);
  }
`;

export { FormContainer, BackIcon };
