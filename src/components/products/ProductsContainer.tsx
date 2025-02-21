import { BiSearch } from "react-icons/bi";
import Loader from "../../utils/loader/Loader";
import ProductCard from "./ProductCard";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import PriceRangeSlider from "../../utils/range-slider/PriceRangeSlider";
import Pagination from "../../utils/paginations/Pagination";
import ProductSorting from "./ProductSorting";
import FilterSlider from "./FilterSlider";

const ProductsContainer = () => {
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const isLoading = false;

  const toggleDrawerFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="w-full flex justify-center gap-5">
      <div className="hidden md:block w-[260px] mt-1">
        <div className="text-gray-700 flex flex-col gap-4">
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
                {[...Array(15)].map(() => (
                  <div className="flex items-center gap-1.5 text-gray-800 hover:text-gray-900">
                    <input type="checkbox" className="w-[14px] h-[14px]" />
                    <p className="text-[15px]">
                      Baby Boys Bomber
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

      <div>
        <div className="flex items-center gap-1 border border-primary px-2">
          <BiSearch className="h-full w-[24px] mt-1 text-gray-600" />
          <input
            type="text"
            className="w-full h-[40px] px-3 text-primary placeholder:text-primary focus:outline-none"
            placeholder="Search products"
          />
        </div>

        <div className="flex items-center justify-between my-4">
          <p className="text-sm italic hidden md:block"> 299 products</p>

          {/* Mobile device, product filter */}
          <FilterSlider
            isOpenFilter={isOpenFilter}
            toggleDrawerFilter={toggleDrawerFilter}
          />

          <ProductSorting />
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center items-center h-[50vh]">
            <Loader />
          </div>
        ) : (
          <div className="mt-5 w-full grid grid-cols-3 md:grid-cols-4 justify-between items-center gap-2 md:gap-x-5 gap-y-8">
            {[...Array(10)].map((_, idx) => (
              <ProductCard key={idx} />
            ))}
          </div>
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default ProductsContainer;
