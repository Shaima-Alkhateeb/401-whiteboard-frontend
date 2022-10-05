import { createContext } from "react";
import axios from "axios";
import cookies from 'react-cookies';
import { useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [post, setPost] = useState([]);

 
  const getPost = async () => {
    try {
      axios
          .get(`${process.env.REACT_APP_URL}/post`, {
              headers: {
                  Authorization: `Bearer ${cookies.load('token')}`
              }
          })
          .then((response) => {
              const allPosts = response.data;
              console.log(response.data)
              setPost(allPosts);
              // setShowPostComponent(true);
          }
          ).catch((error) => console.error(`Error: ${error}`));

  } catch (e) { console.log(e) }
    // const allPost = await axios
    // .get(`${process.env.REACT_APP_URL}/post`, {
    //   headers: {
    //     Authorization: `Bearer ${cookies.load("token")}`,
    //   }
    // })
    
    // setPost(allPost.data.post);
    // console.log(allPost.data);
  };

  const deletePost = async (id) => {
    const token = cookies.load('token');
      await axios.delete(`${process.env.REACT_APP_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then( res => {
        getPost(); 
      // }).catch(err => console.log(err));
  };

  const deleteComment = async (id) => {
    const token = cookies.load('token');
      await axios.delete(`${process.env.REACT_APP_URL}/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then( res => {
        getPost();
      // }).catch(err => console.log(err));
  };


  const value = {post, getPost, deletePost, deleteComment};


  return (
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;