import React, { useReducer, useState, useEffect } from "react";
import { commentsReducer } from '../../reducers/commentsReducer.js'
import { useApi } from '../../hooks/useApi.js';
import BlogPost from "../BlogPost/index.js";


const Blogs = () => {
  const { data, loading } = useApi();

  const [allComments, dispatch] = useReducer(commentsReducer, []);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  if (loading) {
    return <h2>Posts are loading...</h2>
  }

  return (
    <div>
      { data.posts.length === 0 
      ? <h2>No posts available</h2>
      : data.posts.map((post, index) => <BlogPost post={post} key={index} comments={allComments} handleSubmit={handleCommentSubmit} />)}
    </div>
  )
}

export default Blogs;