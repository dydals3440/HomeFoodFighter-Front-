import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  ErrorMessage,
  StyledCheckbox, // 체크 박스 스타일 임포트
} from './MyPageHandlePasswordChange.styles'; // 로그인 화면에서 사용한 스타일 임포트
import { Button } from '../../components/Button/Button.styled';

const PasswordChangeScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // 체크 박스 상태 추가

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
    setPasswordMatch(true);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordMatch(false);
      return;
    }

    // 여기에서 비밀번호 변경 로직을 수행합니다.
    // 비밀번호 변경이 성공하면 이동할 페이지로 리다이렉트 또는 메시지를 표시하는 등의 로직을 추가할 수 있습니다.
    console.log('현재 비밀번호:', currentPassword);
    console.log('새 비밀번호:', newPassword);
    console.log('새 비밀번호 확인:', confirmNewPassword);
    console.log('체크 박스 상태:', isChecked);
  };

  return (
    <div>
      <Header>
        비밀번호 변경
      </Header>

      <FormContainer>
        
        <InputContainer>
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />
        </InputContainer>

        <InputContainer>
          <input
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={handleNewPassword}
          />
        </InputContainer>

        <InputContainer>
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />
          {!passwordMatch && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </InputContainer>

        
        <ButtonContainer>
          <Button type="button" onClick={handleSubmit}>
            확인
          </Button>
        </ButtonContainer>
      </FormContainer>
    </div>
  );
};

export default PasswordChangeScreen;
