import { FC } from "react";
import { useCartListQuery } from "../redux/features/cart/cartApis";
import { useProductsQuery } from "../redux/features/products/productsApi";

interface OrderedProductsDropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderedProductsDropdown: FC<OrderedProductsDropdownProps> = ({ isOpen, setIsOpen }) => {
    const { data: cartList } = useCartListQuery();
    const { data: allProducts } = useProductsQuery();


  if(!cartList?.data){
    return <div>
      <p className="text-black/50 text-center ">No items available</p>
    </div>
  }

  const getProductInfo = (
    pid: number,
    type: "name" | "image"
  ): string | undefined => {
    const product = allProducts?.data?.find((item) => item?.id === pid);

    if (!product) return undefined;

    return type === "name" ? product.name : product.product_image?.[0]?.image;
  };

  return (
    <div className="w-full">
      {isOpen && (
        <div
          className="w-full py-2 mt-2 origin-top-center transition transform ease-out duration-100 scale-100 opacity-100"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-3">
            {cartList?.data?.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-[50px] h-[50px]">
                    <div className="w-full h-full relative rounded-md border-2 border-gray-400 overflow-hidden">
                      <img
                        src={ getProductInfo(item?.product, "image") || "/product_2.jpg"}
                        alt=""
                        className="object-cover w-full h-full "
                      />
                    </div>

                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-sm font-medium">
                      {item?.quantity}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium">
                    {getProductInfo(item?.product, "name") || "Unknown Product"}
                    </p>
                    <p className="text-[11px] text-gray-500">
                       {item?.quantity} X {item?.discount_price}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[13px] font-medium">
                    ৳ <span> {item?.total_price} </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderedProductsDropdown;
