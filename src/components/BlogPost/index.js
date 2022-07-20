import React from 'react';
import './index.css';
import { useAuth0 } from '@auth0/auth0-react';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';


function BlogPost({post, comments, handleSubmit, deleteComment}) {
  const { isAuthenticated } = useAuth0();

  return (
    <section className="blogpost-page">
      <h1 className="blogpost-title">{post.title}</h1>
      <h3 className="blogpost-author">{post.author}</h3>
      <span className="blogpost-postdate">{post.datePosted}</span>
      <figure>
        <img src={post.imageSrc} alt={post.imageAlt} className="blogpost-img" />
        <figcaption>{post.imageAlt}</figcaption>
      </figure>
      <div className="blogpost-content">
        <p>{post.content}</p>
      </div>
      <CommentList postID={post.id} comments={comments} deleteComment={deleteComment} />
      {isAuthenticated && <CommentForm onSubmit={handleSubmit} postID={post.id} />}
    </section>
  );
}

export default BlogPost;
