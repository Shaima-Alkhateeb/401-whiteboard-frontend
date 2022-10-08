
import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import post from "./Post";

import { PostContext } from '../Context/PostContext'

function AddPostForm() {

  const { handleSubmit } = useContext(PostContext);


  return (
    <>
    <div className="person-perant">

      <Form onSubmit={handleSubmit}>

        <Form.Group className="name-of-label" id="title">
          <Form.Label>Title for the Post:</Form.Label>
          <Form.Control type="text" placeholder="Enter title" id="title" />
        </Form.Group>
        <br></br>

        <Form.Group className="name-of-label" id="description">
          <Form.Label>Description :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Enter description"
            id="description"
          />
        </Form.Group>
        <br></br>

        {/* <Form.Group className="name-of-label" id="email">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
          />
        </Form.Group> */}
        <br></br>

        <br></br>

        <Button variant="outline-dark" type="submit">
        post it
        </Button>
        <br></br>

          <p>
            -------------------------------------------------------------------------
          </p>

      </Form>
    </div>
    </>
  );
}

export default AddPostForm;