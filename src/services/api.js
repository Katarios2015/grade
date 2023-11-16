import axios from 'axios';

const URL = `http://localhost:3001/`;
const REQUEST_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { createAPI };
