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
  background-color: transparent; /* 추가한 부분: 입력 창의 배경색을 투명으로 설정 */
  outline: none; /* 추가한 부분: 포커스 효과를 제거함 */
  border-radius: 20px; /* 추가한 부분: 꼭짓점 없이 둥글게 만듦 */
  background-color: #00000; /* 추가한 부분: 둥글게 만든 영역의 배경색 설정 */
  padding: 1rem; /* 추가한 부분: 내용과의 간격 조정 */
  justify-content: center;
  width: 80%;
  border: 4px solid #c2d6c2; /* 추가한 부분: 둥근 부분의 테두리 두께와 색상 설정 */
`;

export const InputField = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border-radius: 15px; /* 추가한 부분: 둥근 부분의 테두리 반경 */
  padding: 0rem; /* 추가한 부분: 입력 창의 내용과 테두리 사이의 간격 조정 */
  /* 추가적인 스타일을 원하면 여기에 추가하세요 */
`;

export const ButtonContainer = styled.div`

  margin-top: 0.625rem;
  width: 80%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.625rem;
  margin-left: 1.2rem;
`;

export const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  input[type='checkbox'] {
    appearance: none;
    margin: 0;
    position: relative;
    width: 1rem;
    height: 1rem;
    border: 1px solid #000;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin-right: 0.5rem;
  }

  input[type='checkbox']:checked {
    background-color: #000;
  }

  span {
    font-size: 1rem;
  }
`;
