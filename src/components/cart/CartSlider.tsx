import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface CartMenuProps {
  isOpenCart: boolean;
  toggleDrawerCart: () => void;
}

const CartSlider: FC<CartMenuProps> = ({ isOpenCart, toggleDrawerCart }) => {
  return (
    <>
      {/*Cart Button */}
      <div
        onClick={toggleDrawerCart}
        className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out relative cursor-pointer pb-[env(safe-area-inset-bottom, 50px)]"
      >
        <button onClick={toggleDrawerCart} className="text-2xl p-1">
          <RiShoppingBagLine />
        </button>

        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          0
        </div>
      </div>

      <Drawer
        open={isOpenCart}
        onClose={toggleDrawerCart}
        direction="right"
        size=""
        className="w-[340px]"
      >
        <div className="w-full bg-white flex flex-col justify-between min-h-screen pb-4">
          <div>
            <div className="h-[72px] flex justify-between gap-2 items-center px-4 shadow">
              <p className="block text-gray-800 text-lg font-semibold uppercase">
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

            <div className="flex flex-col gap-">
              {[...Array(3)].map((_, idx: number) => (
                <div
                  key={idx}
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
                      <span> 1 </span> x
                      <span className="text-green-600">৳ 4,995</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 px-4 pt-2">
            <h3 className="text-lg font-bold uppercase text-gray-800 flex items-center justify-between">
              <span>Subtotal:</span> <span> ৳ 4,995</span>
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                className="bg-primary hover:bg-white w-full border border-white hover:border-primary text-white hover:text-primary rounded-sm text-sm py-2.5 font-medium flex justify-center items-center gap-2 transition-all duration-300"
              >
                Checkout
                <LiaLongArrowAltRightSolid className="text-xl" />
              </button>

              <button
                type="button"
                className="border border-primary hover:bg-primary w-full text-primary hover:text-white rounded-sm text-sm py-2.5 font-medium flex justify-center items-center gap-2 transition-all duration-300"
              >
                View cart
                <LiaLongArrowAltRightSolid className="text-xl" />
              </button>
            </div>
          </div>
          
        </div>
      </Drawer>
    </>
  );
};

export default CartSlider;
