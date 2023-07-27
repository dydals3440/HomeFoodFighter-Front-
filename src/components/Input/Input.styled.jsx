import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 20px;
  border: 3px solid #a5ce55;
  border-radius: 10rem;
  box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -webkit-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -moz-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  margin-bottom: 10px;
  font-size: 20px;

  &.small {
    width: 80%;
    height: 80px;
  }

  &.large {
    margin: auto;
    width: ${(props) => props.width || '100%'};
  }
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 20px;
  font-style: bold;
  margin: 10px;
`;

export { InputContainer, Input, Label };
