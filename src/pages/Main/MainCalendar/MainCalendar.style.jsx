import { styled } from 'styled-components';

const Container = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-radius: 10px;
`;

const Day = styled.th`
  border: 1px solid #ccc;
  min-width: 1rem;
`;
const Data = styled.td`
  border: 1px solid #ccc;
  min-width: 1rem;
  text-align: center;

  color: #a5ce55;
  img {
    width: 1rem;
  }
`;
export { Container, Day, Data };
