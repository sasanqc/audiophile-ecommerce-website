import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";

const Hero = () => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate("/headphones/xx99-mark-two-headphones");
  };
  return (
    <section className="hero">
      <div className="hero__textBox">
        <p className="text--overline">new product</p>
        <h1 className="heading--1">XX99 Mark II Headphones</h1>
        <p className="body">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          type={"primary"}
          label={"see product"}
          onClick={handleSeeProduct}
        />
      </div>
    </section>
  );
};

export default Hero;
