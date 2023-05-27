import React from "react";
import Button from "../../components/UI/Button";
const SampleProduct = () => {
  return (
    <section className="sampleProduct">
      <img
        src="/images/home/desktop/image-speaker-zx9.png"
        alt="sample product"
        className="sampleProduct__image"
      />
      <div className="sampleProduct__textBox">
        <h1 className="heading--1">ZX9 SPEAKER</h1>
        <p className="body">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button type={"dark"} label={"see product"} />
      </div>
    </section>
  );
};

export default React.memo(SampleProduct);
