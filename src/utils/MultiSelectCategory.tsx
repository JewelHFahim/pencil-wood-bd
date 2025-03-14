import { Dispatch, SetStateAction, FC } from "react";
import { useCategoryQuery } from "../redux/features/products/productsApi";
import { CategoryResponse } from "../types/products_type";
import { IoIosArrowDown } from "react-icons/io";

interface MultiSelectCheckboxProps {
  selectedValues: number[];
  setSelectedValues: Dispatch<SetStateAction<number[]>>;
}

const MultiSelectCheckbox: FC<MultiSelectCheckboxProps> = ({
  selectedValues,
  setSelectedValues,
}) => {
  const { data: categories } = useCategoryQuery();

  // Handle checkbox change
  const handleCheckboxChange = (value: number) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((num) => num !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <h2 className="w-full flex items-center gap-1 uppercase text-sm font-semibold pt-1 cursor-pointer">
        <IoIosArrowDown /> Product Type
      </h2>

      {/* Render Checkboxes */}
      <div className="m-2">
        {categories?.data?.map((category: CategoryResponse) => (
          <label key={category.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={category.id}
              checked={selectedValues.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
              className="h-3.5 w-3.5"
            />
            <span className="py-1">{category.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectCheckbox;
