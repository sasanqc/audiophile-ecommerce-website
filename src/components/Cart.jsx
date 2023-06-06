import React from "react";

import NumberInput from "./UI/NumberInput";
import Button from "./UI/Button";
import { useStore } from "../store";

const Cart = ({ onCheckoutClick }) => {
  const [{ cart, products }, dispatch] = useStore();

  const convertedCart = cart.map((el) => {
    return {
      ...products.find((item) => item.slug === el.slug),
      quantity: el.quantity,
    };
  });
  const total = convertedCart.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );
  const handleRemoveAll = () => {
    dispatch("REMOVE_ALL");
  };
  const handleChangeQuantity = (quantity, slug) => {
    dispatch("CHANGE_QUANTITY", { quantity, slug });
  };
  return (
    <article className="cart">
      <div className="u-flexBetween cart__header">
        <h6 className="heading--6">{`cart(${cart.length})`}</h6>
        <button onClick={handleRemoveAll}>Remove all</button>
      </div>
      <ul className="cart__items">
        {convertedCart.map((el) => (
          <li className="cart__item" key={el.slug}>
            <img
              src={process.env.PUBLIC_URL + el.image.desktop}
              alt="product"
              className="cart__image"
            />
            <div className="cart__textBox">
              <p className="body">{el.name}</p>
              <p className="body">{`$ ${el.price}`}</p>
            </div>
            <NumberInput
              onChange={(quantity) => handleChangeQuantity(quantity, el.slug)}
              initial={el.quantity}
            />
          </li>
        ))}
      </ul>
      <div className="u-flexBetween cart__total">
        <p className="body">total</p>
        <h6 className="heading--6">{`$ ${total}`}</h6>
      </div>
      <Button type={"primary"} label={"checkout"} onClick={onCheckoutClick} />
    </article>
  );
};

export default Cart;
