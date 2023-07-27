import { useNavigate } from 'react-router-dom';
import * as S from './Header.styles';

const Header = ({ children, item }) => {
  const navigate = useNavigate();

  const moveToPrev = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <svg
        onClick={moveToPrev}
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
          fill="black"
        />
      </svg>
      <S.Title>{children}</S.Title>
      <span></span>
    </S.Container>
  );
};

export default Header;
