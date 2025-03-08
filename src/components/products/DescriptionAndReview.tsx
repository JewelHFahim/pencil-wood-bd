import { FC, useState } from "react";
import Reviews from "./Reviews";

interface DescriptionAndReviewProps {
  details: string | undefined;
}

const DescriptionAndReview: FC<DescriptionAndReviewProps> = ({ details }) => {
  const [active, setActive] = useState("");

  return (
    <div className="my-5 border-b pb-5 border-gray-300">
      <div className="flex items-center gap-2 w-max">
        <button
          onClick={() => setActive("description")}
          className={`w-full h-[40px] px-5 font-semibold border border-primary  text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary capitalize ${
            active === "description" ? "bg-primary text-white" : ""
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActive("review")}
          className={`w-full h-[40px] px-5 font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary capitalize  ${
            active === "review" ? "bg-primary text-white" : ""
          }`}
        >
          Review
        </button>
      </div>

      <div className="mt-4">
        {active === "description" ? (
          <p>{details}</p>
        ) : active === "review" ? (
          <Reviews />
        ) : (
          <p className="text-xl text-gray-500">
            Description & Customers Review
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndReview;
