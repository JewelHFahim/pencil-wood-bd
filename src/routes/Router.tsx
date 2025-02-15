import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
