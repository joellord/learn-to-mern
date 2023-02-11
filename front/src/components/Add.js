import { useState } from "react";
import { baseUrl } from "../config";
export default function Add (props) {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");

  const handleNewBook = async () => {
    await fetch(`${baseUrl}/book`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title, author
      })
    });

    setTitle("");
    setAuthor("");
    props.cb();
  }

  return (
    <div>
      <h2>Add a new entry</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}></input>
        <br/>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)}></input>
        <br/>
        <button type="button" onClick={handleNewBook}>Save to DB</button>
      </form>
      <br/><br/><br/>
    </div>
  )
}