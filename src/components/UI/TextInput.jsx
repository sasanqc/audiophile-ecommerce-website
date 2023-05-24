import React, { useState } from "react";

const TextInput = ({ label, name, placeholder, type, initial }) => {
  const [value, setValue] = useState(initial || "");
  return (
    <div className="textInput">
      <label htmlFor={name} className="textInput__label">
        {label}
      </label>
      <input
        type={type}
        className="inputText textInput__input"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
