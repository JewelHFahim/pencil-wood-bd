import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { RiCustomerService2Fill } from "react-icons/ri";
import SocialIcons from "../utils/SocialIcons";
import { useContactInformationQuery } from "../redux/features/site/siteApis";
import Loader from "../utils/loader/Loader";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Contact = () => {
  const location = useLocation();

  const { data: conatctInfos, isLoading } = useContactInformationQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] my-5 px-2 md:px-0">
      <div className="h-12 bg-primary w-full flex justify-center items-center">
        <h1 className="text-3xl text-white text-center font-medium ">
          Contact
        </h1>
      </div>

      <div className="my-8 grid gap-5 grid-cols-1 md:grid-cols-3 text-gray-500">
        <div className="bg-white px-8 py-12 shadow-sm hover:shadow-md">
          <div className="flex gap-3">
            <RiCustomerService2Fill className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              Hotline
            </h2>
          </div>
          <p className="mt-4 font-medium  text-center">
            {conatctInfos?.data?.phone}
          </p>
        </div>

        <div className="bg-white px-8 py-12 shadow-sm hover:shadow-md">
          <div className="flex gap-3">
            <FaWhatsapp className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              WhatsApp
            </h2>
          </div>
          <p className="mt-4 font-medium text-center">
            {conatctInfos?.data?.whatspp_number}
          </p>
        </div>

        <div className="bg-white px-8 py-12 shadow-sm hover:shadow-md">
          <div className="flex gap-3">
            <MdOutlineAlternateEmail className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              Email
            </h2>
          </div>
          <p className="mt-4 font-medium text-center">
            {conatctInfos?.data?.email}
          </p>
        </div>
      </div>

      <div className="bg-white px-8 md:px-16 py-12 shadow-sm text-gray-500 hover:shadow-md">
        <div className="flex gap-3">
          <GrLocation className="text-[40px] text-primary" />
          <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
            Location
          </h2>
        </div>
        <p className="mt-4 font-medium md:pl-4">
          {conatctInfos?.data?.location}
        </p>
      </div>

      <div className="w-max mx-auto my-5">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Contact;
