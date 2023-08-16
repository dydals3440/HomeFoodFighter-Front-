import * as S from './SelectButton.styles';

const SelectButton = ({ children, type, onClick, selected }) => {
  return (
    <S.Btn
      disabled={!selected}
      type={type}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </S.Btn>
  );
};

export default SelectButton;
