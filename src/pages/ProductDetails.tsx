import DescriptionAndReview from "../components/products/DescriptionAndReview";
import { useProductDetailsQuery } from "../redux/features/products/productsApi";
import BestSalePeroducts from "../components/slider/BestSaleProducts";
import RelatedProducts from "./../components/slider/RelatedProducts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router";
import BackToHome from "../utils/buttons/BackButton";
import ImageZoom from "../components/zoom/ImageZoom";
import CommonBtn from "../utils/buttons/CommonBtn";
import { HiMinus, HiPlus } from "react-icons/hi";
import SocialLinks from "../utils/SocialLink";
import BuyNow from "../utils/buttons/BuyNow";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ProductDetails = () => {
  const { id } = useParams();
  const token = Cookies.get("pencil");
  const numericId = Number(id);
  const location = useLocation();
  const [current, setCurrent] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const { data: productDetails, isLoading } = useProductDetailsQuery({ numericId });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleQuantity = (digit: string) => {
    if (digit === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (digit === "inc" && quantity > 0) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="min-h-screen mt-4">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        {isLoading ? (
          <div className="w-full md:w-[50%] h-[55vh] bg-gray-300 animate-pulse" />
        ) : (
          <div className="md:w-[50%] flex flex-col gap-4 overflow-hidden">
            <ImageZoom src={productDetails?.product?.product_image[current]?.image} zoomScale={2}/>

            <div className="flex items-center justify-between overflow-auto">
              <IoIosArrowBack className="md:hidden text-xl" />

              <div className="mt-2 flex items-center self-center md:self-start justify-center lg:justify-start gap-3">
                {productDetails?.product?.product_image?.map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-20  h-20 lg:w-[120px] lg:h-[120px] border relative cursor-pointer`}
                    onClick={() => setCurrent(idx)}
                  >
                    <img src={item?.image} alt="" />
                  </div>
                ))}
              </div>

              <IoIosArrowForward className="md:hidden text-xl" />
            </div>
          </div>
        )}

        {/* Title and Price */}
        <div className="md:w-[50%]">
          <div className="">
            <h2 className="text-2xl font-medium">
              {productDetails?.product?.name}
            </h2>

            <div className="mt-2 md:text-lg font-medium flex items-center gap-5">
              <p className="text-primary">
                Tk{productDetails?.product?.discount_price}
              </p>
              <p className="line-through text-sm text-gray-500">
                Tk{productDetails?.product?.current_price}
              </p>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Shipping calculated at checkout.
            </p>
          </div>

          {/* Quantity */}
          <div className="w-max mt-4 flex flex-col gap-1">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center mt-1">
              <button
                onClick={() => {
                  handleQuantity("dec");
                }}
                className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-primary hover:border-primary rounded-s"
              >
                <HiMinus />
              </button>
              <div className="w-14 h-8 flex justify-center items-center font-medium text-sm  border-x-0 border border-gray-400 md:border-gray-300 px-3 text-primary focus:outline-primary">
                {quantity}
              </div>

              <button
                onClick={() => {
                  handleQuantity("inc");
                }}
                className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-primary hover:border-primary rounded-e"
              >
                <HiPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            {!token ? (
              <Link to="/account/login">
                <button className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary cursor-pointer">
                  Add To Cart
                </button>
              </Link>
            ) : (
              <CommonBtn product={numericId} quantity={quantity}>
                Add To Cart
              </CommonBtn>
            )}

            <BuyNow product={numericId} />
          </div>

          {/* Description */}
          <div className="mt-14 text-gray-500">
            <p className="text-sm italic">
              Code: {productDetails?.product?.slug}{" "}
            </p>
            <p className="mt-3">{productDetails?.product?.short_description}</p>
          </div>

          {/* Share Social */}
          {/* <SocialIcons /> */}
          <SocialLinks />
        </div>
      </div>

      {/* Description and Review Sectioon */}
      <DescriptionAndReview details={productDetails?.product?.details} />

      <RelatedProducts related_products={productDetails?.related_products} />

      <BestSalePeroducts related_products={productDetails?.best_selling_products} />

      {/* Back Home Button */}
      <BackToHome />
    </div>
  );
};

export default ProductDetails;
