import React, { useState } from "react";
import "./app.scss";
import { bookslist } from "../../bookslist";
import Books from "../books/Books";
import Input from "../input/Input";
import Infofield from "../infofield/Infofield";

const App = () => {
  const [list, setList] = useState(bookslist);

  const deleteItem = (id) => {
    setList((prew) => prew.filter((book) => id !== book.id));
  };

  const deleteAll = () => {
    setList([]);
  };
  const check = (id) => {
    setList((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, isRead: !item.isRead } : item
      );
    });
  };

  const createNewBook = (title) => {
    setList((prev) =>
      prev.concat({
        title,
        id: list.length + 1,
        isRead: false,
      })
    );
  };

  const readCount = list.filter((elem) => elem.isRead).length;
  const noReadCount = list.filter((elem) => !elem.isRead).length;
  return (
    <div className="app">
      <Input onAdd={createNewBook} />
      <Infofield
        onDeleteAll={deleteAll}
        all={list.length}
        read={readCount}
        noRead={noReadCount}
      />
      <Books list={list} onDelete={deleteItem} onCheck={check} />
    </div>
  );
};

export default App;
