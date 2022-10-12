
import React, {  useEffect, useContext } from "react";

import { When } from 'react-if';
import Post from './Post'
import cookies from 'react-cookies';
import  { authContext} from "../Context/AuthContext";


export default function Signin() {


  const {  handelLogout, handleSignin, user, theuser} = useContext(authContext);

  // useEffect(() => {
    // const token = cookies.load('token');
    // // console.log(token);
    // if(token) {
    //   // setisAuth(true)
    // }
    // checkToken();
  // }, [])

  return (
    <>
    <When condition={!user.isAuth}>
    <div>
      <h2>Sign in</h2><br></br>
      <form action="" onSubmit={handleSignin}>
        <input type="email" placeholder="email" name="email" />
        <br></br><br></br>
        <input type="password" placeholder="password" name="password" />
        <br></br><br></br>
        <button type="submit">Sign in</button>
      </form>
    </div>
    </When>

    <When condition={user.isAuth}>
      <br></br>
      {/* <h2>Hooray you are authorized </h2> */}
      {<h2>Hello{user.username} </h2>}

      <button onClick={handelLogout}>logout</button>
      {/* <Link to="/post">Click here to view the post page</Link> */}
      <Post />
    </When>
    </>
  );
}