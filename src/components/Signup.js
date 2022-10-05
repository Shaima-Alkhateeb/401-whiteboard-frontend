import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


export default function Signup() {

    const handleSignup = async (e) => {
        e.preventDefault();
        if(e.target.password.value !== e.target.confirmPassword.value) {
            alert("Passwords do not match");
            return;
        } 
        const data = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        }
        
        await axios.post(`${process.env.REACT_APP_URL}/signup`, data).then(res => {
            console.log(res);
            alert("Thank you for signing up!, please Sing in"); 

        }).catch(e => alert("email or username already exists"));
        
  }

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
