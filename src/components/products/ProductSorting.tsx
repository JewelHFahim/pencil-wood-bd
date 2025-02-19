import { useState } from "react";
import { LiaListSolid } from "react-icons/lia";

const ProductSorting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      id: 1,
      name: "Availability",
      slug: "availability",
    },
    {
      id: 2,
      name: "Best Selling",
      slug: "set_selling",
    },
    {
      id: 3,
      name: "Alphabetically, A-Z",
      slug: "alphabetically_a_z",
    },
    {
      id: 4,
      name: "Alphabetically, Z-A",
      slug: "alphabetically_z_a",
    },
    {
      id: 5,
      name: "Price, low to high",
      slug: "Price_low_to_high",
    },
    {
      id: 6,
      name: "Price, high to low",
      slug: "Price_high_to_low",
    },
    {
      id: 7,
      name: "Date, new to old",
      slug: "date_new_to_old",
    },
    {
      id: 8,
      name: "Date, old to new",
      slug: "date_old_to_new",
    },
    {
      id: 9,
      name: "% Sale off",
      slug: "sale_off",
    },
  ];

  return (
    <div className="relative w-full md:w-max justify-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center items-center gap-2 relative z-10 px-8 py-2 text-sm border border-gray-300 focus:border-primary focus:ring-opacity-40 focus:ring-primary focus:ring focus:outline-none"
      >
        <LiaListSolid />
        Featured
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 w-48 p-2 mt-2 origin-top-right bg-white shadow-xl border border-gray-300">
          {features.map((item) => (
            <div
              key={item.id}
              className="block px-4 py-1.5 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSorting;
