import './index.css';
import {useEffect, useState, useReducer} from 'react';
import { commentsReducer } from '../../reducers/commentsReducer.js'
import BlogPost from '../BlogPost'
import NavBar from '../NavBar';


function App() {
  const [allComments, dispatch] = useReducer(commentsReducer, []);
  const [blog, setBlog] = useState([]);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  // grab comments and blogs from backend
  useEffect(() => {
    // API
    const URI = `http://localhost:4000/api`;

    // fetch all posts and comments from API
    const getPosts = async () => {
      const response = await fetch(`${URI}/blogpost`);
      const posts = await response.json();
      setBlog(posts.payload)
    }
    const getComments = async () => {
      const response = await fetch(`${URI}/comments`);
      const comments = await response.json();
      dispatch({
        type: 'POPULATE_COMMENTS',
        value: comments.payload,
      });
    }
    getPosts();
    getComments();
  },[])

  return (
    <>
      <NavBar />
      <main>
        {
          blog.length === 0 
          ? <h2>No posts available</h2>
          : blog.map((post, index) => <BlogPost post={post} key={index} comments={allComments} handleSubmit={handleCommentSubmit} />)}
      </main>
      <footer>Created by Carlos E Alford in association with <a href="https://www.schoolofcode.co.uk/">School of Code</a></footer>
    </>
  );
}

export default App;
