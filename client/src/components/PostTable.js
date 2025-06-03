import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, fetchPosts } from '../features/posts/postsSlice';
import Pagination from './Pagination';

const PostTable = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, totalItems, status } = useSelector((state) => state.posts);
  const filter = useSelector((state) => state.posts.filter);

  useEffect(() => {
    dispatch(fetchPosts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  if (status === 'loading') {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="post-table-container">
      <div className="table-header">
        <h2>Posts ({totalItems} total)</h2>
      </div>
      <table className="post-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="delete-btn"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default PostTable;
