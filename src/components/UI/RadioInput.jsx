import React from "react";

const RadioInput = ({ label, onClick, value }) => {
  return (
    <div
      className={`radioSelection ${value ? "radioSelection--active" : ""}`}
      onClick={onClick}
    >
      <label className="radioSelection__input"></label>
      <span className="inputText">{label}</span>
    </div>
  );
};

export default RadioInput;
