import React from "react";

const Book = (props, index) => {
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

export default Book;
