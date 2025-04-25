import axios from 'axios';

const api = axios.create({});
api.interceptors.request.use(
  config => {
    return config;
  },
);
api.interceptors.response.use(
  response => {
    // Ensure status code is 200
    response.status = 200;
    return response;
  },
  error => {
    // For error responses, create a response with status 200
    if (error.response) {
      error.response.status = 200;
    }
    return Promise.reject(error);
  }
);

export { api };
