import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HFFLogo } from '../../assets/Logo.svg';
import Smile from 'assets/myPageIcon.svg';
import { Logo, MyPageButton, NavbarContainer } from './Navbar.styled';

const Navbar = ({ navbarContainerColor }) => {
  return (
    <NavbarContainer backgroundColor={navbarContainerColor}>
      <Logo>
        <Link to="/">
          <HFFLogo />
        </Link>
      </Logo>
      <MyPageButton>
        <Link to="/login">
          <img src={Smile} alt="My Page Icon" />
        </Link>
      </MyPageButton>
    </NavbarContainer>
  );
};

export default Navbar;
