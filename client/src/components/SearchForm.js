import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, fetchPosts } from '../features/posts/postsSlice';

const SearchForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.posts.filter);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPosts({ page: 1, limit: 10, search: filter }));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="search-group">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={filter}
          onChange={handleFilterChange}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
