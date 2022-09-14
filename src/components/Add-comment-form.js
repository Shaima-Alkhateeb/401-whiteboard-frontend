import React from "react";
import axios from "axios";

function AddCommentForm(props) {
    const [comment, setComment] = React.useState({});
    
    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://whiteboard-401-backend.herokuapp.com/comment", comment);
        props.getComment();
    };
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="comment"
            placeholder="comment"
            onChange={handleChange}
            />
            <input
            type="text"
            name="post"
            placeholder="post"
            onChange={handleChange}
            />
            <input type="submit" value="Add Comment" />
        </form>
        </div>
    );
    }

export default AddCommentForm;