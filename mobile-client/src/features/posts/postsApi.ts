import { api } from '../../api/api';
import { Post } from '../../types';

export const fetchPostsApi = async (page: number) => {
  const response = await api.get(`/posts?page=${page}`);
  return response.data;
};

export const createPostApi = async (post: Omit<Post, 'id' | 'createdAt'>) => {
  const response = await api.post('/posts', post);
  return response.data;
};

export const updatePostApi = async (post: Post) => {
  const response = await api.put(`/posts/${post.id}`, post);
  return response.data;
};

export const deletePostApi = async (id: number) => {
  await api.delete(`/posts/${id}`);
  return id;
};
