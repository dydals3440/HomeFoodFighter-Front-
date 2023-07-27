import React from 'react';
import styled from 'styled-components';
import {MenuContainer, Menu} from './JjimMenu.styled';

const JjimMenu = ({ menuImage, menuName, menuAuthor, starRating, reviewCount }) => {
    return (
      <MenuContainer>
        <MenuImage imageUrl={menuImage} />
        <MenuName>{menuName}</MenuName>
        <MenuAuthor>{menuAuthor}</MenuAuthor>
        <StarRating>{starRating}</StarRating>
        <ReviewCount>({reviewCount})</ReviewCount>
      </MenuContainer>
    );
  };

export default JjimMenu;