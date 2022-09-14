import './App.css';
import React from 'react';
import AddPostForm from './components/Add-post-form';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <Post />

    </div>
  );
}

export default App;
