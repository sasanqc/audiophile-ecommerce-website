import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { useStore } from "./store";
import AppShell from "./layout/AppShell";
import Loading from "./components/UI/Loading";

const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Checkout = lazy(() => import("./pages/Checkout"));
const LoadingFallback = () => (
  <AppShell className={"home"}>
    <Loading />
  </AppShell>
);
function App() {
  const { products } = useStore()[0];
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {["headphones", "speakers", "earphones"].map((cat, index) => (
          <Fragment key={index}>
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
          </Fragment>
        ))}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
