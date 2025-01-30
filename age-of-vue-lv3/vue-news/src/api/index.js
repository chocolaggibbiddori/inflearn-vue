import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
};

export function apiGetNewsList() {
  return axios.get(`${config.baseUrl}/news/1.json`);
}

export function apiGetAskList() {
  return axios.get(`${config.baseUrl}/ask/1.json`);
}

export function apiGetJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
}

export function apiGetUser(userId) {
  return axios.get(`${config.baseUrl}/user/${userId}.json`);
}

export function apiGetItem(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}
