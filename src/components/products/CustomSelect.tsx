import { Listbox } from "@headlessui/react";
import { FC } from "react";
import { JSX } from "react/jsx-runtime";

// const sortOptions = [
//   { id: 0, name: "Featured", icon: <BsSortUp />, slug: "featured" },

//   { id: 1, name: "Availability", slug: "-stock" },

//   { id: 2, name: "Best Selling", slug: "-sales_count" },

//   { id: 3, name: "Alphabetically, A-Z", slug: "name" },

//   { id: 4, name: "Alphabetically, Z-A", slug: "-name" },

//   { id: 5, name: "Price, low to high", slug: "current_price" },

//   { id: 6, name: "Price, high to low", slug: "-current_price" },

//   { id: 7, name: "Date, new to old", slug: "-created_at" },

//   { id: 8, name: "Date, old to new", slug: "created_at" },
// ];

interface SortOption {
  id: number;
  name: string;
  slug: string;
  icon: JSX.Element;
}

interface CustomSelectProps {
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  sortOptions: SortOption[];
}

const CustomSelect:FC<CustomSelectProps> = ({ sort, setSort, sortOptions }) => {

  return (
    <div className="w-1/2 md:w-max md:min-w-[190px]">
      <Listbox value={sort} onChange={setSort}>
        <div className="relative">
          <Listbox.Button className="w-full border border-gray-300 h-9 px-2 text-left">
            <div className="flex items-center gap-2">
              {sort.icon && sort.icon}
              {sort.name}
            </div>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full border border-gray-200 bg-white shadow-lg rounded-md">
            {sortOptions.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `cursor-pointer px-3 py-2 ${
                    active ? "bg-gray-100" : "bg-white"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  {item.icon && item.icon}
                  {item.name}
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomSelect;