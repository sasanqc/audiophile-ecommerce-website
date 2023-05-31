import React from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/icon-instagram.svg";
import Navigation from "../components/Navigation";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <LogoIcon className="header__logo" />
        <Navigation />
      </div>
      <div className="footer__about">
        <p className="body">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer__socialIcons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="footer__copyright">
        <p className="body">Copyright 2021. All Rights Reserved</p>
        <div className="footer__socialIcons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
