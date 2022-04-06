import React, { useState } from "react";
import "./input.scss";

const Input = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const clearInput = (e) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <form className="form-books" onSubmit={(e) => clearInput(e)}>
      <input
        className="form-books_imput"
        type="text"
        placeholder="Title of book"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="btn form-books_btn"
        onClick={() => onAdd(value)}
      >
        Add new book
      </button>
    </form>
  );
};

export default Input;
