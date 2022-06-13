import React from 'react';


function BlogPost({blog}) {
  return (
    <main className="blog-page">
      <h1 className="blog-title">{blog.title}</h1>
      <h3 className="blog-author">{blog.author}</h3>
      <span className="blog-postdate">{blog.datePosted}</span>
      <figure>
        <img src={blog.imageSrc} alt={blog.imageAlt} className="blog-img" />
        <figcaption>{blog.imageAlt}</figcaption>
      </figure>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
    </main>
  );
}

export default BlogPost;
