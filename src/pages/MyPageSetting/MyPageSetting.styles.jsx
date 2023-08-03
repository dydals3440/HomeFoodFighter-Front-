import styled from 'styled-components';

export const containerStyle = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const appContainerStyle = styled.div`
  background-color: #ffffff;
`;

export const topBarContainerStyle = styled.button`
  height: 830px;
  display: flex;
  flex-direction: column;
`;

export const centeredTextStyle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  background-color: #ffffff;
  margin-top: 50px;
  margin-left: 40px;
`;

export const buttonContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const buttonStyle = styled.button`
  font-size: 15px;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  border: none;
  margin: 0px 0;
`;

export const buttonText = styled.div`
  margin-left: 30px;
`;

export const withdrawButtonStyle = styled.div`
  background-color: #ffffff;
  color: gray;
  border: none;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin-right: 60px;
`;