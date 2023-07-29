import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthHelperContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 3rem;
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;
  &:visited {
    color: #5f5f5f;
  }
  &:focus {
    color: #a5ce55;
  }
  &:hover {
    transform: scale(1.1);
    color: #a5ce55;
  }
`;

export const Divider = styled.div`
  border-right: 2px solid #a5ce55;
`;
