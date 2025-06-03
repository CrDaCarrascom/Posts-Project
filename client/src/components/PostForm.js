import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postsSlice';

const PostForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ name: '', description: '' });
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = { name: '', description: '' };
    
    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }
    
    setErrors(newErrors);
    return Object.values(newErrors).every(error => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(createPost({ name, description }));
      setName('');
      setDescription('');
      setErrors({ name: '', description: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      if (!value.trim()) {
        setErrors(prev => ({ ...prev, name: 'El nombre es requerido' }));
      } else {
        setErrors(prev => ({ ...prev, name: '' }));
      }
    } else {
      setDescription(value);
      if (!value.trim()) {
        setErrors(prev => ({ ...prev, description: 'La descripción es requerida' }));
      } else {
        setErrors(prev => ({ ...prev, description: '' }));
      }
    }
  };

  return (
    <div className="post-form-container">
      <h2>Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
            name="name"
            className="form-input"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleInputChange}
            name="description"
            className="form-input"
          />
          {errors.description && <div className="error-message">{errors.description}</div>}
        </div>
        <button type="submit" className="create-btn">
          Crear Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
