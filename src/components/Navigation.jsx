import React from "react";
const navLinks = [
  { path: "home", label: "Home" },
  { path: "headphones", label: "headphones" },
  { path: "speakers", label: "speakers" },
  { path: "earphones", label: "earphones" },
];
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navLinks.map((item) => (
          <li className="navigation__item">
            <a href={item.path} className="navigation__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
