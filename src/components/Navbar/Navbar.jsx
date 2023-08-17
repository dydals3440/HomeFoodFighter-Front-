import React from 'react';
import { Link } from 'react-router-dom';

import HFFLogo from '../../assets/Logo.svg';
import HFFMainLogo from '../../assets/logo_main.svg';
import Smile from 'assets/myPageIcon.svg';
import { Logo, MyPageButton, NavbarContainer } from './Navbar.styled';

const Navbar = ({ navbarContainerColor }) => {
  const isMainPath = window.location.pathname === '/';

  return (
    <NavbarContainer backgroundColor={navbarContainerColor}>
      <Logo>
        <Link to="/">
          <img src={isMainPath ? HFFMainLogo : HFFLogo} alt="Logo" />
        </Link>
      </Logo>
      <MyPageButton>
        <Link to="/mypage">
          <img src={Smile} alt="My Page Icon" />
        </Link>
      </MyPageButton>
    </NavbarContainer>
  );
};

export default Navbar;
