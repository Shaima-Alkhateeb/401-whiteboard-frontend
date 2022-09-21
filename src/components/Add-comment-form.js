import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AddCommentForm(props) {
  const [comment, setComment] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
      // id: e.target.id.value,
    };
    await axios.post('https://whiteboard-401-backend.herokuapp.com/comment', comment)
      // .then(() => {
        props.getData();
      // });
      
  };

  return (
    <>
    {/* <div className="person-perant">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="name-of-label" id="Name">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            id="Name"
            name="name"
  
          />
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3 name-of-label"  id="comment">
          <Form.Label>Write Comment Here</Form.Label>
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
    </div> */}
    </>
  );
}

export default AddCommentForm;
