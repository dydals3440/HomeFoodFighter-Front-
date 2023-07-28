import React from 'react';
import { Outlet } from 'react-router-dom';
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
  background-color: #fffcfc;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <Navbar />
        <Outlet />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
