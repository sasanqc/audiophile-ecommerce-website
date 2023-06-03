import React from "react";
import Button from "./UI/Button";
const Summary = ({ total, items, handlePayment }) => {
  return (
    <div className="summary">
      <h6 className="heading--6">summary</h6>
      <ul className="summary__list">
        {items.map((el) => (
          <li className="summary__item" key={el.slug}>
            <div className="summary__product">
              <img
                src={el.image.desktop}
                alt="summary item"
                className="summary__image"
              />
              <div className="summary__textBox">
                <p className="body">{el.name}</p>
                <p className="body">{`x${el.quantity}`}</p>
                <p className="body">{`$ ${el.price}`}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="summary__prices">
        <div className="u-flexBetween summary__price">
          <p className="summary__priceTitle">total</p>
          <p className="summary__priceValue">{`$ ${total}`}</p>
        </div>
        <div className="u-flexBetween summary__price">
          <p className="summary__priceTitle">shipping</p>
          <p className="summary__priceValue">$ 50</p>
        </div>
        <div className="u-flexBetween summary__price">
          <p className="summary__priceTitle">vat(included)</p>
          <p className="summary__priceValue">$ 5,396</p>
        </div>
        <div className="u-flexBetween summary__price">
          <p className="summary__priceTitle">grand total</p>
          <p className="summary__priceValue">{`$ ${total + 50 + 5396}`}</p>
        </div>
      </div>
      <Button
        type={"primary"}
        label={"continue & pay"}
        onClick={handlePayment}
      />
    </div>
  );
};

export default Summary;
