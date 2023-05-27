import React from "react";
import Button from "../../components/UI/Button";
import Header from "../../layout/Header";
const Hero = () => {
  return (
    <div className="home__hero">
      <Header />
      <section className="hero">
        <div className="hero__textBox">
          <p className="text--overline">new product</p>
          <h1 className="heading--1">XX99 Mark II Headphones</h1>
          <p className="body">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button type={"primary"} label={"see product"} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
