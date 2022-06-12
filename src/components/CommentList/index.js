import React from 'react';
import Comment from '../Comment';


function CommentList({comments}) {
  return (
    <section className="comments-wrapper">
      {comments.map(comment => <Comment author={comment.author} content={comment.content} key={comment.id} />)}
    </section>
  );
}

export default CommentList;
