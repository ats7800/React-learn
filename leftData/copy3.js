import React from "react";
import reactDom from "react-dom";
import "./index.css";

const styleForHover = {
  border: "2px solid grey",
  padding: "10px",
  textAlign: "center",
  margin: "20px",
  borderRadius: "10px",
};

const Booklist = () => {
  const clickHandler = (subEvent, compSpecificProp) => {
    console.log(subEvent.metaKey);
    console.log(compSpecificProp);
    alert("Hello");
  };
  return (
    <section style={{ textAlign: "center" }}>
      <button onClick={(subEvent) => clickHandler(subEvent, "Event Test")}>
        Event Test
      </button>

      <div
        style={styleForHover}
        onMouseOver={(subEvent) => {
          return " Hello";
        }}
      >
        Hover Over Me
      </div>
    </section>
  );
};

reactDom.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>,
  document.getElementById("root")
);
