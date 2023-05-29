import React from "react";
import { NavLink } from "react-router-dom";
const navLinks = [
  { path: "/home", label: "Home" },
  { path: "/headphones", label: "headphones" },
  { path: "/speakers", label: "speakers" },
  { path: "/earphones", label: "earphones" },
];
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navLinks.map((item, index) => (
          <li className="navigation__item" key={index}>
            <NavLink to={item.path} className="navigation__link">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
