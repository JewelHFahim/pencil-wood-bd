import ProductCard from "./ProductCard"

const ProductSuggestion = () => {
  return (
    <div className="my-20">
        <div className="flex justify-center">
          <h1 className="text-lg font-medium uppercase">You may also like</h1>
        </div>

        <div className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between items-center gap-x-2 md:gap-x-5 gap-y-8">
          {[...Array(5)].map((_, idx:number) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </div>
  )
}

export default ProductSuggestion