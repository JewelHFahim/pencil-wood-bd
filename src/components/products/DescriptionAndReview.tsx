import { useState } from "react";
import Reviews from "./Reviews";

const DescriptionAndReview = () => {
  const [active, setActive] = useState("");

  return (
    <div className="my-10 border-b pb-5 border-gray-300">
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            sapiente maxime, a nesciunt iure incidunt eligendi ut architecto
            doloribus officia provident natus quod quas? Ad sequi quibusdam
            quam, ratione ea nihil magni expedita beatae velit consequatur
            dolorum, vel nulla delectus, eius error nam modi aperiam optio
            facere dolore laboriosam non accusantium explicabo? Ullam velit
            quos, ipsam iusto atque assumenda ab nobis quae molestias in enim
            facilis tempore incidunt perferendis. Quas soluta maxime a earum sit
            nulla ipsum itaque sequi repellendus, architecto atque excepturi
            culpa facilis, eos pariatur ea animi cum repellat tempora delectus!
            Sequi reiciendis velit corporis veniam enim totam?
          </p>
        ) : active === "review" ? (
          <Reviews />
        ) : (
          <p className="text-xl text-gray-500">Description & Customers Review</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndReview;
