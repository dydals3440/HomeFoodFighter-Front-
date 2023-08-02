import React from 'react';
import { Link } from 'react-router-dom';

import { GiSandwich } from 'react-icons/gi';
import Smile from 'assets/myPageIcon.svg';
import { Logo, MyPageButton, NavbarContainer } from './Navbar.styled';

export default function Navbar({ navbarContainerColor }) {
  return (
    <NavbarContainer backgroundcolor={navbarContainerColor}>
      <Logo>
        <Link to="/">
          <GiSandwich />
        </Link>
      </Logo>
      <MyPageButton>
        <Link to="/login">
          <img src={Smile} alt="My Page Icon" />
        </Link>
      </MyPageButton>
    </NavbarContainer>
  );
}
