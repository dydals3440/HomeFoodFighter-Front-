import styled, {css} from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  width: 383px;
  height: 39px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
 

  /* 버튼의 색상을 프롭스에 따라 다르게 지정 */
  background-color: ${(props) => (props.isActive ? '#FFFFFF' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#000' : '#dddddd')};

  /* border 속성을 조건부로 추가 */
  ${(props) =>
    props.isActive &&
    css`
      /* 버튼을 눌렀을 때 */
      border-width: 3px 3px 0px 0px; /* 위, 오른쪽, 아래 테두리 생성 */
      border-style: solid;
      border-color: #000000;
    `}
  /* 테두리가 없는 상태일 때 스타일 적용 */
  ${(props) =>
    !props.isActive &&
    css`
      border: none;
    `}
    /* 버튼의 위치 조정 */
  ${(props) =>
    props.position &&
    css`
      left: ${props.position.left}px;
      top: ${props.position.top}px;
    `}
`;

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* 수정된 부분 */
  gap: 1rem;
  padding: 1rem 2rem;
`;

export{
    Button,
    RecipeList,
};