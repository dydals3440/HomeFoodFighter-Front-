import React from 'react';
import Header from '../../components/Header/Header';
import {containerStyle, 
  appContainerStyle, 
  topBarContainerStyle, 
  centeredTextStyle, 
  buttonContainerStyle, 
  buttonStyle, 
  buttonText, 
  withdrawButtonStyle} from './MyPageSetting.styles';

const TopBar = () => {
  return (
    <div style={style}>
      <div style={containerStyle}>
      <Header>
        설정
      </Header>


      <div style={appContainerStyle}>
        <div style={topBarContainerStyle}>
          <h1 style={centeredTextStyle}>MY</h1>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle}>
              <span style={buttonText}>프로필 수정</span>
            </button>
            <button style={buttonStyle}>
              <span style={buttonText}>비밀번호 변경</span>
            </button>
            <button style={buttonStyle}>
              <span style={buttonText}>로그아웃</span>
            </button>
            <h1 style={centeredTextStyle}>기타</h1>
            <div style={{ marginBottom: '20px' }}></div>{' '}
            <button style={buttonStyle}>
              <span style={buttonText}>이용약관</span>
            </button>
          </div>

          <button style={withdrawButtonStyle}>탈퇴하기</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default TopBar;



