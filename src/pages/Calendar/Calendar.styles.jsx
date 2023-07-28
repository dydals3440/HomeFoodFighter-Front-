import { styled } from 'styled-components';

const NewDietBtn = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;

  background-color: #a5ce55;
  font-size: 1.725rem;

  display: ${({ mode }) => (mode ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  box-sizing: border-box;
  padding: 0.25rem 1.725rem;
`;
const Table = styled.table`
  width: 100%;
  height: 80vh;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-radius: 10px;
`;

const Time = styled.th`
  border: 1px solid #ccc;
  min-width: 1rem;

  img {
    width: 1rem;
  }
`;
const Data = styled.td`
  border: 1px solid #ccc;
  text-align: center;
  img {
    width: 1rem;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
`;

export { NewDietBtn, Container, Table, Time, Data, Date };
