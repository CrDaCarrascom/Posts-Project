import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types';
import { fetchPostsApi, createPostApi, updatePostApi, deletePostApi } from './postsApi';

interface PostsState {
  posts: Post[];
  filter: string;
  currentPage: number;
  totalItems: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  filter: '',
  currentPage: 1,
  totalItems: 0,
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page: number) => {
    return await fetchPostsApi(page);
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post: Omit<Post, 'id' | 'createdAt'>) => {
    return await createPostApi(post);
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    return await deletePostApi(id);
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error al cargar los posts';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.totalItems += 1;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
        state.totalItems -= 1;
      });
  },
});

export const { setFilter, setCurrentPage } = postsSlice.actions;
export default postsSlice.reducer;
