import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styled';

export const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <S.Button type={type} onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
