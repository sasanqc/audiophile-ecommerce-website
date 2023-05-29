import React from "react";
import NumberInput from "./UI/NumberInput";
import Button from "./UI/Button";
const ProductDescription = ({ description, isNew, price, name, image }) => {
  console.log("dddd: ", image.desktop);
  return (
    <article className="productDescription">
      <div className="productDescription__imageContainer">
        <img
          src={image.desktop}
          alt="product description"
          className="productDescription__image"
        />
      </div>

      <div className="productDescription__textBox">
        {isNew && <p className="text--overline">NEW PRODUCT</p>}
        <h2 className="heading--2">{name}</h2>
        <p className="body">{description}</p>
        <h6 className="heading--6">{`$ ${price}`} </h6>
        <div className="productDescription__actions">
          <NumberInput onChange={() => {}} initial={0} />
          <Button type={"primary"} label={"add to card"} />
        </div>
      </div>
    </article>
  );
};

export default ProductDescription;
