import Axios from 'axios';
import { getAuthToken } from 'utils/Auth';

const baseURL = 'http://43.201.210.105:3000';

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
