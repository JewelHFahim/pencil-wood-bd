import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BuyNow from "../utils/buttons/BuyNow";
import SocialIcons from "../utils/SocialIcons";
import BackToHome from "../utils/buttons/BackButton";
import { useEffect, useState } from "react";
import ImageZoom from "../components/zoom/ImageZoom";
import { useLocation } from "react-router";
import { HiMinus, HiPlus } from "react-icons/hi";
import DescriptionAndReview from "../components/products/DescriptionAndReview";
import CommonBtn from "../utils/buttons/CommonBtn";
import SimilarProducts from '../components/slider/SimilarProducts';
import BestSalePeroducts from "../components/slider/BestSaleProducts";

const ProductDetails = () => {
  const location = useLocation();
  const [current, setCurrent] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const images = ["/product_1.png", "/product_2.jpg", "/product_3.jpg"];

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

  //   const handleAddTocart = (item) => {
  //     const data = { ...item, sizes: size, colors: color, quantity: 1};
  //     dispatch(addToCart(data));
  //     toast.success("Added to cart");
  //   };

  return (
    <div className="min-h-screen mt-4">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        <div className="md:w-[50%]flex flex-col gap-4 overflow-hidden">
          <ImageZoom src={images[current]} zoomScale={2} />

          {/* <img src={images[current]} alt="" /> */}

          <div className="flex items-center justify-between overflow-auto">
            <IoIosArrowBack className="md:hidden text-xl" />

            <div className="mt-2 flex items-center self-center md:self-start justify-center lg:justify-start gap-3">
              {images.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-20  h-20 lg:w-[120px] lg:h-[120px] border relative cursor-pointer`}
                  onClick={() => setCurrent(idx)}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>

            <IoIosArrowForward className="md:hidden text-xl" />
          </div>
        </div>

        {/* Title and Price */}
        <div className="md:w-[50%]">
          <div className="">
            <h2 className="text-2xl font-medium">Product Title </h2>

            <div className="mt-2 md:text-lg font-medium flex items-center gap-5">
              <p className="text-primary">Tk1050</p>
              <p className="line-through text-sm text-gray-500">Tk950</p>
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
                // onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                //   setQuantity(Number(e.target.value));
                // }}
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
            {/* <button
              className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary"
            >
              Add To Cart
            </button> */}
            <CommonBtn>Add To Cart</CommonBtn>

            <BuyNow />
          </div>

          {/* Description */}
          <div className="mt-14 text-gray-500">
            <p className="text-sm italic">Code: W-0356 </p>
            <p className="mt-3">
              সূরা ইখলাস হলো পবিত্র কুরআনের একটি সংক্ষিপ্ত কিন্তু গভীর অর্থবহ
              সূরা, যা আল্লাহর একত্ব এবং পরিপূর্ণতার ঘোষণা করে। আরবি
              ক্যালিগ্রাফিতে সজ্জিত এই ফ্রেমটি শুধুমাত্র আপনার ঘরের সৌন্দর্য
              বাড়ায় না, বরং প্রতিদিনের জীবনে আল্লাহর স্মরণ এবং আমলের কথা মনে
              করিয়ে দেয়।
            </p>
          </div>

          {/* Share Social */}
          <SocialIcons />
        </div>
      </div>
      {/* Description and Review Sectioon */}
      <DescriptionAndReview />

      {/* Product Suggestions */}
      {/* <ProductSuggestion /> */}
      <SimilarProducts/>
      <BestSalePeroducts/>

      {/* Back Home Button */}
      <BackToHome />
    </div>
  );
};

export default ProductDetails;
