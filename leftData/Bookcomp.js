import React from 'react'

// destructuring objects
function Bookcomp(props) {
  const { image, name, by, price, description } = props.book;
  const { children } = props;
  return (
    <article className="book">
      <img src={image} alt="" className="book-image" />{" "}
      <h3 style={{ color: "purple" }}>{name}</h3>{" "}
      <h4 style={{ color: "grey", fontSize: "15px", fontWeight: "400" }}>
        {" "}
        {price} Rs.{" "}
      </h4>{" "}
      <p style={{ color: "grey", fontSize: "13px", fontWeight: "400" }}>
        {" "}
        {description}{" "}
      </p>
      <p style={{ color: "grey", fontSize: "13px", fontWeight: "400" }}>
        By {by}
      </p>
      {children}
    </article>
  );
}

export default Bookcomp
