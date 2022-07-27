import React from 'react';
import './index.css';


function Comment({author, content, deleteComment, id}) {
  let authorInitials = '';

  // get author initials
  author.split(' ').forEach(function (item) {
      authorInitials += item[0].toUpperCase();
  });

  return (
    <article className="comment">
      <button onClick={() => deleteComment(id)}>DELETE</button>
      <span className="comment-icon">{authorInitials}</span>
      <h4 className="comment-author">{author}</h4>
      <p className="comment-content">{content}</p>
    </article>
  );
}

export default Comment;
