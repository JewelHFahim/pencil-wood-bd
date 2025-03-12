import { BiSearch } from "react-icons/bi";
import ProductCard from "./ProductCard";
import { IoIosArrowDown, IoMdRefresh } from "react-icons/io";
import { useEffect, useState } from "react";
import PriceRangeSlider from "../../utils/range-slider/PriceRangeSlider";
import Pagination from "../../utils/paginations/Pagination";
import ProductSorting from "./ProductSorting";
import FilterSlider from "./FilterSlider";
import {
  useCategoryQuery,
  useLazyAllProductsQuery,
  useProductsQuery,
} from "../../redux/features/products/productsApi";
import { CategoryResponse, ProductResponse } from "../../types/products_type";

const ProductsContainer = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpenType, setIsOpenType] = useState(true);
  const [isOpenPrice, setIsOpenPrice] = useState(true);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { data: categories } = useCategoryQuery();
  const [triggerSearch, { data: allProducts, isLoading }] = useLazyAllProductsQuery();
  const { data: products } = useProductsQuery();

  const currentProducts =
    allProducts?.data && allProducts.data.length > 0 ? allProducts : products;

  const toggleDrawerFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(()=>{
    triggerSearch({ query, page });
  },[page])

  // Search Products
  const handleSearch = () => {
    if (query.trim()) {
      triggerSearch({ query, page });
    }
  };

  console.log(page)

  return (
    <div className="w-full flex justify-center gap-5">
      {/* Left Content- Filters, Price Slider */}
      <div className="hidden md:block w-full md:w-[24%] mt-1">
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
              <div className="w-full max-h-[250px] overflow-y-auto flex flex-col gap-1.5 mt-2">
                {categories?.data?.map((category: CategoryResponse) => (
                  <div
                    key={category?.id}
                    className="flex items-center gap-1.5 text-gray-800 hover:text-gray-900"
                  >
                    <input type="checkbox" className="w-[14px] h-[14px]" />
                    <p className="text-[15px]">{category?.title}</p>
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
              <div className="flex justify-center gap-1.5 w-[100%] pl-1 pr-2 mt-5">
                <PriceRangeSlider />
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
            {currentProducts?.count} products
          </p>

          {/* Mobile device, product filter */}
          <FilterSlider
            isOpenFilter={isOpenFilter}
            toggleDrawerFilter={toggleDrawerFilter}
          />

          <ProductSorting />
        </div>

        {isLoading ? (
          <div className="mt-5 w-full min-w-[50vw] grid grid-cols-3 md:grid-cols-4 justify-between gap-2 md:gap-x-5 gap-y-8">
            {/* <Loader /> */}
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="w-full min-w-[190px] h-[260px] bg-orange-200 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="mt-5 w-full grid grid-cols-3 md:grid-cols-4 justify-between gap-2 md:gap-x-5 gap-y-8">
            {currentProducts?.data?.map((product: ProductResponse) => (
              <ProductCard product={product} key={product?.id} />
            ))}
          </div>
        )}

        {/* <Pagination page={page} setPage={setPage} count={count} /> */}
        <Pagination
          page={page}
          setPage={setPage}
          count={Number(currentProducts?.count) || 0}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
