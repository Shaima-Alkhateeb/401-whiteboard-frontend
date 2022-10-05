import React from "react";
import axios from "axios";
// import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import post from "./Post";
import cookies from 'react-cookies';

function AddPostForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      // id: e.target.id.value,
      title: e.target.title.value,
      description: e.target.description.value,
      // status: e.target.status.value,
      // email: e.target.email.value,
    };

    await axios.post(`${process.env.REACT_APP_URL}/post`, post, {
      headers: {
        Authorization: `Bearer ${cookies.load('token')}`
      }
    }).then(() => {
    // console.log("post", post);
      props.getPost();//getData
    });
  };

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