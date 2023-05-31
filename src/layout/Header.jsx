import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as ShopIcon } from "../assets/icons/icon-shop.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/icon-menu.svg";
import Navigation from "../components/Navigation";
import Modal from "../components/UI/Modal";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import { useStore } from "../store";
const Header = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [{ ui }, dispatch] = useStore();

  const handleClickCart = () => {
    if (ui.menuIsOpen) {
      document.querySelector("body").classList.toggle("unscrollable");
      dispatch("TOGGLE_MENU");
    }
    setShowCart((current) => !current);
  };

  const handleCheckoutClick = () => {
    setShowCart(false);
    navigate("/checkout");
  };

  const handleClickMenu = () => {
    document.querySelector("body").classList.toggle("unscrollable");
    dispatch("TOGGLE_MENU");
  };

  return (
    <header className="header">
      {showCart && (
        <Modal onBackdropClicked={() => setShowCart(false)}>
          <Cart onCheckoutClick={handleCheckoutClick} />
        </Modal>
      )}
      {ui.menuIsOpen && (
        <div className="header__menuBackdrop">
          <div className="header__menuContainer">
            <Categories />
          </div>
        </div>
      )}
      <div className="header__left">
        <MenuIcon className="header__menu" onClick={handleClickMenu} />
        <LogoIcon className="header__logo" />
      </div>

      <Navigation />
      <ShopIcon className="header__shopIcon" onClick={handleClickCart} />
    </header>
  );
};

export default Header;
