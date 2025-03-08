import toast from "react-hot-toast";
import { useRemoveFromCartMutation } from "../redux/features/cart/cartApis";

const useRemoveFromCart = () => {
    
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleRemoveFromCart = async (id: number) => {

    try {

      const data = { action: "decrease" };

      const res = await removeFromCart({ id, data });

      console.log(res);

      toast.success("Removed from cart");

    } catch (error) {

      console.log(error);

    }
  };

  return { handleRemoveFromCart };
};

export default useRemoveFromCart;
