import { GiHamburgerMenu } from "react-icons/gi";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { navigation } from "../../../utils/menus";
import { useSiteContentQuery } from "../../../redux/features/site/siteApis";

interface MobileMenuProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleDrawer }) => {
  const { data: siteContent } = useSiteContentQuery();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      toggleDrawer();
    }
  }, [pathname]);

  const handleLogout = async () => {
    try {
      toast.success("Logout success");
      Cookies.remove("pencil");
      navigate("/account/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={toggleDrawer} className="text-2xl p-1">
        <GiHamburgerMenu />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="80%"
        className="w-full"
      >
        <div className="w-full bg-white flex flex-col justify-between min-h-screen shadow">
          <div className="w-full">
            <div className="h-[72px] flex justify-between gap-2 items-center px-4 shadow">
              <div className="h-10">
                <img
                  src={
                    siteContent?.data?.secondary_logo
                      ? siteContent?.data?.secondary_logo
                      : "/logo dark.png"
                  }
                  alt="Pencilwood"
                  className="w-full h-full"
                />
              </div>

              <button
                onClick={toggleDrawer}
                type="button"
                className="w-7 h-7 flex justify-center items-center text-xl hover:text-primary"
              >
                <VscLayoutSidebarRight />
              </button>
            </div>

            <ul className="w-full font-normal flex flex-col gap-2 p-4">
              {navigation.map((item, idx: number) => (
                <li key={idx} className="w-full border-b border-gray-300 py-3">
                  <Link
                    to={item.path}
                    className={`w-full hover:text-white hover:bg-primary duration-150  flex items-center justify-between ${
                      pathname === item.path ? "text-primary font-medium" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex justify-cente items-center mb-5 px-4">
            <button
              onClick={handleLogout}
              className="text-sm mr-10 font-medium px-5 py-1 flex items-center gap-1 rounded-md border border-gray-600 text-gray-600 hover:text-primary hover:border-primary"
            >
              <BiLogOutCircle className="text-base" /> Logout
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
