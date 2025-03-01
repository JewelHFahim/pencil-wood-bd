import React from "react";
import { useAddToCartMutation } from "../../redux/features/cart/cartApis";
import toast from "react-hot-toast";

interface CommonBtnProps {
  children: string;
  numericId: number;
}

const CommonBtn: React.FC<CommonBtnProps> = ({ children, numericId }) => {
  const [addToCart] = useAddToCartMutation();

  const handleCart = async () => {
    try {
      const data = {
        product: numericId,
      };
      const res = await addToCart(data);
      console.log(res);
      toast.success("Added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => handleCart()}
      className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary"
    >
      {children}
    </button>
  );
};

export default CommonBtn;
