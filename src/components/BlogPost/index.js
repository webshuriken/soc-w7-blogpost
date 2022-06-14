import React from 'react';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';


function BlogPost({post, comments, handleSubmit}) {
  return (
    <section className="blog-page">
      <h1 className="blog-title">{post.title}</h1>
      <h3 className="blog-author">{post.author}</h3>
      <span className="blog-postdate">{post.datePosted}</span>
      <figure>
        <img src={post.imageSrc} alt={post.imageAlt} className="blog-img" />
        <figcaption>{post.imageAlt}</figcaption>
      </figure>
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
      <CommentList postID={post.id} comments={comments} />
      <CommentForm onSubmit={handleSubmit} postID={post.id} />
    </section>
  );
}

export default BlogPost;
