import { instanceWithAuth } from './index';

function getPostList() {
  return instanceWithAuth.get('/');
}

function createPost(post) {
  return instanceWithAuth.post('/', post);
}

function deletePost(postId) {
  return instanceWithAuth.delete(postId);
}

export { getPostList, createPost, deletePost };
