import React, {useState} from 'react';


function CommentForm({onSubmit}) {
  const [userInput, setUserInput] = useState({name: 'Anon Author', comment: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    if (name === 'author') {
      setUserInput({...userInput, name: value});
    }else if (name === 'comment') {
      setUserInput({...userInput, comment: value});
    }

    console.log(userInput)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // check comment is not empty
    if (userInput.comment === '') {
      return false;
    }
    onSubmit(userInput)
    setUserInput({...userInput, comment: ''})
  }

  return (
    <form onChange={handleChange}>
      <label><span>Author:</span>
        <input type="text" placeholder="Anon Author" name="author" />
      </label>
      <label><span>Comment:</span>
        <textarea placeholder="Enter your message" name="comment"></textarea>
      </label>
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default CommentForm;
