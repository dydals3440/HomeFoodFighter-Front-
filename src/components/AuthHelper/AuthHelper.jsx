import React from 'react';
import { AuthHelperContainer, Divider, StyledLink } from './AuthHelper.styled';

export default function AuthHelper() {
  return (
    <AuthHelperContainer>
      <StyledLink to="/signup">회원가입</StyledLink>
      <Divider></Divider>
      <StyledLink to="/memberfind">아이디/비밀번호 찾기</StyledLink>
    </AuthHelperContainer>
  );
}
