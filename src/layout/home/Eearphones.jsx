import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
const Eearphones = () => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate("/earphones/yx1-earphones");
  };
  return (
    <section className="earphones">
      <div className="earphones__imageContainer">
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/home/mobile/image-earphones-yx1.jpg`}
            media="(max-width: 600px)"
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/home/tablet/image-earphones-yx1.jpg`}
            media="(max-width: 900px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-earphones-yx1.jpg`}
            alt="earphone smaple product"
            className="earphones__image"
          />
        </picture>
      </div>

      <div className="earphones__seeMore">
        <h4 className="heading--4">YX1 EARPHONES</h4>
        <Button
          type={"outline"}
          label={"see product"}
          onClick={handleSeeProduct}
        />
      </div>
    </section>
  );
};

export default React.memo(Eearphones);
