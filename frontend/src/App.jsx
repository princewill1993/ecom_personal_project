import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="products">
          <Route index element={<MarketPlace />} />
          <Route path=":product_id" element={<ProductDetails />} />
        </Route>

        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
