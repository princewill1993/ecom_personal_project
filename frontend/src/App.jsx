import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Homepage";
import MarketPlace from "./pages/MarketPlace";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetail from "./pages/protected/OrderDetail";

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

        <Route path="admin">
          <Route index element={<Admin />} />
          <Route path=":order_id" element={<OrderDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
