import React from "react";
import Book from "./Book";

const books = [
  {title: "Book 1", author: "Joel Lord"},
  {title: "Book 2", author: "Someone else"}
]

function Books() {
  return (
    <div>
      This is my list of books
      <ul>
        {books.map(book => <Book {...book} />)}
      </ul>
    </div>
  )
}

export default Books;