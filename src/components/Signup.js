
import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { authContext } from "../Context/AuthContext";


export default function Signup() {

  const { handleSignup } = useContext(authContext);



  return (
    
    <div>
        <h5>If you dont have an account pleas Sign up to see the post page</h5>
        <p>-----------------------------------------</p>
      <h2>Sign up</h2><br></br>
      
      <form action="" onSubmit={handleSignup}>
        <input type="text" placeholder="username" name="username" /> <br></br><br></br>
        <input type="email" placeholder="email" name="email" /> <br></br><br></br>
        <input type="text" placeholder="password" name="password" /> <br></br><br></br>
        <input type="text" placeholder="confirmPassword" name="confirmPassword" /> <br></br><br></br>
        <button type="submit">Sign up</button>
      </form>
      <br></br>
      <Link to="/signin" >Already have an account ?</Link>
    </div>
  );
}