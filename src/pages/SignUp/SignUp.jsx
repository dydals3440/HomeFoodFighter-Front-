import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import {
  requestSignUp,
  requestCheckDuplicateId,
  requestCheckDuplicateNickName,
  requestCheckDuplicateEmail,
} from 'apis/request/auth';

import * as S from './SignUp.styled';
import LargeInput from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useError from 'hooks/useError';

const isEmpty = (value) => value.trim() !== '';

const SignUp = () => {
  const [termChecked, setTermChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const navigate = useNavigate();
  const handleError = useError();

  const handleAllCheck = () => {
    console.log('전체 동의');
    setTermChecked((prev) => !prev);
    setAllChecked((prev) => !prev);
  };

  const handleTermCheck = () => {
    setTermChecked((prev) => !prev);
    setAllChecked((prev) => !prev);
  };

  const handleCheckDuplicateId = (e) => {
    e.preventDefault();
    requestCheckDuplicateId(enteredId)
      .then((res) => {
        if (!res.data.isSuccess) throw res.data;
        else {
          alert('사용 가능한 아이디 입니다.');
        }
      })
      .catch((e) => handleError(e));
  };

  const handleCheckDuplicateNickName = (e) => {
    e.preventDefault();
    requestCheckDuplicateNickName(enteredNickName)
      .then((res) => {
        if (!res.data.isSuccess) throw res.data;
        else {
          alert('사용 가능한 닉네임입니다.');
        }
      })
      .catch((e) => handleError(e));
  };

  const handleCheckDuplicateEmail = (e) => {
    e.preventDefault();
    requestCheckDuplicateEmail(enteredEmail)
      .then((res) => {
        if (!res.data.isSuccess) throw res.data;
        else {
          alert('사용 가능한 이메일 입니다.');
        }
      })
      .catch((e) => handleError(e));
  };

  const {
    value: enteredId,
    isValid: enteredIdIsValid,
    hasError: idInputHasError,
    valueChangeHandler: idChangedHandler,
    inputBlurHandler: idBlurHandler,
  } = useInput((value) => /^[a-zA-Z0-9_]{4,20}$/.test(value));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~․!@#$%^&*()_\-+=\[\]{}|\\;:'"<>,.?\/])[A-Za-z\d~․!@#$%^&*()_\-+=\[\]{}|\\;:'"<>,.?\/]{8,16}$/.test(
      value,
    ),
  );

  const {
    value: enteredPasswordCheck,
    isValid: enteredPasswordCheckIsValid,
    hasError: passwordCheckInputHasError,
    valueChangeHandler: passwordCheckChangedHandler,
    inputBlurHandler: passwordCheckBlurHandler,
  } = useInput((value) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~․!@#$%^&*()_\-+=\[\]{}|\\;:'"<>,.?\/])[A-Za-z\d~․!@#$%^&*()_\-+=\[\]{}|\\;:'"<>,.?\/]{8,16}$/.test(
      value,
    ),
  );

  const {
    value: enteredNickName,
    isValid: enteredNickNameIsValid,
    hasError: nickNameInputHasError,
    valueChangeHandler: nickNameChangedHandler,
    inputBlurHandler: nickNameBlurHandler,
  } = useInput(isEmpty);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isEmpty);

  const {
    value: enteredBirth,
    isValid: enteredBirthIsValid,
    hasError: birthInputHasError,
    valueChangeHandler: birthChangedHandler,
    inputBlurHandler: birthBlurHandler,
  } = useInput(isEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmpty);

  const handleSubmit = (e) => {
    if (!formIsValid) {
      return;
    }
    e.preventDefault();
    requestSignUp({
      id: enteredId,
      password: enteredPassword,
      check_password: enteredPasswordCheck,
      nickname: enteredNickName,
      name: enteredName,
      birth: enteredBirth,
      email: enteredEmail,
      agreed_to_terms: 1,
    })
      .then((res) => {
        alert('회원가입이 정상적으로 처리되었습니다.');
        navigate('/login');
      })
      .catch((e) => {
        handleError(e);
      });
  };

  let formIsValid = false;

  if (
    enteredIdIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordCheckIsValid &&
    enteredNickNameIsValid &&
    enteredNameIsValid &&
    enteredBirthIsValid &&
    enteredEmailIsValid &&
    allChecked &&
    termChecked
  ) {
    formIsValid = true;
  }
  return (
    <S.FormContainer>
      <h1>회원 가입</h1>
      <S.InputContainer>
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="4~20자리/영문,숫자,특수문자 ‘_’ 사용가능"
            label="아이디"
            type="text"
            name="username"
            onChange={idChangedHandler}
            onBlur={idBlurHandler}
            value={enteredId}
          />
          <Button
            width={'30%'}
            backgroundColor={'white'}
            color={'#a5ce55'}
            onClick={handleCheckDuplicateId}
          >
            중복확인
          </Button>
        </S.InputButtonWrapper>
        {idInputHasError && (
          <S.ErrorMessage>
            4~20자리/영문,숫자,특수문자’_’ 만 사용가능
          </S.ErrorMessage>
        )}
        <LargeInput
          type="password"
          name="password"
          label="비밀번호"
          placeholder="8~16자리/영문 대소문자,숫자,특수문자 조합"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <S.ErrorMessage>
            8~16자리/영문,숫자,특수문자’_’ 만 사용가능
          </S.ErrorMessage>
        )}
        <LargeInput
          type="password"
          name="confirmPassword"
          label="비밀번호 확인"
          placeholder="8~16자리/영문 대소문자,숫자,특수문자 조합"
          onChange={passwordCheckChangedHandler}
          onBlur={passwordCheckBlurHandler}
          value={enteredPasswordCheck}
        />
        {enteredPassword !== enteredPasswordCheck && (
          <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        )}
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="닉네임 입력"
            label="닉네임"
            type="text"
            name="nickname"
            onChange={nickNameChangedHandler}
            onBlur={nickNameBlurHandler}
            value={enteredNickName}
          />
          <Button
            width={'30%'}
            backgroundColor={'white'}
            color={'#a5ce55'}
            onClick={handleCheckDuplicateNickName}
          >
            중복확인
          </Button>
        </S.InputButtonWrapper>
        {nickNameInputHasError && (
          <S.ErrorMessage>닉네임을 입력해주세요.</S.ErrorMessage>
        )}
        <LargeInput
          type="text"
          name="fullName"
          label="이름"
          placeholder="이름 입력"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <S.ErrorMessage>이름를 입력해주세요.</S.ErrorMessage>
        )}
        <LargeInput
          type="text"
          name="birthdate"
          label="생년월일"
          placeholder="YYYYMMDD 형식으로 입력"
          onChange={birthChangedHandler}
          onBlur={birthBlurHandler}
          value={enteredBirth}
        />
        {birthInputHasError && (
          <S.ErrorMessage>생년월일을 정확하게 입력해주세요.</S.ErrorMessage>
        )}
        <S.InputButtonWrapper>
          <LargeInput
            placeholder="email@naver.com"
            type="text"
            label="이메일"
            name="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          <Button
            width={'30%'}
            backgroundColor={'white'}
            color={'#a5ce55'}
            onClick={handleCheckDuplicateEmail}
          >
            중복확인
          </Button>
        </S.InputButtonWrapper>
        {emailInputHasError && (
          <S.ErrorMessage>이메일을 정확하게 입력해주세요.</S.ErrorMessage>
        )}
        <S.InputText>약관</S.InputText>
        <S.TermWrapper>
          <S.CheckBoxWrapper>
            <S.CheckBoxInput
              id="termsAgreed"
              name="termsAgreed"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <S.CheckBoxText>전체동의</S.CheckBoxText>
          </S.CheckBoxWrapper>
          <S.Divider />
          <S.CheckBoxWrapper>
            <S.CheckBoxInput
              id="individualTermsAgreed"
              name="termsAgreed"
              checked={termChecked}
              onChange={handleTermCheck}
            />
            <S.CheckBoxText>(필수) 개인회원 약관에 동의</S.CheckBoxText>
          </S.CheckBoxWrapper>
        </S.TermWrapper>
      </S.InputContainer>
      <Button
        onClick={handleSubmit}
        color={'white'}
        type="button"
        backgroundColor={'#a5ce55'}
        width={'80%'}
        disabled={!formIsValid}
      >
        회원가입
      </Button>
    </S.FormContainer>
  );
};

export default SignUp;
