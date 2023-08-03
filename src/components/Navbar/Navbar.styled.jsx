import styled from 'styled-components';

export const NavbarContainer = styled.header`
  background-color: ${(props) => props.backgroundcolor || '#fff'};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const MyPageButton = styled.div`
  color: #ffffff;
  font-size: 40px;
`;

export const Logo = styled.div`
  color: #ffffff;
  font-size: 40px;
`;
