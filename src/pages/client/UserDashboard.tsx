import { useState } from "react";
import AcccountNav from "./AcccountNav";
import Orders from "./Orders";
import AccountInfo from "./AccountInfo";
import ResetPassword from "./ResetPassword";
import OrderDetails from "./OrderDetails";
import Address from "./Address";

const UserDashboard = () => {
  const [active, setActive] = useState<string>("orders");
  const [orderId, setOrderId] = useState<number>(0);

  const renderComponent = () => {
    switch (active) {
      case "orders":
        return <Orders setActive={setActive} setOrderId={setOrderId} />;

      case "account":
        return <AccountInfo />;

      case "address":
        return <Address />;

      case "reset":
        return <ResetPassword />;

      case "invoice":
        return <OrderDetails id={orderId} />;

      default:
        return  <Orders setActive={setActive} setOrderId={setOrderId} />;
    }
  };

  return (
    <div className="my-5 w-full h-full flex flex-col md:flex-row gap-4 min-h-[calc(100vh-200px)]">
      <AcccountNav active={active} setActive={setActive} />

      <div className="md:w-[75%]">{renderComponent()}</div>
    </div>
  );
};

export default UserDashboard;
