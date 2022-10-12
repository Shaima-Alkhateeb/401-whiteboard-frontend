import axios from "axios";
// import { initialState } from "../reducers/authReducers";

export const signin = (dispatch, payload) => {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        axios.post(`${process.env.REACT_APP_URL}/signin`, {}, {
            headers: {
                Authorization: `Basic ${payload}`
            }
        })
        .then(res => {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            console.log(res.data)
          })
          .catch(err => dispatch({type: 'LOGIN_FAILED', payload: err}));

    } catch (e) {
        dispatch({type: 'LOGIN_FAILED', payload: e})
    }
}

export const logout = (dispatch) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    dispatch({type: 'LOGOUT'});
}