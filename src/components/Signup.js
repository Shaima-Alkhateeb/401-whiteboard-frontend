import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        await axios.post('https://whiteboard-401-backend.herokuapp.com/signup', data).then(res => {
            console.log(res);
        }).catch(e => console.log(e))
    }

  return (
    <div>
        <h1>Happy to have you here ^_^</h1><br></br><br></br>
        <h5>If you dont have an account pleas Sign up to see the post page</h5>
        <p>-----------------------------------------</p>
      <h2>Sign up</h2><br></br>
      
      <form action="" onSubmit={handleSignup}>
        <input type="text" placeholder="username" name="username" /> <br></br><br></br>
        <input type="email" placeholder="email" name="email" /> <br></br><br></br>
        <input type="text" placeholder="password" name="password" /> <br></br><br></br>
        <button type="submit">Sign up</button>
      </form>
      <br></br>
      <Link to="/signin" >Already have an account ?</Link>
    </div>
  );
}