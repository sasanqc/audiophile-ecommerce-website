import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { useStore } from "./store";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  const { products } = useStore()[0];
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      {["headphones", "speakers", "earphones"].map((cat) => (
        <>
          <Route
            path={`/${cat}`}
            element={
              <Category
                data={products.filter((el) => el.category === cat)}
                title={cat}
              />
            }
          />
          <Route path={`/${cat}/:slug`} element={<ProductDetail />} />
        </>
      ))}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
