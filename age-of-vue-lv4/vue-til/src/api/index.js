import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`
  });

  return setInterceptors(instance);
}

const instance = createInstance();
const instanceWithAuth = createInstanceWithAuth('/posts');

export { instance, instanceWithAuth };
