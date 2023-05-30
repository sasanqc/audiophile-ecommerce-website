import React from "react";

const ProductImages = ({ gallery }) => {
  return (
    <div className="productDetail__images">
      <img
        src={gallery.first.desktop}
        alt=""
        className="productDetail__image productDetail__image--1"
      />
      <img
        src={gallery.second.desktop}
        alt=""
        className="productDetail__image productDetail__image--2"
      />
      <img
        src={gallery.third.desktop}
        alt=""
        className="productDetail__image productDetail__image--3"
      />
    </div>
  );
};

export default ProductImages;
