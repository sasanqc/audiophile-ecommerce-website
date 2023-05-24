import React from "react";

const Button = ({ type, label, onClick }) => {
  //types: fill , outline , noborder
  return (
    <button className={`btn--${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default React.memo(Button);
