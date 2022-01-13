import React from "react";
import reactDom from "react-dom";
import "./index.css";
import books from "./booksData";
import Bookcomp from "./Bookcomp";

// spread operator
// console.log({...books[0]});

// We need a unique key prop for each list component
const Booklist = () => {
  return (
    <section style={{ textAlign: "center" }}>
      {books.map((book, index) => {
        console.log(index);
        return <Bookcomp key={book.id} book={book} />;
      })}
      <Bookcomp book={books[2]}>
        <p style={{ fontSize: "12px", color: "#777", letterSpacing: "0.4px" }}>
          Another Description Using 'props.children'
        </p>
      </Bookcomp>
    </section>
  );
};

reactDom.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>,
  document.getElementById("root")
);
