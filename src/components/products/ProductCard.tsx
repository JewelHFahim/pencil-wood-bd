import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="ProductCard-Wrapper">
      <Link to="">
        <div className="w-full relative img-container overflow-hidden max-h-[350px] rounded-t-sm">
          <img
            src={`/product_2.jpg`}
            alt="Product Img"
            className="w-full h-[150px] md:h-[250px] object-cover main-img transition-opacity duration-500 object-center"
          />
          <img
            src="/product_3.jpg"
            alt="Product Img"
            className="w-full h-[150px] md:h-[250px] object-cover second-img transition-opacity duration-500 object-center"
          />
        </div>

        <div className="w-full mt-1 md:mt-0 h-max md:h-[38px] cart-btn-cont">
          <button className="cart-btn w-full h-full py-1.5 bg-gray-900 font-medium text-xs md:text-base text-gray-200 uppercase">Add To Cart</button>
        </div>

        <div className="mt-1">
          <h2 className="text-sm md:text-lg font-medium">Product Title</h2>

          <div className="flex justify-between md:flex-start items-center sm:gap-2 md:gap-x-4">
            <div className="flex flex-col md:flex-row items-center gap-x-4">
              <p className="md:font-medium line-through text-gray-500 text-sm">Tk350.00</p>
              <p className="md: font-medium text-sm text-primary">Tk250.00</p>
            </div>

            <div className={`bg-primar text-white text-xs px-2`}>Stock</div>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default ProductCard;
