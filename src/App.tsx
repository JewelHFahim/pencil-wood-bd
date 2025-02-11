import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import NavContainer from "./components/shared/navs/NavContainer";

const App = () => {
  return (
    <div>
      <NavContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
