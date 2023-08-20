import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MemberFind.styled';

import Button from '../../components/Button/Button';
import LargeInput from '../../components/Input/Input';
import { requestFindPassWord } from 'apis/request/auth';
import useError from 'hooks/useError';

export default function MemberFind() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleError = useError();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    requestFindPassWord({ email })
      .then((res) => {
        console.log(res);
        if (!res.data.isSuccess) throw res.data;
        else {
          setEmail('');
          alert('입력하신 이메일 주소로, 임시 비밀번호가 전송되었습니다.');
          navigate('/login');
        }
      })
      .catch((e) => handleError(e));
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
