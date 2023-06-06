import React from "react";

const ProductImages = ({ gallery }) => {
  return (
    <div className="productDetail__images">
      <picture className="productDetail__picture--1">
        <source
          srcSet={process.env.PUBLIC_URL + gallery.first.mobile}
          media="(max-width: 600px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + gallery.first.tablet}
          media="(max-width: 900px)"
        />
        <img
          src={process.env.PUBLIC_URL + gallery.first.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--2">
        <source
          srcSet={process.env.PUBLIC_URL + gallery.second.mobile}
          media="(max-width: 600px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + gallery.second.tablet}
          media="(max-width: 900px)"
        />
        <img
          src={process.env.PUBLIC_URL + gallery.second.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
      <picture className="productDetail__picture--3">
        <source
          srcSet={process.env.PUBLIC_URL + gallery.third.mobile}
          media="(max-width: 600px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + gallery.third.tablet}
          media="(max-width: 900px)"
        />
        <img
          src={process.env.PUBLIC_URL + gallery.third.desktop}
          alt="product gallery"
          className="productDetail__image"
        />
      </picture>
    </div>
  );
};

export default ProductImages;
