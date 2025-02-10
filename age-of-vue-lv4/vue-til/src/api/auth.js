import { instance } from './index';

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

export { registerUser, loginUser };
