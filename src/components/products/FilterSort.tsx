import { useState } from "react";
import { Link } from "react-router";

const FilterSort = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block px-2.5 py-1 text-gray-700 bg-gray-100 border border-gray-300 focus:border-primary focus:ring-opacity-40 focus:ring-primary focus:ring focus:outline-none"
      >
        Featured
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 w-48 p-2 mt-2 origin-top-right bg-white shadow-xl border border-gray-300">
          {[...Array(7)].map((_, idx) => (
            <Link
              key={idx}
              to="#"
              className="block px-4 py-1.5 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              Availability
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSort;
