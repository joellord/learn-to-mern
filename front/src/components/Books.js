import React, {useState, useEffect} from "react";
import Book from "./Book";
import Add from "./Add";

import { baseUrl } from "../config";

function Books() {
  let [ books, setBooks ] = useState([]);

  const loadBooks = async () => {
    let results = await fetch(`${baseUrl}/books`).then(resp => resp.json());
      setBooks(results);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <Add cb={loadBooks} />
      This is my list of books
      <ul>
        {books.map(book => <Book {...book} cb={loadBooks} />)}
      </ul>
    </div>
  )
}

export default Books;