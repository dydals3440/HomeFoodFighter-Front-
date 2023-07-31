import React, { useState } from 'react';
import * as S from './MemberFind.styled';
import { Button } from '../../components/Button/Button.styled';
import { LargeInput } from '../../components/Input/Input';

export default function MemberFind() {
  const [email, setEmail] = useState();
  const handleChangeEmail = () => {};
  return (
    <S.FormContainer>
      <S.InputText>아이디/비밀번호 찾기</S.InputText>
      <S.InputContainer>
        <LargeInput
          placeholder="email@naver.com 형식으로 이메일을 입력해주세요."
          id="email"
          type="text"
          name="username"
          value={email}
          onChange={handleChangeEmail}
        />
      </S.InputContainer>
      <Button height="7%">안내 메일 보내기</Button>
    </S.FormContainer>
  );
}
