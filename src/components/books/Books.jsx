import React from "react";

import Book from "../book/Book";

import "./books.scss";

const Books = ({ list, onDelete, onCheck }) => {
  return (
    <ul className="list">
      {list.map((book, index) => (
        <Book
          key={book.id}
          {...book}
          index={index}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </ul>
  );
};

export default Books;
