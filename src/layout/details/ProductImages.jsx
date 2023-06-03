import React from "react";

const ProductImages = ({ gallery }) => {
  return (
    <div className="productDetail__images">
      <picture className="productDetail__picture--1">
        <source srcSet={gallery.first.mobile} media="(max-width: 600px)" />
        <source srcSet={gallery.first.tablet} media="(max-width: 900px)" />
        <img
          src={gallery.first.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--2">
        <source srcSet={gallery.second.mobile} media="(max-width: 600px)" />
        <source srcSet={gallery.second.tablet} media="(max-width: 900px)" />
        <img
          src={gallery.second.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--3">
        <source srcSet={gallery.third.mobile} media="(max-width: 600px)" />
        <source srcSet={gallery.third.tablet} media="(max-width: 900px)" />
        <img
          src={gallery.third.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
    </div>
  );
};

export default ProductImages;
