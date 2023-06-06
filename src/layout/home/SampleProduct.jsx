import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
const SampleProduct = () => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate("/speakers/zx9-speaker");
  };
  return (
    <section className="sampleProduct">
      <div className="sampleProduct__imageContainer">
        <img
          src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx9.png`}
          alt="sample product"
          className="sampleProduct__image"
        />
      </div>

      <div className="sampleProduct__textBox">
        <h1 className="heading--1">ZX9 SPEAKER</h1>
        <p className="body">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          type={"dark"}
          label={"see product"}
          onClick={handleSeeProduct}
        />
      </div>
    </section>
  );
};

export default React.memo(SampleProduct);
