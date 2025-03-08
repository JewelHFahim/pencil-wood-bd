import React from "react";
import useAddToCart from "../../hooks/useAddToCart";

interface CommonBtnProps {
  children: string;
  product: number;
  quantity: number;
}

const CommonBtn: React.FC<CommonBtnProps> = ({ children, product, quantity }) => {
  const { handleAddToCart } = useAddToCart();

  return (
    <button
      onClick={() => handleAddToCart({product, quantity})}
      className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary cursor-pointer"
    >
      {children}
    </button>
  );
};

export default CommonBtn;
