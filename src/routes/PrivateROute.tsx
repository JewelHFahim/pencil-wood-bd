import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const token = Cookies.get("pencil");
  return token ? <Outlet /> : <Navigate to="/account/login" replace />;
};

export default PrivateRoute;
