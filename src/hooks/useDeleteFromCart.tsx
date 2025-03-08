import toast from "react-hot-toast";
import { useDeleteFromCartMutation } from "../redux/features/cart/cartApis";

const useDeleteFromCart = () => {
  const [deleteFromCart] = useDeleteFromCartMutation();

  const handleDeleteFromCart = async (id: number) => {
    console.log(id);
    try {
      const res = await deleteFromCart({ id });
      console.log(res);
      toast.success("Deleted from cart!");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteFromCart };
};

export default useDeleteFromCart;
