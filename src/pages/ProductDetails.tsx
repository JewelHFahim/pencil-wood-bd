import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BuyNow from "../utils/buttons/BuyNow";
import SocialIcons from "../utils/SocialIcons";
import ProductSuggestion from "../components/products/ProductSuggestion";
import BackToHome from "../utils/buttons/BackButton";
import { useEffect, useState } from "react";
import ImageZoom from "../components/zoom/ImageZoom";
import { useLocation } from "react-router";
import { HiMinus, HiPlus } from "react-icons/hi";

const ProductDetails = () => {
  const location = useLocation();

  //   const { id } = useParams();
  //   const dispatch = useDispatch();
  const [current, setCurrent] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  //   const { data: productDetails, isLoading } = useProductDetailsQuery(id);
  //   const product = productDetails?.data;
  //   const [size, setSize] = useState();
  //   const [color, setColor] = useState();
  const images = ["/product_1.png", "/product_2.jpg", "/product_3.jpg"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to top when the route changes
  }, [location.pathname]);

  //   useEffect(() => {
  //     if (product) {
  //       setSize(product.sizes[0] || "N/A");
  //       setColor(product.colors[0] || "N/A");
  //     }
  //   }, [product]);

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

          {/* Select Size and Color */}
          {/* <div className="mt-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <div className="md:w-1/2 flex flex-col gap-1">
              <p className="text-sm">Size</p>
              <select
                aria-label="Select size"
                onChange={(e) => { setSize(e.target.value)}}
                className={`border border-gray-400 font-medium text-sm md:border-gray-300 w-full h-[40px] px-4 text-primary focus:outline-primary`}
              >
                {product?.sizes.map((size) => (
                  <option value={size} key={size} className="text-black">
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:w-1/2 flex flex-col gap-1">
              <p className="text-sm">Color</p>
              <select
                aria-label="Select color"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                className="border w-full h-[40px] font-medium text-sm border-gray-400 md:border-gray-300 px-4  text-primary uppercase focus:outline-primary"
              >
                {product?.colors?.map((color) => (
                  <option value={color} key={color} className="text-black">
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div> */}

          {/* Quantity */}
          <div className="w-max mt-4 flex flex-col gap-1">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center mt-1">
              <button className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-primary hover:border-primary rounded-s">
                <HiMinus />
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setQuantity(Number(e.target.value));
                }}
                className="w-14 h-8 flex justify-center items-center font-medium text-sm  border-x-0 border border-gray-400 md:border-gray-300 px-2 text-primary focus:outline-primary"
              />
              <button className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-primary hover:border-primary rounded-e">
                <HiPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <button
              //   onClick={() => handleAddTocart(product)}
              className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary"
            >
              Add To Cart
            </button>

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

      {/* Product Suggestions */}
      <ProductSuggestion />

      {/* Back Home Button */}
      <BackToHome />
    </div>
  );
};

export default ProductDetails;
