import { FC } from "react";
import "./ProductCard.css";
import Cookies from "js-cookie";
import { Link } from "react-router";
import { ProductResponse } from "../../types/products_type";
import useAddToCart from "../../hooks/useAddToCart";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const token = Cookies.get("pencil");
  const { handleAddToCart } = useAddToCart();

  return (
    <div className="ProductCard-Wrapper relative border border-gray-100 shadow text-center rounded-sm p-1 pb-2">
      <Link to={`/products/${product?.id}`} className="">
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

        <div className="mt-2">
          <h2 className="text-sm md:text-base font-medium">
            {product?.name?.slice(0, 20)}
          </h2>

          <div className="flex justify-between md:flex-start md:justify-center items-center sm:gap-2 md:gap-x-4">
            <div className="flex flex-col md:flex-row items-center gap-x-4">
              {product?.current_price && (
                <p className="md:font-medium line-through text-gray-500 text-sm">
                  Tk{product?.current_price}
                </p>
              )}
              <p className="md:font-medium text-sm text-primary">
                Tk{product?.discount_price}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* <div className=" h-17.5 mt-2"></div>

      <div className="mt-2 CartAndBuyBtn h-17.5">
        {!token ? (
          <div className="flex flex-col gap-1">
            <Link to="/account/login">
              <button
                type="button"
                className="w-full h-8 bg-primary font-medium text-xs md:text-sm text-gray-100 uppercase cursor-pointer"
              >
                Add To Cart
              </button>
            </Link>
            <Link to="/account/login">
              <button
                type="button"
                className="w-full h-8 border border-primary font-medium text-xs md:text-sm text-primary uppercase cursor-pointer"
              >
                Buy Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() =>
                handleAddToCart({ product: product?.id, quantity: 1 })
              }
              className="w-full bg-primary font-medium text-xs md:text-sm text-gray-100 uppercase cursor-pointer"
            >
              Add To Cart
            </button>

            <button
              type="button"
              className="w-full h-8 bg-primary font-medium text-xs md:text-sm text-gray-100 uppercase cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        )}
      </div> */}

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

          <button
            type="button"
            className="text-2xl bg-white text-primary p-2 w-max h-max rounded-full cursor-pointer hover:text-white border border-primary hover:bg-primary transition-all duration-150 shadow-md"
          >
            <MdOutlineShoppingCart />
          </button>
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

          <button
            type="button"
            className="text-2xl bg-white text-primary p-2 w-max h-max rounded-full cursor-pointer hover:text-white border border-primary hover:bg-primary transition-all duration-150 shadow-md"
          >
            <MdOutlineShoppingCart />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
