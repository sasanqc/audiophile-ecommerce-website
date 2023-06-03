import React, { useState } from "react";

const TextInput = ({
  label,
  name,
  placeholder,
  type,
  initial,
  error,
  onChange,
}) => {
  const [value, setValue] = useState(initial || "");
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  return (
    <div className={`textInput ${error ? "textInput--error" : ""}`}>
      <label htmlFor={name} className="u-flexBetween textInput__label">
        {label}
      </label>
      <input
        type={type}
        className="inputText textInput__input"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
