import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import UserDashboard from "../pages/client/UserDashboard";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/account" element={<UserDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Router;
