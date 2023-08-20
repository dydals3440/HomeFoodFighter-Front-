import { removeAuthToken } from 'utils/Auth';
import useUser from './useUser';

const useError = () => {
  const { logout } = useUser();
  const handleError = (error) => {
    if (error.code === 4003) {
      logout();
    } else alert(error.message);
  };
  return handleError;
};

export default useError;
