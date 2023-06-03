import React from "react";
import ProductDescription from "../layout/details/ProductDescription";
import ProductFeatures from "../layout/details/ProductFeatures";
import YouMayLike from "../components/YouMayLike";
import ProductImages from "../layout/details/ProductImages";
import Categories from "../components/Categories";
import { NavLink, useParams } from "react-router-dom";
import AppShell from "../layout/AppShell";
import data from "../data.json";
const ProductDetail = () => {
  const params = useParams();
  const product = data.find((el) => el.slug === params.slug);
  console.log(product);
  return (
    <AppShell className={"productDetail"}>
      <div className="pageContainer">
        <NavLink to={-1} className="body productDetail__goBack">
          Go Back
        </NavLink>
        <ProductDescription
          name={product.name}
          description={product.description}
          isNew={product.new}
          price={product.price}
          image={product.image}
          slug={product.slug}
        />
        <ProductFeatures
          features={product.features}
          includes={product.includes}
        />
        <ProductImages gallery={product.gallery} />
        <YouMayLike others={product.others} />
        <Categories />
      </div>
    </AppShell>
  );
};

export default ProductDetail;
