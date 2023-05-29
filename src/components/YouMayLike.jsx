import React from "react";
import Button from "./UI/Button";
const YouMayLike = () => {
  return (
    <article className="youMayLike">
      <div className="youMayLike__item">
        <div className="youMayLike__imageContainer">
          <img
            src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
            alt=""
            className="youMayLike__image"
          />
        </div>

        <h5 className="heading--5">XX99 MARK I</h5>
        <Button label={"see product"} type={"primary"} />
      </div>

      <div className="youMayLike__item">
        <img
          src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
          alt=""
          className="youMayLike__image"
        />
        <h5 className="heading--5">XX99 MARK I</h5>
        <Button label={"see product"} type={"primary"} />
      </div>

      <div className="youMayLike__item">
        <img
          src="/images/details/desktop/image-xx99-mark-one-headphones.jpg"
          alt=""
          className="youMayLike__image"
        />
        <h5 className="heading--5">XX99 MARK I</h5>
        <Button label={"see product"} type={"primary"} />
      </div>
    </article>
  );
};

export default YouMayLike;
