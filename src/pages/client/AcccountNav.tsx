import React, { FC, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { LiaUserSolid } from "react-icons/lia";
import { TbCurrentLocation } from "react-icons/tb";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";

interface AccountNavProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const AcccountNav: FC<AccountNavProps> = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //   const handleLogout = async () => {
  //     try {
  //       const res = await logout();
  //       console.log(res);
  //       if (res?.data) {
  //         toast.success("Logout success");
  //         Cookies.remove("fc_token");
  //         router.push("/");
  //       }
  //       if (res?.error) {
  //         toast.error("Logout failed");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const menus = [
    {
      id: 1,
      name: "My Orders",
      path: "orders",
      icon: <CiBoxList />,
    },
    {
      id: 2,
      name: "Account Info",
      path: "account",
      icon: <LiaUserSolid />,
    },
    {
      id: 3,
      name: "Reset Password",
      path: "reset",
      icon: <TbCurrentLocation />,
    },
  ];

  return (
    <div className=" border-gray-200 bg-gray-100 md:bg-gray-50 md:w-[25%] md:p-5 md:py-2 flex md:flex-col flex-row items-center md:items-start justify-between">
      <div className="w-full flex flex-col text-sm">
        <div className="w-full flex items-center justify-between border-b border-gray-400 md:border-0 p-2">
          <h3 className="uppercase text-sm font-medium md:mb-5">My Account</h3>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg border border-gray-400 rounded-sm text-gray-600 hover:text-primary p-1.5 block md:hidden"
          >
            {isOpen ? <FaArrowDownShortWide /> : <FaArrowUpWideShort />}
          </button>
        </div>

        <div className={`${isOpen ? "block " : "hidden md:block"} w-full`}>
          <div
            className={`w-full flex flex-col items-center justify-center md:justify-start md:items-start`}
          >
            {menus.map((menu) => (
              <div
                key={menu.id}
                // onClick={() => { setIsOpen(!isOpen), setActive(menu.path) }}
                onClick={() => {
                  setActive(menu.path);
                }}
                className={`${
                  active === menu.path ? "text-primary" : ""
                } w-full border-b border-gray-200 py-5 cursor-pointer hover:text-primary transition-all duration-150 flex items-center gap-2 pl-2`}
              >
                <span className="text-base">{menu.icon}</span>
                {menu.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          //   onClick={handleLogout}
          className="hidden w-max font-medium text-primary hover:text-white hover:bg-primary transition-all duration-200 px-4 py-1 text-sm rounded-md md:flex items-center gap-1 border"
        >
          <BiLogOutCircle className="text-base mt-[3px]" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AcccountNav;
