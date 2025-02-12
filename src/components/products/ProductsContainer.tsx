import Loader from "../../utils/loader/Loader";
import FilterSort from "./FilterSort";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  const isLoading = false;

  return (
    <div className="w-full">
      <FilterSort />

      {isLoading ? (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <Loader />
        </div>
      ) : (
        <div className="mt-5 w-full grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-x-5 gap-y-8">
          {[...Array(9)].map((_, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      )}

      {/* <Pagination page={page} setPage={setPage} allProducts={allProducts} /> */}
    </div>
  );
};

export default ProductsContainer;
