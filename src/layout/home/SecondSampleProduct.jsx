import React from "react";
import Button from "../../components/UI/Button";
const SecondSampleProduct = () => {
  return (
    <section className="secondSampleProduct">
      <h2 className="heading--4">ZX7 SPEAKER</h2>
      <Button type={"outline"} label={"see product"} />
    </section>
  );
};

export default React.memo(SecondSampleProduct);
