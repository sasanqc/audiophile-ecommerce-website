import React from "react";
import Button from "../components/UI/Button";
import TextInput from "../components/UI/TextInput";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import RadioInput from "../components/UI/RadioInput";
const Checkout = () => {
  return (
    <div className="checkout">
      <Header />
      <a href="#home" className="body productDetail__goBack">
        Go Back
      </a>
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
            <RadioInput label={"e-Money"} onClick={() => {}} value={false} />
            <RadioInput label={"e-Money"} onClick={() => {}} value={false} />
            <TextInput
              type={"text"}
              name={"country"}
              label={"Country"}
              placeholder={"United States"}
            />
            <TextInput
              type={"text"}
              name={"country"}
              label={"Country"}
              placeholder={"United States"}
            />
          </div>
        </form>

        <div className="summary">
          <h6 className="heading--6">summary</h6>
          <ul className="summary__list">
            <li className="summary__item">
              <div className="summary__product">
                <img
                  src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
                  alt="summary item"
                  className="summary__image"
                />
                <div className="summary__textBox">
                  <p className="body">XX99 MK II</p>
                  <p className="body">x1</p>
                  <p className="body">$ 2,999</p>
                </div>
              </div>
            </li>
            <li className="summary__item">
              <div className="summary__product">
                <img
                  src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
                  alt=""
                  className="summary__image"
                />
                <div className="summary__textBox">
                  <p className="body">XX99 MK II</p>
                  <p className="body">x1</p>
                  <p className="body">$ 2,999</p>
                </div>
              </div>
            </li>
            <li className="summary__item">
              <div className="summary__product">
                <img
                  src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
                  alt=""
                  className="summary__image"
                />
                <div className="summary__textBox">
                  <p className="body">XX99 MK II</p>
                  <p className="body">x1</p>
                  <p className="body">$ 2,999</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="summary__prices">
            <div className="summary__price">
              <p className="summary__priceTitle">total</p>
              <p className="summary__priceValue">$ 5,396</p>
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
              <p className="summary__priceValue">$ 5,396</p>
            </div>
          </div>
          <Button type={"primary"} label={"continue & pay"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
