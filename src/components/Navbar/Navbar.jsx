import React from 'react';
import { Link } from 'react-router-dom';
import { GiSandwich } from 'react-icons/gi';
import { AiOutlineSmile } from 'react-icons/ai';
import { Logo, MyPageButton, NavbarContainer } from './Navbar.styled';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <GiSandwich />
        </Link>
      </Logo>
      <MyPageButton>
        <Link to="/login">
          <AiOutlineSmile />
        </Link>
      </MyPageButton>
    </NavbarContainer>
  );
}
