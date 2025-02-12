import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mt-16 bg-primary h-[70px]">
      <div className="sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-2 text-white text-sm">
        <p>pencilwoodbd @ all right reserve</p>

        <div className="flex items-center gap-5">
          <Link
            to=""
            className="hover:text-teal-100 underline underline-offset-2"
          >
            Privacy & Policy
          </Link>
          |
          <Link
            to=""
            className="hover:text-teal-100 underline underline-offset-2"
          >
            Terms & Condiotion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
