import React from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as ShopIcon } from "../assets/icons/icon-shop.svg";
import Navigation from "../components/Navigation";
const Header = () => {
  return (
    <header className="header">
      <LogoIcon className="header__logo" />
      <Navigation />
      <ShopIcon className="header__shopIcon" />
    </header>
  );
};

export default Header;
