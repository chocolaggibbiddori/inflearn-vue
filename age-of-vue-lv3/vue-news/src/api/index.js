import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
};

export function apiGetItemList(type) {
  return axios.get(`${config.baseUrl}/${type}/1.json`);
}

export function apiGetUser(userId) {
  return axios.get(`${config.baseUrl}/user/${userId}.json`);
}

export function apiGetItem(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}
