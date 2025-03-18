import useAddToCart from "../../hooks/useAddToCart";

interface CommonBtnProps {
  product: number;
}

const BuyNow:React.FC<CommonBtnProps> = ({ product }) => {
  const { handleAddToCart } = useAddToCart();

  return (
    <button  onClick={() => handleAddToCart({product, quantity:1})} className="w-full uppercase font-semibold border bg-primary hover:bg-white hover:text-primary border-primary hover:primary transition-all duration-200 h-[40px] text-white cursor-pointer">
      BUY NOW
    </button>
  );
};

export default BuyNow;
