import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Setup vars

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I love you to the moon and back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81mbSc7SQxL._AC_UL200_SR200,200_.jpg",
  title: "True comfort",
  author: "Kristin Cavallari",
};
const thirdBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg",
  title: "Rich dad poor dad",
  author: "Robert T. Kiyosaki",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Description</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>Description</p>
      </Book>
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      >
        <p>Description</p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  // Destructuring
  const { img, title, author, children } = props;
  return (
    <article className="book">
      {" "}
      <img src={img} alt="Book cover"></img>
      <h1>{title}</h1>
      <h4
        style={
          /* Inline style uses double brackets */ {
            color: "#617d98",
            fontSize: "0.75rem",
            marginTop: "0.25rem",
          }
        }
      >
        {" "}
        {author}
      </h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
