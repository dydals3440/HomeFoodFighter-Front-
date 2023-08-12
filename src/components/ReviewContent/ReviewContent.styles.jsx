import styled from 'styled-components';

const ReviewBox = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 1rem 0;
`;

const ReviewImage = styled.img`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReviewTextContainer = styled.div`
  h3 {
    color: #098e27;
    font-weight: 500;
    margin-bottom: 0.35rem;
  }
`;

export { ReviewBox, ReviewImage, ReviewTextContainer };
