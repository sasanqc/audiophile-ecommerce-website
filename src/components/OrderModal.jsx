import React from "react";
import Button from "./UI/Button";
import { ReactComponent as TickIcon } from "../assets/icons/icon-tick.svg";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
const OrderModal = () => {
  const { cart, products } = useStore()[0];
  const navigate = useNavigate();
  const convertedCart = cart.map((el) => {
    return {
      ...products.find((item) => item.slug === el.slug),
      quantity: el.quantity,
    };
  });
  const handleBackToHome = () => {
    navigate("/home");
  };
  const total =
    convertedCart.reduce(
      (total, item) => item.quantity * item.price + total,
      0
    ) +
    50 +
    5393;

  return (
    <article className="orderModal">
      <TickIcon className="orderModal__tickIcon" />
      <h3 className="heading--3">thank you for your order</h3>
      <p className="body">You will receive an email confirmation shortly.</p>
      <div className="orderModal__items">
        <div className="orderModal__details">
          <div className="orderModal__firstProduct">
            <img
              src={process.env.PUBLIC_URL + convertedCart[0].image.desktop}
              alt=""
              className="orderModal__image"
            />
            <div className="summary__textBox">
              <p className="body">{convertedCart[0].name}</p>
              <p className="body">{`x${convertedCart[0].quantity}`}</p>
              <p className="body">{`$ ${convertedCart[0].price}`}</p>
            </div>
          </div>
          {convertedCart.length > 1 && (
            <p className="orderModal__moreItems">{`and ${
              convertedCart.length - 1
            } other item(s)`}</p>
          )}
        </div>
        <div className="orderModal__total">
          <p className="body">grand total</p>
          <p className="body">{`$ ${total}`}</p>
        </div>
      </div>
      <Button
        type={"primary"}
        label={"back to home"}
        onClick={handleBackToHome}
      />
    </article>
  );
};

export default OrderModal;
