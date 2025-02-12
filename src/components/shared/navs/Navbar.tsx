import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Contact", path: "javascript:void(0)" },
    { title: "Porducts", path: "javascript:void(0)" },
  ];

  return (
    <div className="shadow py-2">
      <div className="sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="w-max flex flex-col justify-center md:items-center">
          <Link to="/" className="text-xl font-bold text-primary w-max">
            PencilwoodBD
          </Link>
          <p className="text-sm font-light text-gray-400 md:tracking-[3px] w-max">
            Trend of Fashion
          </p>
        </div>

        {/* Menus */}
        <div className="w-full hidden md:block">
          <ul className="justify-center font-medium items-center flex space-x-2 md:space-x-6">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-max">
          <div className="flex justify-end items-center gap-5 text-gray-600">
            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <button className="text-2xl md:text-xl">
                <IoSearch />
              </button>
            </div>

            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <Link to="/account" className="text-[22px] md:text-xl">
                <FaRegUser />
              </Link>
            </div>

            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out relative cursor-pointer">
              <Link to="/cart" className="text-2xl md:text-xl">
                <RiShoppingBagLine />
              </Link>

              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                0
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <MobileMenu toggleDrawer={toggleDrawer} isOpen={isOpen} />
        </div>
      </div>

      {/* {isOpen && <Search isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </div>
  );
};

export default Navbar;
