import './App.css';
import React from 'react';
// import AddPostForm from './components/Add-post-form';
import Post from './components/Post';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <AddPostForm  getData={handleRerender} /> */}
      <Post  />

    </div>
  );
}

export default App;
