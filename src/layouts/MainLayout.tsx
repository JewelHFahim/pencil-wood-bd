import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <h1>Welcome to My App</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
