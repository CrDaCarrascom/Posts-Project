import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (params) => {
    const { page = 1, limit = 10, search = '' } = params;
    const response = await axios.get(`http://localhost:5000/api/posts`, {
      params: { page, limit, search }
    });
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData) => {
    const response = await axios.post('http://localhost:5000/api/posts', postData);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId) => {
    const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
    return response.data;
  }
);

const initialState = {
  posts: [],
  totalPages: 0,
  currentPage: 1,
  totalItems: 0,
  status: 'idle',
  error: null,
  filter: ''
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.totalItems += 1;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload.id);
        state.totalItems -= 1;
      });
  }
});

export const { setFilter, setPage } = postsSlice.actions;
export default postsSlice.reducer;
