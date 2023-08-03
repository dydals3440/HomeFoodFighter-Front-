import Axios from 'axios';
import { getAuthToken } from 'utils/Auth';

const baseURL = 'https://1bad9ca6-9b4c-42e6-8bbc-f0b03327654f.mock.pstmn.io';

const axios = Axios.create({
  baseURL,
});

const axiosWithToken = Axios.create({
  baseURL,
});

axiosWithToken.interceptors.request.use((config) => {
  const accessToken = getAuthToken();
  if (config.headers && accessToken) {
    config.headers['x-access-token'] = accessToken;
  }
  return config;
});

export { baseURL, axios, axiosWithToken };
