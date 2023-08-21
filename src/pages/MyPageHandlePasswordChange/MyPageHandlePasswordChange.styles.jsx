import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const InputField = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  /*border-radius: 15px; 추가한 부분: 둥근 부분의 테두리 반경 */
  padding: 0rem; /* 추가한 부분: 입력 창의 내용과 테두리 사이의 간격 조정 */
  /* 추가적인 스타일을 원하면 여기에 추가하세요 */
`;

export const ButtonContainer = styled.div`

  margin-top: 0.625rem;
  width: 80%;
  /* margin-bottom: 5rem; */
  display: flex;
  justify-content: space-around;
  align-items: space-between;
  align-items: center;
  /* margin-bottom: 30px; */
  margin-top: 20vh;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.625rem;
  margin-left: 1.2rem;
`;

