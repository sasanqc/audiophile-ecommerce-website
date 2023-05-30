import React, { useRef } from "react";
import NumberInput from "./UI/NumberInput";
import Button from "./UI/Button";
import { useStore } from "../store";
const ProductDescription = ({
  description,
  isNew,
  price,
  name,
  image,
  slug,
}) => {
  const inputRef = useRef();
  const dispatch = useStore(false)[1];
  const onAddToCard = () => {
    dispatch("ADD_CART", { quantity: inputRef.current.get(), slug });
  };
  
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
          <NumberInput onChange={() => {}} initial={1} ref={inputRef} />
          <Button
            type={"primary"}
            label={"add to card"}
            onClick={onAddToCard}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductDescription;
