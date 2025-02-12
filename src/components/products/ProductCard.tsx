import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="ProductCard-Wrapper">
      <Link to="">
        <div className="w-full relative img-container overflow-hidden max-h-[350px]">
          <img
            src={`/product_2.jpg`}
            alt="Product Img"
            // width={800}
            // height={500}
            className="w-full h-[250px] object-cover main-img transition-opacity duration-500 object-center"
          />
          <img
            src="/product_3.jpg"
            alt="Product Img"
            // width={800}
            // height={500}
            className="w-full h-[250px] object-cover second-img transition-opacity duration-500 object-center"
          />
        </div>

        <div className="mt-2">
          <h2 className="md:text-lg font-medium">Product Title</h2>

          <div className="flex justify-between md:flex-start items-center sm:gap-2 md:gap-x-4">
            <div className="flex flex-col xl:flex-row items-center gap-x-4">
              <p className="font-medium text-sm text-primary">
                Price: 250.00 BDT
              </p>
              <p className="hidden lg:block md:font-medium line-through text-gray-500 text-sm">
                Price: 350.00 BDT
              </p>
            </div>

            <div className={`bg-primar text-white text-xs px-2`}>Stock</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
