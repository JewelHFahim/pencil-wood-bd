import { BiSearch } from "react-icons/bi";
import ProductCard from "./ProductCard";
import { IoIosArrowDown, IoMdRefresh } from "react-icons/io";
import { useEffect, useState } from "react";
import PriceRangeSlider from "../../utils/range-slider/PriceRangeSlider";
import Pagination from "../../utils/paginations/Pagination";
import ProductSorting from "./ProductSorting";
import FilterSlider from "./FilterSlider";
import { useLazyAllProductsQuery } from "../../redux/features/products/productsApi";
import { ProductResponse } from "../../types/products_type";
import MultiSelectCheckbox from "../../utils/MultiSelectCategory";

const ProductsContainer = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpenPrice, setIsOpenPrice] = useState<boolean>(true);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<number>(100);
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [sort, setSort] = useState("");
  console.log(sort)
  const [triggerSearch, { data: allProducts, isLoading }] =useLazyAllProductsQuery();
  const toggleDrawerFilter = () => setIsOpenFilter(!isOpenFilter);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Convert selected categories into a comma-separated string
  const filterCategory =
    selectedValues.length > 0 ? selectedValues.join(",") : undefined;

  useEffect(() => {
    triggerSearch({
      query,
      page,
      category: filterCategory,
      minPrice,
      maxPrice,
      sort
    });
  }, [query, page, filterCategory, minPrice, maxPrice, sort, triggerSearch]);

  // Search Products
  const handleSearch = () => {
    triggerSearch({
      query,
      page,
      category: filterCategory,
      minPrice,
      maxPrice,
      sort
    });
  };

  return (
    <div className="w-full flex justify-center gap-5">

      {/* Left Content- Filters, Price Slider */}
      <div className="hidden md:block w-full md:w-[24%] mt-1">
        <div className="text-gray-700 flex flex-col gap-4">
          {/* Type */}
          <MultiSelectCheckbox
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
          />

          {/* Price */}
          <div className="border-b border-gray-300 pb-3 cursor-pointer h-max-[200px] overflow-y-auto">
            <button
              onClick={() => setIsOpenPrice(!isOpenPrice)}
              className="w-full flex items-center gap-1 uppercase text-sm font-semibold pt-1 cursor-pointer"
            >
              <IoIosArrowDown /> Price
            </button>

            {isOpenPrice && (
              <div className="flex justify-center gap-1.5 w-[100%] pl-1 pr-2 mt-5">
                <PriceRangeSlider
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right COntent- Search, Sorting, Product list */}
      <div className="w-full md:w-[76%]">
        <div className="flex items-center gap-1 border border-primary px-2">
          <input
            type="text"
            className="w-full h-[40px] px-3 text-primary placeholder:text-primary focus:outline-none"
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            disabled={isLoading}
            className="h-full w-[40px] p-1 text-gray-500 cursor-pointer"
          >
            {isLoading ? (
              <IoMdRefresh className="animate-spin w-full h-full" />
            ) : (
              <BiSearch onClick={handleSearch} className="w-full h-full" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between my-4">
          <p className="text-sm italic hidden md:block">
            {allProducts?.count} products
          </p>

          {/* Mobile device, product filter */}
          <FilterSlider
            isOpenFilter={isOpenFilter}
            toggleDrawerFilter={toggleDrawerFilter}
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />

          <ProductSorting setSort={setSort}/>
        </div>

        {/* Products List Display Center */}
        {isLoading ? (
          <div className="mt-5 w-full min-w-[50vw] grid grid-cols-3 md:grid-cols-4 justify-between gap-2 md:gap-x-4 gap-y-8">
            {/* <Loader /> */}
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="w-full md:min-w-[190px] h-[160px] md:h-[260px] bg-orange-200 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="mt-5 w-full grid grid-cols-3 md:grid-cols-4 justify-between gap-2 md:gap-x-4 gap-y-8">
            {allProducts?.data?.map((product: ProductResponse) => (
              <ProductCard product={product} key={product?.id} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          page={page}
          setPage={setPage}
          count={Number(allProducts?.count) || 0}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
