import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import { Post } from '../types';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = {
  posts: {
    posts: Post[];
    filter: string;
    currentPage: number;
    totalItems: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    showForm: boolean;
    selectedPost: Post | null;
  }
};

export type AppDispatch = typeof store.dispatch;
