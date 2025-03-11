import { IoIosArrowDown } from "react-icons/io";
import OrderedProductsDropdown from "./OrderedProductsDropdown";
import { FC } from "react";
import { useCartListQuery } from "../redux/features/cart/cartApis";

interface MobileOrderSummery {
  isOpen: boolean;
  isMatch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileOrderSummery: FC<MobileOrderSummery> = ({ isOpen, setIsOpen }) => {
  const { data: cartList } = useCartListQuery();

  const totalAmount = cartList?.data?.reduce(
    (acc, item) => acc + parseFloat(item?.total_price),
    0
  );
  const totalQuantity = cartList?.data?.reduce(
    (acc, item) => acc + item?.quantity,
    0
  );



  return (
    <div className="mt-8 lg:hidden">
      <div className="">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Order summery</h3>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-cyan-500 flex items-center gap-1"
          >
            {isOpen ? "Hide" : "Show"}
            <IoIosArrowDown className="text-gray-800" />
          </button>
        </div>

        <div className="mt-6 h-max w-full transition transform ease-out duration-100">
          <OrderedProductsDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-sm">
            <p> Subtotal • {totalQuantity} items </p>
            <p>৳ {totalAmount}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p>Shipping</p>
            <p>৳ {Number(totalAmount) > 0 ? 150 : 0.0}</p>
          </div>

          <div className="flex items-center justify-between font-medium text-lg">
            <p className="text-">Total</p>
            <p>
              <span className="text-xs font-normal"> BDT </span> ৳{" "}
              {Number(totalAmount) > 0 ? Number(totalAmount) + 150 : 0.0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderSummery;
