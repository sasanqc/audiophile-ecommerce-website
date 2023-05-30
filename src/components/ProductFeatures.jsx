import React from "react";

const ProductFeatures = ({ features, includes = [] }) => {
  console.log(includes);
  return (
    <atricle className="productFeatures">
      <div className="productFeatures__features">
        <h2 className="heading--2">features</h2>
        <p className="body">{features}</p>
      </div>
      <div className="productFeatures__inTheBox">
        <h2 className="heading--2">in the box</h2>
        <ul className="productFeatures__list">
          {includes.map((el, index) => (
            <li className="productFeatures__item" key={index}>
              <span> {`${el.quantity}x`}</span>
              <p className="body">{el.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </atricle>
  );
};

export default ProductFeatures;
