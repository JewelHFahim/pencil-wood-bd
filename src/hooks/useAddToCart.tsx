import { useAddToCartMutation } from "../redux/features/cart/cartApis";
import toast from "react-hot-toast";

interface AddToCartProps {
  product: number;
  quantity?: number;
}

const useAddToCart = () => {

  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async ({ product, quantity }: AddToCartProps) => {
    try {
      const data = { product, quantity: quantity || 1 };

      console.log("Adding to cart:", data);

      const res = await addToCart(data).unwrap();

      console.log("Cart Response:", res);

      toast.success(res?.message || "Item added to cart");

    } catch (error) {

      console.error("Cart Error:", error);

      toast.error("Failed to add item to cart");

    }
  };

  return { handleAddToCart };
};

export default useAddToCart;
