import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import AddPostForm from "./Add-post-form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cookies from 'react-cookies';
import UpdatePost from "./UpdatePost";


function Post(props) {
  const [post, setPost] = useState([]);
  const [role, setRole] = useState('');
 
  const getPost = async () => {
    const allPost = await axios
    .get(`${process.env.HEROKU_URL}/post`, {
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
      }
    })
    
    setPost(allPost.data.post);
    console.log(allPost.data);
  };

  // const updatePost = async (id, post) => {
  //   await axios.put(`${process.env.HEROKU_URL}/post/${id}`, post);
  //   getPost();
  // };

  const deletePost = async (id) => {
    const token = cookies.load('token');
      await axios.delete(`${process.env.HEROKU_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then( res => {
        getPost(); 
      }).catch(err => console.log(err));
  };

  const deleteComment = async (id) => {
    const token = cookies.load('token');
      await axios.delete(`${process.env.HEROKU_URL}/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then( res => {
        getPost();
      }).catch(err => console.log(err));
  };



  useEffect(() => {
    setRole(cookies.load('role'));
    getPost();
  }, []);

  return (
    <div>
      <AddPostForm getPost= {getPost}/>
      {/* <AddCommentForm getData={getData} /> */}
      {post &&
        post.map((value, idx) => {
          return (

            <div key={idx}>
              <Card className="card" style={{ width: "50rem" }}>
              {/* <Card > */}
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Card.Text>{value.email}</Card.Text>
                  {role === 'admin' && 
                  <>
                  <Button onClick={() => deletePost(value._id)}>Delete</Button>
                  {/* <Button variant="primary" onClick={() => updatePost(value._id)}>Edit</Button> */}
                  <UpdatePost post={value} getPost={getPost}/>
                  </>
                  }

                </Card.Body>
              </Card>
              <AddCommentForm post_id={value.id} getPost={getPost} />

                {value.Comments &&
                    value.Comments.map((comment, idx) => {
                    return (
                        <div key={idx}>
                        <div className="card-body">
                            <p className="card-text">name :{comment.name}</p>
                            <p className="card-text">comment: {comment.comment}</p>

                            {role === 'admin' &&
                            <Button onClick={() => deleteComment(comment._id)}>Delete</Button>
                            }
                        </div>
                        </div>
                    );
                    })}

                    
            </div>
          );
        })}
    </div>
    );
}


export default Post;
