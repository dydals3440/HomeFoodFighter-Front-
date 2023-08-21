import { useState } from 'react';

import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  ErrorMessage,
} from './MyPageHandlePasswordChange.styles';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import LargeInput from 'components/Input/Input';

import { requestChangePassWord } from 'apis/request/auth';

const PasswordChangeScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

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

    try {
      const response = await requestChangePassWord(currentPassword, newPassword);

      if (response.isSuccess) {
        alert('비밀번호 변경이 완료되었습니다.');
      } else {
        alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      alert('비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div style ={{backgroundColor: '#fff'}}>
      <Header>
        비밀번호 변경
      </Header>

      <FormContainer>
        <InputContainer>
          <LargeInput
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />
        </InputContainer>

        <InputContainer>
          <LargeInput
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={handleNewPassword}
          />
        </InputContainer>

        <InputContainer>
          <LargeInput
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />
          {!passwordMatch && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
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
