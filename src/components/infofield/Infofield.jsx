import React from "react";
import "./infofield.scss";

const Infofield = ({ onDeleteAll, all, read, noRead }) => {
  const btn_class = all ? "infofield-btn_deleteall btn" : "hiden";
  return (
    <div className="infofield">
      <span className="infofield-countall info-elem">{`All:  ${all}`}</span>
      <span className="infofield-countread info-elem">{`Read:  ${read}`}</span>
      <span className="infofield-notread info-elem">{`Not Read: ${noRead}`}</span>
      <button className={btn_class} onClick={onDeleteAll}>
        Delete all
      </button>
    </div>
  );
};

export default Infofield;
