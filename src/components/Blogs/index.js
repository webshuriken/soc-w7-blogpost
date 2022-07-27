import React, { useReducer } from "react";
import { commentsReducer } from '../../reducers/commentsReducer.js'
import { useApi } from '../../hooks/useApi.js';
import BlogPost from "../BlogPost/index.js";
import { useAuth0 } from "@auth0/auth0-react";


const Blogs = () => {
  const { data, apiLoading } = useApi();
  const { getAccessTokenSilently } = useAuth0();

  const [allComments, dispatch] = useReducer(commentsReducer, []);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  async function deleteComment(id) {
    // TODO: YOU ARE TESTING OUT SCOPING SO PEOPLE CAN ONLY DO CERTAIN TASKS
    console.log("ABOUT TO DELETE THE COMMENT: ", id)
    const token = await getAccessTokenSilently();
    const response = await fetch(`http://localhost:4000/api/private/comment/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const responsedata = await response.json();
    console.log("YOU HAVE RECEIVED: ", responsedata);
  }

  if (apiLoading) {
    return <h2>Posts are loading...</h2>
  }

  return (
    <div>
      { data.posts.length === 0 
      ? <h2>No posts available</h2>
      : data.posts.map((post, index) => <BlogPost post={post} key={index} comments={data.comments} deleteComment={deleteComment} handleSubmit={handleCommentSubmit} />)}
    </div>
  )
}

export default Blogs;