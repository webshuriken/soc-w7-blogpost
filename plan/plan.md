# Week 7 Recap Task

create a blog app with components that display posts and comments and allow users to add new comments.

## Task 1 - BlogPost

Create a component `BlogPost`

### Props

- `blog` which should be an object with the following shape:

  ```js
  {
    id: string,
    title: string,
    author: string,
    datePosted: string,
    content: string,
    imageSrc: string,
    imageAlt: string,
  }
  ```

- Import react ✅
- store initial boiler plate in `blog` const ✅
- Render the component with the following tags wrapping all of it in a main tag ✅
- Add all the object parts as required ✅

```html
<main className="blog-page">
  <h1 className="blog-title"></h1>
  <h3 className="blog-author"></h3>
  <span className="blog-postdate"></span>
  <figure>
    <img src="" alt="" className="blog-img" />
    <figcaption></figcaption>
  </figure>
  <div calssName="blog-content">
    <p></p>
  </div>
</main>
```

## Task 2 - Comment

- import react ✅
- Create a component `Comment` ✅
- Props: ✅

  - `author` which should be a string ✅
  - `content` which should be a string ✅

- Renders: ✅
  - Display the author and comment ✅
  - Display the capitalised initials of the commenter's full name in a nice little circle ✅
