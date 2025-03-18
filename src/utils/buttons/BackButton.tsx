import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const BackToHome = () => {
  return (
    <div className="flex justify-center mt-16">
      <Link to="/">
        <button className="border-2 border-primary hover:bg-primary px-8 py-2 text-primary hover:text-white transition-all duration-200 ease-in-out font-medium uppercase flex items-center gap-2 cursor-pointer">
          <BsArrowLeft className="text-xl" /> <span>Back To Home</span>
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
