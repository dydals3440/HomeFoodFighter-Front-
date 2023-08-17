import * as S from './SelectButton.styles';

const SelectButton = ({ children, type, onClick, selected, color }) => {
  return (
    <S.Btn
      disabled={!selected}
      type={type}
      onClick={onClick}
      selected={selected}
      color={color}
    >
      {children}
    </S.Btn>
  );
};

export default SelectButton;
