import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import useDeleteFromCart from "../../hooks/useDeleteFromCart";
import { useCartListQuery } from "../../redux/features/cart/cartApis";
import { useProductsQuery } from "../../redux/features/products/productsApi";
import { HiMiniArrowLongRight } from "react-icons/hi2";

interface CartMenuProps {
  isOpenCart: boolean;
  toggleDrawerCart: () => void;
}

const CartSlider: FC<CartMenuProps> = ({ isOpenCart, toggleDrawerCart }) => {
  const { pathname } = useLocation();
  const { data: cartList } = useCartListQuery();
  const cartLength = cartList?.data?.length || 0;
  const { handleDeleteFromCart } = useDeleteFromCart();
  const { data: allProducts } = useProductsQuery();

  useEffect(() => {
    if (isOpenCart) {
      toggleDrawerCart();
    }
  }, [pathname]);

  const totalSum = cartList?.data?.reduce(
    (acc, item) => acc + parseFloat(item.total_price),
    0
  );

  const getProductInfo = (
    pid: number,
    type: "name" | "image"
  ): string | undefined => {
    const product = allProducts?.data?.find((item) => item?.id === pid);

    if (!product) return undefined;

    return type === "name" ? product.name : product.product_image?.[0]?.image;
  };

  return (
    <>
      {/*Cart Button */}
      <button
        onClick={toggleDrawerCart}
        className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out relative cursor-pointer pb-[env(safe-area-inset-bottom, 50px)] "
      >
        <span className="text-2xl p-1">
          <RiShoppingBagLine />
        </span>

        {cartLength > 0 && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {cartLength}
          </div>
        )}
      </button>

      {/* Cart Content */}
      <Drawer
        open={isOpenCart}
        onClose={toggleDrawerCart}
        direction="right"
        size=""
        className="w-[340px]"
        lockBackgroundScroll={true}
      >
        <div className="w-full bg-white flex flex-col justify-betwee gap-10 min-h-screen pb-4 relative">
          <div>
            <div className="h-[72px] flex justify-between gap-2 items-center px-4 shadow">
              <p className="block text-gray-800 text-base font-semibold uppercase">
                Shopping Cart
              </p>

              <button
                onClick={toggleDrawerCart}
                type="button"
                className="flex items-center uppercase font-semibold text-gray-800 hover:text-primary cursor-pointer"
              >
                <span className="text-sm">Close</span>
                <IoMdClose className="text-lg mt-1" />
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto max-h-[55vh] md:max-h-[60vh]">
              {cartList?.data?.map((item) => (
                <div
                  key={item?.id}
                  className="mx-4 py-4 grid grid-cols-12 gap-3 text-black border-b border-gray-300"
                >
                  <button
                    type="button"
                    onClick={() => handleDeleteFromCart(item?.id)}
                    className="hover:text-red-600 col-span-1"
                  >
                    <IoMdClose className="" />
                  </button>

                  <div className="col-span-3 h- ">
                    <img
                      src={
                        getProductInfo(item?.product, "image") ||
                        "/default-image.jpg"
                      }
                      alt=""
                      className="w-14 h-14 rounded-md"
                    />
                  </div>

                  <div className="col-span-8 text-base">
                    <h2 className="font-medium">
                      {getProductInfo(item?.product, "name") ||
                        "Unknown Product"}
                    </h2>

                    <p className="font-medium flex gap-2">
                      <span> {item?.quantity} </span> x
                      <span className="text-green-600">৳ {item?.price}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {cartLength > 0 && (
            <div className="border-t bg-white border-gray-300 px-4 pt-2 sticky bottom-0 pb-14 md:pb-5">
              <h3 className="text-lg font-bold uppercase text-gray-800 flex items-center justify-between">
                <span>Subtotal:</span> <span> ৳ {totalSum}</span>
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link to="/checkout">
                  <button
                    type="button"
                    className="bg-primary hover:bg-white w-full border border-white hover:border-primary text-white hover:text-primary rounded-sm text-sm py-2.5 font-medium flex justify-center items-center gap-2 transition-all duration-300"
                  >
                    Checkout
                    <LiaLongArrowAltRightSolid className="text-xl" />
                  </button>
                </Link>

                <Link to="/cart">
                  <button
                    type="button"
                    className="border border-primary hover:bg-primary w-full text-primary hover:text-white rounded-sm text-sm py-2.5 font-medium flex justify-center items-center gap-2 transition-all duration-300"
                  >
                    View cart
                    <LiaLongArrowAltRightSolid className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          )}

          {cartLength <= 0 && (
            <div className="flex flex-col justify-center items-center pt-5 gap-6">
              <h2 className="text-2xl font-semibold">Your cart</h2>
              <p className="text-gray-400">Your cart is currently empty.</p>

              <Link to="/">
                <button
                  onClick={toggleDrawerCart}
                  className="flex items-center gap-1 uppercase font-medium text-sm text-white bg-primary hover:bg-orange-600 transition-all duration-300 ease-in-out w-max px-2.5 py-2 rounded-sm cursor-pointer"
                >
                  Continue Shopping
                  <HiMiniArrowLongRight className="text-2xl" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CartSlider;
