import { it, expect, beforeEach, describe } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import BlogPost from "./index.js";
import {commentsReducer} from '../../reducers/commentsReducer.js';


describe.each([
  {
    title: "Some title",
    author: "Some author",
    datePosted: "Some date",
    content: "Some content",
    imageSrc: "Some image source",
    imageAlt: "Some alt text",
  },
  {
    title: "Best day ever!",
    author: "Henry James",
    datePosted: "1 June 2029",
    content: "We ate ice cream.",
    imageSrc: "Invalid url",
    imageAlt: "Ice cream",
  },
])("BlogPost component", (blog) => {
  beforeEach(() => {
    render(<BlogPost blog={blog} />);
  });

  it("should display 'title'", () => {
    expect(screen.getByText(blog.title)).toBeInTheDocument();
  });

  it("should display 'author'", () => {
    expect(screen.getByText(blog.author, { exact: false })).toBeInTheDocument();
  });

  it("should display 'datePosted'", () => {
    expect(screen.getByText(blog.datePosted)).toBeInTheDocument();
  });

  it("should display 'content'", () => {
    expect(screen.getByText(blog.content)).toBeInTheDocument();
  });

  it("should display an image with correct src and alt text", () => {
    const image = screen.getByAltText(blog.imageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", blog.imageSrc);
  });

  it("should display the alt text as a caption", () => {
    expect(screen.getByText(blog.imageAlt)).toBeInTheDocument();
  });
});


it(`Check reducer inside of App updates with the new blog post message`, () => {
  // Arrange
  const content = {
    postID: "kskweb5HZ8qgshurikenNQUiW",
    id: "jFyGAdfffVsGputh5tO1ga",
    author: "Web Shuriken",
    content: "Stargate was amazing stuff. Each episode took you to other worlds",
  }
  const updateAction = {
    type: 'ADD_COMMENT',
    comment: content
  }
  const updatedState = commentsReducer([], updateAction);
  // Act
  expect(updatedState).toEqual([content]);
});

// it('returns new state for "update" type', () => {
//   const initialState = [1];
//   const updateAction = {type: 'update', newState: [1, 2, 3] };
//   const updatedState = fooReducer(initialState, udpateAction);
//   expect(updatedState).toEqual([1, 2, 3]);
// });
