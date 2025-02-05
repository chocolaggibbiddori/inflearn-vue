import axios from 'axios';

function registerUser(userData) {
  return axios.post('http://localhost:3000/signup', userData);
}

export { registerUser };
