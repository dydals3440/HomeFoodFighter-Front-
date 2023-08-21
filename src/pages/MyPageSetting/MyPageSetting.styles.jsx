import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyle = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const AppContainerStyle = styled.div`
  background-color: #fff;
  width: 100%
  position: relative;
`;

export const TopBarContainerStyle = styled.button`
  height: 830px;
  display: flex;
  flex-direction: column;
`;

export const CenteredTextStyle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  background-color: #ffffff;
  margin-top: 50px;
  margin-left: 40px;
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ButtonStyle = styled(Link)`
  font-size: 1.15rem;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  padding-left: 2rem;
`;

export const ButtonText = styled.div`

`;

export const WithdrawButtonStyle = styled(Link)`
  background-color: #ffffff;
  color: gray;
  border: none;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin-right: 35rem;
  position: fixed;
`;