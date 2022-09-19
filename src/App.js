import "./App.css";
import React from "react";
// import AddPostForm from './components/Add-post-form';
import Post from "./components/Post";
import { useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Signup /> } />
      <Route path="/signin" element={ <Signin /> } />
      <Route path="/post" element={ <Post /> } />
        {/* <Signup />
        <Signin />
        <Post /> */}
      </Routes>
    </div>
  );
}

export default App;
