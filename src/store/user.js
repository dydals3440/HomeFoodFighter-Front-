import { atom } from 'jotai';
import { getAuthToken } from 'utils/Auth';

const userAtom = atom({
  isLogin: getAuthToken() ? true : false,
});

export { userAtom };
