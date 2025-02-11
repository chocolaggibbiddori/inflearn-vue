import { instanceWithAuth } from './index';

function getPostList() {
  return instanceWithAuth.get();
}

function createPost(post) {
  return instanceWithAuth.post('/', post);
}

function deletePost(postId) {
  return instanceWithAuth.delete(postId);
}

function getPost(postId) {
  return instanceWithAuth.get(postId);
}

function editPost(postId, post) {
  return instanceWithAuth.put(postId, post);
}

export { getPostList, createPost, deletePost, getPost, editPost };
