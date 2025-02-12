import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import NavContainer from "./components/shared/navs/NavContainer";

const App = () => {
  return (
    <div>
      <NavContainer />
      <div className="sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto px-4 md:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
