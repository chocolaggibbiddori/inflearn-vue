import { instanceWithAuth } from './index';

function getPostList() {
  return instanceWithAuth.get('/');
}

function createPost(post) {
  return instanceWithAuth.post('/', post);
}

export { getPostList, createPost };
