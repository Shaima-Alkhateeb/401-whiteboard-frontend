import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import base64 from 'base-64';
import { logout, signin } from "../actions/authActions";

import { AuthReducer, initialState } from "../reducers/authReducers";
export const authContext = createContext();


const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    //////////////////////
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


    ///////////////////////////////
    const handleSignin  = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const encodedData = base64.encode(`${data.email}:${data.password}`)
        console.log(`Basic ${encodedData}`)
        signin(dispatch, encodedData);
        console.log(user)
    }

    const handelLogout = () => {
        logout(dispatch);
    }

  const value = { handelLogout, handleSignin, user, handleSignup};

  return (
    <authContext.Provider value={value}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;