import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// Array
import { data } from "./books";
// Book Component
// Default component can be named as we want
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return (
          <Book key={book.id} {...book}>
            <p>Description</p>
          </Book>
        );
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
