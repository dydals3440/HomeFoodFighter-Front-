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
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 10%;
`;
