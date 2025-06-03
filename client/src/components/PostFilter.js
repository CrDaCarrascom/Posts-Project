import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/posts/postsSlice';

const PostFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.posts.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="post-filter">
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default PostFilter;
