import styled from 'styled-components';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  width: 80%;
`;

const InputText = styled.h1`
  position: absolute;
  top: 10rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export { FormContainer, InputContainer, InputText };
