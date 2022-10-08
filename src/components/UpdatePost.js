
import React, { useContext } from "react";

import { PostContext } from '../Context/PostContext'

const UpdatePost = () => {

    const { setShowUpdate, showUpdate, handelUpdatePost, post } = useContext(PostContext);



    return (
        <>
            <div>
                <button onClick={() => setShowUpdate(!showUpdate)}>Update</button>
                {showUpdate &&
                    <form onSubmit={(e) => handelUpdatePost(e, post.id)}>
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