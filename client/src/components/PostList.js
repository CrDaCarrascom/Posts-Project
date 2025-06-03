import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../features/posts/postsSlice';

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const filter = useSelector((state) => state.posts.filter);
  const dispatch = useDispatch();

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="post-list">
      {filteredPosts.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.name}</h3>
          <p>{post.description}</p>
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
