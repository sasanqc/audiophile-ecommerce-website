import React from "react";
import NumberInput from "./UI/NumberInput";
import Button from "./UI/Button";
const Cart = () => {
  return (
    <article className="cart">
      <div className="cart__header">
        <h6 className="heading--6">cart(19)</h6>
        <button>Remove all</button>
      </div>
      <ul className="cart__items">
        <li className="cart__item">
          <img
            src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
            alt="product"
            className="cart__image"
          />
          <div className="cart__textBox">
            <p className="body">XX99 MK II</p>
            <p className="body">$ 2,999</p>
          </div>
          <NumberInput onChange={() => {}} initial={10} />
        </li>
        <li className="cart__item">
          <img
            src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
            alt=""
            className="cart__image"
          />
          <div className="cart__textBox">
            <p className="body">XX99 MK II</p>
            <p className="body">$ 2,999</p>
          </div>
          <NumberInput onChange={() => {}} initial={10} />
        </li>
      </ul>
      <div className="cart__total">
        <p className="body">total</p>
        <h6 className="heading--6">$ 5,396</h6>
      </div>
      <Button type={"primary"} label={"checkout"} />
    </article>
  );
};

export default Cart;
