import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { SingleCartApiResponse } from "../../types/products_type";

interface CartMenuProps {
  isOpenCart: boolean;
  toggleDrawerCart: () => void;
  cartList: SingleCartApiResponse[] | undefined;
}

const CartSlider: FC<CartMenuProps> = ({
  cartList,
  isOpenCart,
  toggleDrawerCart,
}) => {
  const { pathname } = useLocation();
  const cartLength = cartList?.length || 0;

  useEffect(() => {
    if (isOpenCart) {
      toggleDrawerCart();
    }
  }, [pathname]);

  const totalSum = cartList?.reduce((acc, item) => acc + parseFloat(item.total_price), 0);
  


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
              {cartList?.map((item) => (
                <div
                  key={item?.id}
                  className="mx-4 py-4 grid grid-cols-12 gap-3 text-black border-b border-gray-300"
                >
                  <button
                    type="button"
                    className="hover:text-red-600 col-span-1"
                  >
                    <IoMdClose className="" />
                  </button>

                  <div className="col-span-3 h- ">
                    <img
                      src="/product_1.png"
                      alt=""
                      className="w-14 h-14 rounded-md"
                    />
                  </div>

                  <div className="col-span-8 text-base">
                    <h2 className="font-medium">Product Name</h2>
                    <p className="font-medium flex gap-2">
                      <span> {item?.quantity} </span> x
                      <span className="text-green-600">৳ {item?.price}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </Drawer>
    </>
  );
};

export default CartSlider;
