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

## Task 3 - CommentList

Create a component✅
Import React✅

### Props:

- `comments` should be an array of objects. ✅

```ts
{
  id: string,
  author: string,
  content: string
}
```

### Renders:

- Render a `Comment` component for each item in the `comments` array (prop). Use the `id` of each comment as its React key. ✅
  - using a map to create comment components with the key of id ✅

## Task 4 - CommentForm

Create a component `CommentForm`✅
Import react✅

### Props:

- `onSubmit` which is a function which will be called (when the user clicks the button) to let `CommentForm`'s parent component know what the user entered.✅

### State:

- You can have some state(s) for tracking the user's inputs (i.e. their name and comment).✅

### Behaviours:

- On clicking the button, `onSubmit` should be called with the user's input (both their name ✅and their comment). This a way to let the parent component know what the user has entered.
- If the comment is empty, do not call `onSubmit`.✅
- Provide a default name for the author (e.g. `"Anon Author"`).✅
- After calling `onSubmit`, clear the input for the comment but not the input for the name✅

### Renders:

- An input for the author's name (with an "Author" label)✅
- An input for the comment itself (with a "Comment" label)✅
- A button containing "Submit"✅

## Task 5 - App

Create a component `App`✅

- State:

  - `comments` which should be an array of comment objects.✅

- Behaviours:

  - import the list for the blog✅

  - a function which can take in an author and comment (as input), creates a new comment object (with an `author`, `comment` and `id`) and adds the new comment object to the `comments` array (state).✅

- Renders:

  - A `BlogPost` component✅

    - You can use the `blog` object in `data/blogs.js` for the `blog ` prop. (In reality, the blog data might come from an API instead of a hard coded object. However, this is good enough for now.)✅

  - A `CommentList` component✅

    - You should use the `comments` state (from `CommentsSection` state) as the `comments` prop for the `CommentList`✅

  - A `CommentForm` component✅

    - You should pass down the function (described earlier in "behaviours", which takes in an `author` and `comment`) as the `onSubmit` prop for the `CommentForm`✅
