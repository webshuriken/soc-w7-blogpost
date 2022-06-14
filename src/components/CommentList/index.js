import React from 'react';
import Comment from '../Comment';


function CommentList({postID, comments}) {
  // create a list for the comments matching the current blog post id
  const postComments = comments.reduce((acc, comment) => {
    return postID === comment.postID ? [...acc, <Comment author={comment.author} content={comment.content} key={comment.id} />] : [...acc];
  }, []);
  return (
    <section className="comments-wrapper">
      {postComments}
    </section>
  );
}

export default CommentList;
