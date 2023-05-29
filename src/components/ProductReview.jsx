import React from "react";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";
const ProductReview = ({ dir, description, isNew, name, image, slug }) => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate(`${slug}`);
  };
  return (
    <article className={`productReview productReview--${dir}`}>
      {dir === "right" && (
        <div className="productReview__imageContainer">
          <img src={image.desktop} alt="" className="productReview__image" />
        </div>
      )}
      <div className="productReview__textBox">
        {isNew && <p className="text--overline">new product</p>}
        <h2 className="heading--2">{name}</h2>
        <p className="body">{description}</p>
        <Button
          type={"primary"}
          label={"see product"}
          onClick={handleSeeProduct}
        />
      </div>
      {dir === "left" && (
        <div className="">
          <img src={image.desktop} alt="" className="productReview__image" />
        </div>
      )}
    </article>
  );
};

export default ProductReview;
