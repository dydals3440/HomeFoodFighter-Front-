import React, { useState, useRef } from 'react';
import * as S from './MemberFind.styled';
import { Button } from '../../components/Button/Button.styled';
import { LargeInput } from '../../components/Input/Input';
import Modal from 'components/Modal/Modal';
import { requestFindPassWord } from 'apis/request/auth';
import { useNavigate } from 'react-router-dom';

export default function MemberFind() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    requestFindPassWord({ email });
    setEmail('');
    alert('입력하신 이메일 주소로, 임시 비밀번호가 전송되었습니다.');
    navigate('/login');
  };

  return (
    <S.FormContainer>
      <S.InputText>아이디/비밀번호 찾기</S.InputText>
      <S.InputContainer>
        <LargeInput
          placeholder="email@naver.com 형식으로 이메일을 입력해주세요."
          value={email}
          onChange={handleEmail}
          id="email"
          type="email"
          name="email"
        />
      </S.InputContainer>
      <Button height="5rem" onClick={submitEmail}>
        안내 메일 보내기
      </Button>
    </S.FormContainer>
  );
}
