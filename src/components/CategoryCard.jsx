import React from "react";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name}`);
  };
  return (
    <div className="categoryCard">
      <img src={image} alt="" className="categoryCard__image" />
      <h6 className="heading--6">{name}</h6>
      <Button type={"noborder"} label={"shop"} onClick={handleClick} />
    </div>
  );
};

export default CategoryCard;
