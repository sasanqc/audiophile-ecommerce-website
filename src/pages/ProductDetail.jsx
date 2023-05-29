import React from "react";
import Header from "../layout/Header";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import YouMayLike from "../components/YouMayLike";
import ProductImages from "../components/ProductImages";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import AppShell from "../layout/AppShell";
import data from "../data.json";
const ProductDetail = () => {
  const params = useParams();
  const product = data.find((el) => el.slug === params.slug);
  console.log(product);
  return (
    <AppShell className={"productDetail"}>
      <div className="pageContainer">
        <a href="#home" className="body productDetail__goBack">
          Go Back
        </a>
        <ProductDescription
          name={product.name}
          description={product.description}
          isNew={product.new}
          price={product.price}
          image={product.image}
        />
        <ProductFeatures />
        <ProductImages />
        <YouMayLike />
        <Categories />
      </div>
    </AppShell>
  );
};

export default ProductDetail;
