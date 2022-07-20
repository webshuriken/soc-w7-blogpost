import React, { useReducer, useState, useEffect } from "react";
import { commentsReducer } from '../../reducers/commentsReducer.js'
import { useApi } from '../../hooks/useApi.js';
import BlogPost from "../BlogPost/index.js";
import { useAuth0 } from "@auth0/auth0-react";


const Blogs = () => {
  const { data, apiLoading } = useApi();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [allComments, dispatch] = useReducer(commentsReducer, []);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  if (apiLoading) {
    return <h2>Posts are loading...</h2>
  }

  return (
    <div>
      { data.posts.length === 0 
      ? <h2>No posts available</h2>
      : data.posts.map((post, index) => <BlogPost post={post} key={index} comments={data.comments} handleSubmit={handleCommentSubmit} />)}
    </div>
  )
}

export default Blogs;