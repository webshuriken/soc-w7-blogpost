import React from 'react';


function BlogPost() {
  // temporary boiler plate
  const blog = {
    title: "My First Post",
    author: "Chris Meah",
    datePosted: "20/11/2019",
    content: `
      A structure used in most apps and games.
      It's a way to keep doing the same.
      While a condition is true,
      Or for one to twenty-two.
      If endless, for errors we blame
      ..........
      Loop `,
    imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "A couple of coders."
  }

  return (
    <main className="blog-page">
      <h1 className="blog-title">{blog.title}</h1>
      <h3 className="blog-author">{blog.author}</h3>
      <span className="blog-postdate">{blog.datePosted}</span>
      <figure>
        <img src={blog.imageSrc} alt={blog.imageAlt} className="blog-img" />
        <figcaption>{blog.imageAlt}</figcaption>
      </figure>
      <div calssName="blog-content">
        <p>{blog.content}</p>
      </div>
    </main>
  );
}

export default BlogPost;
