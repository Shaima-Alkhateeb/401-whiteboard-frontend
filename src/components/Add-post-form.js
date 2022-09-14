import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddPostForm(props) {
    const [post, setPost] = React.useState({});
    
    // const handleChange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("https://whiteboard-401-backend.herokuapp.com/post", post);
    //     props.getPost();
    // };

    function handleSubmmit(e) {
        e.preventDefault();
      }
    
    return (
        <div className="person-perant">

        <Form onSubmit={handleSubmmit} className="person-child">
  
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" id="Name" data-testid='input-name' />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" id="email" data-testid='input-age'/>
          </Form.Group>
          <br></br>

          <Form.Group>
            <Form.Label>id</Form.Label>
            <Form.Control type="text" placeholder="Enter id" id="id" data-testid='input-age'/>
          </Form.Group>
 
          <br></br>
  
          <Button variant="outline-dark" type="submit" data-testid="submit">
            Submit
          </Button>
          <br></br>

          <Form.Group>
          <Form.Label>-------------------------------------------------------------------------</Form.Label> <br></br>
          <Form.Label data-testid='Name'>Name: </Form.Label> <br></br>
          <Form.Label data-testid='email'>email: </Form.Label> <br></br>
          <Form.Label data-testid='id'>id: </Form.Label> <br></br>
        </Form.Group>
  
        </Form>
      </div>
    );
    }

export default AddPostForm;
