import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const items = [
    {
      name: "headphones",
      image: {
        desktop:
          "/images/shared/desktop/image-category-thumbnail-headphones.png",
        tablet: "/images/shared/tablet/image-category-thumbnail-headphones.png",
        mobile: "/images/shared/mobile/image-category-thumbnail-headphones.png",
      },
    },
    {
      name: "speakers",
      image: {
        desktop: "/images/shared/desktop/image-category-thumbnail-speakers.png",
        tablet: "/images/shared/tablet/image-category-thumbnail-speakers.png",
        mobile: "/images/shared/mobile/image-category-thumbnail-speakers.png",
      },
    },
    {
      name: "earphones",
      image: {
        desktop:
          "/images/shared/desktop/image-category-thumbnail-earphones.png",
        tablet: "/images/shared/tablet/image-category-thumbnail-earphones.png",
        mobile: "/images/shared/mobile/image-category-thumbnail-earphones.png",
      },
    },
  ];
  return (
    <section className="categories">
      <ul className="categories__list">
        {items.map((item, index) => (
          <li className="categories__item">
            <CategoryCard
              name={item.name}
              image={item.image.desktop}
              key={index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Categories);
