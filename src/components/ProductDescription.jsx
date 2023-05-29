import React from "react";
import NumberInput from "./UI/NumberInput";
import Button from "./UI/Button";
const ProductDescription = () => {
  return (
    <article className="productDescription">
      <img
        src="/images/category/desktop/image-category-page-preview.jpg"
        alt=""
        className="productDescription__image"
      />
      <div className="productDescription__textBox">
        <p className="text--overline">NEW PRODUCT</p>
        <h2 className="heading--2">XX99 Mark II Headphones</h2>
        <p className="body">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <h6 className="heading--6">$ 1,750</h6>
        <div className="productDescription__actions">
          <NumberInput onChange={() => {}} initial={10} />
          <Button type={"primary"} label={"add to card"} />
        </div>
      </div>
    </article>
  );
};

export default ProductDescription;
