import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mt-16 bg-primary h-[40px]">
      <div className="sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto w-full h-full flex justify-between items-center text-white text-sm">
        <p>pencilwoodbd @ all right reserve</p>

        <div className="flex items-center gap-5">
          <Link to="">Privacy & Policy</Link>
          <Link to="">Terms & Condiotion</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
