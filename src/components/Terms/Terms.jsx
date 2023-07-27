import React from 'react';
import PropTypes from 'prop-types';
import S from 'styled-components';
import CheckBox from '../CheckBox/CheckBox';

export default function Terms(props) {
  const { allAgree, termAgree, onAllAgreeChange, onTermAgreeChange } = props;

  return (
    <TermWrapper>
      <CheckBox
        text={'전체동의'}
        checked={allAgree}
        onChange={onAllAgreeChange}
      />
      <Divider />
      <CheckBox
        text={'(필수) 개인회원 약관에 동의'}
        checked={termAgree}
        onChange={onTermAgreeChange}
      />
    </TermWrapper>
  );
}

Terms.propTypes = {
  allAgree: PropTypes.bool.isRequired,
  termAgree: PropTypes.bool.isRequired,
  onAllAgreeChange: PropTypes.func.isRequired,
  onTermAgreeChange: PropTypes.func.isRequired,
};

const TermWrapper = S.div`
    width: 100%;
    height: 100%;
    margin: 10px;
    padding: 40px 50px;
    border-radius: 5rem;
    border: 3px solid #A5CE55;
    box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
     -webkit-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
     -moz-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
`;

const Divider = S.div`
    width: 100%;
    height: 1px;
    background-color: #A5CE55;
    margin: 10px;
`;
