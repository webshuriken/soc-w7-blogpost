# SoC Blog Post

A React blog post app. Takes in a list of posts with related comments and displays it all in their own windows.

## About
---

Week 7 of the School of Code bootcamp recap task. Put what you've learned this week together to create a blog app with components that display posts and comments and allow users to add new comments.

## Getting Started
---

### Prerequesites

Latest versions of:
- node
- npm

### Installation

`npm install`

### Starting the App

`npm start`

## App Structure
---

### Components

The app consists of 5 components
```
- App
  - BlogPost
  - CommentList
    - Comment
  - CommentForm
```

Currently the dummy data will live inside:
- `src/data/blogs.js`
- `arc/data/comments.js`

To see the starter [README](./archive/README.md) follow the link.

### Extra Features

Here are some of the extra features I will add to the app to improve it.

_14-06-2022_
- Load multiple blog posts
- Load the related comments to each post
- Load a comments form for each blog post
  - Add comments related to the individual blog post (non-permanent)
- Be responsive

## Acknowledgements
---

- [School of Code](https://github.com/SchoolOfCode)
- [Carlos E Alford](https://carlosealford.com)
