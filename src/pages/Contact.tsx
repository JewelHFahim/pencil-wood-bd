import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdPayments } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import SocialIcons from "../utils/SocialIcons";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] my-5 px-5 md:px-0">
      <h1 className="text-3xl text-primary text-center font-medium underline">
        Contact
      </h1>

      <div className="my-8 grid gap-5 grid-cols-1 md:grid-cols-3 text-gray-500">
        <div className="bg-white px-8 py-12 shadow-sm">
          <div className="flex gap-3">
            <RiCustomerService2Fill className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              Hotline
            </h2>
          </div>
          <p className="mt-4 font-medium  text-center">+88 01911 209322</p>
        </div>

        <div className="bg-white px-8 py-12 shadow-sm">
          <div className="flex gap-3">
            <FaWhatsapp className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              WhatsApp
            </h2>
          </div>
          <p className="mt-4 font-medium text-center">+88 01911 209322</p>
        </div>

        <div className="bg-white px-8 py-12 shadow-sm">
          <div className="flex gap-3">
            <MdOutlineAlternateEmail className="text-[40px] text-primary" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
              Email
            </h2>
          </div>
          <p className="mt-4 font-medium">support@firecutter.com</p>
        </div>
      </div>

      <div className="bg-white px-16 py-12 shadow-sm text-gray-500 w-max mx-auto">
        <div className="flex gap-3">
          <MdPayments className="text-[40px] text-primary" />
          <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
            Payment method
          </h2>
        </div>
        <p className="mt-4 font-medium text-center">bKash - 01911209322</p>
      </div>

      <div className="w-max mx-auto my-5">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Contact;
