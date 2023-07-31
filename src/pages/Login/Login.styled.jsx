import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.625rem;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.625rem;
  margin-left: 1.2rem;
`;
