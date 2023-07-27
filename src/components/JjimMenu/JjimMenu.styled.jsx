import styled from 'styled-components';

const MenuContainer = styled.div`
  position: relative;
  width: 158px;
  height: 239px;
`;

const MenuImage = styled.div`
  position: absolute;
  width: 158px;
  height: 158px;
  background: url(${props => props.imageUrl});
  border-radius: 15px;
`;

const MenuName = styled.div`
  position: absolute;
  top: 167px;
  left: 24px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
`;

const MenuAuthor = styled.div`
  position: absolute;
  top: 209px;
  left: 24px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #B0B0B0;
`;

const StarRating = styled.div`
  position: absolute;
  top: 225px;
  left: 25px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`;

const ReviewCount = styled.div`
  position: absolute;
  top: 226px;
  left: 44px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  text-align: center;
  color: #B0B0B0;
`;

export { MenuContainer, MenuImage, MenuName, MenuAuthor, StarRating, ReviewCount };