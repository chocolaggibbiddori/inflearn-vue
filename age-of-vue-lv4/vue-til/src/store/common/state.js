import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

export default {
  username: getUserFromCookie() || '',
  token: getAuthFromCookie() || ''
};
