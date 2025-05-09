import { useCartListQuery } from "../redux/features/cart/cartApis";
import { useProductsQuery } from "../redux/features/products/productsApi";

const OrderListAndPriceSummery = () => {
  const { data: cartList } = useCartListQuery();
  const { data: allProducts } = useProductsQuery();

  const totalAmount = cartList?.data?.reduce((acc, item) => acc + parseFloat(item?.total_price),0);
  const totalQuantity = cartList?.data?.reduce((acc, item) => acc + item?.quantity, 0);

  const getProductInfo = (
    pid: number,
    type: "name" | "image"
  ): string | undefined => {
    const product = allProducts?.data?.find((item) => item?.id === pid);

    if (!product) return undefined;

    return type === "name" ? product.name : product.product_image?.[0]?.image;
  };

  return (
    <div className="h-full">
      <div className="flex flex-col gap-3">
        {cartList?.data?.map((item) => (
          <div
            key={item?.id}
            className="w-full flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-[60px] h-[65px]">
                <div className="w-full h-full relative rounded-md border-2 border-gray-400 overflow-hidden">
                  <img src={ getProductInfo(item?.product, "image") || "/product_2.jpg"} alt="product img"  className="object-cover w-full h-full"/>
                </div>

                <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-sm font-medium">
                  {item?.quantity}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium">  {getProductInfo(item?.product, "name") || "Unknown Product"} </p>
                <p className="text-[11px] text-gray-500">
                  {item?.quantity} X {item?.discount_price}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-medium">
                ৳<span>{item?.total_price}</span>
              </p>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <p>Subtotal • {totalQuantity} items</p>
            <p>৳ {totalAmount} </p>
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

export default OrderListAndPriceSummery;
