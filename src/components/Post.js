
import React, { useContext, useEffect } from "react";
import AddCommentForm from "./Add-comment-form";
import AddPostForm from "./Add-post-form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UpdatePost from "./UpdatePost";
import { PostContext } from "../Context/PostContext";
import { authContext } from "../Context/AuthContext";


function Post() {

  const { post, deletePost, deleteComment, getPost } = useContext(PostContext);
  const {role, user, capabilities} = useContext(authContext)

  useEffect(() => {
    console.log(role);
    console.log(capabilities);
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
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  
                  {capabilities.includes('delete') && 
                  <Button onClick={() => deletePost(value._id)}>Delete</Button>}

                  {capabilities.includes('update') &&
                  <UpdatePost post={value} getPost={getPost} />
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
                            <Button onClick={() => deleteComment(comment.id)}>Delete</Button>
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