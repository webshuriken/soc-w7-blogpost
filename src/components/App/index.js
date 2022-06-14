import blog from '../../data/blogs.js';
import comments from '../../data/comments.js'
import {useState, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogPost from '../BlogPost'


function reducer(state, action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {id: uuidv4(), ...action.comment}];
    default:
      return state;
  }
}

function App() {
  const [allComments, dispatch] = useReducer(reducer, comments);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  return (
    <main>
      {blog.map((post, index) => <BlogPost post={post} key={index} comments={allComments} handleSubmit={handleCommentSubmit} />)}
    </main>
  );
}

export default App;
