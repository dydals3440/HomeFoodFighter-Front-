import { removeAuthToken } from 'utils/Auth';
import useUser from './useUser';

const useError = () => {
  const { logout } = useUser();
  const handleError = (error) => {
    if (error.response.data.code === 4003) {
      logout();
      location.reload();
    } else alert(error.response.data.message);
  };
  return handleError;
};

export default useError;
