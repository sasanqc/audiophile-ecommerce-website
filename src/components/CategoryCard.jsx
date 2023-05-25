import React from "react";
import Button from "./UI/Button";
const CategoryCard = ({ name, image }) => {
  return (
    <div className="categoryCard">
      <img src={image} alt="" className="categoryCard__image" />
      <h6 className="heading--6">{name}</h6>
      <Button type={"noborder"} label={"shop"} />
    </div>
  );
};

export default CategoryCard;
