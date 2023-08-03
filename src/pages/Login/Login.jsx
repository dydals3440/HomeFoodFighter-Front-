import React, { useState } from 'react';
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  ErrorMessage,
} from './Login.styled';

import { handleLogin } from '../../utils/Auth';
import AuthHelper from '../../components/AuthHelper/AuthHelper';
import { LargeInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button.styled';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showIdError, setShowIdError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    setShowIdError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setShowPasswordError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setShowIdError(true);
    }

    if (!password) {
      setShowPasswordError(true);
    }

    if (id && password) {
      console.log(id, password);
      await handleLogin(id, password);
    }
  };

  return (
    <FormContainer>
      <h1>로그인</h1>
      <InputContainer>
        <LargeInput
          id="id"
          type="id"
          name="id"
          required
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={handleId}
        />
        {showIdError && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <LargeInput
          id="password"
          type="password"
          name="password"
          required
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePassword}
        />
        {showPasswordError && (
          <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>
        )}
      </InputContainer>
      <AuthHelper />
      <ButtonContainer>
        <Button type="button" onClick={handleSubmit}>
          로그인
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default Login;
