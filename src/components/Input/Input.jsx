import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styled';

const inputPropTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export const LargeInput = (props) => {
  const { placeholder, id, type, name, value, onChange, label } = props;
  return (
    <S.InputContainer>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        className="large"
        placeholder={placeholder}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.InputContainer>
  );
};

LargeInput.propTypes = {
  ...inputPropTypes,
};

export const SmallInput = (props) => {
  const { placeholder, id, type, name, value, onChange } = props;
  return (
    <S.Input
      className="small"
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

SmallInput.propTypes = {
  ...inputPropTypes,
};
