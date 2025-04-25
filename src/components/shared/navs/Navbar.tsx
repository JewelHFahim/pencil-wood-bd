import { useSiteContentQuery } from "../../../redux/features/site/siteApis";
import { navigation } from "../../../utils/menus";
import { Link, useLocation } from "react-router";
import CartSlider from "../../cart/CartSlider";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Cookies from "js-cookie";

const Navbar = () => {
  const { pathname } = useLocation();
  const token = Cookies.get("pencil");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const { data: siteContent } = useSiteContentQuery();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawerCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  useEffect(() => {
    setIsOpenSearch(false);
  }, [pathname]);

  return (
    <div className="shadow py-2">
      <div className="sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="w-max h-[60px] md:h-[70px] flex flex-col">
          <Link
            to="/"
            className="text-xl font-bold text-primary w-[120px] md:w-[150px]"
          >
            <img
              src={
                siteContent?.data?.secondary_logo
                  ? siteContent?.data?.secondary_logo
                  : "/logo dark.png"
              }
              alt="Pencilwood"
            />
          </Link>
          <p className="text-xs font-light text-gray-400 md:tracking-[3px] w-max">
            {siteContent?.data?.site_slogan}
          </p>
        </div>

        {/* Menus */}
        <div className="w-full hidden md:block">
          <ul className="justify-center font-medium items-center flex space-x-2 md:space-x-6">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-primary">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-max">
          <div className="flex justify-end items-center gap-5 text-gray-600">
            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <button
                onClick={() => setIsOpenSearch(!isOpenSearch)}
                className="text-2xl md:text-xl cursor-pointer"
              >
                <IoSearch />
              </button>
            </div>

            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              { token ?
                <Link to="/account" className="text-[22px] md:text-xl">
                  <FaRegUser />
                </Link>
                :
                <Link to="/account/login" className="text-[22px] md:text-xl">
                  <FaRegUser />
                </Link>
              }
            </div>

            <CartSlider
              isOpenCart={isOpenCart}
              toggleDrawerCart={toggleDrawerCart}
            />
          </div>
        </div>

        <div className="block md:hidden">
          <MobileMenu toggleDrawer={toggleDrawer} isOpen={isOpen} />
        </div>
      </div>

      {isOpenSearch &&
        !pathname.startsWith("/products/") &&
        pathname !== "/products" && (
          <SearchBar
            isOpenSearch={isOpenSearch}
            setIsOpenSearch={setIsOpenSearch}
          />
        )}
    </div>
  );
};

export default Navbar;
