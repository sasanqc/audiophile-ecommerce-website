import React from "react";
import Header from "../layout/Header";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import YouMayLike from "../components/YouMayLike";
import ProductImages from "../components/ProductImages";
import Categories from "../components/Categories";
import Feature from "../layout/home/Feature";
import Footer from "../layout/Footer";
const ProductDetail = () => {
  return (
    <main className="productDetail">
      <Header />
      <a href="#home" className="body productDetail__goBack">
        Go Back
      </a>
      <ProductDescription />
      <ProductFeatures />
      <ProductImages />
      <YouMayLike />
      <Categories />
      <Feature />
      <Footer />
    </main>
  );
};

export default ProductDetail;
