import { baseUrl } from "../config";

function Book(props) {
  const handleDeleteBook = async () => {
    await fetch(`${baseUrl}/book/${props._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    });
    props.cb();
  }

  const updateAuthor = async () => {
    let newAuthor = prompt("Enter new author");
    await fetch(`${baseUrl}/book/${props._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ author: newAuthor })
    });
    props.cb();
  }

  return <li>
    {props.title} <button type="button" onClick={handleDeleteBook}>Delete</button><br/>
    Author: {props.author} <button type="button" onClick={updateAuthor}>Update Author</button></li>
}

export default Book;