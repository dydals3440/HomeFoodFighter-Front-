import React from 'react';
import TopBar from './TopBar';

const MyPageSetting = () => {
  return (
    <div style={appContainerStyle}>
      <TopBar />
      {/* 이 외에 다른 컴포넌트들을 렌더링할 수 있습니다. */}
    </div>
  );
};

const appContainerStyle = {
  backgroundColor: '#f2f2f2', // 전체 화면에 회색 배경색 설정
  minHeight: '100vh', // 화면 높이 최소값을 뷰포트 높이와 같게 설정하여 최소 높이 보장
};

export default MyPageSetting;