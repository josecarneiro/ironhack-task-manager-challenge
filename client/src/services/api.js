import Axios from 'axios';

// const API_URL = 'http://localhost:5000/api';
const API_URL = '/api';

const Resource = Axios.create({
  baseURL: API_URL,
  transformResponse: response => {
    try {
      response = JSON.parse(response);
      return response;
    } catch (error) {
      return { error };
    }
  },
  withCredentials: true
});

Resource.interceptors.response.use(response => {
  if (
    response &&
    response.status >= 200 &&
    response.status < 400 &&
    response.data
  ) {
    return response.data;
  } else {
    return Promise.reject(new Error('Error in API service.'));
  }
}, error => {
  return Promise.reject(error);
});

export default Resource;
