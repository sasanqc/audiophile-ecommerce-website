import React from "react";
import Categories from "../components/Categories";
import Hero from "../layout/home/Hero";
import SampleProduct from "../layout/home/SampleProduct";
import SecondSampleProduct from "../layout/home/SecondSampleProduct";
import Eearphones from "../layout/home/Eearphones";
import Feature from "../layout/home/Feature";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <main className="home">
      <Hero />
      <div className="pageContainer">
        <Categories />
        <SampleProduct />
        <SecondSampleProduct />
        <Eearphones />
      </div>

      <Feature />
      <Footer />
    </main>
  );
};

export default Home;
