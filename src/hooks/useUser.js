import { useAtom } from 'jotai';
import { userAtom } from 'store/user';
import { removeAuthToken } from 'utils/Auth';

const useUser = () => {
  const [{ isLogin }, setUser] = useAtom(userAtom);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ isLogin: true });
  };

  const logout = () => {
    removeAuthToken();
    setUser({ isLogin: false });
  };
  return {
    isLogin,
    login,
    logout,
  };
};

export default useUser;
