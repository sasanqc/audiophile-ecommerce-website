import React from "react";
import Categories from "../components/Categories";
import Hero from "../layout/home/Hero";
import SampleProduct from "../layout/home/SampleProduct";
import SecondSampleProduct from "../layout/home/SecondSampleProduct";
import Eearphones from "../layout/home/Eearphones";
import AppShell from "../layout/AppShell";
const Home = () => {
  return (
    <AppShell className={"home"}>
      <Hero />
      <div className="pageContainer">
        <Categories />
        <SampleProduct />
        <SecondSampleProduct />
        <Eearphones />
      </div>
    </AppShell>
  );
};

export default Home;
