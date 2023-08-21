import styled from 'styled-components';

const ReviewList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 1rem 2rem;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

`;

export { ReviewList };