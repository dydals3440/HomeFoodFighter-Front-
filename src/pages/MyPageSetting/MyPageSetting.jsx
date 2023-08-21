import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import * as S from './MyPageSetting.styles';
import LogoutModal from './LogoutModal';
import WithdrawalModal from './WithdrawalModal';
import WithdrawalCheckModal from './WithdrawalCheckModal';
import TosModal from './TosModal';
import { requestWithDarwal } from 'apis/request/auth';

const TopBar = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [isWithdrawalCheckModalOpen, setWithdrawalCheckModalOpen] = useState(false);
  const [isTosModalOpen, setTosModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(false);
  };

  const handleWithdrawal = () => {
    setWithdrawalModalOpen(false);
  };

  const handleWithdrawalCheck = () => {
    setWithdrawalCheckModalOpen(false);
  };

  const handleTos = () => {
    setTosModalOpen(false);
  }

  const confirmWithdrawal = () => {
    setWithdrawalModalOpen(false);
    setWithdrawalCheckModalOpen(true);
    requestWithDarwal().then(res => console.log(res)).catch(e => alert(" 에러가 발생했습니다"))
  }

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
            <S.ButtonStyle onClick={() => setLogoutModalOpen(true)}>
              로그아웃
            </S.ButtonStyle>
            <S.CenteredTextStyle>기타</S.CenteredTextStyle>
            <div style={{ marginBottom: '20px' }}></div>{' '}
            <S.ButtonStyle onClick={() => setTosModalOpen(true)}>
              이용약관
            </S.ButtonStyle>
          </S.ButtonContainerStyle>

          

          <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onLogout={handleLogout}
        />

          <WithdrawalModal
          isOpen={isWithdrawalModalOpen}
          onClose={() => setWithdrawalModalOpen(false)}
          onConfirm={confirmWithdrawal} 
        />

          <TosModal
          isOpen={isTosModalOpen}
          onClose={() => setTosModalOpen(false)}
        />


          <S.WithdrawButtonStyle onClick={() => setWithdrawalModalOpen(true)}>
            탈퇴하기
          </S.WithdrawButtonStyle>
      </S.AppContainerStyle>

      <WithdrawalCheckModal
        isOpen={isWithdrawalCheckModalOpen}
        onClose={() => setWithdrawalModalOpen(false)}
        onCheck={handleWithdrawalCheck}
      />


    </S.ContainerStyle>
    
  );
};

export default TopBar;