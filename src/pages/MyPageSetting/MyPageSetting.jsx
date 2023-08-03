import React from 'react';
import Header from '../../components/Header/Header';
import * as S from './MyPageSetting.styles';

const TopBar = () => {
  return (
    <S.ContainerStyle>
      <Header>
        설정
      </Header>


      <S.AppContainerStyle>
          <S.CenteredTextStyle>MY</S.CenteredTextStyle>
          <S.ButtonContainerStyle>
            <S.ButtonStyle to='/mypage/handlepasswordchange'>
              비밀번호 변경
            </S.ButtonStyle>
            <S.ButtonStyle>
              로그아웃
            </S.ButtonStyle>
            <S.CenteredTextStyle>기타</S.CenteredTextStyle>
            <div style={{ marginBottom: '20px' }}></div>{' '}
            <S.ButtonStyle>
              이용약관
            </S.ButtonStyle>
          </S.ButtonContainerStyle>

          <S.WithdrawButtonStyle>탈퇴하기</S.WithdrawButtonStyle>
      </S.AppContainerStyle>
    </S.ContainerStyle>
    
  );
};

export default TopBar;



