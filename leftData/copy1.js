import React from "react";
import reactDom from "react-dom";
import "./index.css";
function Bookcomp() {
  return (
    <article className="book">
      <img src="download.jpg" alt="meh" className="book-image" />
      <h3 style={{ color: "purple" }}>Name of the book</h3>
      <h4 style={{ color: "grey", fontSize: "15px", fontWeight: "400" }}>
        Price
      </h4>
      <p style={{ color: "grey", fontSize: "13px", fontWeight: "400" }}>
        Mini Description
      </p>
    </article>
  );
}

const Booklist = () => {
  return (
    <section>
      <Bookcomp />
      <Bookcomp />
      <Bookcomp />
      <Bookcomp />
      <Bookcomp />
    </section>
  );
};

// const Greeting = ()=>{
//   return React.createElement('h1',{},'Hello World')
// }

reactDom.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>,
  document.getElementById("root")
);
