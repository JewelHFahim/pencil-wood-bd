import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import {
  useAddToCartMutation,
  useCartListQuery,
  useRemoveFromCartMutation,
} from "../redux/features/cart/cartApis";
import Loader from "../utils/loader/Loader";
import toast from "react-hot-toast";

const Cart = () => {
  const { data: cartList, isLoading } = useCartListQuery();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const cartLength = cartList?.length || 0;

  console.log(cartList);

  const handleCart = async (id: number) => {
    try {
      const data = { product: id };
      const res = await addToCart(data);
      console.log(res);
      toast.success("Added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  const HandleRemoveFromCart = async (id: number) => {
    try {
      // const data = { id, action: "decrease" };
      const res = await removeFromCart( { id, action: "decrease" });
      console.log(res);
      toast.success("Remoived from cart");
    } catch (error) {
      console.log(error);
    }
  };

  //   const dispatch = useDispatch();
  // const { products, total } = useSelector((state) => state.cart);
  // const {products, total }  = JSON?.parse(localStorage?.getItem("cart"));
  // const [quantity, setQuantity] = useState();

  //   const handleAddTocart = (item) => {
  //     dispatch(addToCart(item));
  //     toast.success("Added to cart");
  //   };

  //   const handleRemoveFromCart = (item) => {
  //     dispatch(singleRemoveFromCart(item));
  //     toast.success("Removed from cart");
  //   };

  const totalSum = cartList?.reduce(
    (acc, item) => acc + parseFloat(item.total_price),
    0
  );

  return (
    <div className="w-full min-h-[calc(100vh-220px)] flex flex-col items-center">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <Loader />
        </div>
      ) : (
        <>
          {cartLength > 0 ? (
            <div className="mt-4 w-full h-full ">
              <div className="flex flex-col justify-cente items-center">
                <h2 className="text-[28px] lg:text-4xl font-semibold">
                  Your cart
                </h2>
                <Link
                  to="/"
                  className="text-primary my-2 underline underline-offset-4"
                >
                  Continue shopping
                </Link>
              </div>

              <div className="mt-10 w-full">
                {/* thead */}
                <div className="w-full grid grid-cols-2 lg:grid-cols-6 text-end text-gray-70 uppercase">
                  <div className="col-span-1 lg:col-span-3 text-start">
                    Product
                  </div>
                  <div className="col-span-1">Price</div>
                  <div className="hidden lg:block lg:col-span-1">Quantity</div>
                  <div className="hidden lg:block lg:col-span-1">Total</div>
                </div>

                {/* product row */}
                <div className="mt-5 flex flex-col gap-y-5">
                  {cartList?.map((product) => (
                    <div key={product?.id} className="w-full">
                      <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end text-gray-600">
                        <div className="col-span-2 lg:col-span-3 text-start">
                          <div className="flex lg:items-center gap-2 lg:gap-5">
                            <div className="w-[56px] h-[65px] lg:w-[80px] lg:h-[80px] relative">
                              <img src="/product_1.png" alt="product img" />
                            </div>

                            <div className="flex flex-col justify-start items-start gap-1">
                              <h2 className="text-sm lg:text-base font-medium text-[#6d6d6d]">
                                {/* {item?.title} */} Product Name-{" "}
                                {product?.id}
                              </h2>

                              <button
                                // onClick={() => removeFromCart(product?.id)}
                                className="text-primary text-sm underline font-medium w-max"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-1">
                          <p>
                            Tk
                            {product?.price}
                          </p>
                        </div>

                        <div className="hidden col-span-1 w-full lg:flex justify-end items-center gap-2">
                          <button
                           className="cursor-pointer"
                            onClick={() => HandleRemoveFromCart(product?.id)}
                            type="button"
                          >
                            <FiMinus />
                          </button>

                          <p className="px-4 py-1 text-primary text-lg border-2 border-gray-400 text-center">
                            {product?.quantity}
                          </p>

                          <button
                            onClick={() => handleCart(product?.id)}
                            type="button"
                            className="cursor-pointer"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="hidden lg:block col-span-1">
                          Tk{product?.quantity * parseFloat(product?.price)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/*Sub Total */}
                <div className="w-full mt-5">
                  <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end text-gray-600">
                    <div className="hidden lg:block col-span-3"></div>
                    <div className="hidden lg:block col-span-1"></div>
                    <div className="col-span-1 text-lg">Subtotal </div>
                    <div className="col-span-1 font-medium">
                      Tk
                      {totalSum} BDT
                    </div>
                  </div>
                </div>

                {/* Shipping Charge */}
                <div className="w-full mt-2">
                  <div className="w-full grid grid-cols-6 items-center text-center lg:text-end text-gray-600">
                    <div className="hidden lg:block col-span-1"></div>
                    <div className="hidden lg:block col-span-1"></div>
                    <div className="hidden lg:block col-span-1"></div>
                    <div className="col-span-6 lg:col-span-3 text-sm">
                      <Link to="/" className="underline font-medium mr-1">
                        Shipping
                      </Link>
                      calculated at checkout
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="w-full mt-5">
                  <div className="w-full grid grid-cols-6 items-center text-center lg:text-end text-gray-600">
                    <div className="hidden lg:block col-span-3"></div>
                    <div className="hidden lg:block col-span-1"></div>
                    <div className="hidden lg:block col-span-1"></div>

                    <div className="col-span-6 lg:col-span-1 text-sm">
                      <Link to="/checkout">
                        <button
                          type="button"
                          className="uppercase bg-primary py-2.5 px-12 text-sm hover:bg-orange-600 transition-all duration-300 text-white font-medium w-max"
                        >
                          Check Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center pt-5 gap-6">
              <h2 className="text-4xl font-semibold">Your cart</h2>
              <p className="text-gray-400">Your cart is currently empty.</p>

              <Link to="/">
                <button className="flex items-center gap-1 uppercase font-medium text-white bg-primary hover:bg-orange-600 transition-all duration-300 ease-in-out w-max px-2.5 py-2 rounded-sm">
                  Continue Shopping{" "}
                  <HiMiniArrowLongRight className="text-2xl" />
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
