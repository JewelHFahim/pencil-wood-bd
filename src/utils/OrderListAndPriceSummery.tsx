const OrderListAndPriceSummery = () => {
  // const cart = JSON?.parse(localStorage?.getItem("cart"));
  // const { products, totalQuantity, total } = useSelector((state) => state.cart);

  // console.log(products);

  // const products = cart?.products;
  // const totalQuantity = cart?.totalQuantity;
  // const total = cart?.total || "00.0";

  return (
    <div className="h-full">
      <div className="flex flex-col gap-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="w-full flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-[60px] h-[65px]">
                <div className="w-full h-full relative rounded-md border-2 border-gray-400 overflow-hidden">
                  <img
                    src="/product_2.jpg"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-sm font-medium">
                  {/* {order?.quantity} */}1
                </div>
              </div>
              <div>
                <p className="text-xs font-medium">
                  {/* {order?.title} */} Product Title
                </p>
                <p className="text-[11px] text-gray-500">
                  {/* {order?.sizes} / {order?.colors} */} 36
                </p>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-medium">
                ৳<span>{/* {order?.quantity * order?.sale_price} */} 1200</span>
              </p>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <p>Subtotal •{/* {totalQuantity} */} 3 items</p>
            <p>৳{/* {total} */} 3600</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p>Shipping</p>
            <p>৳{/* {total > 0 ? (isMatch ? 70 : 140) : 0} */} 70</p>
          </div>

          <div className="flex items-center justify-between font-medium text-lg">
            <p className="text-">Total</p>
            <p>
              <span className="text-xs font-normal"> BDT </span> ৳
              {/* {total + (total > 0 ? (isMatch ? 70 : 140) : 0)} */} 70
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListAndPriceSummery;
