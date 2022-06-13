import {blog} from '../../data/blogs.js';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogPost from '../BlogPost'
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';


function App() {
  const [comments, setComments] = useState([{id: uuidv4(), author: 'Carlos Alford', content: 'The very first comment'}]);

  function handleCommentSubmit({author, comment}) {
    setComments([...comments, {id: uuidv4(), author, content: comment}])
  }

  return (
    <>
      <BlogPost blog={blog} />
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} />
    </>
  );
}

export default App;
