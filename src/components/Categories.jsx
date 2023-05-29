import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const items = [
    {
      name: "headphones",
      image: "/images/home/desktop/image-category-thumbnail-headphones.png",
    },
    {
      name: "speakers",
      image: "/images/home/desktop/image-category-thumbnail-speakers.png",
    },
    {
      name: "earphones",
      image: "/images/home/desktop/image-category-thumbnail-earphones.png",
    },
  ];
  return (
    <section className="categories">
      <ul className="categories__list">
        {items.map((item, index) => (
          <li className="categories__item">
            <CategoryCard name={item.name} image={item.image} key={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Categories);
