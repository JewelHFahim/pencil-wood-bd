import { Link } from "react-router";
import * as Icons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import {
  useFooterLinksQuery,
  useSiteContentQuery,
  useSocialLinksQuery,
} from "../../redux/features/site/siteApis";

const Footer = () => {
  const { data: siteContent } = useSiteContentQuery();
  const { data: footerLinks } = useFooterLinksQuery();
  const { data: socialLinks } = useSocialLinksQuery();
  console.log(socialLinks);

  // const social = [
  //   {
  //     icon: <IoLogoFacebook />,
  //     path: "",
  //   },
  //   {
  //     icon: <FaInstagram />,
  //     path: "",
  //   },
  //   {
  //     icon: <IoLogoWhatsapp />,
  //     path: "",
  //   },
  // ];

  return (
    <div className="py-4 bg-primary mt-10 flex flex-col justify-center items-center">
      <div className="w-[90vw] lg:w-[71vw] mx-auto md:h-1/2">
        <ul className="flex justify-center items-center h-full">
          <li className="w-full flex flex-wrap gap-5 justify-center text-white text-sm md:text-base">
            {footerLinks?.data?.map((menu) => (
              <Link
                to={menu?.url}
                key={menu?.id}
                className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                {menu?.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] my-4 bg-orange-300" />

      <div className="w-[95vw] md:w-[90vw] lg:w-[71vw] mx-auto md:h-1/2 flex flex-col justify-center items-center  md:justify-evenly gap-y-4 ">
        <div className="flex items-center gap-8 text-3xl ">
          {socialLinks?.data?.map((item, idx) => {
            const IconComponent =
              Icons[item.icon as keyof typeof Icons] ||
              FaIcons[item.icon as keyof typeof FaIcons];

            return (
              <Link
                to={item?.url}
                className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
                key={idx}
              >
                {/* <{item.icon}/> */}
                {IconComponent ? (
                  <IconComponent className="text-gray-500 text-3xl hover:text-gray-700" />
                ) : null}
              </Link>
            );
          })}
        </div>
        <p className="text-xs text-white">
          All rights reserved {siteContent?.data?.copyright_year} ©
          {siteContent?.data?.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
