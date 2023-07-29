import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  height: ${(props) => props.height || '4rem'};
  width: ${(props) => props.width || '80%'};
  background-color: ${(props) => props.backgroundColor || '#a5ce55'};
  color: ${(props) => props.color || 'white'};
  border: 3px solid #a5ce55;
  box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -webkit-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -moz-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    transform: scale(1.1);
    background-color: #a5ce55;
  }
`;

export { Button };
