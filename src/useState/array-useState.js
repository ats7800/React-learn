import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import data from "../booksData";

// typeof state can be changed Remember

const ArrayExapmle = () => {
  const [books, setBooks] = useState(data);
  const clickHandler = (id) => {
    // let newArr = books.filter((book)=>{
    //     return book.id > id || book.id < id
    // })
    const processArrName = (book) => {
      if (book.id === id) {
        let temp = book.name;
        temp = temp.substring(0, temp.length - 1);
        // Using the spread operator
        return { ...book, name: temp };
      }
      return book;
    };
    let newArr = books.map(processArrName);
    setBooks(newArr);
    console.log(books);
  };
  return (
    <div className="container">
      {books.map((book) => {
        return (
          <h2 onClick={() => clickHandler(book.id)} key={book.id}>
            {book.name}
          </h2>
        );
      })}
    </div>
  );
};

export default ArrayExapmle;
