import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FC, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import PriceRangeSlider from "../../utils/range-slider/PriceRangeSlider";
import { CategoryResponse } from "../../types/products_type";
import { useCategoryQuery } from "../../redux/features/products/productsApi";

interface FilterMenuProps {
  isOpenFilter: boolean;
  toggleDrawerFilter: () => void;
}

const FilterSlider: FC<FilterMenuProps> = ({
  isOpenFilter,
  toggleDrawerFilter,
}) => {
  const [isOpenType, setIsOpenType] = useState(true);
  const [isOpenPrice, setIsOpenPrice] = useState(true);
  const { data: categories } = useCategoryQuery();

  return (
    <div className="block md:hidden w-full ">
      {/*Cart Button */}

      <button
        onClick={toggleDrawerFilter}
        className="w-full p-2 flex justify-cente items-center gap-2 text-sm border border-r-0 border-gray-300"
      >
        <IoFilter /> <span>Filter By</span>
      </button>

      <Drawer
        open={isOpenFilter}
        onClose={toggleDrawerFilter}
        direction="left"
        size=""
        className="w-[300px]"
      >
        <div className="w-full bg-white flex flex-col justify-between min-h-screen pb-4">
          <div>
            <div className="h-[72px] flex justify-between gap-2 items-center px-4 shadow">
              <p className="block text-gray-800 text-base font-semibold uppercase">
                Shopping Cart
              </p>

              <button
                onClick={toggleDrawerFilter}
                type="button"
                className="text-2xl text-gray-800 hover:text-primary cursor-pointer"
              >
                <IoMdClose />
              </button>
            </div>

            <div className="text-gray-700 flex flex-col gap-4 p-4">
              {/* Type */}
              <div className="border-b border-gray-300 pb-3 cursor-pointer h-max">
                <button
                  onClick={() => setIsOpenType(!isOpenType)}
                  className="w-full flex items-center gap-1 uppercase text-sm font-semibold pt-1 cursor-pointer"
                >
                  <IoIosArrowDown /> Product Type
                </button>

                {isOpenType && (
                  <div className="w-full h-[250px] overflow-y-auto flex flex-col gap-1.5 mt-2">
                    {categories?.results?.map((category: CategoryResponse) => (
                      <div
                        key={category?.id}
                        className="flex items-center gap-1.5 text-gray-800 hover:text-gray-900"
                      >
                        <input type="checkbox" className="w-[14px] h-[14px]" />
                        <p className="text-[15px]">
                          {category?.title}
                          <span className="text-gray-400">(5)</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="border-b border-gray-300 pb-3 cursor-pointer h-max-[200px] overflow-y-auto">
                <button
                  onClick={() => setIsOpenPrice(!isOpenPrice)}
                  className="w-full flex items-center gap-1 uppercase text-sm font-semibold pt-1 cursor-pointer"
                >
                  <IoIosArrowDown /> Price
                </button>

                {isOpenPrice && (
                  <div className="flex flex-col gap-1.5 w-[95%] mt-5">
                    <PriceRangeSlider />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 px-4 pt-2">
            <button
              type="button"
              className="border border-primary hover:bg-primary w-full text-primary hover:text-white rounded-sm text-sm py-2.5 font-medium flex justify-center items-center gap-2 transition-all duration-300 uppercase"
            >
              View 90 products
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterSlider;
