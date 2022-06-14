import React, {useState} from 'react';


function CommentForm({onSubmit, postID}) {
  // single source of truth, well stored in two places
  const [author, setAuthor] = useState('Anon Author');
  const [comment, setComment] = useState('');

  function handleChange(e) {
    const {name, value} = e.target;
    if (name === 'author') {
        // update when user enter a username
        setAuthor(value);
    }else if (name === 'comment') {
      // If user deletes the author input and tried to enter a message without adding a name first reset input value to Anon Author
      if (author === '') {
        setAuthor('Anon Author');
      }
      // udpate the comment when a comment is entered
      setComment(value);
    }
  }

  function handleSubmit(e) {
    // prevent forms default behaviour
    e.preventDefault();
    // check comment is not empty
    if (comment !== '') {
      // send the form data to the parent component
      onSubmit({postID, author, content: comment})
      setComment('');
    }
  }

  return (
    <form>
      <label><span>Author:</span>
        <input type="text" value={author} name="author" onChange={handleChange} />
      </label>
      <label><span>Comment:</span>
        <textarea placeholder="Enter your message" value={comment} name="comment" onChange={handleChange}></textarea>
      </label>
      <input type="submit" onClick={handleSubmit} value="Submit" />
    </form>
  );
}

export default CommentForm;
