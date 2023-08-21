import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import * as S from './MyPageSetting.styles';
import LogoutModal from './LogoutModal';
import WithdrawalModal from './WithdrawalModal';
import WithdrawalCheckModal from './WithdrawalCheckModal';
import TosModal from './TosModal';
import { requestWithDarwal } from 'apis/request/auth';
import useUser from 'hooks/useUser';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [isWithdrawalCheckModalOpen, setWithdrawalCheckModalOpen] = useState(false);
  const [isTosModalOpen, setTosModalOpen] = useState(false);
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleWithdrawalCheck = () => {
    setWithdrawalCheckModalOpen(false);
  };

  const confirmWithdrawal = () => {
    setWithdrawalModalOpen(false);
    setWithdrawalCheckModalOpen(true);
  };
  
  const checkLogout = () => {
    logout();
    location.reload();
  };
  

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
          onLogout={checkLogout}
        />

          <WithdrawalModal
          isOpen={isWithdrawalModalOpen}
          onClose={() => setWithdrawalModalOpen(false)}
          onConfirm={confirmWithdrawal} 
          modal={isWithdrawalCheckModalOpen}
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