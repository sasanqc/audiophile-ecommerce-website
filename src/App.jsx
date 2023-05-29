import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import data from "./data.json";
import ProductDetail from "./pages/ProductDetail";
function App() {
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
                data={data.filter((el) => el.category === cat)}
                title={cat}
              />
            }
          />
          <Route path={`/${cat}/:slug`} element={<ProductDetail />} />
        </>
      ))}
    </Routes>
  );
}

export default App;
