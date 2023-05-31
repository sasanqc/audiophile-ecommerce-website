import React from "react";

const ProductImages = ({ gallery }) => {
  return (
    <div className="productDetail__images">
      <picture className="productDetail__picture--1">
        <source srcset={gallery.first.mobile} media="(max-width: 600px)" />
        <source srcset={gallery.first.tablet} media="(max-width: 900px)" />
        <img
          src={gallery.first.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--2">
        <source srcset={gallery.second.mobile} media="(max-width: 600px)" />
        <source srcset={gallery.second.tablet} media="(max-width: 900px)" />
        <img
          src={gallery.second.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--3">
        <source srcset={gallery.third.mobile} media="(max-width: 600px)" />
        <source srcset={gallery.third.tablet} media="(max-width: 900px)" />
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
