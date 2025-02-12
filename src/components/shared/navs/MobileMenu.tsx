import { GiHamburgerMenu } from "react-icons/gi";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router";
import { FC } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleDrawer }) => {
  const navigation = [
    { title: "Home", path: "" },
    { title: "About", path: "" },
    { title: "Contact", path: "" },
    { title: "Porducts", path: "" },
  ];

  //   const filteredNavigation =
  //   user?.user_info?.type === 1 ? navigation : navigation.filter((item) => item.type !== 1);
  //   const handleLogout = async () => {
  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_BASE_URL}/admin/logout`,
  //         {
  //           method: "POST",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const data = await response.json();
  //       console.log("Logout response data:", data);

  //       if (data.status) {
  //         toast.success(data.message);
  //         Cookies.remove("uddokta_token");
  //         Cookies.remove("user_info");
  //       } else {
  //         console.error("Logout failed:", data.message);
  //         toast.error(data.message);
  //       }
  //     } catch (error) {
  //       console.error("Error during logout:", error);
  //       toast.error("An error occurred during logout. Please try again.");
  //     }
  //   };

  return (
    <>
      <button onClick={toggleDrawer} className="text-2xl p-1">
        <GiHamburgerMenu />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="75%"
        className=""
      >
        <div className="bg-white flex flex-col justify-between min-h-screen shadow">
          <div>
            <div className="h-[72px] flex gap-2 items-center px-4 shadow">
              <div className="w-full flex items-center gap-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-400">
                  {/* <img src="" /> */}
                </div>
                <div>
                  <span className="block text-gray-400 text-sm font-semibold">
                    Jhon Snow
                  </span>
                  <span className="block mt-px text-gray-500 text-xs">
                    Financial Assitant
                  </span>
                </div>
              </div>

              <button
                onClick={toggleDrawer}
                type="button"
                className="w-7 h-7 flex justify-center items-center text-lg"
              >
                <VscLayoutSidebarRight />
              </button>
            </div>

            <ul className="mt-10 font-light flex flex-col gap-5 p-4">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className={` hover:text-black p-2 rounded-lg hover:bg-[#98e5dd] hover:font-medium duration-150 my-1 font-medium`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex justify-cente items-center mb-2 px-4">
            <button
              //   onClick={() => handleLogout()}
              className="text-sm mr-10 font-medium px-5 py-1 flex items-center gap-1 rounded-md border hover:bg-[#98E5DD] hover:text-black"
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
