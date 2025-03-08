import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import { useCartListQuery } from "../redux/features/cart/cartApis";
import Loader from "../utils/loader/Loader";
import useAddToCart from "../hooks/useAddToCart";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
import useDeleteFromCart from "../hooks/useDeleteFromCart";

const Cart = () => {
  const { data: cartList, isLoading } = useCartListQuery();
  const { handleAddToCart } = useAddToCart();
  const { handleRemoveFromCart } = useRemoveFromCart();

  const cartLength = cartList?.data?.length || 0;
  
  const { handleDeleteFromCart } = useDeleteFromCart();

  const totalSum = cartList?.data?.reduce((acc, item) => acc + parseFloat(item?.total_price), 0);

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
                  {cartList?.data?.map((item) => (
                    <div key={item?.id} className="w-full">
                      <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end text-gray-600">
                        <div className="col-span-2 lg:col-span-3 text-start">
                          <div className="flex lg:items-center gap-2 lg:gap-5">
                            <div className="w-[56px] h-[65px] lg:w-[80px] lg:h-[80px] relative">
                              <img src="/product_1.png" alt="product img" />
                            </div>

                            <div className="flex flex-col justify-start items-start gap-1">
                              <h2 className="text-sm lg:text-base font-medium text-[#6d6d6d]">
                                {/* {item?.title} */} Product Name
                              </h2>

                              <button
                                onClick={() => handleDeleteFromCart(item?.id)}
                                className="text-primary text-sm underline font-medium w-max cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-1">
                          <p>
                            Tk
                            {item?.price}
                          </p>
                        </div>

                        <div className="hidden col-span-1 w-full lg:flex justify-end items-center gap-2">
                          <button
                            className="cursor-pointer"
                            onClick={() => handleRemoveFromCart(item?.id)}
                            type="button"
                          >
                            <FiMinus />
                          </button>

                          <p className="px-4 py-1 text-primary text-lg border-2 border-gray-400 text-center">
                            {item?.quantity}
                          </p>

                          <button
                            onClick={() => handleAddToCart({product: item?.product})}
                            type="button"
                            className="cursor-pointer"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="hidden lg:block col-span-1">
                          Tk{item?.quantity * parseFloat(item?.price)}
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
