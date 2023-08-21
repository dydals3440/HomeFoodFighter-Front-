// MyPageProfileEdit.styles.js

import styled from 'styled-components';



export const ProfileEditContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
