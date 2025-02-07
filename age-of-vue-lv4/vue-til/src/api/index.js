import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(user) {
  return instance.post('/signup', user);
}

/**
 * 로그인 API
 * @param user Require username, password
 * @returns Promise
 */
function loginUser(user) {
  return instance.post('/login', user);
}

function getPostList() {
  return instance.get('/posts');
}

function createPost(post) {
  return instance.post('/posts', post);
}

export { registerUser, loginUser, getPostList, createPost };
