import React from 'react';
import Comment from '../Comment';


function CommentList({postID, comments}) {
  return (
    <section className="comments-wrapper">
      {comments.reduce((acc, comment) => {
        return postID === comment.postID ? [...acc, <Comment author={comment.author} content={comment.content} key={comment.id} />] : [...acc];
      }, [])}
    </section>
  );
}

export default CommentList;
