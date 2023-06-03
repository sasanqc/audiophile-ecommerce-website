import React, { Fragment, useState } from "react";
import TextInput from "../components/UI/TextInput";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import RadioInput from "../components/UI/RadioInput";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";
import Modal from "../components/UI/Modal";
import OrderModal from "../components/OrderModal";
import { ReactComponent as CashIcon } from "../assets/icons/icon-cash-on-delivery.svg";
import Summary from "../components/Summary";
const Checkout = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [inputOnError, setError] = useState({});
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
  const handleChange = (name, value) => {
    if (name === "email" && !value.includes("@") && value.length > 0) {
      setError({ ...inputOnError, email: true });
      return;
    }
    if (name === "email" && value.includes("@") && value.length > 2) {
      setError({ ...inputOnError, email: false });
      return;
    }
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
                error={inputOnError?.email}
                onChange={handleChange}
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
                value={paymentMethod === "e-money"}
              />
              <RadioInput
                label={"Cash on Delivery"}
                onClick={() => {
                  setPaymentMethod("cash-on-delivery");
                }}
                value={paymentMethod === "cash-on-delivery"}
              />
              {paymentMethod === "e-money" && (
                <Fragment>
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
                </Fragment>
              )}
              {paymentMethod === "cash-on-delivery" && (
                <div className="checkout__cashOnDelivery">
                  <div className="">
                    <CashIcon className="checkout__cashIcon" />
                  </div>

                  <p className="body">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </form>
          <Summary
            total={total}
            items={convertedCart}
            handlePayment={handlePayment}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Checkout;
