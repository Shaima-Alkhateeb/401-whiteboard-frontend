import axios from "axios";
import React, { useState, useEffect } from "react";
import base64 from 'base-64';
// import { Link } from "react-router-dom";
import { When } from 'react-if';
import Post from './Post'
import cookies from 'react-cookies';

export default function Signin() {

    const [Signedin, setSignedin] = useState(false);

    const handleSignin = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const encodedData = base64.encode(`${data.email}:${data.password}`)
        console.log(`Basic ${encodedData}`)
        axios.post(`${process.env.REACT_APP_URL}/signin`, {}, {
            headers: {
                Authorization: `Basic ${encodedData}`
            }
        })
        .then(res => {
            console.log(res.data);
            cookies.remove();
            cookies.save('token', res.data.token);
            cookies.save('user_id', res.data.user_id);
            cookies.save('username', res.data.username);
            cookies.save('role', res.data.role);
            // cookies.save('capabilities', JSON.parse(res.data.capabilities));

            setSignedin(true)
          })
          .catch(err => console.log(err));
      }


      useEffect(() => {
        const token = cookies.load('token');
        // console.log(token);
        if(token) {
          setSignedin(true)
        }
      }, [])

      const handelLogout = () => {
        cookies.remove('token');
        setSignedin(false);
      }


    
    
  return (
    <>
    <When condition={!Signedin}>
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

    <When condition={Signedin}>
      <br></br>
      {/* <h2>Hooray you are authorized </h2> */}
      <button onClick={handelLogout}>logout</button>
      {/* <Link to="/post">Click here to view the post page</Link> */}
      <Post />
    </When>
    </>
  );
}