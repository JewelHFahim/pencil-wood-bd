import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
