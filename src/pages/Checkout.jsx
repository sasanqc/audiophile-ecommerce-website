import React, { useState } from "react";
import Button from "../components/UI/Button";
import TextInput from "../components/UI/TextInput";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import RadioInput from "../components/UI/RadioInput";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";
import Modal from "../components/UI/Modal";
import OrderModal from "../components/OrderModal";

const Checkout = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [paymentMehtod, setPaymentMethod] = useState("e-money");
  const { cart, products } = useStore()[0];

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
  const handlePayment = () => {
    if (cart.length === 0) {
      return;
    }
    setShowOrderModal(true);
  };
  return (
    <main className="checkout">
      {showOrderModal && (
        <Modal onBackdropClicked={() => setShowOrderModal(false)}>
          <OrderModal />
        </Modal>
      )}
      <Header />
      <div className="pageContainer">
        <NavLink to={-1} className="body productDetail__goBack">
          Go Back
        </NavLink>
        <div className="checkout__content">
          <form action="" className="checkout__form">
            <h3 className="heading--3">checkout</h3>
            <p className="text--subtitle">biling details</p>
            <div className="checkout__billing">
              <TextInput
                type={"text"}
                name={"name"}
                label={"Name"}
                placeholder={"Alexei Ward"}
              />
              <TextInput
                type={"text"}
                name={"email"}
                label={"Email Address"}
                placeholder={"alexei@mail.com"}
              />
              <TextInput
                type={"text"}
                name={"phone"}
                label={"Phone Number"}
                placeholder={"+1 202-255-0136"}
              />
            </div>
            <p className="text--subtitle">shipping info</p>
            <div className="checkout__shipping">
              <TextInput
                type={"text"}
                name={"address"}
                label={"Address"}
                placeholder={"1137 Wiliams Avenue"}
              />
              <TextInput
                type={"text"}
                name={"zipcode"}
                label={"ZIP Code"}
                placeholder={"10001"}
              />
              <TextInput
                type={"text"}
                name={"city"}
                label={"City"}
                placeholder={"New York"}
              />
              <TextInput
                type={"text"}
                name={"country"}
                label={"Country"}
                placeholder={"United States"}
              />
            </div>
            <p className="text--subtitle">payment details</p>

            <div className="checkout__payment">
              <p className="">Payment Method</p>
              <RadioInput
                label={"e-Money"}
                onClick={() => {
                  setPaymentMethod("e-money");
                }}
                value={paymentMehtod === "e-money"}
              />
              <RadioInput
                label={"Cash on Delivery"}
                onClick={() => {
                  setPaymentMethod("cash-on-delivery");
                }}
                value={paymentMehtod === "cash-on-delivery"}
              />
              <TextInput
                type={"text"}
                name={"e-money-number"}
                label={"e-Money Number"}
                placeholder={"238521993"}
              />
              <TextInput
                type={"text"}
                name={"e-money-pin"}
                label={"e-Money PIN"}
                placeholder={"6891"}
              />
            </div>
          </form>

          <div className="summary">
            <h6 className="heading--6">summary</h6>
            <ul className="summary__list">
              {convertedCart.map((el) => (
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
              <div className="summary__price">
                <p className="summary__priceTitle">total</p>
                <p className="summary__priceValue">{`$ ${total}`}</p>
              </div>
              <div className="summary__price">
                <p className="summary__priceTitle">shipping</p>
                <p className="summary__priceValue">$ 50</p>
              </div>
              <div className="summary__price">
                <p className="summary__priceTitle">vat(included)</p>
                <p className="summary__priceValue">$ 5,396</p>
              </div>
              <div className="summary__price">
                <p className="summary__priceTitle">grand total</p>
                <p className="summary__priceValue">{`$ ${
                  total + 50 + 5396
                }`}</p>
              </div>
            </div>
            <Button
              type={"primary"}
              label={"continue & pay"}
              onClick={handlePayment}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Checkout;
