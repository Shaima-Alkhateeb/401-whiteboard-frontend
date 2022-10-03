import React from "react";
import { useState } from "react";
import axios from "axios";
import cookies from 'react-cookies';

const UpdatePost = (props) => {
    const [showUpdate, setShowUpdate] = useState(false);

    const handelUpdatePost = async (e, id) => {
        e.preventDefault();

        const updateThePost = {
            title: e.target.value,
            description: e.target.value,
            email: e.target.value,
        };

        await axios.put(`${process.env.HEROKU_URL}/post/${id}`, updateThePost, {
            headers: {
                Authorization: `Bearer ${cookies.load('token')}`
            }
        })
        // .then(() => {
        //     setShowUpdate(false);
        // }
        // );
        props.getPost();
    }

    return (
        <>
            <div>
                <button onClick={() => setShowUpdate(!showUpdate)}>Update</button>
                {showUpdate &&
                    <form onSubmit={(e) => handelUpdatePost(e, props.id)}>
                        <input type="text" name="title" placeholder="title" />
                        <input type="text" name="description" placeholder="description" />
                        <input type="text" name="email" placeholder="email" />
                        <button type="submit">Update</button>
                    </form>
                }
            </div>
        </>
    )
}

export default UpdatePost;