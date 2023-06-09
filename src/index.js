import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import configureStore from "./store/app";
configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/audiophile-ecommerce-website">
    <>
      <ScrollToTop />
      <App />
    </>
  </BrowserRouter>
);
