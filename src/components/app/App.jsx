import React, { useState } from "react";

import { bookslist } from "../../bookslist";
import { Books, Input, Infofield } from "../index";

import "./app.scss";

const App = () => {
  const [list, setList] = useState(bookslist);

  const noDate = <div className="nodata">No Data!</div>;

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
        id: Date.now(),
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
      {list.length > 0 ? (
        <Books list={list} onDelete={deleteItem} onCheck={check} />
      ) : (
        noDate
      )}
    </div>
  );
};

export default App;
