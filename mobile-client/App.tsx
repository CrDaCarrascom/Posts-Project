import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PostList from './src/components/PostList';
import PostForm from './src/components/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './src/app/store';
import { setFilter } from './src/features/posts/postsSlice';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.posts.filter);




  const handleSearch = (text: string) => {
    dispatch(setFilter(text));
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar posts..."
            value={filter}
            onChangeText={handleSearch}
          />
        </View>
        <PostList />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  postList: {
    flex: 1,
  },
});
