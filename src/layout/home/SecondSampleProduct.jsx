import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
const SecondSampleProduct = () => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate("/speakers/zx7-speaker");
  };
  return (
    <section className="secondSampleProduct">
      <h2 className="heading--4">ZX7 SPEAKER</h2>
      <Button
        type={"outline"}
        label={"see product"}
        onClick={handleSeeProduct}
      />
    </section>
  );
};

export default React.memo(SecondSampleProduct);
