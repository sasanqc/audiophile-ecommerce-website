import React from "react";
import Button from "../../components/UI/Button";
const Eearphones = () => {
  return (
    <section className="earphones">
      <img
        src="/images/home/desktop/image-earphones-yx1.jpg"
        alt="earphone smaple product"
        className="earphones__image"
      />
      <div className="earphones__seeMore">
        <h4 className="heading--4">YX1 EARPHONES</h4>
        <Button type={"outline"} label={"see product"} />
      </div>
    </section>
  );
};

export default React.memo(Eearphones);
