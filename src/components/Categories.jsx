import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const items = [
    {
      name: "headphones",
      image: {
        desktop:
          "/assets/shared/desktop/image-category-thumbnail-headphones.png",
        tablet: "/assets/shared/tablet/image-category-thumbnail-headphones.png",
        mobile: "/assets/shared/mobile/image-category-thumbnail-headphones.png",
      },
    },
    {
      name: "speakers",
      image: {
        desktop: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
        tablet: "/assets/shared/tablet/image-category-thumbnail-speakers.png",
        mobile: "/assets/shared/mobile/image-category-thumbnail-speakers.png",
      },
    },
    {
      name: "earphones",
      image: {
        desktop:
          "/assets/shared/desktop/image-category-thumbnail-earphones.png",
        tablet: "/assets/shared/tablet/image-category-thumbnail-earphones.png",
        mobile: "/assets/shared/mobile/image-category-thumbnail-earphones.png",
      },
    },
  ];
  return (
    <section className="categories">
      <ul className="u-flexBetween categories__list">
        {items.map((item, index) => (
          <li className="categories__item" key={index}>
            <CategoryCard name={item.name} image={item.image.desktop} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Categories);
