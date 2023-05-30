import React from "react";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

const YouMayLike = ({ others = [] }) => {
  const { products } = useStore()[0];
  const navigate = useNavigate();
  const handleClick = (slug) => {
    const product = products.find((el) => el.slug === slug);
    navigate(`/${product.category}/${slug}`);
  };
  return (
    <article className="youMayLike">
      {others.map((el) => (
        <div className="youMayLike__item" key={el.slug}>
          <div className="youMayLike__imageContainer">
            <img src={el.image.desktop} alt="" className="youMayLike__image" />
          </div>

          <h5 className="heading--5">{el.name}</h5>
          <Button
            label={"see product"}
            type={"primary"}
            onClick={() => handleClick(el.slug)}
          />
        </div>
      ))}
    </article>
  );
};

export default YouMayLike;
