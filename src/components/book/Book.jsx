import React from "react";
import "./book.scss";

const Book = ({ title, index, id, onDelete, isRead, onCheck }) => {
  const read = isRead ? "read" : "";
  return (
    <li className="listitem">
      <span className="listitem-number">{index + 1}</span>
      <span className={`listitem-title ${read}`}> {title}</span>
      <span className="listitem-basced" onClick={() => onDelete(id)}>
        🗑️
      </span>
      <input
        className="listitem-input"
        type="checkbox"
        onClick={() => onCheck(id)}
      ></input>
    </li>
  );
};

export default Book;
