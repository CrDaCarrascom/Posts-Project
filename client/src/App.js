import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PostForm from './components/PostForm';
import SearchForm from './components/SearchForm';
import PostTable from './components/PostTable';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Posts Management</h1>
        <SearchForm />
        <PostTable />
        <PostForm />
      </div>
    </Provider>
  );
}

export default App;
