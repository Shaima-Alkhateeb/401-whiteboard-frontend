import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import AddPostForm from "./Add-post-form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Post(props) {
  const [post, setPost] = useState([]);
 
  const getData = async () => {
    const allData = await axios
    .get(`https://whiteboard-401-backend.herokuapp.com/post`)
    
    setPost(allData.data);
  };

  const deletePost = async (id) => {
      await axios.delete(`https://whiteboard-401-backend.herokuapp.com/post/${id}`);
      getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <AddPostForm getData= {getData}/>
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
                  <Button variant="primary"onClick={() => deletePost(value.id)}>Delete </Button>
                </Card.Body>
              </Card>
              <AddCommentForm post_id={value.id} getData={getData} />

                {value.Comments &&
                    value.Comments.map((comment, idx) => {
                    return (
                        <div key={idx}>
                        <div className="card-body">
                            <p className="card-text">name :{comment.name}</p>
                            <p className="card-text">comment: {comment.comment}</p>
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
