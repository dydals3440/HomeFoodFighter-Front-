import styled from 'styled-components';

const Btn = styled.button`
  position: fixed;
  bottom: 1rem;
  padding: 1rem;
  background-color: ${({ selected, color }) =>
    selected ? (color ? color : '#71a60b') : color ? '#E29393' : '#C8E293'};
  cursor: ${({ selected }) => (selected ? 'pointer' : 'auto')};
  transition: all 0.5s ease;
  color: #fff;
  border: none;
  border-radius: 1000000px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;

  width: 50%;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
`;

export { Btn };
