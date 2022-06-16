import blog from '../../data/blogs.js';
import comments from '../../data/comments.js'
import './index.css';
import {useReducer} from 'react';
import BlogPost from '../BlogPost'
import { commentsReducer } from '../../reducers/commentsReducer.js'


function App() {
  const [allComments, dispatch] = useReducer(commentsReducer, comments);

  function handleCommentSubmit(comment) {
    dispatch({type: 'ADD_COMMENT', comment})
  }

  return (
    <>
      <header className="app-header">
        <h1>SoC W7 Posts</h1>
      </header>
      <main>
        {blog.map((post, index) => <BlogPost post={post} key={index} comments={allComments} handleSubmit={handleCommentSubmit} />)}
      </main>
      <footer>Created by Carlos E Alford in association with <a href="https://www.schoolofcode.co.uk/">School of Code</a></footer>
    </>
  );
}

export default App;
