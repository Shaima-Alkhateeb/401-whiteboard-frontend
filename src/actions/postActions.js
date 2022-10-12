import axios from "axios";
// import cookies from 'react-cookies';

export const getPostAction = async (dispatch, data) => {
  try {
    const allPost = axios
      .get(`${process.env.REACT_APP_URL}/post`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then((response) => {
        const allPosts = response.data;
        console.log(response.data);
        //   setPost(allPosts);
        // setShowPostComponent(true);
      })
      .catch((error) => console.error(`Error: ${error}`));
    dispatch({ type: "GET_POST", payload: allPost.data });
  } catch (e) {
    console.log(e);
  }

  //   const allPost = await axios.get(`${process.env.REACT_APP_URL}/post`, {
  //     headers: {
  //       Authorization: `Bearer ${cookies.load("token")}`,
  //     },
  //   });
  //   dispatch({type: 'GET_POST', payload: allPost.data})

  // //   setPost(allPost.data.post);
  //   console.log(allPost.data);
};

export const deletePostAction = (dispatch, data) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/post/${data.id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    })
    .then((res) => {
      dispatch({ type: "DELETE_POST", payload: data.id });
    })
    .catch((err) => console.log(err));
};

export const addPostAction = (dispatch, data) => {
    axios
      .post(`${process.env.REACT_APP_URL}/post`, data, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then((res) => {
        dispatch({ type: "ADD_POST", payload: res.data });
      })
      .catch((e) => console.log(e));
  };