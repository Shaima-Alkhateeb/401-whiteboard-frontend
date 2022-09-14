import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import AddCommentForm from "./AddCommentForm";

function Post (props) {
    const [post, setPost] = useState([]);
    // const [showComments, setShowComments] = useState(false);
    // const [commentCount, setCommentCount] = useState(0);
    
    // const toggleComments = () => {
    //     setShowComments(showComments => !showComments);
    // };

    // useEffect(() => {
    //     setCommentCount(comments.length);
    // }, [comments]);
    

    // const addComment = (comment) => {
    //     setComments(comments => [...comments, comment]);
    // };


    const getData = async () => {
        const response = await axios.get(`https://whiteboard-401-backend.herokuapp.com/post`);
        setPost(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
 
        </div>
    );

}

export default Post;
