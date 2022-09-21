import React from "react";
import axios from "axios";
// import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import post from "./Post";

function AddPostForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      // id: e.target.id.value,
      title: e.target.title.value,
      description: e.target.description.value,
      // status: e.target.status.value,
      email: e.target.email.value,
    };

    await axios.post("https://whiteboard-401-backend.herokuapp.com/post", post);
    // .then(() => {
    // console.log("post", post);
    props.getData();
    // });
  };

  return (
    <>
    <br></br>
    {/* <h2>Question For Discussion</h2>
    <h2>If you could spend a day with anyone, whom would you choose? </h2> */}
    <div className="person-perant">

      <Form onSubmit={handleSubmit}>

        <Form.Group className="name-of-label" id="title">
          <Form.Label>Title :</Form.Label>
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

        {/* <Form.Group className="name-of-label" id="status">
            <Form.Label>Status :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status"
              id="status"
              // name="status"
            />
          </Form.Group>
          <br></br> */}

        <Form.Group className="name-of-label" id="email">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
          />
        </Form.Group>
        <br></br>

        {/* <Form.Group>
            <Form.Label>id</Form.Label>
            <Form.Control type="text" placeholder="Enter id" id="id" data-testid='input-age'/>
          </Form.Group> */}

        <br></br>

        <Button variant="outline-dark" type="submit">
        send post
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
