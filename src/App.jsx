import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 768px;
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  const isMain = location.pathname === '/';
  // 아래 페이지 Navbar 감추기 나중에 실행
  const hideNavbarPaths = [
    '/login',
    '/memberfind',
    '/signup',
    '/detailrecipe/',
  ];
  const isNavbarVisible = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <AppContainer>
      <ContentContainer>
        {isNavbarVisible && (
          <Navbar navbarContainerColor={isMain && '#C8E293'} />
        )}
        <Outlet />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
