import React, { useState } from 'react';
import * as S from './SignUp.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LargeInput, SmallInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

const schema = yup.object({
  id: yup.string().required().matches(),
  password: yup.string().required(),
  check_password: yup.string().required(),
  nickname: yup.string().required(),
  name: yup.string().required(),
  birth: yup.date().required(),
  email: yup.string().required(),
  agreed_to_terms: yup.number().required(),
});

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { error },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(error);

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(formSubmit)}>
      <S.InputContainer>
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="아이디를 입력하세요"
            label="아이디"
            type="text"
            name="username"
            register={{ ...register('id') }}
          />
          <Button width={'30%'} backgroundColor={'white'} color={'#a5ce55'}>
            중복확인
          </Button>
        </S.InputButtonWrapper>
        <LargeInput
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          register={{ ...register('password') }}
        />
        <LargeInput
          type="password"
          name="confirmPassword"
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력하세요"
          register={{ ...register('check_password') }}
        />
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="닉네임을 입력하세요"
            label="닉네임"
            type="text"
            name="nickname"
            register={{ ...register('nickname') }}
          />
          <Button width={'30%'} backgroundColor={'white'} color={'#a5ce55'}>
            중복확인
          </Button>
        </S.InputButtonWrapper>
        <LargeInput
          type="text"
          name="fullName"
          label="이름"
          placeholder="이름을 입력하세요"
          register={{ ...register('name') }}
        />
        <LargeInput
          type="text"
          name="birthdate"
          label="생년월일"
          placeholder="YYYYMMDD 형식으로 입력하세요"
          register={{ ...register('birth') }}
        />
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="email@naver.com 형식으로 입력하세요"
            type="text"
            label="이메일"
            name="email"
            register={{ ...register('email') }}
          />
          <Button width={'30%'} backgroundColor={'white'} color={'#a5ce55'}>
            중복확인
          </Button>
        </S.InputButtonWrapper>

        <S.InputText>약관</S.InputText>
        <div>
          <S.TermWrapper>
            <S.CheckBoxWrapper>
              <S.CheckBoxInput id="termsAgreed" name="termsAgreed" />
              <S.CheckBoxText>전체동의</S.CheckBoxText>
            </S.CheckBoxWrapper>
            <S.Divider />
            <S.CheckBoxWrapper>
              <S.CheckBoxInput
                id="individualTermsAgreed"
                name="termsAgreed"
                register={{ ...register('agreed_to_terms') }}
              />
              <S.CheckBoxText>(필수) 개인회원 약관에 동의</S.CheckBoxText>
            </S.CheckBoxWrapper>
          </S.TermWrapper>
        </div>
      </S.InputContainer>
      <Button color={'white'} backgroundColor={'#a5ce55'} width={'80%'}>
        회원가입
      </Button>
    </S.FormContainer>
  );
}
