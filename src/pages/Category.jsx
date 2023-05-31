import React from "react";

import ProductReview from "../components/ProductReview";
import Categories from "../components/Categories";

import AppShell from "../layout/AppShell";
const Category = ({ data, title }) => {
  console.log(data);
  return (
    <AppShell className={"category"}>
      <h2 className="heading--2 category__title">{title}</h2>
      <div className="pageContainer">
        {data.map((el, index) => (
          <ProductReview
            dir={index % 2 === 0 ? "left" : "right"}
            isNew={el.new}
            name={el.name}
            description={el.description}
            image={el.categoryImage}
            slug={el.slug}
          />
        ))}

        <Categories />
      </div>
    </AppShell>
  );
};

export default Category;
