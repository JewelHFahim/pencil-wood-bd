import * as Icons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { useSocialLinksQuery } from "../redux/features/site/siteApis";
import { Link } from "react-router";

const SocialLinks = () => {
  const { data: socialLinks } = useSocialLinksQuery();
  console.log(socialLinks);

  return (
    <div className="flex space-x-6">
      {socialLinks?.data
        ?.filter((item) => item.is_active)
        .map((item) => {
          const IconComponent =
            Icons[item.icon as keyof typeof Icons] ||
            FaIcons[item.icon as keyof typeof FaIcons];

          return (
            <Link to="" className=" mt-8 flex items-center gap-1">
              {IconComponent ? ( <IconComponent className="text-gray-400 text-2xl hover:text-blue-500" />) : null}
              <span className="text-sm uppercase font-medium">Share</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SocialLinks;
