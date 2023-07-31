import React from 'react';
import Header from '../../components/Header/Header';

const TopBar = () => {
  return (
    <div>
      <Header />

    

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
        </div>

        <h1 style={centeredTextStyle}>기타</h1>
        <div style={{ marginBottom: '40px' }}></div> {/* 여백을 주는 빈 div */}
        <button style={buttonStyle}>
          <span style={buttonText}>이용약관</span>
        </button>

        {/* 탈퇴하기 버튼 */}
        <div style={{ marginTop: 'auto', marginLeft: 'auto', marginBottom: '20px' }}>
          <button style={withdrawButtonStyle}>탈퇴하기</button>
        </div>
      </div>
    </div>
  </div>
  );
};

const appContainerStyle = {
  backgroundColor: '#f2f2f2', // 전체 화면에 회색 배경색 설정
  minHeight: '100vh', // 화면 높이 최소값을 뷰포트 높이와 같게 설정하여 최소 높이 보장
};

const topBarContainerStyle = {
  height: '300px',
  backgroundColor: '#f2f2f2', // 회색 배경색 설정
  display: 'flex',
  flexDirection: 'column', // 세로로 배치
};

const centeredTextStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'gray',
  marginTop: '50px',
  marginLeft: '40px'
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // 버튼들을 세로로 배치
  marginTop: '20px', // 버튼들과 "MY" 사이의 여백
};

const buttonStyle = {
  width: '100%', // 버튼의 가로 너비를 100%로 설정
  height: '60px',
  backgroundColor: 'white',
  //border: '1px solid gray',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  margin: '0px 0', // 버튼들 사이의 여백
};

const buttonText = {
  marginLeft: '30px', // 버튼 안의 텍스트에 왼쪽 여백 추가
};

const withdrawButtonStyle = {
  backgroundColor: 'transparent',
  color: 'gray',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
};

export default TopBar;
