import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Card from 'react-bootstrap/Card';
import cookies from 'react-cookies';

function AddCommentForm(props) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = cookies.load('user_id');
    const comment = {
      // name: e.target.name.value,
      comment: e.target.comment.value,
    };

    //https://whiteboard-401-backend.herokuapp.com/comment

    await axios.post(`${process.env.REACT_APP_URL}/comment${props.post_id}/${user_id}`, comment)
      .then(() => {
        props.getPost(); //getData
      });
      
  };

  return (
    <>
    <div className="person-perant">
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="name-of-label" id="Name">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            id="Name"
            name="name"
  
          />
        </Form.Group>
        <br></br> */}

        <Form.Group className="mb-3 name-of-label"  id="comment">
          <Form.Label>Write Your Comment </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Comment"
            id="comment"
            name="comment"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Comment
        </Button>
      </Form>
    </div>
    </>
  );
}

export default AddCommentForm;