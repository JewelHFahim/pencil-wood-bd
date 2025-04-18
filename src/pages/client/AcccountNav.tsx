import React, { FC, useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { LiaUserSolid } from "react-icons/lia";
import { TbCurrentLocation } from "react-icons/tb";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { MdOutlineLocationOn } from "react-icons/md";

interface AccountNavProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const AcccountNav: FC<AccountNavProps> = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [active]);

  const handleLogout = async () => {
    try {
      toast.success("Logout success");
      Cookies.remove("pencil");
      navigate("/account/login");
    } catch (error) {
      console.log(error);
    }
  };

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
      name: "Address",
      path: "address",
      icon: <MdOutlineLocationOn />
      ,
    },
    {
      id: 4,
      name: "Reset Password",
      path: "reset",
      icon: <TbCurrentLocation />,
    },
  ];

  return (
    <div className=" border-gray-200 bg-orange-200 md:w-[25%] md:p-5 md:py-2 flex md:flex-col flex-row items-center md:items-start justify-between">
      <div className="w-full flex flex-col text-sm">
        <div className="w-full flex items-center justify-between border-b border-gray-400 md:border-0 p-2">
          <h3 className="uppercase text-sm font-medium md:mb-5">My Account</h3>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg border border-gray-400 rounded-sm text-gray-950 hover:text-primary p-1.5 block md:hidden"
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
                className={` 
                   ${active === menu.path ? "font-medium text-orange-600" : ""} 

                  w-full border-b border-orange-300 py-5 cursor-pointer hover:text-orange-600 text-black transition-all duration-150 flex items-center gap-2 pl-2`}
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
          onClick={handleLogout}
          className="hidden w-max font-medium hover:text-primary text-gray-950 transition-all duration-200 px-4 py-1 text-sm rounded-md md:flex items-center gap-1 border cursor-pointer"
        >
          <BiLogOutCircle className="text-base mt-[3px]" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AcccountNav;
