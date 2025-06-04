import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { deletePost, setCurrentPage } from '../features/posts/postsSlice';
import PostForm from './PostForm';
import { fetchPosts } from '../features/posts/postsSlice';

interface Post {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const currentPage = useSelector((state: RootState) => state.posts.currentPage);
  const totalItems = useSelector((state: RootState) => state.posts.totalItems);
  const filter = useSelector((state: RootState) => state.posts.filter);

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const [showForm, setShowForm] = useState(false);

  const handleNewPost = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };



  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    } else if (direction === 'next' && currentPage < Math.ceil(totalItems / 10)) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const filteredPosts = posts.filter((post: Post) => 
    post.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage, dispatch]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newPostButton}
        onPress={handleNewPost}
        disabled={showForm}
      >
        <Text style={styles.buttonText}>
          {showForm ? 'Creando nuevo post...' : 'Nuevo Post'}
        </Text>
      </TouchableOpacity>
      
      {showForm && (
        <View style={styles.formContainer}>
          <PostForm onSubmit={handleCloseForm} />
        </View>
      )}
      <FlatList<Post>
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.name}</Text>
            <Text style={styles.postContent}>{item.description}</Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => handlePageChange('prev')}
          disabled={currentPage === 1}
        >
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>
          Página {currentPage} de {Math.ceil(totalItems / 10)}
        </Text>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => handlePageChange('next')}
          disabled={currentPage >= Math.ceil(totalItems / 10)}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'relative',
  },
  formContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: 100,
    padding: 20,
    justifyContent: 'center',
  },
  newPostButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  pageButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  pageInfo: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});

export default PostList;
