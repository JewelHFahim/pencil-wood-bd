import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  const footerMenus = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Return Policy",
      path: "",
    },
    {
      name: "Terms & Condition",
      path: "",
    },
    {
      name: "Privacy Policy",
      path: "",
    },
    {
      name: "FAQ",
      path: "",
    },
  ];

  const social = [
    {
      icon: <IoLogoFacebook />,
      path: "",
    },
    {
      icon: <FaInstagram />,
      path: "",
    },
    {
      icon: <IoLogoWhatsapp />,
      path: "",
    },
  ];

  return (
    <div className="py-4 bg-primary mt-10 flex flex-col justify-center items-center">

      <div className="w-[90vw] lg:w-[71vw] mx-auto md:h-1/2">
        <ul className="flex justify-center items-center h-full">
          <li className="w-full flex flex-wrap gap-5 justify-center text-white text-sm md:text-base">
            {footerMenus.map((menu, idx) => (
              <Link
                to={menu.path}
                key={idx}
                className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] my-4 bg-orange-300" />

      <div className="w-[95vw] md:w-[90vw] lg:w-[71vw] mx-auto md:h-1/2 flex flex-col justify-center items-center  md:justify-evenly gap-y-4 ">
        <div className="flex items-center gap-5 text-3xl ">
          {social.map((item, idx) => (
            <Link
              to={item.path}
              className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
              key={idx}
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="text-xs text-white">All rights reserved © PencilwoodBD</p>
      </div>
    </div>
  );
};

export default Footer;
