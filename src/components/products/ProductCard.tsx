import { ProductResponse } from "../../types/products_type";
import { MdOutlineShoppingCart } from "react-icons/md";
import useAddToCart from "../../hooks/useAddToCart";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import Cookies from "js-cookie";
import "./ProductCard.css";
import { FC } from "react";

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const token = Cookies.get("pencil");
  const { handleAddToCart } = useAddToCart();

  return (
    <div className="ProductCard-Wrapper relative border border-gray-200 shadow-md hover:shadow-lg text-center rounded-sm pb-2 transition-all duration-300 ease-in-out">
      <Link to={`/product-details/${product?.id}`} className="">
        {/* Image Section */}
        <div className="w-full relative img-container overflow-hidden max-h-[350px] rounded-t-sm">
          <img
            src={
              product?.product_image[0]?.image
                ? product?.product_image[0]?.image
                : `/product_2.jpg`
            }
            alt="Product Img"
            className="w-full h-full max-h-[200px] object-cover main-img transition-opacity duration-500 object-center"
          />
          <img
            src={
              product?.product_image[1]?.image
                ? product?.product_image[1]?.image
                : "/product_3.jpg"
            }
            alt="Product Img"
            className="w-[250px] h-[150px]  md:h-[250px] object-cover second-img transition-opacity duration-500 object-center"
          />
        </div>

        {/* Text Section */}
        <div className="py-2 px-1">
          <h2 className="text-sm md:text-base font-medium">
            {product?.name?.slice(0, 20)}
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-x-4">
            {product?.current_price && (
              <p className="md:font-medium line-through text-gray-500 text-sm">
                Tk{product?.current_price}
              </p>
            )}
            <p className="font-medium text-sm text-primary">
              Tk{product?.discount_price}
            </p>
          </div>
        </div>
      </Link>

      {!token ? (
        <div className="CartAndBuyBtn absolute top-1/2 bottom-1/2 -translate-y-10 right-0 flex flex-col gap-2">
          <Link to="/account/login">
            <button
              type="button"
              className="text-2xl bg-primary text-white p-2 w-max h-max rounded-full cursor-pointer hover:text-primary border border-primary hover:bg-white transition-all duration-150 shadow-md"
            >
              <FaRegHeart />
            </button>
          </Link>

          <Link to="/account/login">
            <button
              type="button"
              className="text-2xl bg-white text-primary p-2 w-max h-max rounded-full cursor-pointer hover:text-white border border-primary hover:bg-primary transition-all duration-150 shadow-md"
            >
              <MdOutlineShoppingCart />
            </button>
          </Link>
        </div>
      ) : (
        <div className="CartAndBuyBtn absolute top-1/2 bottom-1/2 -translate-y-10 right-0 flex flex-col gap-2">
          <button
            type="button"
            onClick={() =>
              handleAddToCart({ product: product?.id, quantity: 1 })
            }
            className="text-2xl bg-primary text-white p-2 w-max h-max rounded-full cursor-pointer hover:text-primary border border-primary hover:bg-white transition-all duration-150 shadow-md"
          >
            <FaRegHeart />
          </button>

          <Link to="/cart">
            <button
              type="button"
              onClick={() =>
                handleAddToCart({ product: product?.id, quantity: 1 })
              }
              className="text-2xl bg-white text-primary p-2 w-max h-max rounded-full cursor-pointer hover:text-white border border-primary hover:bg-primary transition-all duration-150 shadow-md"
            >
              <MdOutlineShoppingCart />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
