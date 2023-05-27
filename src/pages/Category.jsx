import React from "react";
import Header from "../layout/Header";
import ProductReview from "../components/ProductReview";
import Categories from "../components/Categories";
import Feature from "../layout/home/Feature";
import Footer from "../layout/Footer";
const Category = () => {
  return (
    <main className="category">
      <Header />
      <h2 className="heading--2 category__title">speakers</h2>
      <ProductReview dir={"left"} />
      <ProductReview dir={"right"} />
      <ProductReview dir={"left"} />
      <Categories />
      <Feature />
      <Footer />
    </main>
  );
};

export default Category;
