import { useProductsQuery } from "../../redux/features/products/productsApi";
import { ProductResponse } from "../../types/products_type";
import ProductCard from "./ProductCard";

const ProductSuggestion = () => {
  const { data: allProducts, error, isLoading } = useProductsQuery();

  if (isLoading) return <p>Loading... ProductSuggestion</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="my-4">
      <div className="flex justify-center">
        <h1 className="text-lg font-medium uppercase">You may also like</h1>
      </div>

      <div className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between items-center gap-x-2 md:gap-x-5 gap-y-8">
        {allProducts?.data?.map((product: ProductResponse) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestion;
