import React from "react";
import Button from "./UI/Button";
import { ReactComponent as TickIcon } from "../assets/icons/icon-tick.svg";
const OrderModal = () => {
  return (
    <article className="orderModal">
      <TickIcon className="orderModal__tickIcon" />
      <h3 className="heading--3">thank you for your order</h3>
      <p className="body">You will receive an email confirmation shortly.</p>
      <div className="orderModal__items">
        <div className="orderModal__details">
          <div className="orderModal__firstProduct">
            <img
              src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
              alt=""
              className="orderModal__image"
            />
            <div className="summary__textBox">
              <p className="body">XX99 MK II</p>
              <p className="body">x1</p>
              <p className="body">$ 2,999</p>
            </div>
          </div>
          <p className="orderModal__moreItems">and 2 other item(s)</p>
        </div>
        <div className="orderModal__total">
          <p className="body">grand total</p>
          <p className="body">$ 5,446</p>
        </div>
      </div>
      <Button type={"primary"} label={"back to home"} />
    </article>
  );
};

export default OrderModal;
