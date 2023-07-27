import styled from 'styled-components';

 const ReviewContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display:flex;
  align-items: center;
  text-align : center;
  color : #000000;
  line-height: 20px;
  font-size : 15px;
  font-weight : 800;
  margin: 10px 0;
  width: 60px;
  height: 20px;
  left: 159px;
  top: 92px;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Heading = styled.h4`
  font-size: 20px;
`;
const Title = styled.h1`
  margin-top: 0;
`;

 const StarContainer = styled.div`
  margin: 10px 0;
`;

const Star = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isFilled ? 'gold' : 'grey')};
`;

 const ReviewTextArea = styled.textarea`
  width: 100%;
  margin-top: 10px;
  resize: vertical;
`;

const SaveButton = styled.button`
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
 const PlaceholderText = styled.p`
  color: grey;
  font-style: italic;
  margin-bottom: 5px;
`;

export {  ReviewContainer,
  Header,
  BackButton,
  Heading,
  Title,
  StarContainer,
  Star,
  ReviewTextArea,
  SaveButton}