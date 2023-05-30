import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as ShopIcon } from "../assets/icons/icon-shop.svg";
import Navigation from "../components/Navigation";
import Modal from "../components/UI/Modal";
import Cart from "../components/Cart";
const Header = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const handleClickCart = () => {
    setShowCart((current) => !current);
  };
  const handleCheckoutClick = () => {
    setShowCart(false);
    navigate("/checkout");
  };
  return (
    <header className="header">
      {showCart && (
        <Modal onBackdropClicked={() => setShowCart(false)}>
          <Cart onCheckoutClick={handleCheckoutClick} />
        </Modal>
      )}
      <LogoIcon className="header__logo" />
      <Navigation />
      <ShopIcon className="header__shopIcon" onClick={handleClickCart} />
    </header>
  );
};

export default Header;
