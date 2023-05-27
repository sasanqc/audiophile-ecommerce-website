import React from "react";
import Button from "./UI/Button";

const ProductReview = ({ dir }) => {
  return (
    <article className={`productReview productReview--${dir}`}>
      {dir === "right" && (
        <img
          src="/images/category/desktop/image-category-page-preview.jpg"
          alt=""
          className="productReview__image"
        />
      )}
      <div className="productReview__textBox">
        <p className="text--overline">new product</p>
        <h2 className="heading--2">XX99 Mark II Headphones</h2>
        <p className="body">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Button type={"primary"} label={"see product"} />
      </div>
      {dir === "left" && (
        <img
          src="/images/category/desktop/image-category-page-preview.jpg"
          alt=""
          className="productReview__image"
        />
      )}
    </article>
  );
};

export default ProductReview;
