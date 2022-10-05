import { createContext, useState } from "react";
import axios from "axios";
import base64 from 'base-64';
import cookies from 'react-cookies';

export const authContext = createContext();

const AuthContextProvider = (props) => {

    const [isAuth, setisAuth] = useState(false);
    const [role, setRole] = useState('');
    const [user, setUser] = useState({});
    const [capabilities, setCapabilities] = useState();

    const handleSignin  = async (e) => {
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
            setUser(res.data);
            console.log(res.data);
            cookies.remove();
            cookies.save('token', res.data.token);
            cookies.save('user_id', res.data.id);
            cookies.save('username', res.data.username);
            cookies.save('role', res.data.role);
            cookies.save('capabilities', JSON.stringify(res.data.capabilities));

            setisAuth(true)
          })
          .catch(err => console.log(err));
      }

    // const fetchUserInfo = () => {
    //     axios.get(`${process.env.REACT_APP_URL}/profile`, {}, {
    //         headers: {
    //             Authorization: `Bearer ${cookies.load('token')}`
    //         }
    //     })
    //     .then(res => setUser(res.data))
    // }


    const handelLogout = () => {
        cookies.remove('token');
        cookies.remove('user_id');
        cookies.remove('username');
        cookies.remove('role');
        cookies.remove('capabilities');
        setisAuth(false);
    }

    const checkToken = () => {
        const token = cookies.load('token');
        console.log(token);
        const role = cookies.load('role');
        const capabilities = cookies.load('capabilities');
        if(token) {
            setisAuth(true)
            setRole(role)
            setCapabilities(capabilities)
        }
    }

  const value = {isAuth, handelLogout, setisAuth, handleSignin, checkToken, role, user, capabilities};

  return (
    <authContext.Provider value={value}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;