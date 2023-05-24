import React, { useState } from "react";
import { ReactComponent as MinusIcon } from "../../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";
const NumberInput = ({ initial, onChange }) => {
  const [value, setValue] = useState(initial || 0);
  const handleIncrease = () => {
    onChange(value + 1);
    setValue(value + 1);
  };
  const handleDecrease = () => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
    setValue(value - 1);
  };
  return (
    <div className="numberInput">
      <MinusIcon className="numberInput__icon" onClick={handleDecrease} />
      <span className="numberInput__value">{value}</span>
      <PlusIcon className="numberInput__icon" onClick={handleIncrease} />
    </div>
  );
};

export default NumberInput;
